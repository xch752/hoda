(global.webpackJsonp=global.webpackJsonp||[]).push([["pagesA/setBasicInfor/NickName"],{107:
/*!************************************************************************!*\
  !*** C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/NickName.vue ***!
  \************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var o=e(/*! ./NickName.vue?vue&type=template&id=66866d3a&scoped=true& */108),i=e(/*! ./NickName.vue?vue&type=script&lang=js& */110);for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e(/*! ./NickName.vue?vue&type=style&index=0&id=66866d3a&scoped=true&lang=css& */148);var c=e(/*! ../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),s=Object(c.default)(i.default,o.render,o.staticRenderFns,!1,null,"66866d3a",null);s.options.__file="hoda/pagesA/setBasicInfor/NickName.vue",n.default=s.exports},108:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/NickName.vue?vue&type=template&id=66866d3a&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,n,e){"use strict";e.r(n);var o=e(/*! -!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./NickName.vue?vue&type=template&id=66866d3a&scoped=true& */109);e.d(n,"render",function(){return o.render}),e.d(n,"staticRenderFns",function(){return o.staticRenderFns})},109:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/NickName.vue?vue&type=template&id=66866d3a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(t,n,e){"use strict";e.r(n),e.d(n,"render",function(){return o}),e.d(n,"staticRenderFns",function(){return i});var o=function(){var t=this.$createElement;this._self._c},i=[];o._withStripped=!0},110:
/*!*************************************************************************************************!*\
  !*** C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/NickName.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var o=e(/*! -!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./NickName.vue?vue&type=script&lang=js& */111),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n.default=i.a},111:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/NickName.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=s(e(/*! ../../common/globalVariable.js */21)),i=e(/*! ../../util/qiniuToken.js */112),a=s(e(/*! ../../util/qiniuUploader.js */147)),c=s(e(/*! ../../util/luch-request/request.js */17));function s(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{nickName:"",date:"",uploadAvatarUrl:"https://static.mianyangjuan.com//Upload_Avatar@3x.png",QiniuData:{key:"",token:""}}},onLoad:function(t){this.initQiniu()},onHide:function(){o.default.uploadAvatar=this.uploadAvatarUrl},methods:{toCertiFicationNotes:function(){if("https://static.mianyangjuan.com//Upload_Avatar@3x.png"===this.uploadAvatarUrl)t.showToast({title:"请选择头像",icon:"none"});else if(this.nickName)if(this.date){var n=this,e=new c.default,i={id:o.default.id,icon:n.uploadAvatarUrl,userName:n.nickName,age:n.date,sex:o.default.sex};e.post("/icon",{},{params:i,header:{"Content-Type":"application/json;charset=UTF-8"},dataType:"json",responseType:"text"}).then(function(t){console.log(t)}).catch(function(t){console.log(t)}),t.navigateTo({url:"CertifiCationNotes",success:function(){console.log("success toCertificationNotes"),console.log("昵称:".concat(n.nickName," 年龄:").concat(n.date))},fail:function(){console.log("fail toCertification")}})}else t.showToast({title:"请选择年龄",icon:"none"});else t.showToast({title:"请输入昵称",icon:"none"})},toCertiFication:function(){if("https://static.mianyangjuan.com//Upload_Avatar@3x.png"===this.uploadAvatarUrl)t.showToast({title:"请选择头像",icon:"none"});else if(this.nickName)if(this.date){var n=this;t.navigateTo({url:"Certification",success:function(){console.log("success toCertification"),console.log("昵称:".concat(n.nickName," 年龄:").concat(n.date))},fail:function(){console.log("fail toCertification")}})}else t.showToast({title:"请选择年龄",icon:"none"});else t.showToast({title:"请输入昵称",icon:"none"})},takePicture:function(){var n=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){var o=n,i=e.tempFilePaths[0];a.default.upload(i,function(t){o.uploadAvatarUrl=t.fileUrl,console.log("file url is: "+t.fileUrl)},function(t){console.log("error: "+t)},{region:"SCN",domain:"https://static.mianyangjuan.com/",key:"",uptoken:o.QiniuData.token},function(n){console.log(n),100!==n.progress?t.showToast({title:"上传中，已上传".concat(n.progress),icon:"loading"}):100===n.progress&&t.showToast({title:"上传完成",icon:"success"})},function(){},function(){},function(t){})},fail:function(t){console.log(JSON.stringify(t))}})},DateChange:function(t){this.date=t.detail.value},initQiniu:function(){var t,n={},e=Math.round((new Date).getTime()/1e3)+3600;n.scope="bkd-res",n.deadline=e,t=(0,i.genUpToken)("wvew-LTcMBA2tG94lAngLOwayBpNFF4lwkDrX1iM","KQ4vURi-c-LmWaOjPsrkF6Sdeds-SiLvAUenfu2N",n),this.QiniuData.token=t}}};n.default=r}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},148:
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/NickName.vue?vue&type=style&index=0&id=66866d3a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */function(t,n,e){"use strict";e.r(n);var o=e(/*! -!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./NickName.vue?vue&type=style&index=0&id=66866d3a&scoped=true&lang=css& */149),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n.default=i.a},149:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/NickName.vue?vue&type=style&index=0&id=66866d3a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(t,n,e){}},[[106,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesA/setBasicInfor/NickName.js.map