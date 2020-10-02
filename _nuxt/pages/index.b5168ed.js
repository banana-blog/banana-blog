(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{262:function(t,e,n){var content=n(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("3665acbc",content,!0,{sourceMap:!1})},263:function(t,e,n){var content=n(286);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("a6de5b04",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"LinkCard",props:{title:{type:String,required:!1},subtitle:{type:String,required:!1},buttonText:{type:String,required:!1},to:{type:Object,required:!1}}}),r=n(8),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"primary mb-3",attrs:{flat:""}},[n("v-card-text",{staticClass:"pa-4"},[null!=t.title&&""!=t.title?n("span",{staticClass:"text-h5 mt-n1 font-weight-medium d-block mb-2"},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),null!=t.subtitle&&""!=t.subtitle?n("span",{staticClass:"text-body-1 font-weight-medium"},[t._v("\n      "+t._s(t.subtitle)+"\n    ")]):t._e()]),t._v(" "),null!=t.buttonText||null!=t.to?n("v-card-actions",[n("nuxt-link",{staticClass:"text-decoration-none mt-n2",staticStyle:{width:"100%"},attrs:{to:t.to}},[n("v-btn",{staticClass:"accent lighten-0",attrs:{block:"",depressed:"",width:"100%"}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])],1)],1):t._e()],1)}),[],!1,null,"2e4333e6",null);e.default=component.exports},283:function(t,e,n){"use strict";var l=n(262);n.n(l).a},284:function(t,e,n){(e=n(13)(!1)).push([t.i,"#floatingButton[data-v-5bdb36c6]{top:12px;right:12px}",""]),t.exports=e},285:function(t,e,n){"use strict";var l=n(263);n.n(l).a},286:function(t,e,n){(e=n(13)(!1)).push([t.i,".text[data-v-43dfe6da]{color:rgba(0,0,0,.6)!important}iframe[data-v-43dfe6da]{width:100%;height:100%;z-index:2001!important}",""]),t.exports=e},292:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"HelpOverlay",data:function(){return{isOverlayVisible:!1,helpCard:{title:"Never heard of Banana Plug?",text:"Watch the following:",buttonText:"Got It"}}}}),r=(n(283),n(8)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"accent",attrs:{id:"floatingButton",depressed:"",fab:"",small:"",absolute:""},on:{click:function(e){t.isOverlayVisible=!t.isOverlayVisible}}},[n("v-icon",{attrs:{small:"",color:"white"}},[t._v("\n      mdi-help\n    ")])],1),t._v(" "),n("v-dialog",{model:{value:t.isOverlayVisible,callback:function(e){t.isOverlayVisible=e},expression:"isOverlayVisible"}},[n("HelpCard",{attrs:{title:t.helpCard.title,text:t.helpCard.text,buttonText:t.helpCard.buttonText},on:{"hide-overlay":function(e){t.isOverlayVisible=!1}}})],1)],1)}),[],!1,null,"5bdb36c6",null);e.default=component.exports;installComponents(component,{HelpCard:n(298).default})},298:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({name:"HelpCard",props:{title:{type:String,required:!0},text:{type:String,required:!0},buttonText:{type:String,required:!0}}}),r=(n(285),n(8)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"primary",attrs:{id:"card",flat:""}},[n("v-card-text",{staticClass:"text pt-4 pb-0 px-4 text-center"},[n("span",{staticClass:"text-h5 mt-n1 font-weight-medium d-block mb-2"},[t._v("\n      "+t._s(t.title)+"\n    ")])]),t._v(" "),n("v-responsive",{staticClass:"rounded mx-3 primary lighten-1",attrs:{"aspect-ratio":16/9}},[n("iframe",{staticClass:"rounded",attrs:{src:"https://www.youtube.com/embed/5qpdcMUGeo0",frameborder:"0",allowfullscreen:""}})]),t._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"accent lighten-0",attrs:{block:"",depressed:"",width:"100%"},on:{click:function(e){return t.$emit("hide-overlay")}}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")])],1)],1)}),[],!1,null,"43dfe6da",null);e.default=component.exports},306:function(t,e,n){"use strict";n.r(e);var l=n(0),r=n(74),o=n.n(r),c=(n(130),n(94)),d=n.n(c);l.default.use(o.a),l.default.use(d.a);var f=l.default.extend({head:function(){return{title:"Banana Blog",meta:[]}},data:function(){return{title:"Banana Blog",subtitle:"bananablog.io",links:[{title:"The Story",subtitle:"Read the true story behind Banana Plug.",buttonText:"Read It",to:{name:"story"}},{title:"The Game",subtitle:"Play a recreation of the original hidden game.",buttonText:"Play Now",to:{name:"play"}}]}}}),v=n(8),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"light mb-0 py-8",attrs:{flat:""}},[n("v-card-text",{staticClass:"pa-0 pr-13"},[n("span",{staticClass:"text-h2 mt-n1 font-weight-medium d-block mb-2"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("span",{staticClass:"text-body-1 font-weight-medium"},[t._v("\n        "+t._s(t.subtitle)+"\n      ")])])],1),t._v(" "),t._l(t.links,(function(link){return n("LinkCard",{key:link.title,attrs:{title:link.title,subtitle:link.subtitle,buttonText:link.buttonText,to:link.to}})})),t._v(" "),n("HelpOverlay")],2)}),[],!1,null,"9eb63d76",null);e.default=component.exports;installComponents(component,{LinkCard:n(264).default,HelpOverlay:n(292).default})}}]);