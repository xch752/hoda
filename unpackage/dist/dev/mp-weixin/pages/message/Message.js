(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/message/Message"],{35:
/*!****************************************************************!*\
  !*** C:/Users/xch752/Downloads/hoda/pages/message/Message.vue ***!
  \****************************************************************/
/*! no static exports found */function(t,e,a){"use strict";a.r(e);var o=a(/*! ./Message.vue?vue&type=template&id=432f65d2&scoped=true& */36),n=a(/*! ./Message.vue?vue&type=script&lang=js& */38);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);a(/*! ./Message.vue?vue&type=style&index=0&id=432f65d2&scoped=true&lang=css& */40);var c=a(/*! ../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),i=Object(c.default)(n.default,o.render,o.staticRenderFns,!1,null,"432f65d2",null);i.options.__file="hoda/pages/message/Message.vue",e.default=i.exports},36:
/*!***********************************************************************************************************!*\
  !*** C:/Users/xch752/Downloads/hoda/pages/message/Message.vue?vue&type=template&id=432f65d2&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,a){"use strict";a.r(e);var o=a(/*! -!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./Message.vue?vue&type=template&id=432f65d2&scoped=true& */37);a.d(e,"render",function(){return o.render}),a.d(e,"staticRenderFns",function(){return o.staticRenderFns})},37:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/xch752/Downloads/hoda/pages/message/Message.vue?vue&type=template&id=432f65d2&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,e,a){"use strict";a.r(e),a.d(e,"render",function(){return o}),a.d(e,"staticRenderFns",function(){return n});var o=function(){var t=this.$createElement;this._self._c},n=[];o._withStripped=!0},38:
/*!*****************************************************************************************!*\
  !*** C:/Users/xch752/Downloads/hoda/pages/message/Message.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! no static exports found */function(t,e,a){"use strict";a.r(e);var o=a(/*! -!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./Message.vue?vue&type=script&lang=js& */39),n=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);e.default=n.a},39:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/xch752/Downloads/hoda/pages/message/Message.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(a(/*! ../../util/luch-request/request.js */17)),n=s(a(/*! ../../common/globalVariable.js */21));function s(t){return t&&t.__esModule?t:{default:t}}var c={data:function(){return{flag:"",userList:[],msgs:[],chatFlag:!1,isMember:"",checkValue:"message",matchUserList:[],isChatRecord:!0,chatList:[{}],modalName:null,listTouchStartX:0,listTouchStartY:0,listTouchDirection:null,showScrollbar:!0,likeUserList:[]}},onLoad:function(t){this.checkValue="message",console.log("onLoad ".concat(this.checkValue)),this.isMember=n.default.isMember},updated:function(){},onReady:function(){console.log("onReady")},onUnload:function(){t.setStorage({key:"messageCheckValue",data:"message"}),console.log("onUnload ".concat(this.checkValue)),clearInterval(this.flag)},onShow:function(e){var a=this;this.getPairList(),this.getLikeList(),t.getStorage({key:"messageCheckValue",success:function(t){a.checkValue=t.data,console.log("onShow ".concat(a.checkValue))}}),n.default.chatList.map(function(t,e){n.default.nim.getUser({account:t.id.substr(4),done:function(t,a){console.log(a),n.default.chatList[e].avatar=JSON.parse(JSON.stringify(a.avatar)),n.default.chatList[e].nick=JSON.parse(JSON.stringify(a.nick))}})}),setTimeout(function(){a.chatList!=n.default.chatList&&(a.chatList=[].concat(JSON.parse(JSON.stringify(n.default.chatList))))},200),a.flag=setInterval(function(){n.default.chatList.map(function(t,e){n.default.nim.getUser({account:t.id.substr(4),done:function(t,a){n.default.chatList[e].avatar=JSON.parse(JSON.stringify(a.avatar)),n.default.chatList[e].nick=JSON.parse(JSON.stringify(a.nick))}})}),0==n.default.chatList.length?a.isChatRecord=!1:a.isChatRecord=!0,setTimeout(function(){a.chatList!=n.default.chatList&&(a.chatList=[].concat(JSON.parse(JSON.stringify(n.default.chatList))))},200)},2e3)},onHide:function(){clearInterval(this.flag)},methods:{toAllPair:function(){t.navigateTo({url:"AllPair",success:function(){console.log("success toAllPair")},fail:function(){console.log("fail toAllPair")}})},toChatRoom:function(e,a,o,s){n.default.chatList.map(function(t,e){t.to==a&&(t.unread=0)}),t.navigateTo({url:"ChatRoom?second=".concat(s,"&fromNick=").concat(e,"&userId=").concat(a,"&avatar=").concat(o),success:function(){console.log("success toChatRoom")},fail:function(){console.log("fail toChatRoom")}})},checkValueChange:function(){"message"===this.checkValue?(t.setStorage({key:"messageCheckValue",data:"like"}),this.checkValue="like"):"like"===this.checkValue&&(t.setStorage({key:"messageCheckValue",data:"message"}),this.checkValue="message")},toChatRoomPair:function(e,a){t.navigateTo({url:"ChatRoomPair?userId=".concat(e,"&second=").concat(a),success:function(){console.log("success toChatRoomPair")},fail:function(){console.log("fail toChatRoomPair")}})},ListTouchStart:function(t){this.listTouchStartX=t.touches[0].pageX,this.listTouchStartY=t.touches[0].pageY},ListTouchMove:function(t){t.touches[0].pageX-this.listTouchStartX>80&&Math.abs(t.touches[0].pageY-this.listTouchStartY)<80?this.listTouchDirection="right":t.touches[0].pageX-this.listTouchStartX<-80&&Math.abs(t.touches[0].pageY-this.listTouchStartY)<80&&(this.listTouchDirection="left")},ListTouchEnd:function(t){"left"==this.listTouchDirection?this.modalName=t.currentTarget.dataset.target:this.modalName=null,this.listTouchDirection=null},deleteChatListItem:function(t){this.chatList[t].show=!1},toCheckPeople:function(e){t.navigateTo({url:"CheckPeople?id="+e,success:function(){console.log("success toCheckPeople")},fail:function(t){console.log(t)}})},getPairList:function(){var t=this,e=new o.default,a={params:{likeUid:n.default.userId,pageNum:1,pageSize:20}};e.get("/pairList",a).then(function(e){console.log(a),console.log(e),t.matchUserList=e.data.result.list}).catch(function(t){console.log(t)})},timeStamp:function(t){var e=parseInt(t)+"秒";if(parseInt(t)>60){var a=parseInt(t)%60,o=parseInt(t/60);if(e=o+"分"+a+"秒",o>60){o=parseInt(t/60)%60;var n=parseInt(parseInt(t/60)/60);if(e=n+"小时"+o+"分"+a+"秒",n>24)n=parseInt(parseInt(t/60)/60)%24,e=parseInt(parseInt(parseInt(t/60)/60)/24)+"天"+n+"小时"+o+"分"+a+"秒"}}return e},getLikeList:function(){var t=this,e=new o.default,a={params:{id:n.default.userId,pageNum:1,pageSize:20}};e.get("/likeList",a).then(function(e){console.log(e);var a=new Date,o={};e.data.result.map(function(t,e){a.setTime(1e3*t.createTime),t.createTime=a.toLocaleDateString(),o[t.createTime]=o[t.createTime]||[],o[t.createTime].push(t)});var n=[];Object.keys(o).map(function(t){n.push(o[t])}),console.log(n),t.likeUserList=n}).catch(function(t){console.log(t)})},toDownloadAPP:function(){t.navigateTo({url:"../../pagesB/DownloadApp",success:function(t){console.log("success to DownloadApp",t)},fail:function(t){console.log("fail to DownloadApp",t)}})}}};e.default=c}).call(this,a(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},40:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/xch752/Downloads/hoda/pages/message/Message.vue?vue&type=style&index=0&id=432f65d2&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */function(t,e,a){"use strict";a.r(e);var o=a(/*! -!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./Message.vue?vue&type=style&index=0&id=432f65d2&scoped=true&lang=css& */41),n=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);e.default=n.a},41:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/xch752/Downloads/hoda/pages/message/Message.vue?vue&type=style&index=0&id=432f65d2&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,e,a){}},[[34,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/message/Message.js.map