/*
 * Copyright (c) 2008-present The Open Source Geospatial Foundation
 *
 * Published under the BSD license.
 * See https://github.com/geoext/geoext2/blob/master/license.txt for the full
 * text of the license.
 */

/*
 * @include OpenLayers/Feature/Vector.js
 * @include OpenLayers/Geometry.js
 * @include GeoExt/panel/Map.js
 * @requires GeoExt/Version.js
 */

/**
 * A popup is a specialized window that supports anchoring to a particular
 * location in a {@link GeoExt.panel.Map MapPanel}.
 *
 * When a popup is anchored to a {@link #location}, that means that
 * the popup will visibly point to the location on the map,
 * and move accordingly when the map is panned or zoomed.
 *
 * When you use the popup in an application, make sure to include the proper
 * stylesheet depending on the Ext theme that you use: `popup-classic.css`,
 * `popup-access.css`, 'popup-gray.css` or `popup-neptune.css`.
 *
 * Example:
 *
 *     var popup = Ext.create('GeoExt.window.Popup', {
 *         title: "My Popup",
 *         location: feature,
 *         width: 200,
 *         html: "<div>Popup content</div>",
 *         collapsible: true
 *     });
 *
 * Or create it via `xtype` declaration:
 *
 * Example:
 *
 *     var popup = {
 *         xtype: 'gx_popup',
 *         title: "My Popup",
 *         location: feature,
 *         width: 200,
 *         html: "<div>Popup content</div>",
 *         collapsible: true
 *     };
 */
Ext.define('GeoExt.window.Popup', {
    extend: 'Ext.window.Window',
    alias: 'widget.gx_popup',
    alternateClassName : 'GeoExt.Popup',
    requires: [
        'GeoExt.Version'
    ],

    /*
     * Some Ext.Window defaults need to be overriden here
     * because some Ext.Window behavior is not currently supported.
     */

    /**
     * Whether the popup is currently inside the map viewport.
     *
     * @property {Boolean} insideViewport
     * @private
     */
    insideViewport: null,

    /**
     * Animate the transition when the panel is collapsed. Collapsing animation
     * is not supported yet for popups.
     *
     * @property {Boolean} animCollapse
     * @private
     */
    animCollapse: false,

    /**
     * Enable dragging of this Panel. Because the popup defaults to being
     * anchored, and anchored popups should not be draggable.
     *
     * @property {Boolean} draggable
     * @private
     */
    draggable: false,

    /**
     * Give the popup window a shadow. Because shadows are not supported yet for
     * popups (the shadow does not look good with the anchor).
     *
     * @property {Boolean} shadow
     * @private
     */
    shadow: false,

    /**
     * The popup should have a "unpin" tool that unanchors it from
     * its location.
     *
     * @cfg {Boolean} unpinnable
     */
    unpinnable: true,

    /**
     * The map this popup will be anchored to (only required if `anchored`
     * is set to `true` and the map cannot be derived from the `location`'s
     * layer).
     *
     * @cfg {GeoExt.panel.Map/OpenLayers.Map} map
     */
    map: null,

    /**
     * The popup begins anchored to its location.
     *
     * @cfg {Boolean} anchored
     */
    anchored: true,

    /**
     * The popup should pan the map so that the popup is fully in view when it
     * is rendered.
     *
     * @cfg {Boolean} panIn
     */
    panIn: true,

    /**
     * A location for this popup's anchor.
     *
     * @cfg {OpenLayers.Feature.Vector/OpenLayers.LonLat/OpenLayers.Pixel} location
     */
    location: null,

    /**
     * CSS class name for the popup DOM elements.
     *
     * @property {String} popupCls
     * @private
     */
    popupCls: "gx-popup",

    /**
     * CSS class name for the popup's anchor.
     *
     * @cfg {String} ancCls
     */
    ancCls: "gx-popup-anc",

    /**
     * Size of the popups anchor as defined in the stylesheet.
     * @type {Object}
     */
    ancSize: {
        width: 32,
        height: 16
    },

    /**
     * Offset of the anchor to the border of the window.
     * @type {Object}
     */
    ancOffset: {
        left: 5,
        right: 5
    },

    /**
     * Controls the anchor position for the popup. If set to `auto`, the anchor
     * will be positioned on the top or the bottom of the window, minimizing map
     * movement. Supported values are `bottom-left`, `bottom-right`, `top-left`,
     * `top-right` or `auto`.
     *
     * @cfg {String} anchorPosition
     */
    anchorPosition: "auto",

    /**
     * Shall this popup be always on top? Setting this to true helps in cases
     * where the popups are working on a map panel that itself is inside of a
     * window. Future versions of ExtJS do also have such a configuration option
     * (http://docs.sencha.com/extjs/5.0.1/#!/api/Ext.util.Floating-cfg-alwaysOnTop)
     * We do not full mimic the behaviour of that configuration but only support
     * the boolean variant.
     *
     * @cfg {Boolean} alwaysOnTop
     */
    alwaysOnTop: false,

    initComponent: function() {
        if(this.map instanceof GeoExt.panel.Map) {
            this.map = this.map.map;
        }
        if(!this.map && this.location instanceof OpenLayers.Feature.Vector &&
                                                        this.location.layer) {
            this.map = this.location.layer.map;
        }
        if (this.location instanceof OpenLayers.Feature.Vector) {
            this.location = this.location.geometry;
        }
        if (this.location instanceof OpenLayers.Geometry) {
            if (typeof this.location.getCentroid == "function") {
                this.location = this.location.getCentroid();
            }
            this.location = this.location.getBounds().getCenterLonLat();
        } else if (this.location instanceof OpenLayers.Pixel) {
            this.location = this.map.getLonLatFromViewPortPx(this.location);
        } else {
            this.anchored = false;
        }

        var mapExtent =  this.map.getExtent();
        if (mapExtent && this.location) {
            this.insideViewport = mapExtent.containsLonLat(this.location);
        }

        if(this.anchored) {
            this.addAnchorEvents();
        }

        this.callParent(arguments);
    },

    /**
     * The "onRender" listener of this component.
     * Executes when the popup is rendered and creates the anchor div
     *
     * @param {Object} ct
     * @param {Object} position
     * @private
     */
    onRender: function(ct, position) {
        this.callParent(arguments);
        this.addCls(this.popupCls);
    },

    /**
     * Initializes the tools on the popup.  In particular it adds the 'unpin'
     * tool if the popup is unpinnable.
     *
     * @private
     */
    initTools : function() {
        if(this.unpinnable) {
            if (!this.tools) {
                this.tools = [];
            }
            this.tools.push({
                type:'unpin',
                handler: Ext.bind(this.unanchorPopup, this, [])
            });
        }
        this.callParent(arguments);
    },

    /**
     * Override.
     *
     * @inheritdoc
     * @private
     */
    show: function() {
        this.callParent(arguments);
        if(this.anchored) {
            this.addCls('gx-popup-anc');
            this.position();
            if(this.panIn && !this._mapMove) {
                this.panIntoView();
            }
        }
    },

    /**
     * Override.
     *
     * @inheritdoc
     * @private
     */
    maximize: function() {
        if(!this.maximized && this.anc) {
            this.unanchorPopup();
        }
        this.callParent(arguments);
    },

    /**
     * Sets the size of the popup, taking into account the size of the anchor.
     *
     * @param {Integer} w the width to apply.
     * @param {Integer} h the height to apply.
     */
    setSize: function(w, h) {
        if(this.anc) {
            var ancHeight = this.ancSize.height;

            if(typeof w == 'object') {
                h = w.height - ancHeight;
                w = w.width;
            } else if(!isNaN(h)){
                h = h - ancHeight;
            }
        }
        this.callParent([w,h]);
    },

    /**
     * Positions the popup relative to its current location.
     *
     * @private
     */
    position: function() {
        if(this._mapMove === true) {
            this.insideViewport = this.map.getExtent().containsLonLat(this.location);
            if(this.insideViewport !== this.isVisible()) {
                this.setVisible(this.insideViewport);
            }
        }

        if(this.isVisible()) {
            var locationPx = this.map.getPixelFromLonLat(this.location),
                mapBox = Ext.fly(this.map.div).getBox(true),
                top = locationPx.y + mapBox.y,
                left = locationPx.x + mapBox.x,
                elSize = this.el.getSize(),
                ancSize = this.ancSize,
                ancPos = this.anchorPosition;

            if (ancPos.indexOf("right") > -1 || locationPx.x > mapBox.width / 2) {
                // right
                this.removeCls("gx-popup-anc-left");
                this.addCls("gx-popup-anc-right");
                left -= elSize.width - this.ancOffset.right - ancSize.width / 2;
            } else {
                // left
                this.removeCls("gx-popup-anc-right");
                this.addCls("gx-popup-anc-left");
                left -= this.ancOffset.left + ancSize.width / 2;
            }

            if (ancPos.indexOf("bottom") > -1 || locationPx.y > mapBox.height / 2) {
                // bottom
                this.removeCls("gx-popup-anc-top");
                this.addCls("gx-popup-anc-bottom");
                top -= elSize.height + ancSize.height;
            } else {
                // top
                this.removeCls("gx-popup-anc-bottom");
                this.addCls("gx-popup-anc-top");
                top += ancSize.height; // ok
            }

            this.setPosition(left, top);
            this.handleAlwaysOnTop();
        }
    },

    /**
     * If we have been configured with #alwaysOnTop being `true`, we only need
     * to manually change our z-indexing in ExtJS 4. ExtJS 5 brings its own
     * version of `alwaysOnTop`.
     *
     * @private
     */
    handleAlwaysOnTop: function() {
        if (this.alwaysOnTop && Ext.versions.core.major === 4) {
            Ext.WindowManager.bringToFront(this.id);
        }
    },

    /**
     * Unanchors a popup from its location. This removes the popup from its
     * MapPanel and adds it to the page body.
     *
     * @private
     */
    unanchorPopup: function() {
        this.removeAnchorEvents();

        //make the window draggable
        this.draggable = true;
        this.header.addCls("x-window-header-draggable");
        var ddDelegate = '#' + Ext.escapeId(this.header.id),
            ddConfig = Ext.applyIf({
                el: this.el,
                delegate: ddDelegate,
                constrain: this.constrain,
                // `constrainHeader` in an Ext.window.Window maps
                // to `constrainDelegate` of the Ext.util.ComponentDragger
                constrainDelegate: this.constrainHeader ? ddDelegate : false,
                constrainTo: this.constrainTo
            }, this.draggable);
        this.dd = new Ext.util.ComponentDragger(this, ddConfig);

        //remove anchor
        this.removeCls('gx-popup-anc');

        //hide unpin tool
        this.tools.unpin.hide();
    },

    /**
     * Pans the MapPanel's map so that an anchored popup can come entirely
     * into view, with padding specified as per normal OpenLayers. Map popup
     * padding.
     *
     * @private
     */
    panIntoView: function() {
        var mapBox = Ext.fly(this.map.div).getBox(true);

        //assumed viewport takes up whole body element of map panel
        var popupPos =  this.getPosition(true);
        popupPos[0] -= mapBox.x;
        popupPos[1] -= mapBox.y;

        var panelSize = [mapBox.width, mapBox.height]; // [X,Y]

        var popupSize = this.getSize();

        var newPos = [popupPos[0], popupPos[1]];

        //For now, using native OpenLayers popup padding.  This may not be ideal.
        var padding = this.map.paddingForPopups;

        // X
        if(popupPos[0] < padding.left) {
            newPos[0] = padding.left;
        } else if(popupPos[0] + popupSize.width > panelSize[0] - padding.right) {
            newPos[0] = panelSize[0] - padding.right - popupSize.width;
        }

        // Y
        if(popupPos[1] < padding.top) {
            newPos[1] = padding.top;
        } else if(popupPos[1] + popupSize.height > panelSize[1] - padding.bottom) {
            newPos[1] = panelSize[1] - padding.bottom - popupSize.height;
        }

        var dx = popupPos[0] - newPos[0];
        var dy = popupPos[1] - newPos[1];

        this.map.pan(dx, dy);
    },

    /**
     * Called during map movements; does reposition the popup.
     *
     * @private
     */
    onMapMove: function() {
        if (!(this.hidden && this.insideViewport)){
            this._mapMove = true;
            this.position();
            delete this._mapMove;
        }
    },

    /**
     * Adds appropriate anchor events.
     *
     * @private
     */
    addAnchorEvents: function() {
        this.map.events.on({
            "move" : this.onMapMove,
            scope : this
        });

        this.on({
            "resize": this.position,
            scope: this
        });
    },

    /**
     * Removes previously bound anchor events.
     *
     * @private
     */
    removeAnchorEvents: function() {
        //stop position with location
        this.map.events.un({
            "move" : this.onMapMove,
            scope : this
        });

        this.un("resize", this.position, this);
    },

    /**
     * Cleanup events before destroying the popup.
     *
     * @private
     */
    beforeDestroy: function() {
        if(this.anchored) {
            this.removeAnchorEvents();
        }
        this.callParent(arguments);
    }

});
