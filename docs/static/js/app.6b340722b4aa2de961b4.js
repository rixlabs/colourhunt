webpackJsonp([1],{100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{upvotes:{type:Number,default:0},id:{type:String}},data:function(){return{voted:!1}},methods:{upvote:function(){this.voted=!0}}}},136:function(t,e){},137:function(t,e){},138:function(t,e){},139:function(t,e){},140:function(t,e){},141:function(t,e){},142:function(t,e){},143:function(t,e){},144:function(t,e){},145:function(t,e){},182:function(t,e,n){function o(t){n(139)}var r=n(0)(n(91),n(193),o,null,null);t.exports=r.exports},183:function(t,e,n){function o(t){n(145)}var r=n(0)(n(92),n(200),o,null,null);t.exports=r.exports},184:function(t,e,n){function o(t){n(141)}var r=n(0)(n(94),n(196),o,"data-v-75c1fd3a",null);t.exports=r.exports},185:function(t,e,n){function o(t){n(137)}var r=n(0)(n(95),n(191),o,null,null);t.exports=r.exports},186:function(t,e,n){function o(t){n(138)}var r=n(0)(n(96),n(192),o,null,null);t.exports=r.exports},187:function(t,e,n){function o(t){n(136)}var r=n(0)(n(98),n(190),o,"data-v-38299894",null);t.exports=r.exports},188:function(t,e,n){function o(t){n(140)}var r=n(0)(n(99),n(195),o,null,null);t.exports=r.exports},189:function(t,e,n){var o=n(0)(n(100),n(194),null,null,null);t.exports=o.exports},190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"Swatch",on:{click:function(e){t.add()}}},[t._v("\n  +\n")])},staticRenderFns:[]}},191:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Content"},[n("div",{staticClass:"Content__list"},[t.loading>0?[n("spinner")]:t._l(t.allPalettes,function(t){return n("color-palette",{key:t.id,attrs:{colorpalette:t}})})],2)])},staticRenderFns:[]}},192:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"Header"},[n("div",{staticClass:"Header__content"},[n("router-link",{attrs:{to:"/"}},[n("h1",{staticClass:"Header__logo"},[t._v("Colour Hunt")])]),t._v(" "),n("div",{staticClass:"Header__nav"},[n("router-link",{staticClass:"button",attrs:{to:"/create"}},[t._v("Create")]),t._v(" "),n("router-link",{staticClass:"button",attrs:{to:"/login"}},[t._v("Login")])],1)],1)])},staticRenderFns:[]}},193:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Color-palette"},[n("router-link",{staticClass:"Color__link",attrs:{to:{name:"palette",params:{id:t.colorpalette.id}}}},[n("div",{staticClass:"Color-palette__colors"},[n("color-preview",{attrs:{colors:t.colorpalette.colors}})],1),t._v(" "),n("div",{staticClass:"Color-palette__content"},[n("div",{staticClass:"Color-palette__title"},[t._v("\n        "+t._s(t.colorpalette.title)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"Color-palette__meta"},[n("upvote-button",{attrs:{id:t.colorpalette.id,upvotes:t.colorpalette.upvotes}})],1)],1)},staticRenderFns:[]}},194:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"Color-palette__upvotes button button--small",class:{"is-active":t.voted},on:{click:function(e){t.upvote()}}},[t._v("\n  "+t._s(t.upvotes)+"\n")])},staticRenderFns:[]}},195:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Swatch",style:{backgroundColor:t.color},on:{click:t.openPicker}},[n("span",{staticClass:"close",on:{click:function(e){t.remove()}}},[t._v("✖")])])},staticRenderFns:[]}},196:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Content"},[n("div",{staticClass:"Color-create"},[n("h1",[t._v("Create new Palette")]),t._v(" "),n("hr"),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Name your palette",name:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),n("div",{staticClass:"Color__list"},[t._l(t.swatches,function(e,o){return n("swatch",{attrs:{color:e.color},on:{remove:function(e){t.removeColor(o)},picker:function(e){t.openPicker(o)}}})}),t._v(" "),t.addable?n("add-swatch",{on:{increment:function(e){t.addColor()}}}):t._e(),t._v(" "),t.showPicker?n("chrome-picker",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closePicker,expression:"closePicker"}],model:{value:t.pickerColors,callback:function(e){t.pickerColors=e},expression:"pickerColors"}}):t._e()],2),t._v(" "),n("button",{staticClass:"button",on:{click:function(e){t.create()}}},[t._v("Create Palette")])])])},staticRenderFns:[]}},197:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Colorpreview",style:{height:t.height+"px"}},t._l(t.colors,function(e){return n("span",{staticClass:"Color",style:{backgroundColor:e}},[n("span",{staticClass:"hex"},[t._v("\n      "+t._s(e)+"\n    ")])])}))},staticRenderFns:[]}},198:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("c-header"),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},199:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"rect1"}),t._v(" "),n("div",{staticClass:"rect2"}),t._v(" "),n("div",{staticClass:"rect3"}),t._v(" "),n("div",{staticClass:"rect4"}),t._v(" "),n("div",{staticClass:"rect5"})])}]}},200:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Content"},[n("div",{staticClass:"Color-detail"},[n("div",{staticClass:"Color-detail__header"},[n("color-preview",{attrs:{colors:t.Palette.colors,height:200}})],1),t._v(" "),n("div",{staticClass:"Color-detail__content"},[t.loading>0?n("span",[n("spinner")],1):t._e(),t._v(" "),n("h1",{staticClass:"Color-detail__title"},[t._v(t._s(t.Palette.title))])])])])},staticRenderFns:[]}},68:function(t,e,n){function o(t){n(142)}var r=n(0)(n(93),n(197),o,null,null);t.exports=r.exports},69:function(t,e,n){function o(t){n(144)}var r=n(0)(n(97),n(199),o,null,null);t.exports=r.exports},72:function(t,e,n){"use strict";var o=n(23),r=n(201),a=n(185),s=n.n(a),l=n(184),i=n.n(l),c=n(183),u=n.n(c);o.default.use(r.a),e.a=new r.a({routes:[{path:"/",name:"home",component:s.a},{path:"/create",name:"create",component:i.a},{path:"/palette/:id",name:"palette",component:u.a}]})},74:function(t,e,n){function o(t){n(143)}var r=n(0)(n(90),n(198),o,null,null);t.exports=r.exports},89:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(23),r=n(74),a=n.n(r),s=n(72),l=n(71),i=n(73),c=n.n(i);o.default.config.productionTip=!1;var u=n.i(l.a)({uri:"https://api.graph.cool/simple/v1/cj23bdhqjezf401017zjz3w27"}),d=new l.b({networkInterface:u});o.default.use(c.a,{apolloClient:d});var p=new c.a({defaultClient:d});new o.default({el:"#app",router:s.a,apolloProvider:p,render:function(t){return t(a.a)}})},90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(186),r=n.n(o);e.default={components:{CHeader:r.a},name:"app"}},91:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(68),r=n.n(o),a=n(189),s=n.n(a);e.default={components:{ColorPreview:r.a,UpvoteButton:s.a},props:{colorpalette:{type:Object,default:function(){return{title:"",colors:[],upvotes:0}}}}}},92:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(31),r=n.n(o),a=n(38),s=n.n(a),l=n(68),i=n.n(l),c=n(69),u=n.n(c),d=r()(["\n  query palette($id: ID!) {\n    Palette(id: $id) {\n      id\n      colors\n      title\n    }\n  }\n"],["\n  query palette($id: ID!) {\n    Palette(id: $id) {\n      id\n      colors\n      title\n    }\n  }\n"]),p=s()(d);e.default={components:{ColorPreview:i.a,Spinner:u.a},data:function(){return{Palette:{},loading:0}},apollo:{Palette:{query:p,loadingKey:"loading",variables:function(){return{id:this.$route.params.id}},result:function(t){console.log(t)}}}}},93:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{colors:{type:Array},height:{type:Number,default:50}}}},94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(104),r=n.n(o),a=n(31),s=n.n(a),l=n(38),i=n.n(l),c=n(181),u=(n.n(c),n(180)),d=(n.n(u),n(188)),p=n.n(d),f=n(187),v=n.n(f),_=s()(["\n    mutation createPalette($title: String!, $colors: [String!]) {\n      createPalette(title: $title, colors: $colors) {\n        id\n        title\n        colors\n      }\n    }\n  "],["\n    mutation createPalette($title: String!, $colors: [String!]) {\n      createPalette(title: $title, colors: $colors) {\n        id\n        title\n        colors\n      }\n    }\n  "]),h={hex:"#194d33",hsl:{h:150,s:.5,l:.2,a:1},hsv:{h:150,s:.66,v:.3,a:1},rgba:{r:25,g:77,b:51,a:1},a:1},C=i()(_);e.default={mixins:[u.mixin],components:{Swatch:p.a,AddSwatch:v.a,ChromePicker:c.Chrome},data:function(){return{title:"",currentIndex:0,colorCount:4,showPicker:!1,pickerColors:h,swatches:[{color:"#f1f1f1"}]}},computed:{colorArray:function(){return this.colors},colors:function(){return this.swatches.map(function(t){return t.color})},addable:function(){return this.swatches.length<=this.colorCount}},watch:{pickerColors:function(t){this.swatches[this.currentIndex].color=t.hex}},methods:{create:function(){var t=this.title,e=this.colorArray;this.title="",this.colors="",this.$apollo.mutate({mutation:C,variables:{title:t,colors:e},updateQueries:{allPalettes:function(t,e){return{allPalettes:[e.mutationResult.data.createPalette].concat(r()(t.allPalettes))}}}}).then(function(t){console.log(t)}).catch(function(t){console.error(t)})},addColor:function(){this.swatches.push({color:"#000"})},removeColor:function(t){this.swatches.splice(t,1)},openPicker:function(t){this.currentIndex=t,this.showPicker=!0},closePicker:function(){this.showPicker=!1}}}},95:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(31),r=n.n(o),a=n(38),s=n.n(a),l=n(182),i=n.n(l),c=n(69),u=n.n(c),d=r()(["\n  query allPalettes {\n    allPalettes(orderBy: upvotes_DESC) {\n      id\n      title\n      upvotes\n      colors\n    }\n  }\n"],["\n  query allPalettes {\n    allPalettes(orderBy: upvotes_DESC) {\n      id\n      title\n      upvotes\n      colors\n    }\n  }\n"]),p=s()(d);e.default={components:{ColorPalette:i.a,Spinner:u.a},props:{},data:function(){return{allPalettes:{},loading:0}},apollo:{allPalettes:{query:p,loadingKey:"loading"}}}},96:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},97:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},98:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{add:function(){this.$emit("increment")}}}},99:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{color:{type:String,default:"#f1f1f1"}},data:function(){return{}},methods:{remove:function(){this.$emit("remove")},openPicker:function(){this.$emit("picker")}}}}},[89]);
//# sourceMappingURL=app.6b340722b4aa2de961b4.js.map