(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{250:function(t,e,r){var content=r(252);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("21522665",content,!0,{sourceMap:!1})},251:function(t,e,r){"use strict";var n=r(250);r.n(n).a},252:function(t,e,r){(e=r(13)(!1)).push([t.i,"",""]),t.exports=e},253:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"PageHeader",props:{title:{type:String,required:!0},subtitle:{type:String,required:!0}}}),o=(r(251),r(8)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"light mb-3 py-8",attrs:{flat:""}},[e("v-card-text",{staticClass:"pa-0 text-left"},[e("span",{staticClass:"text-h2 mt-n1 font-weight-medium d-block mb-2"},[this._v("\n      "+this._s(this.title)+"\n    ")]),this._v(" "),e("span",{staticClass:"text-body-1 font-weight-medium"},[this._v("\n      "+this._s(this.subtitle)+"\n    ")])])],1)}),[],!1,null,"3b252d9a",null);e.default=component.exports},255:function(t,e,r){var content=r(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("7f307492",content,!0,{sourceMap:!1})},256:function(t,e,r){var content=r(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("0238946e",content,!0,{sourceMap:!1})},267:function(t,e,r){"use strict";var n=r(255);r.n(n).a},268:function(t,e,r){(e=r(13)(!1)).push([t.i,"",""]),t.exports=e},269:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNiAzNiI+PHBhdGggZmlsbD0iIzlBQUFCNCIgZD0iTTExLjg1OCAxNi4yNjRjLjM4OS4zODkuMzg5IDEuMDI1IDAgMS40MTRzLTEuMDI1LjM4OS0xLjQxNCAwTDEuOTU5IDkuMTkyYy0uMzg5LS4zODktLjM4OS0xLjAyNSAwLTEuNDE0czEuMDI1LS4zODkgMS40MTQgMGw4LjQ4NSA4LjQ4NnptNy4wNzItNy4wNzFjLjM4OS4zODkuMzg5IDEuMDI1IDAgMS40MTRzLTEuMDI1LjM4OS0xLjQxNCAwTDkuMDI5IDIuMTIxYy0uMzg5LS4zODktLjM4OS0xLjAyNSAwLTEuNDE0czEuMDI1LS4zODkgMS40MTQgMGw4LjQ4NyA4LjQ4NnoiLz48cGF0aCBmaWxsPSIjMzEzNzNEIiBkPSJNMzQgMzZjMC00Ljk2Ni0yLjU2LTguNTgxLTQuNTYyLTEwLjY1Ljg5OC0xLjUzMi43MDQtMy41MjktLjYxLTQuODQ0bC0xLjA5OS0xLjA5OWMuMzUyLTEuMzMyLjAyMS0yLjgwNi0xLjAyMi0zLjg1MWwtNC45NDktNC45NWMuNzgtLjc4MS43OC0yLjA0NyAwLTIuODI4LS43ODEtLjc4MS0yLjA0OS0uNzgxLTIuODI5LS4wMDFsLTIuODI2IDIuODI2LS4wMDMuMDAyLTQuMjQyIDQuMjQzLTIuODI4IDIuODI4Yy0uNzgxLjc4MS0uNzgxIDIuMDQ3IDAgMi44MjguNzgxLjc4MSAyLjA0Ny43ODEgMi44MjggMGw0Ljk1IDQuOTVjMS4wNDQgMS4wNDQgMi41MTkgMS4zNzMgMy44NSAxLjAyMWwxLjEwMSAxLjEwMWMxLjMxOCAxLjMxOCAzLjMyMyAxLjUxIDQuODU3LjYwMkMyOC4wOTkgMjkuNzI2IDMwIDMyLjQwNCAzMCAzNmg0eiIvPjwvc3ZnPg=="},270:function(t,e,r){t.exports=r.p+"img/banana.7afa8b7.svg"},271:function(t,e,r){"use strict";var n=r(256);r.n(n).a},272:function(t,e,r){(e=r(13)(!1)).push([t.i,".button[data-v-61673a32]{width:100%!important;height:100%!important}.emoji[data-v-61673a32]{font-size:6.5vw}.emojiImage[data-v-61673a32]{width:6.5vw}@media only screen and (min-width:600px){.emoji[data-v-61673a32]{font-size:38px}.emojiImage[data-v-61673a32]{width:38px}}",""]),t.exports=e},288:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend({name:"Board",props:{resetBoard:{type:Boolean,required:!0}},watch:{resetBoard:function(t,e){this.clearBoard(),this.setBoard()}},data:function(){return{board:[[!1]],boardSize:6,score:1}},mounted:function(){this.clearBoard(),this.setBoard()},methods:{getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))},clearBoard:function(){this.board=[[]];for(var i=0;i<this.boardSize;i++){this.board.push([]);for(var t=0;t<this.boardSize;t++)this.board[i].push(!1)}},setBoard:function(){for(var i=0,t=-1,e=-1;i<this.score;){for(var r=!1;!r;){var n=this.getRandomInt(this.boardSize),o=this.getRandomInt(this.boardSize);n!=t&&o!=e&&(r=!0,t=n,e=o,this.updateTiles(n,o),this.$forceUpdate())}i++}},isInRange:function(t,e){return t>=0&&t<this.boardSize&&e>=0&&e<this.boardSize},updateTiles:function(t,e){for(var i=-1;i<2;i++)for(var r=-1;r<2;r++){var n=t+i,o=e+r;0!=i&&0!=r||!this.isInRange(n,o)||(this.board[o][n]=!this.board[o][n])}},isGameOver:function(){for(var i=0;i<this.boardSize;i++)for(var t=0;t<this.boardSize;t++)if(this.board[i][t])return!1;return!0},handleNewGame:function(){this.$emit("boardClear",this.score),this.score+=1,this.clearBoard(),this.setBoard()},handleClick:function(t){if(!(t.length<2)){var e=t[0],r=t[1];this.updateTiles(e,r),this.isGameOver()&&this.handleNewGame(),this.$forceUpdate()}}}}),o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"primary",attrs:{flat:""}},[r("v-container",{staticClass:"pa-1 ma-0",attrs:{fluid:""}},t._l(t.board,(function(e,n){return r("v-row",{key:n,attrs:{"no-gutters":""}},t._l(t.board[n],(function(e,o){return r("v-col",{key:o,staticClass:"pa-1",attrs:{cols:"2"}},[r("v-responsive",{attrs:{"aspect-ratio":1}},[r("Tile",{attrs:{isPlug:t.board[n][o],x:o,y:n},on:{coordinates:function(e){return t.handleClick(e)}}})],1)],1)})),1)})),1)],1)}),[],!1,null,"0c794c4c",null);e.default=component.exports;installComponents(component,{Tile:r(293).default})},293:function(t,e,r){"use strict";r.r(e);r(247);var n=r(0).default.extend({name:"Board",props:{isPlug:{type:Boolean,required:!0},x:{type:Number,required:!0},y:{type:Number,required:!0}},data:function(){return{}},mounted:function(){},methods:{},computed:{}}),o=(r(271),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{staticClass:"button lighten-0",class:{light:!t.isPlug,accent:t.isPlug},attrs:{depressed:"",block:""},on:{click:function(e){return t.$emit("coordinates",[t.x,t.y])}}},[t.isPlug?n("img",{staticClass:"emojiImage",attrs:{src:r(269)}}):n("img",{staticClass:"emojiImage",attrs:{src:r(270)}})])}),[],!1,null,"61673a32",null);e.default=component.exports},301:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(74),c=r.n(o);r(130);n.default.use(c.a);var l=n.default.extend({head:function(){return{title:"Banana Blog",meta:[]}},data:function(){return{title:"Level",subtitle:"Banana Plug (the game)",instructions:"Make all tiles bananas to win.",topScore:1,currentScore:1,resetBoard:!1}},mounted:function(){var t=localStorage.getItem("topScore");null!=t&&(this.topScore=parseInt(t))},methods:{handleNewTopScore:function(t){t>this.topScore&&localStorage.setItem("".concat(t),"topScore")},handleBoardClear:function(t){this.handleNewTopScore(t),this.currentScore=t+1}}}),d=(r(267),r(8)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader",{attrs:{title:t.title+" "+t.currentScore,subtitle:t.subtitle}}),t._v(" "),r("Board",{attrs:{resetBoard:t.resetBoard},on:{boardClear:function(e){return t.handleBoardClear(e)}}}),t._v(" "),r("v-card",{staticClass:"primary mt-3",attrs:{flat:""}},[r("v-card-text",{staticClass:"pa-4 text-center"},[r("span",{staticClass:"text-body-1 font-weight-medium"},[t._v("\n        "+t._s(t.instructions)+"\n      ")])]),t._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"accent lighten-0",attrs:{block:"",depressed:"",width:"100%"},on:{click:function(e){t.resetBoard=!t.resetBoard}}},[t._v("\n        Reset Board\n      ")])],1)],1)],1)}),[],!1,null,"00357b7c",null);e.default=component.exports;installComponents(component,{PageHeader:r(253).default,Board:r(288).default})}}]);