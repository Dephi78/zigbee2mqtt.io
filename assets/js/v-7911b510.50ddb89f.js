"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78750],{968075:(e,n,s)=>{s.r(n),s.d(n,{data:()=>a});const a=JSON.parse('{"key":"v-7911b510","path":"/advanced/support-new-devices/01_support_new_devices.html","title":"Support new devices","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":2,"title":"Instructions","slug":"instructions","link":"#instructions","children":[{"level":3,"title":"1. Pairing the device with Zigbee2MQTT","slug":"_1-pairing-the-device-with-zigbee2mqtt","link":"#_1-pairing-the-device-with-zigbee2mqtt","children":[]},{"level":3,"title":"2. Adding your device","slug":"_2-adding-your-device","link":"#_2-adding-your-device","children":[]},{"level":3,"title":"3. Adding converter(s) for your device","slug":"_3-adding-converter-s-for-your-device","link":"#_3-adding-converter-s-for-your-device","children":[]},{"level":3,"title":"4. Add device picture to zigbee2mqtt.io documentation","slug":"_4-add-device-picture-to-zigbee2mqtt-io-documentation","link":"#_4-add-device-picture-to-zigbee2mqtt-io-documentation","children":[]},{"level":3,"title":"Done!","slug":"done","link":"#done","children":[]}]}],"git":{"updatedTime":1676709784000},"filePathRelative":"advanced/support-new-devices/01_support_new_devices.md"}')},645327:(e,n,s)=>{s.r(n),s.d(n,{default:()=>R});var a=s(166252);const t=s.p+"assets/img/colortemp_min_max.f8104072.png",o=(0,a._)("h1",{id:"support-new-devices",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#support-new-devices","aria-hidden":"true"},"#"),(0,a.Uk)(" Support new devices")],-1),i={href:"https://github.com/Koenkk/zigbee-herdsman-converters",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/Koenkk/zigbee-herdsman-converters",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/Koenkk/zigbee2mqtt/issues",target:"_blank",rel:"noopener noreferrer"},c=(0,a._)("strong",null,"Before",-1),l={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices",target:"_blank",rel:"noopener noreferrer"},u=(0,a.uE)('<h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h2><h3 id="_1-pairing-the-device-with-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#_1-pairing-the-device-with-zigbee2mqtt" aria-hidden="true">#</a> 1. Pairing the device with Zigbee2MQTT</h3><p>The first step is to pair the device with Zigbee2MQTT. It should be possible to pair your unsupported device out of the box because Zigbee2MQTT can pair with any Zigbee device. You need to find out how to bring your device into pairing mode, most of the time via a factory reset.</p><p>Once you successfully paired the device you will see something like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed &#39;0x00158d0001dc126a&#39;, device has successfully been paired\nZigbee2MQTT:warn  2019-11-09T12:19:56: Device &#39;0x00158d0001dc126a&#39; with Zigbee model &#39;lumi.sens&#39; and manufacturer name &#39;some_name&#39; is NOT supported, please follow https://www.zigbee2mqtt.io/how-tos/support_new_devices.html\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Make sure that joining is enabled, otherwise new devices cannot join the network.</p></div><h3 id="_2-adding-your-device" tabindex="-1"><a class="header-anchor" href="#_2-adding-your-device" aria-hidden="true">#</a> 2. Adding your device</h3><p>The next step is to create an external converter file. This file has to be created next to the <code>configuration.yaml</code>, in this example we will call it <code>WSDCGQ01LM.js</code> (make sure it ends with <code>.js</code>). In order to provide support for e.g. the <code>lumi.sens</code> from step 1 we would add the following to this file:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/fromZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> tz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/toZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> exposes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/exposes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> reporting <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/reporting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> extend <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/extend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> e <span class="token operator">=</span> exposes<span class="token punctuation">.</span>presets<span class="token punctuation">;</span>\n<span class="token keyword">const</span> ea <span class="token operator">=</span> exposes<span class="token punctuation">.</span>access<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">zigbeeModel</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;lumi.sens&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// The model ID from: Device with modelID &#39;lumi.sens&#39; is not supported.</span>\n    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;WSDCGQ01LM&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Vendor model number, look on the device for a model number</span>\n    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token string">&#39;Xiaomi&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Vendor of the device (only used for documentation and startup logging)</span>\n    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;MiJia temperature &amp; humidity sensor&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Description of the device, copy from vendor site. (only used for documentation and startup logging)</span>\n    <span class="token literal-property property">fromZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// We will add this later</span>\n    <span class="token literal-property property">toZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Should be empty, unless device can be controlled (e.g. lights, switches).</span>\n    <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">[</span>e<span class="token punctuation">.</span><span class="token function">battery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">temperature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">humidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Defines what this device exposes, used for e.g. Home Assistant discovery and in the frontend</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> definition<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now set the Zigbee2MQTT <code>log_level</code> to <code>debug</code> and enable the external converter by adding the following to your Zigbee2MQTT <code>configuration.yaml</code>.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">advanced</span><span class="token punctuation">:</span>\n  <span class="token key atrule">log_level</span><span class="token punctuation">:</span> debug\n<span class="token key atrule">external_converters</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> WSDCGQ01LM.js\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once finished, restart Zigbee2MQTT and trigger some actions on the device. You will see messages like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for &#39;WSDCGQ01LM&#39; with cluster &#39;msTemperatureMeasurement&#39; and type &#39;attributeReport&#39; and data &#39;{&quot;measuredValue&quot;:2512}&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',13),d=(0,a._)("code",null,"configure:",-1),k={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices",target:"_blank",rel:"noopener noreferrer"},m={class:"custom-container tip"},v=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),h=(0,a._)("code",null,"manuSpecificTuya",-1),g=(0,a._)("p",null,"In case your device does not report anything out of the blue, the Clusters page at Zigbee2MQTT's frontend (found under the device in the dashboard) also exposes the clusters.",-1),b=(0,a._)("p",null,"Some basic external converter examples:",-1),f={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/light.js",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/switch.js",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.js",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/devices",target:"_blank",rel:"noopener noreferrer"},x=(0,a._)("h3",{id:"_3-adding-converter-s-for-your-device",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#_3-adding-converter-s-for-your-device","aria-hidden":"true"},"#"),(0,a.Uk)(" 3. Adding converter(s) for your device")],-1),T={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/master/converters/fromZigbee.js",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/Koenkk/zigbee-herdsman-converters/blob/5c069a34beecc9250d642d02e84f2808af1b4fae/converters/fromZigbee.js#L304",target:"_blank",rel:"noopener noreferrer"},U=(0,a._)("code",null,"fz.temperature",-1),z=(0,a.uE)('<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zigbee2MQTT:debug  2019-11-09T12:24:22: No converter available for &#39;WSDCGQ01LM&#39; with cluster &#39;msTemperatureMeasurement&#39; and type &#39;attributeReport&#39; and data &#39;{&quot;measuredValue&quot;:2512}&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now update your external converter.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/fromZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> tz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/converters/toZigbee&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> exposes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/exposes&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> reporting <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/reporting&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> extend <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zigbee-herdsman-converters/lib/extend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> e <span class="token operator">=</span> exposes<span class="token punctuation">.</span>presets<span class="token punctuation">;</span>\n<span class="token keyword">const</span> ea <span class="token operator">=</span> exposes<span class="token punctuation">.</span>access<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">zigbeeModel</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;lumi.sens&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;WSDCGQ01LM&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token string">&#39;Xiaomi&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;MiJia temperature &amp; humidity sensor&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">fromZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span>fz<span class="token punctuation">.</span>temperature<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- added here all clusters reported from zigbee</span>\n    <span class="token literal-property property">toZigbee</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- add here all clusters to send commands to zigbee</span>\n    <span class="token literal-property property">exposes</span><span class="token operator">:</span> <span class="token punctuation">[</span>e<span class="token punctuation">.</span><span class="token function">battery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">temperature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">humidity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// &lt;-- this will define which fields will be exposed in the definition message to configure a front end (e.g. the z2m frontend, Home Assistant, Domoticz)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> definition<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Repeat until your device does not produce any more log messages like: <code>2018-5-1 18:19:41 WARN No converter available for &#39;WSDCGQ01LM&#39; with....</code></p>',4),M={href:"https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/externalConvertersExample/freepad_ext.js",target:"_blank",rel:"noopener noreferrer"},Z=(0,a.uE)('<h4 id="_3-1-retrieving-color-temperature-range-only-required-for-lights-which-support-color-temperature" tabindex="-1"><a class="header-anchor" href="#_3-1-retrieving-color-temperature-range-only-required-for-lights-which-support-color-temperature" aria-hidden="true">#</a> 3.1 Retrieving color temperature range (only required for lights which support color temperature)</h4><p>If your device is a light and supports color temperature you need to define the color temperature range. This range indicates the minimum and maximum color temperature values the light supports. This can be retrieved by clicking on your device in the frontend, go to &quot;Dev console&quot;. For cluster select <code>LColorCtrl</code>, for attribute <code>colorTempPhysicalMin</code> and <code>colorTempPhysicalMax</code>, after that click on &quot;Read&quot;. Now the min/max color temperature will be read as marked below</p><p><img src="'+t+'" alt="colortemp_min_max"></p><p>Alternatively this can be retrieved from the light by sending to <code>zigbee2mqtt/DEVICE_FRIENDLY_NAME/set</code> with payload <code>{&quot;read&quot;: {&quot;cluster&quot;: &quot;lightingColorCtrl&quot;, &quot;attributes&quot;: [&quot;colorTempPhysicalMin&quot;, &quot;colorTempPhysicalMax&quot;]}}</code></p><p>The result will be logged to the Zigbee2MQTT log, e.g.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Zigbee2MQTT:info  2021-03-21 21:10:40: Read result of &#39;lightingColorCtrl&#39;: {&quot;colorTempPhysicalMin&quot;:153,&quot;colorTempPhysicalMax&quot;:454}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the above example set <code>colorTempRange</code> to <code>{colorTempRange: [153, 454]}</code>, e.g.:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> definition <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">zigbeeModel</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;myZigbeeModel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token string">&#39;myModel&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token string">&#39;myVendor&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Super bulb&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">extend</span><span class="token operator">:</span> extend<span class="token punctuation">.</span><span class="token function">light_onoff_brightness_colortemp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">colorTempRange</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">153</span><span class="token punctuation">,</span> <span class="token number">454</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// &lt;---</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-add-device-picture-to-zigbee2mqtt-io-documentation" tabindex="-1"><a class="header-anchor" href="#_4-add-device-picture-to-zigbee2mqtt-io-documentation" aria-hidden="true">#</a> 4. Add device picture to zigbee2mqtt.io documentation</h3><p>To make sure a picture is available for this device on the supported devices page and in the frontend:</p>',10),W={href:"https://github.com/Koenkk/zigbee2mqtt.io",target:"_blank",rel:"noopener noreferrer"},Q=(0,a._)("li",null,[(0,a.Uk)("Add a device picture ("),(0,a._)("code",null,".jpg"),(0,a.Uk)(", 150x150) to "),(0,a._)("code",null,"public/images/devices"),(0,a.Uk)(".")],-1),C=(0,a._)("li",null,[(0,a._)("em",null,[(0,a._)("strong",null,"Optional:")]),(0,a.Uk)(" Add a markdown file for your device to "),(0,a._)("code",null,"docs/devices"),(0,a.Uk)(", use the "),(0,a._)("code",null,"model"),(0,a.Uk)(' property of your definition as the filename. Most of the contents of this file will be auto-generated through docgen but you can add your own notes in a notes section. Do not use h1 or h2 heading within "## Notes"-Section.')],-1),D=(0,a._)("blockquote",null,[(0,a._)("blockquote",null,[(0,a._)("p",null,[(0,a.Uk)("\x3c!-- Notes BEGIN --\x3e"),(0,a._)("br"),(0,a.Uk)(" ## Notes"),(0,a._)("br"),(0,a.Uk)(" ..."),(0,a._)("br"),(0,a.Uk)(" \x3c!-- Notes END --\x3e")])])],-1),I={start:"4"},j={href:"https://github.com/Koenkk/zigbee2mqtt.io",target:"_blank",rel:"noopener noreferrer"},N=(0,a._)("p",null,[(0,a.Uk)("On the next release of Zigbee2MQTT, the documentation will be updated and your device file will be linked in "),(0,a._)("code",null,"../../supported-devices.md"),(0,a.Uk)(" automatically.")],-1),S=(0,a._)("h3",{id:"done",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#done","aria-hidden":"true"},"#"),(0,a.Uk)(" Done!")],-1),K={href:"https://github.com/Koenkk/zigbee-herdsman-converters",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/Koenkk/zigbee-herdsman-converters/tree/master/devices",target:"_blank",rel:"noopener noreferrer"},A={},R=(0,s(983744).Z)(A,[["render",function(e,n){const s=(0,a.up)("ExternalLinkIcon"),t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[o,(0,a._)("p",null,[(0,a.Uk)("Zigbee2MQTT uses "),(0,a._)("a",i,[(0,a.Uk)("zigbee-herdsman-converters"),(0,a.Wm)(s)]),(0,a.Uk)(" to parse messages to and from devices.")]),(0,a._)("p",null,[(0,a.Uk)("This page will guide you through the process of adding support for new devices to "),(0,a._)("a",r,[(0,a.Uk)("zigbee-herdsman-converters"),(0,a.Wm)(s)]),(0,a.Uk)(".")]),(0,a._)("p",null,[(0,a.Uk)("In case you require any help feel free to create an "),(0,a._)("a",p,[(0,a.Uk)("issue"),(0,a.Wm)(s)]),(0,a.Uk)(".")]),(0,a._)("p",null,[c,(0,a.Uk)(" starting, first check if your device is not already supported in the Zigbee2MQTT dev branch! This can be done by searching on your Zigbee model (see step 1 below) in any of the files "),(0,a._)("a",l,[(0,a.Uk)("here"),(0,a.Wm)(s)]),(0,a.Uk)(".")]),u,(0,a._)("p",null,[(0,a.Uk)("If your device is not reporting anything, it could be that this device requires additional configuration. This can be done by adding a "),d,(0,a.Uk)(" section. It may help to look at similar "),(0,a._)("a",k,[(0,a.Uk)("devices"),(0,a.Wm)(s)]),(0,a.Uk)(".")]),(0,a._)("div",m,[v,(0,a._)("p",null,[(0,a.Uk)("If your device is advertised as TuYa compatible or reports anything with "),h,(0,a.Uk)(" additional instructions for adding your device can be found "),(0,a.Wm)(t,{to:"/advanced/support-new-devices/02_support_new_tuya_devices.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("here")])),_:1}),(0,a.Uk)(".")])]),g,b,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",f,[(0,a.Uk)("Bulb (light)"),(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a._)("a",y,[(0,a.Uk)("Plug (switch)"),(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a._)("a",_,[(0,a.Uk)("Advanced example"),(0,a.Wm)(s)])]),(0,a._)("li",null,[(0,a.Uk)("Definitions of already supported devices can be found "),(0,a._)("a",w,[(0,a.Uk)("here"),(0,a.Wm)(s)]),(0,a.Uk)(". It may help to look at devices from the same vendor or type.")])]),x,(0,a._)("p",null,[(0,a.Uk)("In order to parse the messages of your Zigbee device we need to add converter(s). Existing converters can probably be reused, those can be found "),(0,a._)("a",T,[(0,a.Uk)("here"),(0,a.Wm)(s)]),(0,a.Uk)(".")]),(0,a._)("p",null,[(0,a.Uk)("For e.g. the following message we could use the already existing "),(0,a._)("a",q,[U,(0,a.Uk)(" converter"),(0,a.Wm)(s)]),(0,a.Uk)(":")]),z,(0,a._)("p",null,[(0,a.Uk)("If none of the existing converters fit you can add custom ones, an external converter example for this can be found "),(0,a._)("a",M,[(0,a.Uk)("here"),(0,a.Wm)(s)]),(0,a.Uk)(".")]),Z,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a.Uk)("Clone "),(0,a._)("a",W,[(0,a.Uk)("zigbee2mqtt.io"),(0,a.Wm)(s)])]),Q,C]),D,(0,a._)("ol",I,[(0,a._)("li",null,[(0,a.Uk)("Create a Pull Request to "),(0,a._)("a",j,[(0,a.Uk)("zigbee2mqtt.io"),(0,a.Wm)(s)]),(0,a.Uk)(".")])]),N,S,(0,a._)("p",null,[(0,a.Uk)("Now it's time to submit a pull request to "),(0,a._)("a",K,[(0,a.Uk)("zigbee-herdsman-converters"),(0,a.Wm)(s)]),(0,a.Uk)(" so this device is supported out of the box by Zigbee2MQTT. This can be done by adding the definition to the "),(0,a._)("a",E,[(0,a.Uk)("vendor file"),(0,a.Wm)(s)]),(0,a.Uk)(" of your device. 😃")])])}]])}}]);