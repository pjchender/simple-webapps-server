webpackJsonp([1],Array(18).concat([function(t,e,o){"use strict";var n=o(71),r=(o.n(n),o(63));o.n(r)},function(t,e,o){"use strict";var n=o(7),r=o(92),a=o(82),l=o.n(a),i=o(84),s=o.n(i),c=o(83),u=o.n(c);n.a.use(r.a),e.a=new r.a({mode:"history",routes:[{path:"/",name:"index",component:l.a},{path:"/palette",name:"Palette",component:s.a},{path:"*",name:"notFound",component:u.a}]})},function(t,e,o){"use strict";function n(t){return function(e,o){e[t]=o||e[t]}}var r=o(33),a=o.n(r),l={state:{authorized:!1,accessToken:null},mutations:{"refreshAuthorized/Credential":function(t,e){t.authorized=e},"refreshAccessToken/Credential":function(t,e){t.accessToken="Bearer "+e}}},i={state:{alert:{title:null,content:null,active:!1},flash:{title:null,active:!1}},mutations:{"emit/Alert":function(t,e){t.alert.active=!0,t.alert.title=e},"reset/Alert":function(t,e){t.alert.active=!1,t.alert.content=null,t.alert.title=null},"emit/Flash":function(t,e){t.flash.active=!0,t.flash.title=e},"reset/Flash":function(t,e){t.flash.active=!1,t.flash.title=null}}},s={strict:!0,state:{},actions:{},mutations:{},modules:{alertModule:i,credentialModule:l}};a()(s.state).forEach(function(t){s.mutations[t]=n(t)}),e.a=s},function(t,e){},function(t,e,o){function n(t){o(66)}var r=o(0)(o(24),o(87),n,"data-v-3850f906",null);t.exports=r.exports},,function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(79),r=o.n(n),a=o(80),l=o.n(a);e.default={name:"app",components:{Alert:r.a,HeaderPartial:l.a}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"alert",computed:{alert:function(){return{active:this.$store.state.alertModule.alert.active,title:this.$store.state.alertModule.alert.title,content:this.$store.state.alertModule.alert.content}},flash:function(){return this.$store.state.alertModule.flash.active&&setTimeout(this.disappearFlash,1e3),{active:this.$store.state.alertModule.flash.active,title:this.$store.state.alertModule.flash.title}}},methods:{confirm:function(){this.$store.commit("reset/Alert")},disappearFlash:function(){this.$store.commit("reset/Flash")}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(8),r=o.n(n),a=o(16),l=o.n(a);e.default={data:function(){return{profile:{},authorized:!1,navActive:!1,words:{controller:{loginSuccess:"Login Successful",logoutSuccess:"Logout Successful",unauthorized:"This app has not been authorized.",notLogin:"Not login yet."}}}},methods:{showNav:function(){this.navActive=!this.navActive},getTokenFromServer:function(){var t=this;l.a.post("https://simple-webapps.herokuapp.com/v1.0/users/login").send({input_token:t.profile.authResponse.accessToken,facebookId:t.profile.id,email:t.profile.email,name:t.profile.name}).type("application/json").end(function(e,o){e&&console.error(e);var n=JSON.parse(o.text);n.token&&(localStorage.setItem("token","Bearer "+n.token),t.$store.commit("refreshAccessToken/Credential",n.token))})},changeAuthorizedStatus:function(t){this.authorized=t,this.$store.commit("refreshAuthorized/Credential",t)},getProfile:function(t){var e=this;FB.api("/me","get",{fields:"name,id,email"},function(o){e.$set(e,"profile",o),e.profile=r()({},{authResponse:t},e.profile),e.getTokenFromServer()})},login:function(){var t=this;FB.login(function(e){t.statusChangeCallback(e)},{scope:"email, public_profile",return_scopes:!0})},logout:function(){var t=this;FB.logout(function(e){t.statusChangeCallback(e)})},statusChangeCallback:function(t){var e=this;"connected"===t.status?(e.$store.commit("emit/Flash",this.words.controller.loginSuccess),e.changeAuthorizedStatus(!0),e.getProfile(t.authResponse)):"not_authorized"===t.status?(e.$store.commit("emit/Flash",this.words.controller.unauthorized),e.changeAuthorizedStatus(!1)):"unknown"===t.status?(e.$store.commit("emit/Flash",this.words.controller.logoutSuccess),e.profile={},e.changeAuthorizedStatus(!1)):(e.$store.commit("emit/Flash",this.words.controller.notLogin),e.changeAuthorizedStatus(!1))}},mounted:function(){var t=this;window.fbAsyncInit=function(){FB.init({appId:"664195880445424",cookie:!0,xfbml:!0,version:"v2.9"}),FB.AppEvents.logPageView(),FB.getLoginStatus(function(e){t.statusChangeCallback(e)})}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["text","hide"],mounted:function(){document.title=this.text}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(81),r=o.n(n);e.default={data:function(){return{title:"404 Not Found!",message:"404 Not Found!"}},mounted:function(){this.$store.commit("emit/Alert","404 Not Found！")},components:{cTitle:r.a}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(32),r=o.n(n),a=o(8),l=o.n(a),i=o(69),s=o.n(i),c=o(16),u=o.n(c),d="https://simple-webapps.herokuapp.com/v1.0";e.default={name:"palette",data:function(){return{pickColor:{hexColor:"",name:""},colorPalette:[],colorPaletteUpdatedAt:"",colorPaletteOnCloud:[],colorPaletteOnCloudUpdatedAt:"",words:{view:{export:"Export",save:"Save",add:"Add",update:"Update"},controller:{invalidHexColor:"Invalid Hex Colors",alreadySetColor:"This color has already set.",colorNotFound:"can not find the color in updateColor()",successful:"successful",failed:"failed",copiedToClipboard:"Copied to clipboard",somethingWrong:"Oops!! Something go wrong",saveOnCloudSuccess:"Save on cloud successful",autoUpdatedSuccessLocal:"Auto updated successful in local"}}}},computed:{credential:function(){return{accessToken:this.$store.state.credentialModule.accessToken||null,authorized:this.$store.state.credentialModule.authorized||!1}},verifyColor:function(){return/^#[0-9A-F]{6}$/i.test(this.pickColor.hexColor)},contentToExport:function(){var t="";return this.colorPalette.forEach(function(e){t+="$"+e.name+": "+e.hexColor+";\n"}),t},checkSameColor:function(){var t=this,e=this.colorPalette.findIndex(function(e){return e.hexColor.toUpperCase()===t.pickColor.hexColor.toUpperCase()});return-1!==e&&(this.pickColor.name=this.colorPalette[e].name,!0)},localNewerThenSever:function(){return new Date(this.colorPaletteUpdatedAt).getTime()>new Date(this.colorPaletteOnCloudUpdatedAt).getTime()}},methods:{addColor:function(){if(this.verifyColor)if(this.checkSameColor)this.$store.commit("emit/Alert",this.words.controller.alreadySetColor);else{var t=l()({},this.pickColor,{hexColor:this.pickColor.hexColor.toUpperCase(),hue:s()(this.pickColor.hexColor)[0]});this.colorPalette.splice(0,0,t),this.pickColor.hexColor="",this.pickColor.name=""}else this.$store.commit("emit/Alert",this.words.controller.invalidHexColor)},findColor:function(){var t=this;this.colorPalette=this.colorPalette.filter(function(e){var o=new RegExp(t.pickColor.name,"gi");return e.name.match(o)})},updateColor:function(){var t=this,e=this.colorPalette.findIndex(function(e){return e.hexColor.toUpperCase()===t.pickColor.hexColor.toUpperCase()}),o=l()({},this.pickColor,{name:this.pickColor.name});if(-1===e)return void this.$store.commit("emit/Alert",this.words.controller.colorNotFound);this.colorPalette.splice(e,1,o),this.pickColor.hexColor="",this.pickColor.name=""},showColor:function(t,e){this.pickColor.hexColor=t,this.pickColor.name=e},deleteColor:function(t){var e=this.colorPalette.findIndex(function(e){return e.hexColor.toUpperCase()===t.toUpperCase()});this.colorPalette.splice(e,1)},exportPalette:function(){var t=document.querySelector("#contentToExport");t.removeAttribute("hidden"),contentToExport.select();try{var e=document.execCommand("copy"),o=e?this.words.controller.successful:this.words.controller.failed;this.$store.commit("emit/Flash",this.words.controller.copiedToClipboard+" "+o)}catch(t){this.$store.commit("emit/Flash",this.words.controller.somethingWrong)}t.setAttribute("hidden",""),window.getSelection().removeAllRanges()},enterHandler:function(){!0===this.checkSameColor?this.updateColor():this.addColor()},getPaletteFromLocalStorage:function(){this.colorPalette=JSON.parse(localStorage.getItem("colorPalette"))||[],this.colorPaletteUpdatedAt=localStorage.getItem("paletteUpdateAt")||""},createPaletteToServer:function(){var t=this,e=this;u.a.post(d+"/palette/").type("application/json").set({Authorization:e.credential.accessToken}).end(function(o,n){o&&t.$store.commit("emit/Alert",o);var r=JSON.parse(n.text);e.colorPaletteOnCloudUpdatedAt=r.newPalette.updated_at})},getPaletteFromServer:function(){var t=this,e=this;u.a.get(d+"/palette/").type("application/json").set({Authorization:e.credential.accessToken}).end(function(o,n){o&&t.$store.commit("emit/Alert",o);var r=JSON.parse(n.text);400===r.status?e.createPaletteToServer():200===r.status?(e.colorPaletteOnCloud=r.colors,e.colorPaletteOnCloudUpdatedAt=r.updated_at,localNewerThenSever||(e.colorPalette=r.colors||[],e.colorPaletteUpdatedAt=r.updated_at||"")):t.$store.commit("emit/Alert","Error in getPaletteFromServer in Palette.vue")})},savePaletteToServer:function(){var t=this,e=this;u.a.put(d+"/palette").type("application/json").set({Authorization:e.credential.accessToken}).send({colors:e.colorPalette}).end(function(o,n){o&&e.$store.commit("emit/Alert","Error occurred in savePaletteToServer in palette.vue("+o+")");var r=JSON.parse(n.text);200===r.status?(e.colorPaletteUpdatedAt=r.updated_at,e.colorPaletteOnCloudUpdatedAt=r.updated_at,localStorage.setItem("paletteUpdateAt",r.updated_at),e.$store.commit("emit/Flash",t.words.controller.saveOnCloudSuccess)):e.$store.commit("emit/Alert","Error occurred in savePaletteToServer in palette.vue("+r.message+")")})}},watch:{colorPalette:function(t){localStorage.setItem("colorPalette",r()(t)),localStorage.setItem("paletteUpdateAt",(new Date).toISOString()),this.colorPaletteUpdatedAt=(new Date).toISOString(),this.$store.commit("emit/Flash",this.words.controller.autoUpdatedSuccessLocal)},credential:function(t){t.authorized&&t.accessToken&&this.getPaletteFromServer()}},created:function(){this.getPaletteFromLocalStorage(),this.colorPalette=this.colorPalette.map(function(t){return l()({},t,{hue:s()(t.hexColor)[0]})}),this.colorPalette.sort(function(t,e){return t.hue-e.hue>0?1:-1})}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(7),r=o(23),a=o(22),l=o.n(a),i=o(19),s=o(20),c=(o(18),o(21));o.n(c);n.a.use(r.a);var u=new r.a.Store(s.a);n.a.config.productionTip=!1,function(t,e,o){var n,r=t.getElementsByTagName(e)[0];t.getElementById(o)||(n=t.createElement(e),n.id=o,n.src="//connect.facebook.net/zh_TW/sdk.js",r.parentNode.insertBefore(n,r))}(document,"script","facebook-jssdk"),new n.a({el:"#app",router:i.a,store:u,template:"<App/>",components:{App:l.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk2QkI4RkE3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk2QkI4Rjk3NjE2MTFFNUE4NEU4RkIxNjQ5MTYyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjU2QTEyNzk3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjU2QTEyN0E3NjkyMTFFMzkxODk4RDkwQkY4Q0U0NzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5WHowqAAAXNElEQVR42uxda4xd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"},function(t,e,o){function n(t){o(67)}var r=o(0)(o(25),o(88),n,"data-v-521b518a",null);t.exports=r.exports},function(t,e,o){function n(t){o(64)}var r=o(0)(o(26),o(85),n,"data-v-0d64863e",null);t.exports=r.exports},function(t,e,o){var n=o(0)(o(27),o(90),null,null,null);t.exports=n.exports},function(t,e,o){function n(t){o(65)}var r=o(0)(o(28),o(86),n,"data-v-17503ff6",null);t.exports=r.exports},function(t,e,o){var n=o(0)(o(29),o(91),null,null,null);t.exports=n.exports},function(t,e,o){function n(t){o(68)}var r=o(0)(o(30),o(89),n,"data-v-73b47e1f",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",{staticClass:"navbar navbar-toggleable-md navbar-light bg-faded"},[o("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","aria-label":"Toggle navigation"},on:{click:t.showNav}},[o("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),o("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Simple WebApps")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.navActive,expression:"navActive"}],staticClass:"navbar-collapse"},[t._m(0),t._v(" "),t.authorized?o("button",{staticClass:"fb-color btn btn-sm btn-outline-success col-md-1 logout",on:{click:t.logout}},[t._v("Logout")]):o("button",{staticClass:"fb-color btn btn-sm btn-outline-success col-md-1 login",on:{click:t.login}},[t._v("Login")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"navbar-nav mr-auto"},[o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"https://pjchender.blogspot.com",target:"_blank"}},[t._v("Blog")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("a",{staticClass:"nav-link",attrs:{href:"https://www.facebook.com/pjchender/",target:"_blank"}},[t._v("Facebook")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("h1",[t._v("Current Web Apps Provided")]),t._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/palette"}},[t._v("Palette")])],1)])])},staticRenderFns:[]}},function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-partial"),t._v(" "),n("img",{attrs:{src:o(78)}}),t._v(" "),n("router-view"),t._v(" "),n("alert")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition",{attrs:{name:"flash"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.flash.title,expression:"flash.title"}],staticClass:"flash alert alert-success text-center",attrs:{role:"alert"}},[t._v("\n      "+t._s(t.flash.title)+"\n    ")])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.alert.active,expression:"alert.active"}],staticClass:"modal-container",on:{wheel:function(t){t.stopPropagation(),t.preventDefault()}}},[o("div",{staticClass:"alert-container"},[o("div",{staticClass:"alert-title"},[t._v(" "+t._s(t.alert.title)+" ")]),t._v(" "),o("div",{staticClass:"alert-content"},[t._v(" "+t._s(t.alert.content))]),t._v(" "),o("button",{staticClass:"confirm-button",on:{click:t.confirm}},[t._v("OK")])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Save Whatever Color You Like")]),t._v(" "),o("hr"),t._v(" "),o("div",{staticClass:"enter-color container"},[o("div",{staticClass:"row justify-content-end export-or-save"},[o("button",{class:["btn","col-md-2",{"btn-outline-secondary":!t.colorPalette.length},{"btn-outline-primary":t.colorPalette.length}],attrs:{type:"button"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.exportPalette(e)}}},[t._v(t._s(t.words.view.export))]),t._v(" "),o("button",{class:["btn","col-md-2",{"btn-outline-secondary":!t.localNewerThenSever},{"btn-outline-primary":t.localNewerThenSever}],attrs:{type:"button"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.savePaletteToServer(e)}}},[t._v(t._s(t.words.view.save))])]),t._v(" "),o("div",{staticClass:"color-to-pick row justify-content-md-center align-items-center"},[o("div",{staticClass:"col-md-6"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.pickColor.hexColor,expression:"pickColor.hexColor"}],attrs:{type:"color"},domProps:{value:t.pickColor.hexColor},on:{input:function(e){e.target.composing||(t.pickColor.hexColor=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.pickColor.hexColor,expression:"pickColor.hexColor"}],attrs:{type:"text",placeholder:"#FFFFFF"},domProps:{value:t.pickColor.hexColor},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.enterHandler(e)},input:function(e){e.target.composing||(t.pickColor.hexColor=e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.pickColor.name,expression:"pickColor.name"}],attrs:{type:"text",placeholder:"variable name"},domProps:{value:t.pickColor.name},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.enterHandler(e)},input:[function(e){e.target.composing||(t.pickColor.name=e.target.value)},t.findColor]}})]),t._v(" "),o("div",{staticClass:"col-md-1"},[o("button",{directives:[{name:"show",rawName:"v-show",value:!t.checkSameColor,expression:"!checkSameColor"}],class:["btn",{"btn-outline-secondary":!t.verifyColor},{"btn-outline-primary":t.verifyColor}],attrs:{type:"button"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.addColor(e)}}},[t._v(t._s(t.words.view.save))]),t._v(" "),o("button",{directives:[{name:"show",rawName:"v-show",value:t.checkSameColor,expression:"checkSameColor"}],class:["btn",{"btn-outline-secondary":!t.verifyColor},{"btn-outline-primary":t.verifyColor}],attrs:{type:"button"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.updateColor(e)}}},[t._v(t._s(t.words.view.update))])])])]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.colorPalette.length,expression:"colorPalette.length"}],staticClass:"color-palette container"},[o("ul",t._l(t.colorPalette,function(e){return o("li",{key:e.hexColor,staticClass:"color-block",style:{"background-color":e.hexColor},on:{click:function(o){o.preventDefault(),o.stopPropagation(),t.showColor(e.hexColor,e.name)}}},[o("span",{staticClass:"delete-color",on:{click:function(o){o.preventDefault(),o.stopPropagation(),t.deleteColor(e.hexColor)}}},[t._v("X")])])}))]),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contentToExport,expression:"contentToExport"}],attrs:{hidden:"",id:"contentToExport"},domProps:{value:t.contentToExport},on:{input:function(e){e.target.composing||(t.contentToExport=e.target.value)}}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.hide?t._e():o("h1",[t._v(t._s(t.text))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("c-title",{attrs:{text:t.title,hide:!0}}),t._v(" "),o("p",[t._v(t._s(t.message))])],1)},staticRenderFns:[]}}]),[31]);
//# sourceMappingURL=app.3c1ab19aaf7e23653a9f.js.map