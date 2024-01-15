"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[80710],{111937:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-3a0f719c","path":"/devices/K4027C_L4027C_N4027C_NT4027C.html","title":"BTicino K4027C/L4027C/N4027C/NT4027C control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"BTicino K4027C/L4027C/N4027C/NT4027C control via MQTT","description":"Integrate your BTicino K4027C/L4027C/N4027C/NT4027C via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-02-28T13:58:01.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Led in dark (binary)","slug":"led-in-dark-binary","link":"#led-in-dark-binary","children":[]},{"level":3,"title":"Led if on (binary)","slug":"led-if-on-binary","link":"#led-if-on-binary","children":[]},{"level":3,"title":"Calibration mode (enum)","slug":"calibration-mode-enum","link":"#calibration-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1705345048000},"filePathRelative":"devices/K4027C_L4027C_N4027C_NT4027C.md"}')},873138:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var i=o(166252);const d=(0,i._)("h1",{id:"bticino-k4027c-l4027c-n4027c-nt4027c",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#bticino-k4027c-l4027c-n4027c-nt4027c","aria-hidden":"true"},"#"),(0,i.Uk)(" BTicino K4027C/L4027C/N4027C/NT4027C")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"K4027C/L4027C/N4027C/NT4027C")],-1),l=(0,i._)("td",null,"Vendor",-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Shutter SW with level control")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"cover (state, position, tilt), action, identify, led_in_dark, led_if_on, calibration_mode, linkquality")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/K4027C-L4027C-N4027C-NT4027C.jpg",alt:"BTicino K4027C/L4027C/N4027C/NT4027C"})])],-1),u=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),h=(0,i._)("p",null,"You can calibrate your device (to enable position support) by closing the shutter (or opening it if your cover position is inverted) and pressing both the up and down buttons for about 5 seconds until you see a blinking yellow light. The shutter will begin calibrating itself and will open and close a few times (this process takes a few minutes to complete).",-1),p=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),b=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),m=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>. To change the tilt publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tilt&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>moving</code>, <code>identify</code>.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum" aria-hidden="true">#</a> Identify (enum)</h3><p>Blinks the built-in LED to make it easier to identify the device. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>blink</code>.</p><h3 id="led-in-dark-binary" tabindex="-1"><a class="header-anchor" href="#led-in-dark-binary" aria-hidden="true">#</a> Led in dark (binary)</h3><p>Enables the built-in LED allowing to see the switch in the dark. Value can be found in the published state on the <code>led_in_dark</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_in_dark&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_in_dark&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led in dark is ON, if <code>OFF</code> OFF.</p><h3 id="led-if-on-binary" tabindex="-1"><a class="header-anchor" href="#led-if-on-binary" aria-hidden="true">#</a> Led if on (binary)</h3><p>Enables the LED on activity. Value can be found in the published state on the <code>led_if_on</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_if_on&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_if_on&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led if on is ON, if <code>OFF</code> OFF.</p><h3 id="calibration-mode-enum" tabindex="-1"><a class="header-anchor" href="#calibration-mode-enum" aria-hidden="true">#</a> Calibration mode (enum)</h3><p>Defines the calibration mode of the switch. (Caution: Changing modes requires a recalibration of the shutter switch!). Value can be found in the published state on the <code>calibration_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>classic_nllv</code>, <code>specific_nllv</code>, <code>up_down_stop</code>, <code>temporal</code>, <code>venetian_bso</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),g={},_=(0,o(983744).Z)(g,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[a,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=BTicino"},{default:(0,i.w5)((()=>[(0,i.Uk)("BTicino")])),_:1})])]),c,s,r])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,(0,i.kq)(" Notes END: Do not edit below this line "),p,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),b,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),m])}]])}}]);