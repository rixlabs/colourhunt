webpackJsonp([1],{134:function(t,e){},135:function(t,e){},136:function(t,e){},137:function(t,e){},138:function(t,e){},139:function(t,e){},140:function(t,e){},141:function(t,e){},176:function(t,e,n){function o(t){n(136)}var r=n(1)(n(91),n(184),o,null,null);t.exports=r.exports},177:function(t,e,n){function o(t){n(141)}var r=n(1)(n(92),n(190),o,null,null);t.exports=r.exports},178:function(t,e,n){function o(t){n(137)}var r=n(1)(n(94),n(186),o,"data-v-75c1fd3a",null);t.exports=r.exports},179:function(t,e,n){function o(t){n(134)}var r=n(1)(n(95),n(182),o,null,null);t.exports=r.exports},180:function(t,e,n){function o(t){n(135)}var r=n(1)(n(96),n(183),o,null,null);t.exports=r.exports},181:function(t,e,n){var o=n(1)(n(98),n(185),null,null,null);t.exports=o.exports},182:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Content"},[n("div",{staticClass:"Content__list"},[t.loading>0?[n("spinner")]:t._l(t.allPalettes,function(t){return n("color-palette",{key:t.id,attrs:{colorpalette:t}})})],2)])},staticRenderFns:[]}},183:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"Header"},[n("div",{staticClass:"Header__content"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"Header__logo"},[t._v("Colour Hunt")])]),t._v(" "),n("div",{staticClass:"Header__nav"},[n("router-link",{staticClass:"button",attrs:{to:"/create"}},[t._v("Create")]),t._v(" "),n("router-link",{staticClass:"button",attrs:{to:"/login"}},[t._v("Login")])],1)],1)])},staticRenderFns:[]}},184:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Color-palette"},[n("router-link",{staticClass:"Color__link",attrs:{to:{name:"palette",params:{id:t.colorpalette.id}}}},[n("div",{staticClass:"Color-palette__colors"},[n("color-preview",{attrs:{colors:t.colorpalette.colors}})],1),t._v(" "),n("div",{staticClass:"Color-palette__content"},[n("div",{staticClass:"Color-palette__title"},[t._v("\n        "+t._s(t.colorpalette.title)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"Color-palette__meta"},[n("upvote-button",{attrs:{id:t.colorpalette.id,upvotes:t.colorpalette.upvotes}})],1)],1)},staticRenderFns:[]}},185:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"Color-palette__upvotes button button--small",class:{"is-active":t.voted},on:{click:function(e){t.upvote()}}},[t._v("\n  "+t._s(t.upvotes)+"\n")])},staticRenderFns:[]}},186:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Content"},[n("div",{staticClass:"Color-create"},[n("h1",[t._v("Create new Palette")]),t._v(" "),n("hr"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Name your palette",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.colors,expression:"colors"}],attrs:{type:"text",placeholder:"Your colors",name:"colors"},domProps:{value:t.colors},on:{input:function(e){e.target.composing||(t.colors=e.target.value)}}}),t._v(" "),n("color-picker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),t._v(" "),n("button",{on:{click:function(e){t.create()}}},[t._v("Create Palette")])],1)])},staticRenderFns:[]}},187:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Colorpreview",style:{height:t.height+"px"}},t._l(t.colors,function(e){return n("span",{staticClass:"Color",style:{backgroundColor:e}},[n("span",{staticClass:"hex"},[t._v("\n      "+t._s(e)+"\n    ")])])}))},staticRenderFns:[]}},188:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("c-header"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},189:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"rect1"}),t._v(" "),n("div",{staticClass:"rect2"}),t._v(" "),n("div",{staticClass:"rect3"}),t._v(" "),n("div",{staticClass:"rect4"}),t._v(" "),n("div",{staticClass:"rect5"})])}]}},190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Content"},[n("div",{staticClass:"Color-detail"},[n("div",{staticClass:"Color-detail__header"},[n("color-preview",{attrs:{colors:t.Palette.colors,height:200}})],1),t._v(" "),n("div",{staticClass:"Color-detail__content"},[t.loading>0?n("span",[n("spinner")],1):t._e(),t._v(" "),n("h1",{staticClass:"Color-detail__title"},[t._v(t._s(t.Palette.title))])])])])},staticRenderFns:[]}},68:function(t,e,n){function o(t){n(138)}var r=n(1)(n(93),n(187),o,null,null);t.exports=r.exports},69:function(t,e,n){function o(t){n(140)}var r=n(1)(n(97),n(189),o,null,null);t.exports=r.exports},72:function(t,e,n){"use strict";var o=n(41),r=n(191),l=n(179),a=n.n(l),s=n(178),i=n.n(s),c=n(177),u=n.n(c);o.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"home",component:a.a},{path:"/create",name:"create",component:i.a},{path:"/palette/:id",name:"palette",component:u.a}]})},74:function(t,e,n){function o(t){n(139)}var r=n(1)(n(90),n(188),o,null,null);t.exports=r.exports},89:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(41),r=n(74),l=n.n(r),a=n(72),s=n(71),i=n(73),c=n.n(i);o.a.config.productionTip=!1;var u=n.i(s.a)({uri:"https://api.graph.cool/simple/v1/cj23bdhqjezf401017zjz3w27"}),d=new s.b({networkInterface:u});o.a.use(c.a,{apolloClient:d});var p=new c.a({defaultClient:d});new o.a({el:"#app",router:a.a,apolloProvider:p,render:function(t){return t(l.a)}})},90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(180),r=n.n(o);e.default={components:{CHeader:r.a},name:"app"}},91:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(68),r=n.n(o),l=n(181),a=n.n(l);e.default={components:{ColorPreview:r.a,UpvoteButton:a.a},props:{colorpalette:{type:Object,default:function(){return{title:"",colors:[],upvotes:0}}}}}},92:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(30),r=n.n(o),l=n(37),a=n.n(l),s=n(68),i=n.n(s),c=n(69),u=n.n(c),d=r()(["\n  query palette($id: ID!) {\n    Palette(id: $id) {\n      id\n      colors\n      title\n    }\n  }\n"],["\n  query palette($id: ID!) {\n    Palette(id: $id) {\n      id\n      colors\n      title\n    }\n  }\n"]),p=a()(d);e.default={components:{ColorPreview:i.a,Spinner:u.a},data:function(){return{Palette:{},loading:0}},apollo:{Palette:{query:p,loadingKey:"loading",variables:function(){return{id:this.$route.params.id}},result:function(t){console.log(t)}}}}},93:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{colors:{type:Array},height:{type:Number,default:50}}}},94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(102),r=n.n(o),l=n(30),a=n.n(l),s=n(192),i=n.n(s),c=n(37),u=n.n(c),d=a()(["\n  mutation createPalette($title: String!, $colors: [String!]) {\n    createPalette(title: $title, colors: $colors) {\n      id\n      title\n      colors\n    }\n  }\n"],["\n  mutation createPalette($title: String!, $colors: [String!]) {\n    createPalette(title: $title, colors: $colors) {\n      id\n      title\n      colors\n    }\n  }\n"]),p=u()(d);e.default={components:{colorPicker:i.a},data:function(){return{title:"",colors:"",color:""}},computed:{colorArray:function(){return this.colors.split(",")}},methods:{create:function(){var t=this.title,e=this.colorArray;this.title="",this.colors="",this.$apollo.mutate({mutation:p,variables:{title:t,colors:e},updateQueries:{allPalettes:function(t,e){return{allPalettes:[e.mutationResult.data.createPalette].concat(r()(t.allPalettes))}}}}).then(function(t){console.log(t)}).catch(function(t){console.error(t)})}}}},95:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(30),r=n.n(o),l=n(37),a=n.n(l),s=n(176),i=n.n(s),c=n(69),u=n.n(c),d=r()(["\n  query allPalettes {\n    allPalettes(orderBy: upvotes_DESC) {\n      id\n      title\n      upvotes\n      colors\n    }\n  }\n"],["\n  query allPalettes {\n    allPalettes(orderBy: upvotes_DESC) {\n      id\n      title\n      upvotes\n      colors\n    }\n  }\n"]),p=a()(d);e.default={components:{ColorPalette:i.a,Spinner:u.a},props:{},data:function(){return{allPalettes:{},loading:0}},apollo:{allPalettes:{query:p,loadingKey:"loading"}}}},96:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},97:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},98:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{upvotes:{type:Number,default:0},id:{type:String}},data:function(){return{voted:!1}},methods:{upvote:function(){this.voted=!0}}}}},[89]);
//# sourceMappingURL=app.ffc63b113d16a62bf12b.js.map