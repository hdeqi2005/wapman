webpackJsonp([11],{12:function(t,e,n){function i(t){n(25)}var o=n(0)(n(26),n(27),i,"data-v-afe59830",null);t.exports=o.exports},14:function(t,e,n){function i(t){n(33)}var o=n(0)(n(34),n(35),i,null,null);t.exports=o.exports},17:function(t,e,n){"use strict";function i(t,e){return E.test(t)?j()(t).format(e):t}function o(t){return i(t,"YYYY-MM-DD")}function a(t){return i(t,"YYYY-MM-DD HH:mm")}function s(t){var e="YYYY-MM-DD",n=" HH:mm",o=i(t,e+n);return E.test(o)?j()(o).calendar(null,{sameDay:"[今天]"+n,nextDay:"[明天]"+n,nextWeek:e+n,lastDay:"[昨天]"+n,lastWeek:e+n,sameElse:e+n}):o}var r={};n.d(r,"fullDateFormat",function(){return o}),n.d(r,"datetimeToMin",function(){return a}),n.d(r,"datetimeToMinOpt",function(){return s});var c=(n(63),n(18),n(5)),l=n(66),u=n.n(l),d=n(19),f=n.n(d),p=void 0,h={install:function(t,e){if(!p){var n=t.extend(f.a);p=(new n).$mount(),document.body.appendChild(p.$el)}var i={show:function(t){p.msg=t,p.show()},close:function(){p.hide()},open:function(t){t.title&&(p.title=t.title),t.msg&&(p.msg=t.msg),t.cancel&&(p.cancel=t.cancel),t.confirm&&(p.confirm=t.confirm),p.show()}};t.$dialog||(t.$dialog=i),t.mixin({created:function(){this.$dialog=t.$dialog}})}},v=n(7),m=n.n(v),w=void 0,g=void 0,b={install:function(t,e){if(!w){var n=t.extend(m.a);w=(new n).$mount(),document.body.appendChild(w.$el)}var i={loading:function(t){w.position="middle",w.title=t,w.icon="load",w.show()},open:function(t){w.position=t.position,w.title=t.title,w.text=t.text,w.icon=t.icon,w.show()},close:function(){w.hide()},autoClose:function(t){w.position=t.position,w.title=t.title,w.text=t.text,w.icon=t.icon,w.show(),t.autoClose&&(g&&clearTimeout(g),g=setTimeout(function(){w.hide()},1e3*t.sec))},error:function(t){w.position="bottom",w.icon=null,w.title=t,w.show(),g&&clearTimeout(g),g=setTimeout(function(){w.hide()},3e3)}};t.$toast||(t.$toast=i),t.mixin({created:function(){this.$toast=t.$toast}})}},y=n(29),_=n.n(y),x=void 0,C={install:function(t,e){if(!x){var n=t.extend(_.a);x=(new n).$mount(),document.body.appendChild(x.$el)}var i={init:function(t){x.btns=t},show:function(){x.show()},close:function(){x.hide()}};t.$action||(t.$action=i),t.mixin({created:function(){this.$action=t.$action}})}},$=n(67),P=n.n($),T=n(68),S=n.n(T),O=n(57),j=n.n(O),E=/\d{4}(-|\/|.)\d{1,2}\1\d{1,2}/;c.a.use(h),c.a.use(b),c.a.use(C),P.a.config("https://d717fdeb7e6149da9928c8e57093a527@sentry.io/254621").addPlugin(S.a,c.a).install();for(var k in r)c.a.filter(k,r[k]);u.a.attach(document.body)},18:function(t,e){},19:function(t,e,n){function i(t){n(20)}var o=n(0)(n(21),n(22),i,"data-v-136ae367",null);t.exports=o.exports},2:function(t,e,n){"use strict";function i(){return T.a?new P.a(function(t,e){window.apiready=function(){m("light"),t()}}):P.a.resolve()}function o(t){t=C()({},t,{overScrollMode:"scrolls",slidBackEnabled:!0,slidBackType:"edge",historyGestureEnabled:!0,hideHomeIndicator:!0}),window.api?(window.api.openWin(t),g()):(t.pageParam&&Object(T.f)("pageparams",t.pageParam),setTimeout(function(){window.location.href=t.url},t.delay))}function a(t){var e=t.url,n=t.name,i=t.rect,o=void 0===i?{x:0,y:0,w:"auto",h:"auto"}:i,a=t.pageParam,s=void 0===a?{}:a,r=t.bounces,c=window.document.documentElement,l=parseInt(c.getAttribute("data-dpr"),10),u={url:e,name:n,rect:o,pageParam:s,bounces:r,useWKWebView:!0,progress:{type:"page",color:"#45C01A"},hScrollBarEnabled:!1,overScrollMode:"scrolls"};"number"==typeof u.rect.x&&(u.rect.x/=l),"number"==typeof u.rect.y&&(u.rect.y/=l),"number"==typeof u.rect.w&&(u.rect.w/=l),"number"==typeof u.rect.h&&(u.rect.h/=l),window.api&&window.api.openFrame(u)}function s(t){window.api?window.api.historyBack({frameName:t},function(t,e){f("portrait_up"),!t.status&&window.api.closeWin()}):window.history.go(-1)}function r(t){window.api&&window.api.closeToWin({name:t})}function c(){return window.api?window.api.pageParam:window.$api.getStorage("pageparams","object")}function l(){var t=void 0,e="再按一次退出"+window.api.appName;p("keyback").then(function(n){t?(new Date).getTime()-t<2e3&&window.api.closeWidget({silent:!0}):(t=(new Date).getTime(),window.api.toast({msg:e,duration:1500,location:"bottom"}),setTimeout(function(){t=null},1e3))}).catch(function(t){alert(t)})}function u(){var t={bgColor:"#f2f2f2",textColor:"#999",textDown:"下拉刷新...",textUp:"松开刷新..."};if(window.api)return new P.a(function(e,n){window.api.setRefreshHeaderInfo(t,function(t,i){console.log("ret:"+_()(t)),console.log("err:"+i),i?n(i):e(t)})});console.log("api is not be found in setRefreshHeader")}function d(t){window.api?window.api.setFullScreen({fullScreen:t}):console.log("api is not be found in setFullScreen")}function f(t){window.api?window.api.setScreenOrientation({orientation:t}):console.log("api is not be found in setScreen")}function p(t){return window.api?new P.a(function(e,n){window.api.addEventListener({name:t},function(t,i){var o=t&&t.value||{};i&&i.msg&&n(i.msg),e(o)})}):(console.warn("api is not be found in addEvent"),P.a.resolve())}function h(t){window.api?window.api.removeEventListener({name:t}):console.warn("api is not be found in removeEvent")}function v(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.api?window.api.sendEvent({name:t,extra:e}):console.warn("api is not be found in sendEvent")}function m(t){window.api?window.api.setStatusBarStyle({style:t}):console.warn("api is not be found in setStatusBarStyle")}function w(t){window.api?window.api.removeLaunchView({animation:{type:"fade",duration:t}}):console.warn("api is not be found in removeLaunch")}function g(){window.api?(Object(S.b)("加载中"),p("removePage").then(function(t){Object(S.c)(),h("removePage")}).catch(function(t){alert(t)}),p("viewdisappear").then(function(t){return v("removePage")}).catch(function(t){alert(t)})):console.warn("api is not be found in openPage")}function b(t){return t=C()({},{sourceType:"camera",encodingType:"jpg",mediaValue:"pic",destinationType:"url",allowEdit:!0,quality:80,targetWidth:100,targetHeight:100,saveToPhotoAlbum:!1},t),window.api?new P.a(function(e,n){window.api.getPicture(t,function(n,i){if(n){var o="base64"===t.destinationType?n.base64Data:n.data;e(o)}else i&&i.msg&&Object(S.a)(i.msg)})}):P.a.resolve()}e.b=i,e.h=o,e.i=a,e.c=s,e.d=r,e.f=c,e.e=l,e.m=u,e.l=d,e.n=f,e.a=p,e.k=v,e.j=w,e.g=b;var y=n(16),_=n.n(y),x=n(3),C=n.n(x),$=n(36),P=n.n($),T=n(4),S=n(9)},20:function(t,e){},21:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n.n(i);e.default={name:"dialog",props:{title:{type:String,default:"系统提示"},msg:{type:String},confirm:{type:Object,default:function(){return{text:"确定"}}},cancel:{type:Object,default:function(){return{text:"取消"}}}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{cancelBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.cancel)},confirmBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.confirm)}}}},22:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"dialog-fade",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-dialog",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"dialog-wrapper"},[n("div",{staticClass:"dialog-content"},[n("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{staticClass:"msg",domProps:{innerHTML:t._s(t.msg)}}),t._v(" "),n("div",{staticClass:"operate g-row"},[n("div",{staticClass:"g-col-4 left-btn",on:{click:t.cancelBtn.handle}},[t._v(t._s(t.cancel.text))]),t._v(" "),n("div",{staticClass:"g-col-4 right-btn",on:{click:t.confirmBtn.handle}},[t._v(t._s(t.confirm.text))])])])])])])},staticRenderFns:[]}},23:function(t,e){},24:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(12),o=n.n(i);e.default={props:{position:{type:String,default:"bottom"},title:{type:String},text:{type:String},icon:{type:String}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{positionCls:function(){switch(this.position){case"top":return"c-top";case"middle":return"c-middle";case"bottom":default:return"c-bottom"}}},components:{LoaderRack:o.a}}},25:function(t,e){},26:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},27:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"loader"},[t._v("Loading...")])},staticRenderFns:[]}},28:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-toast",class:t.positionCls,on:{click:function(t){t.stopPropagation()}}},[t.icon?n("div",{staticClass:"vc-toast-icon"},[n("p",["load"===t.icon?n("loader-rack"):n("i",{class:t.icon})],1)]):t._e(),t._v(" "),t.title?n("div",{staticClass:"vc-toast-title"},[n("p",[n("span",[t._v(t._s(t.title))])])]):t._e(),t._v(" "),t.text?n("div",[n("p",[n("span",[t._v(t._s(t.text))])])]):t._e()])},staticRenderFns:[]}},29:function(t,e,n){function i(t){n(30)}var o=n(0)(n(31),n(32),i,"data-v-73609114",null);t.exports=o.exports},30:function(t,e){},31:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"action-sheet",props:{btns:{type:Array,default:function(){return[{name:"是",handle:function(){}},{name:"否",handle:function(){}}]}}},data:function(){return{display:!1}},methods:{show:function(){this.display=!0},hide:function(){this.display=!1}}}},32:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"as-slide",appear:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"vc-as",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"vc-as-body g-box",class:{"vc-as-down":!t.display}},[n("div",{staticClass:"vc-as-menu"},[n("ul",t._l(t.btns,function(e){return n("li",{staticClass:"vc-as-btn"},[n("div",{staticClass:"vc-li-item",on:{click:e.handle}},[n("span",{domProps:{innerHTML:t._s(e.name)}})])])}))]),t._v(" "),n("div",{staticClass:"vc-as-btn vc-as-cancel",on:{click:t.hide}},[t._v("取消")])])])])},staticRenderFns:[]}},33:function(t,e){},34:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},methods:{_scal:function(){var t=this.$refs.page.offsetHeight,e=this.$refs.top.offsetHeight,n=this.$refs.foot.offsetHeight,i=t-e-n;this.$emit("position",{top:e,foot:n,content:i}),this.$refs.content.style.height=i+"px"}},mounted:function(){var t=this;this.$nextTick(function(){t._scal()})}}},35:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"page",staticClass:"vc-page"},[n("header",{ref:"top",staticClass:"vc-page-top"},[t._t("head")],2),t._v(" "),n("section",{ref:"content",staticClass:"vc-page-content"},[t._t("default")],2),t._v(" "),n("footer",{ref:"foot",staticClass:"vc-page-footer"},[t._t("foot")],2)])},staticRenderFns:[]}},4:function(t,e,n){"use strict";function i(t){var e=!(!t||1!==t.nodeType);return e||console.warn("This function need el param, el param must be DOM Element"),e}function o(t,e){if(i(t))return t.className.indexOf(e)>-1}function a(t,e){if(i(t)&&!o(t,e)){if("classList"in t)t.classList.add(e);else{var n=t.className,a=n+" "+e;t.className=a}return t}}function s(t,e){var n=window.localStorage;n&&2===arguments.length&&("object"===(void 0===e?"undefined":h()(e))?(e=f()(e),e="obj-"+e):e="str-"+e,n.setItem(t,e))}function r(t){var e=window.localStorage;if(e){var n=e.getItem(t);if(!n)return;if(0===n.indexOf("obj-"))return n=n.slice(4),JSON.parse(n);if(0===n.indexOf("str-"))return n.slice(4)}}function c(){var t=window.localStorage;t&&t.clear()}function l(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");w&&g>=5&&(t.style.paddingTop="0.53334rem")}function u(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");w?l(t):m&&g>=4.4&&(t.style.paddingTop="0.66667rem")}n.d(e,"a",function(){return v}),e.b=a,e.f=s,e.e=r,e.c=c,e.d=u;var d=n(16),f=n.n(d),p=n(70),h=n.n(p),v=/file/gi.test(location.protocol),m=/android/gi.test(navigator.appVersion),w=/iPhone|iPad/gi.test(navigator.appVersion),g=parseFloat(navigator.appVersion)},40:function(t,e,n){function i(t){n(41)}var o=n(0)(n(42),n(43),i,"data-v-649a4d91",null);t.exports=o.exports},41:function(t,e){},42:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n.n(i),a=n(2),s=n(4);e.default={props:{title:{type:String},titleBox:{type:Object},left:{type:Object,default:function(){return{icon:"icon-back",handle:function(){Object(a.c)()}}}},right:{type:Array}},data:function(){return{leftObj:{}}},methods:{_initBar:function(){this._fixStatusBar()},_fixStatusBar:function(){s.a&&Object(s.d)(this.$refs.bar)}},computed:{titleBtn:function(){return this.title?this.title:this.titleBox?o()({},{icon:"icon-pulldown1",text:null},this.titleBox):void 0}},mounted:function(){this._initBar()}}},43:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"bar",staticClass:"c-bar"},[n("div",{staticClass:"c-bar-left c-square",on:{click:t.left.handle}},[n("i",{class:t.left.icon})]),t._v(" "),n("div",{staticClass:"c-bar-center c-square",class:{"c-title":!t.titleBtn.icon}},[t.titleBtn.icon?n("div",[n("span",[t._v(t._s(t.titleBtn.text))]),t._v(" "),n("i",{class:t.titleBtn.icon})]):n("span",[t._v(t._s(t.titleBtn))])]),t._v(" "),n("div",{staticClass:"c-bar-right c-square"},[t._l(t.right,function(e){return n("div",{staticClass:"c-right-item",on:{click:e.handle}},[e.icon?n("i",{class:e.icon}):n("span",[t._v(t._s(e.text))])])}),t._v(" "),t._t("baright")],2),t._v(" "),n("div",{staticClass:"c-slot"},[t._t("default")],2)])},staticRenderFns:[]}},46:function(t,e,n){"use strict";function i(t){return new a.a(function(e,n){setTimeout(e,t)})}e.a=i;var o=n(36),a=n.n(o)},593:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(n(17),n(5)),o=n(594),a=n.n(o),s=n(2);Object(s.b)().then(function(){new i.a({el:"#app",render:function(t){return t(a.a)}})})},594:function(t,e,n){function i(t){n(595)}var o=n(0)(n(596),n(604),i,"data-v-b96413fa",null);t.exports=o.exports},595:function(t,e){},596:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(14),o=n.n(i),a=n(40),s=n.n(a),r=n(597),c=n.n(r),l=n(46),u=n(2);e.default={name:"slider-demo",data:function(){return{banners:[]}},methods:{createFullScreen:function(){Object(u.l)(!0),Object(u.n)("landscape_left"),Object(l.a)(600).then(function(){Object(u.n)("auto_landscape")})}},created:function(){},mounted:function(){Object(u.m)().then(function(t){console.log(t)}).catch(function(t){console.log(t)}),this.createFullScreen()},components:{Page:o.a,TopBar:s.a,Slider:c.a}}},597:function(t,e,n){function i(t){n(598)}var o=n(0)(n(599),n(603),i,"data-v-2a50728e",null);t.exports=o.exports},598:function(t,e){},599:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(600),o=n.n(i),a=n(142),s=n.n(a),r=n(4);e.default={name:"slider",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var t=this;this.$nextTick(function(){t.init()}),window.addEventListener("resize",function(){t.slider&&(clearTimeout(t.resizeTimer),t.resizeTimer=setTimeout(function(){t.slider.isInTransition?t.onScrollEnd():t.autoPlay&&t.play(),t.setSliderWidth(!0),t.slider.refresh()},60))})},methods:{init:function(){clearTimeout(this.timer),this.currentPageIndex=0,this.setSliderWidth(),this.initDots(),this.initSlider(),this.autoPlay&&this.play()},setSliderWidth:function(t){this.children=this.$refs.sliderGroup.children;var e=0,n=this.$refs.slider.clientWidth,i=!0,a=!1,s=void 0;try{for(var c,l=o()(this.children);!(i=(c=l.next()).done);i=!0){var u=c.value;Object(r.b)(u,"slider-item"),u.style.width=n+"px",e+=n}}catch(t){a=!0,s=t}finally{try{!i&&l.return&&l.return()}finally{if(a)throw s}}this.loop&&!t&&(e+=2*n),this.$refs.sliderGroup.style.width=e+"px"},initSlider:function(){var t=this;this.slider=new s.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:.3,speed:400},bounce:!1,stopPropagation:!0,click:!0}),this.slider.on("scrollEnd",this.onScrollEnd),this.slider.on("touchEnd",function(){t.autoPlay&&t.play()}),this.slider.on("beforeScrollStart",function(){t.autoPlay&&clearTimeout(t.timer)})},onScrollEnd:function(){var t=this.slider.getCurrentPage().pageX;this.loop&&(t-=1),this.currentPageIndex=t,this.autoPlay&&this.play()},initDots:function(){this.dots=new Array(this.children.length)},play:function(){var t=this;clearTimeout(this.timer),this.timer=setTimeout(function(){t.slider.next()},this.interval)}},deactivated:function(){clearTimeout(this.timer)},beforeDestroy:function(){clearTimeout(this.timer)}}},603:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"slider",staticClass:"slider"},[n("div",{ref:"sliderGroup",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"dots"},t._l(t.dots,function(e,i){return n("span",{staticClass:"dot",class:{active:t.currentPageIndex===i}})}))])},staticRenderFns:[]}},604:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page",[n("header",{slot:"head"},[n("top-bar",{attrs:{title:"轮播图组件"}})],1),t._v(" "),t.banners.length?n("div",{staticClass:"slider-wrapper"},[n("slider",t._l(t.banners,function(t){return n("div",{key:t.id},[n("a",{attrs:{href:t.linkUrl}},[n("img",{attrs:{src:t.picUrl,alt:""}})])])}))],1):t._e()])},staticRenderFns:[]}},69:function(t,e,n){function i(t){return n(o(t))}function o(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./zh-cn":15,"./zh-cn.js":15};i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id=69},7:function(t,e,n){function i(t){n(23)}var o=n(0)(n(24),n(28),i,"data-v-525e81a9",null);t.exports=o.exports},9:function(t,e,n){"use strict";function i(t){d.position="middle",d.title=t,d.icon="load",d.show()}function o(t){d.hide()}function a(t){d.position="bottom",d.icon=null,d.title=t,d.show(),l&&clearTimeout(l),l=setTimeout(function(){d.hide()},3e3)}e.b=i,e.c=o,e.a=a;var s=n(5),r=n(7),c=n.n(r),l=null,u=s.a.extend(c.a),d=(new u).$mount();document.body.appendChild(d.$el)}},[593]);