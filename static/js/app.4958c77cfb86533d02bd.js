webpackJsonp([0],{"00zu":function(t,e,i){t.exports=i.p+"static/img/2.0e983ae.jpeg"},"07CU":function(t,e,i){t.exports=i.p+"static/media/fashion.13eaafa.mp4"},"C/Fi":function(t,e){},FCAR:function(t,e){},Knu6:function(t,e){},MUs6:function(t,e,i){t.exports=i.p+"static/img/4.766087c.jpeg"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"appMenu"}},[e("header",{staticClass:"header"},[e("div",{staticClass:"header__container"},[e("div",{staticClass:"header__title"},[e("router-link",{attrs:{to:{name:"home"}}},[e("h1",[this._v("CREA")])])],1)])])])},staticRenderFns:[]};var a={components:{appMenu:i("VU/8")({},s,!1,function(t){i("fJq4")},"data-v-47629978",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("appMenu"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")(a,r,!1,function(t){i("C/Fi")},null,null).exports,c=i("/ocq");n.a.use(c.a);var u=new c.a({mode:"hash",routes:[{path:"/",components:i("gHLv"),name:"home",meta:{requiresAuth:!0}},{path:"/1",components:i("znIs"),name:"project1",meta:{requiresAuth:!0}}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:u,components:{App:o},template:"<App/>"})},Nifr:function(t,e,i){t.exports=i.p+"static/img/3.a1505b1.jpeg"},fJq4:function(t,e){},gHLv:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{video:i("07CU")}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"appHome"}},[e("div",{staticClass:"main"},[e("section",{staticClass:"fashion",attrs:{id:"fashion"}},[e("div",{staticClass:"fashion__video"},[e("video",{ref:"videoRef",staticClass:"containervideo",attrs:{loop:"",width:"100%",muted:"",controls:"",src:this.video,poster:i("ls1c")},domProps:{muted:!0}})]),this._v(" "),e("div",{staticClass:"fashion__data data"},[e("p",[this._v("Photographie")]),this._v(" "),e("p",{staticClass:"fashion__data-info data-info"},[this._v("Fashion Show 2017")]),this._v(" "),e("div",{staticClass:"button__container"},[e("router-link",{attrs:{to:"/1"}},[e("p",{staticClass:"button data-button"},[this._v("Découvrir")])])],1)])])])])},staticRenderFns:[]};var a=i("VU/8")(n,s,!1,function(t){i("FCAR")},"data-v-945b3fe6",null);e.default=a.exports},ls1c:function(t,e,i){t.exports=i.p+"static/img/poster.776b909.png"},lwox:function(t,e){},uXOH:function(t,e,i){t.exports=i.p+"static/img/0.00a62ac.jpeg"},uagg:function(t,e){},vPdb:function(t,e,i){t.exports=i.p+"static/img/1.0069879.jpeg"},znIs:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("transition-group",{attrs:{name:"fade",mode:"out-in",tag:"div",id:"slides"}},[e("div",{key:this.image.id,staticClass:"slideImage",style:this.setBackgroundImage},[e("div",{staticClass:"slideTitle"},[this._v("\n          "+this._s(this.image.title)+"\n        ")])])])],1)},staticRenderFns:[]};var s={components:{Slides:i("VU/8")({props:["image"],computed:{setBackgroundImage:function(){return{backgroundImage:"url("+this.image.url+")"}}}},n,!1,function(t){i("Knu6")},null,null).exports},data:function(){return{images:[{id:0,url:i("uXOH"),title:""},{id:1,url:i("vPdb"),title:""},{id:2,url:i("00zu"),title:""},{id:3,url:i("Nifr"),title:""},{id:4,url:i("MUs6"),title:""}],chosenImage:0,intervalObject:null}},methods:{arrowLeft:function(){clearInterval(this.intervalObject),this.moveLeft();var t=this;this.intervalObject=setInterval(function(){t.moveLeft()},4e3)},arrowRight:function(){clearInterval(this.intervalObject),this.moveRight();var t=this;this.intervalObject=setInterval(function(){t.moveRight()},4e3)},moveLeft:function(){var t=this.chosenImage;--t<0&&(t=this.images.length-1),this.chosenImage=t},moveRight:function(){var t=this.chosenImage;++t>=this.images.length&&(t=0),this.chosenImage=t}},created:function(){var t=this;this.intervalObject=setInterval(function(){t.moveLeft()},4e3)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"slider"}},[i("div",{staticClass:"arrowLeft",on:{click:function(e){return t.arrowLeft()}}}),t._v(" "),i("Slides",{attrs:{image:t.images[t.chosenImage]}}),t._v(" "),i("div",{staticClass:"arrowRight",on:{click:function(e){return t.arrowRight()}}})],1)},staticRenderFns:[]};var r={components:{Slider:i("VU/8")(s,a,!1,function(t){i("lwox")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"appProject"}},[e("div",{staticClass:"main"},[e("Slider")],1)])},staticRenderFns:[]};var c=i("VU/8")(r,o,!1,function(t){i("uagg")},null,null);e.default=c.exports}},["NHnr"]);
//# sourceMappingURL=app.4958c77cfb86533d02bd.js.map