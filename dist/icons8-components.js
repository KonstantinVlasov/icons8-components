!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("icons8-components",[],e):"object"==typeof exports?exports["icons8-components"]=e():o["icons8-components"]=e()}(this,function(){return function(o){function e(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return o[t].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=o,e.c=r,e.d=function(o,r,t){e.o(o,r)||Object.defineProperty(o,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(r,"a",r),r},e.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},e.p="",e(e.s=0)}([function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r(1);e.default={install:function(o){o.component("color-picker",t.a)}}},function(o,e,r){"use strict";function t(o){i||r(2)}var n=r(8),c=r(9),i=!1,s=r(7),a=t,l=s(n.a,c.a,a,null,null);l.options.__file="src\\components\\colorPicker.vue",l.esModule&&Object.keys(l.esModule).some(function(o){return"default"!==o&&"__"!==o.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] colorPicker.vue: functional components are not supported with templates, they should use render functions."),e.a=l.exports},function(o,e,r){var t=r(3);"string"==typeof t&&(t=[[o.i,t,""]]),t.locals&&(o.exports=t.locals);r(5)("6cf22df3",t,!1)},function(o,e,r){e=o.exports=r(4)(void 0),e.push([o.i,'/**\r\n * Colors\r\n */\n/**\r\n * Menu\r\n */\n/**\r\n * Sidebars\r\n */\n.color-picker {\n  position: relative;\n  display: inline-block;\n  width: 1.625rem;\n  height: 1.625rem;\n}\n.color-picker .color-picker-toggle {\n    width: 1.625rem;\n    height: 1.625rem;\n    background: no-repeat url("data:image/png;base64,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") 50% 50%;\n    border-radius: 100%;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n.color-picker .color-picker-content {\n    padding: 0.75rem 0.5rem;\n}\n.color-picker .color-picker-text {\n    margin: 0 0.25rem 0.5rem;\n    color: #4a4a4a;\n}\n.color-picker .color-picker-colors {\n    width: 12.5rem;\n}\n.color-picker .color-picker-color {\n    position: relative;\n    display: inline-block;\n    width: 2rem;\n    height: 2rem;\n    margin: 0 0.25rem 0.5rem;\n    vertical-align: top;\n    cursor: pointer;\n}\n.color-picker .color-picker-color.is-white {\n      border: 1px solid #ccc;\n}\n.color-picker .color-picker-color-second {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 50%;\n    cursor: pointer;\n}\n.color-picker .color-picker-input {\n    width: 80px;\n    margin: 0 0.25rem;\n}\n',""])},function(o,e){function r(o,e){var r=o[1]||"",n=o[3];if(!n)return r;if(e&&"function"==typeof btoa){var c=t(n);return[r].concat(n.sources.map(function(o){return"/*# sourceURL="+n.sourceRoot+o+" */"})).concat([c]).join("\n")}return[r].join("\n")}function t(o){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"}o.exports=function(o){var e=[];return e.toString=function(){return this.map(function(e){var t=r(e,o);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(o,r){"string"==typeof o&&(o=[[null,o,""]]);for(var t={},n=0;n<this.length;n++){var c=this[n][0];"number"==typeof c&&(t[c]=!0)}for(n=0;n<o.length;n++){var i=o[n];"number"==typeof i[0]&&t[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(o,e,r){function t(o){for(var e=0;e<o.length;e++){var r=o[e],t=u[r.id];if(t){t.refs++;for(var n=0;n<t.parts.length;n++)t.parts[n](r.parts[n]);for(;n<r.parts.length;n++)t.parts.push(c(r.parts[n]));t.parts.length>r.parts.length&&(t.parts.length=r.parts.length)}else{for(var i=[],n=0;n<r.parts.length;n++)i.push(c(r.parts[n]));u[r.id]={id:r.id,refs:1,parts:i}}}}function n(){var o=document.createElement("style");return o.type="text/css",p.appendChild(o),o}function c(o){var e,r,t=document.querySelector('style[data-vue-ssr-id~="'+o.id+'"]');if(t){if(h)return v;t.parentNode.removeChild(t)}if(g){var c=d++;t=f||(f=n()),e=i.bind(null,t,c,!1),r=i.bind(null,t,c,!0)}else t=n(),e=s.bind(null,t),r=function(){t.parentNode.removeChild(t)};return e(o),function(t){if(t){if(t.css===o.css&&t.media===o.media&&t.sourceMap===o.sourceMap)return;e(o=t)}else r()}}function i(o,e,r,t){var n=r?"":t.css;if(o.styleSheet)o.styleSheet.cssText=m(e,n);else{var c=document.createTextNode(n),i=o.childNodes;i[e]&&o.removeChild(i[e]),i.length?o.insertBefore(c,i[e]):o.appendChild(c)}}function s(o,e){var r=e.css,t=e.media,n=e.sourceMap;if(t&&o.setAttribute("media",t),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),o.styleSheet)o.styleSheet.cssText=r;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(r))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=r(6),u={},p=a&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,h=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());o.exports=function(o,e,r){h=r;var n=l(o,e);return t(n),function(e){for(var r=[],c=0;c<n.length;c++){var i=n[c],s=u[i.id];s.refs--,r.push(s)}e?(n=l(o,e),t(n)):n=[];for(var c=0;c<r.length;c++){var s=r[c];if(0===s.refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete u[s.id]}}}};var m=function(){var o=[];return function(e,r){return o[e]=r,o.filter(Boolean).join("\n")}}()},function(o,e){o.exports=function(o,e){for(var r=[],t={},n=0;n<e.length;n++){var c=e[n],i=c[0],s=c[1],a=c[2],l=c[3],u={id:o+":"+n,css:s,media:a,sourceMap:l};t[i]?t[i].parts.push(u):r.push(t[i]={id:i,parts:[u]})}return r}},function(o,e){o.exports=function(o,e,r,t,n){var c,i=o=o||{},s=typeof o.default;"object"!==s&&"function"!==s||(c=o,i=o.default);var a="function"==typeof i?i.options:i;e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),t&&(a._scopeId=t);var l;if(n?(l=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,o||"undefined"==typeof __VUE_SSR_CONTEXT__||(o=__VUE_SSR_CONTEXT__),r&&r.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(n)},a._ssrRegister=l):r&&(l=r),l){var u=a.functional,p=u?a.render:a.beforeCreate;u?a.render=function(o,e){return l.call(e),p(o,e)}:a.beforeCreate=p?[].concat(p,l):[l]}return{esModule:c,exports:i,options:a}}},function(o,e,r){"use strict";e.a={name:"colorPicker",props:{value:{type:String,default:"#444444"},tooltip:{type:String,default:""},previewColor:{default:!1},showColor:{default:!1},position:{default:"bottom-right"}},data:function(){return{showChooser:!0,showPicker:!1,colorsGray:[{color:"#ffffff"},{color:"#cccccc"},{color:"#666666"},{color:"#333333"},{color:"#000000"}],colors:[{color:"#e74c3c",colorDark:"#c0392b"},{color:"#e67e22",colorDark:"#d35400"},{color:"#f1c40f",colorDark:"#f39c12"},{color:"#2ecc71",colorDark:"#27ae60"},{color:"#1abc9c",colorDark:"#16a085"},{color:"#3498db",colorDark:"#2980b9"},{color:"#9b59b6",colorDark:"#8e44ad"},{color:"#ecf0f1",colorDark:"#bdc3c7"},{color:"#95a5a6",colorDark:"#7f8c8d"},{color:"#34495e",colorDark:"#2c3e50"}]}},computed:{computedColor:{get:function(){return this.value},set:function(o){this.$emit("input",o)}},cleanColor:function(){var o=this.computedColor;return o&&o.indexOf("#")>=0&&(o=o.substring(o.indexOf("#")+1)),o},toggleStyle:function(){return this.showColor||this.previewColor&&"000000"!==this.cleanColor?{background:"#"+this.cleanColor,"box-shadow":"inset 0 0 10px rgba(0,0,0,0.2)"}:{}}},methods:{chooseColor:function(o){this.computedColor=o}}}},function(o,e,r){"use strict";var t=function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("div",{staticClass:"color-picker"},[r("app-popup",{attrs:{position:o.position,"show-arrow":!1}},[r("div",{staticClass:"color-picker-toggle",style:o.toggleStyle,attrs:{"data-tooltip":o.tooltip}}),r("div",{staticClass:"color-picker-content",attrs:{slot:"content"},slot:"content"},[r("div",{staticClass:"color-picker-text"},[o._v("grayscale")]),r("div",{staticClass:"color-picker-colors"},o._l(o.colorsGray,function(e){return r("div",{staticClass:"color-picker-color",class:{"is-white":"#ffffff"===e.color},style:{"background-color":e.color},on:{click:function(r){r.stopPropagation(),o.chooseColor(e.color)}}})})),r("div",{staticClass:"color-picker-text"},[o._v("color")]),r("div",{staticClass:"color-picker-colors"},o._l(o.colors,function(e){return r("div",{staticClass:"color-picker-color",style:{"background-color":e.color},on:{click:function(r){r.stopPropagation(),o.chooseColor(e.color)}}},[r("div",{staticClass:"color-picker-color-second",style:{"background-color":e.colorDark},on:{click:function(r){r.stopPropagation(),o.chooseColor(e.colorDark)}}})])})),r("div",{staticClass:"color-picker-text"},[o._v("custom")]),r("input",{directives:[{name:"model",rawName:"v-model",value:o.computedColor,expression:"computedColor"}],staticClass:"color-picker-input",domProps:{value:o.computedColor},on:{input:function(e){e.target.composing||(o.computedColor=e.target.value)}}})])])],1)},n=[];t._withStripped=!0;var c={render:t,staticRenderFns:n};e.a=c}])});