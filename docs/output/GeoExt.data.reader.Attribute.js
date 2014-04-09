Ext.data.JsonP.GeoExt_data_reader_Attribute({"tagname":"class","name":"GeoExt.data.reader.Attribute","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Attribute.js","href":"Attribute.html#GeoExt-data-reader-Attribute"}],"aliases":{"reader":["gx_attribute"]},"alternateClassNames":["GeoExt.data.AttributeReader"],"extends":"Ext.data.reader.Json","mixins":[],"requires":["Ext.data.Field","GeoExt.Version"],"uses":[],"members":[{"name":"feature","tagname":"cfg","owner":"GeoExt.data.reader.Attribute","id":"cfg-feature","meta":{}},{"name":"format","tagname":"cfg","owner":"GeoExt.data.reader.Attribute","id":"cfg-format","meta":{}},{"name":"ignore","tagname":"cfg","owner":"GeoExt.data.reader.Attribute","id":"cfg-ignore","meta":{}},{"name":"constructor","tagname":"method","owner":"GeoExt.data.reader.Attribute","id":"method-constructor","meta":{}},{"name":"applyFeature","tagname":"method","owner":"GeoExt.data.reader.Attribute","id":"method-applyFeature","meta":{}},{"name":"getFeature","tagname":"method","owner":"GeoExt.data.reader.Attribute","id":"method-getFeature","meta":{}},{"name":"getFormat","tagname":"method","owner":"GeoExt.data.reader.Attribute","id":"method-getFormat","meta":{}},{"name":"getIgnore","tagname":"method","owner":"GeoExt.data.reader.Attribute","id":"method-getIgnore","meta":{}},{"name":"getResponseData","tagname":"method","owner":"GeoExt.data.reader.Attribute","id":"method-getResponseData","meta":{}},{"name":"ignoreAttribute","tagname":"method","owner":"GeoExt.data.reader.Attribute","id":"method-ignoreAttribute","meta":{}},{"name":"readRecords","tagname":"method","owner":"GeoExt.data.reader.Attribute","id":"method-readRecords","meta":{}},{"name":"setFeature","tagname":"method","owner":"GeoExt.data.reader.Attribute","id":"method-setFeature","meta":{}},{"name":"setFormat","tagname":"method","owner":"GeoExt.data.reader.Attribute","id":"method-setFormat","meta":{}},{"name":"setIgnore","tagname":"method","owner":"GeoExt.data.reader.Attribute","id":"method-setIgnore","meta":{}}],"code_type":"ext_define","id":"class-GeoExt.data.reader.Attribute","short_doc":"A reader to create model objects from a DescribeFeatureType structure. ...","component":false,"superclasses":["Ext.data.reader.Json"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>GeoExt.data.AttributeReader</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.reader.Json<div class='subclass '><strong>GeoExt.data.reader.Attribute</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.data.Field</div><div class='dependency'><a href='#!/api/GeoExt.Version' rel='GeoExt.Version' class='docClass'>GeoExt.Version</a></div><h4>Files</h4><div class='dependency'><a href='source/Attribute.html#GeoExt-data-reader-Attribute' target='_blank'>Attribute.js</a></div></pre><div class='doc-contents'><p>A reader to create model objects from a DescribeFeatureType structure. Uses\n<code>OpenLayers.Format.WFSDescribeFeatureType</code> internally for the parsing.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.define('My.model.Model', {\n    field: ['name', 'type'],\n    proxy: {\n        type: 'ajax',\n        url: 'http://wftgetfeaturetype',\n        reader: {\n            type: 'gx_attribute'\n        }\n    }\n});\n</code></pre>\n\n<p><code>gx_attribute</code> is the alias to the Attribute reader.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-feature' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-cfg-feature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-cfg-feature' class='name expandable'>feature</a> : OpenLayers.Feature.Vector<span class=\"signature\"></span></div><div class='description'><div class='short'>A vector feature. ...</div><div class='long'><p>A vector feature. If provided records created by the reader will\ninclude a field named \"value\" referencing the attribute value as\nset in the feature.</p>\n</div></div></div><div id='cfg-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-cfg-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-cfg-format' class='name expandable'>format</a> : OpenLayers.Format<span class=\"signature\"></span></div><div class='description'><div class='short'>A parser for transforming the XHR response into an array of objects\nrepresenting attributes. ...</div><div class='long'><p>A parser for transforming the XHR response into an array of objects\nrepresenting attributes.</p>\n\n<p>Defaults to <code>OpenLayers.Format.WFSDescribeFeatureType</code> parser.</p>\n</div></div></div><div id='cfg-ignore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-cfg-ignore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-cfg-ignore' class='name expandable'>ignore</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Properties of the ignore object should be field names. ...</div><div class='long'><p>Properties of the ignore object should be field names. Values are\neither arrays or regular expressions.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/GeoExt.data.reader.Attribute-method-constructor' class='name expandable'>GeoExt.data.reader.Attribute</a>( <span class='pre'>[config]</span> ) : <a href=\"#!/api/GeoExt.data.reader.Attribute\" rel=\"GeoExt.data.reader.Attribute\" class=\"docClass\">GeoExt.data.reader.Attribute</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a new reader. ...</div><div class='long'><p>Create a new reader.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>Config object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/GeoExt.data.reader.Attribute\" rel=\"GeoExt.data.reader.Attribute\" class=\"docClass\">GeoExt.data.reader.Attribute</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-method-applyFeature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-method-applyFeature' class='name expandable'>applyFeature</a>( <span class='pre'>feature</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Appends an Ext.data.Field to this #model. ...</div><div class='long'><p>Appends an Ext.data.Field to this #model.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>feature</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-getFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-cfg-feature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-method-getFeature' class='name expandable'>getFeature</a>( <span class='pre'></span> ) : OpenLayers.Feature.Vector<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of feature. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.data.reader.Attribute-cfg-feature\" rel=\"GeoExt.data.reader.Attribute-cfg-feature\" class=\"docClass\">feature</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>OpenLayers.Feature.Vector</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFormat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-cfg-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-method-getFormat' class='name expandable'>getFormat</a>( <span class='pre'></span> ) : OpenLayers.Format<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of format. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.data.reader.Attribute-cfg-format\" rel=\"GeoExt.data.reader.Attribute-cfg-format\" class=\"docClass\">format</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>OpenLayers.Format</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getIgnore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-cfg-ignore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-method-getIgnore' class='name expandable'>getIgnore</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of ignore. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/GeoExt.data.reader.Attribute-cfg-ignore\" rel=\"GeoExt.data.reader.Attribute-cfg-ignore\" class=\"docClass\">ignore</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getResponseData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-method-getResponseData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-method-getResponseData' class='name expandable'>getResponseData</a>( <span class='pre'>request</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Function called by the parent to deserialize a DescribeFeatureType\nresponse into Model objects. ...</div><div class='long'><p>Function called by the parent to deserialize a DescribeFeatureType\nresponse into Model objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : Object<div class='sub-desc'><p>The XHR object that contains the\n    DescribeFeatureType response.</p>\n</div></li></ul></div></div></div><div id='method-ignoreAttribute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-method-ignoreAttribute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-method-ignoreAttribute' class='name expandable'>ignoreAttribute</a>( <span class='pre'>name, value</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Determine if the attribute should be ignored. ...</div><div class='long'><p>Determine if the attribute should be ignored.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The field name.</p>\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'><p>The field value.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the attribute should be ignored.</p>\n</div></li></ul></div></div></div><div id='method-readRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-method-readRecords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-method-readRecords' class='name expandable'>readRecords</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Function called by\nExt.data.reader.Reader's read method\nto do the actual deserialization. ...</div><div class='long'><p>Function called by\nExt.data.reader.Reader's read method\nto do the actual deserialization.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : DOMElement/String/Array<div class='sub-desc'><p>A document element or XHR\n    response string.  As an alternative to fetching attributes data from\n    a remote source, an array of attribute objects can be provided given\n    that the properties of each attribute object map to a provided field\n    name.</p>\n</div></li></ul></div></div></div><div id='method-setFeature' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-cfg-feature' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-method-setFeature' class='name expandable'>setFeature</a>( <span class='pre'>feature</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of feature. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.data.reader.Attribute-cfg-feature\" rel=\"GeoExt.data.reader.Attribute-cfg-feature\" class=\"docClass\">feature</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>feature</span> : OpenLayers.Feature.Vector<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setFormat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-cfg-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-method-setFormat' class='name expandable'>setFormat</a>( <span class='pre'>format</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of format. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.data.reader.Attribute-cfg-format\" rel=\"GeoExt.data.reader.Attribute-cfg-format\" class=\"docClass\">format</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : OpenLayers.Format<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setIgnore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.reader.Attribute'>GeoExt.data.reader.Attribute</span><br/><a href='source/Attribute.html#GeoExt-data-reader-Attribute-cfg-ignore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.reader.Attribute-method-setIgnore' class='name expandable'>setIgnore</a>( <span class='pre'>ignore</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of ignore. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/GeoExt.data.reader.Attribute-cfg-ignore\" rel=\"GeoExt.data.reader.Attribute-cfg-ignore\" class=\"docClass\">ignore</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ignore</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});