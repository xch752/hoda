(global.webpackJsonp=global.webpackJsonp||[]).push([["pagesA/setBasicInfor/Certification"],{151:
/*!*****************************************************************************!*\
  !*** C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/Certification.vue ***!
  \*****************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";e.r(t);var i=e(/*! ./Certification.vue?vue&type=template&id=801edc84&scoped=true& */152),o=e(/*! ./Certification.vue?vue&type=script&lang=js& */154);for(var u in o)"default"!==u&&function(n){e.d(t,n,function(){return o[n]})}(u);e(/*! ./Certification.vue?vue&type=style&index=0&id=801edc84&scoped=true&lang=css& */156);var a=e(/*! ../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */10),r=Object(a.default)(o.default,i.render,i.staticRenderFns,!1,null,"801edc84",null);r.options.__file="hoda/pagesA/setBasicInfor/Certification.vue",t.default=r.exports},152:
/*!************************************************************************************************************************!*\
  !*** C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/Certification.vue?vue&type=template&id=801edc84&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(n,t,e){"use strict";e.r(t);var i=e(/*! -!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./Certification.vue?vue&type=template&id=801edc84&scoped=true& */153);e.d(t,"render",function(){return i.render}),e.d(t,"staticRenderFns",function(){return i.staticRenderFns})},153:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/Certification.vue?vue&type=template&id=801edc84&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */function(n,t,e){"use strict";e.r(t),e.d(t,"render",function(){return i}),e.d(t,"staticRenderFns",function(){return o});var i=function(){var n=this.$createElement;this._self._c},o=[];i._withStripped=!0},154:
/*!******************************************************************************************************!*\
  !*** C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/Certification.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";e.r(t);var i=e(/*! -!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./Certification.vue?vue&type=script&lang=js& */155),o=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);t.default=o.a},155:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/Certification.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e(/*! ../../common/globalVariable.js */21)),o=e(/*! ../../util/qiniuToken.js */112),u=a(e(/*! ../../util/qiniuUploader.js */147));function a(n){return n&&n.__esModule?n:{default:n}}var r={data:function(){return{msg:"下一步",uploadurl:"https://static.mianyangjuan.com//add_image@3x.png",QiniuData:{key:"",token:""}}},onLoad:function(n){this.initQiniu()},onUnload:function(){i.default.uploadCertification=this.uploadurl},methods:{takePicture:function(){var t=this;n.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["camera"],success:function(n){var e=t,i=n.tempFilePaths[0];u.default.upload(i,function(n){e.uploadurl=n.fileUrl,console.log("file url is: "+n.fileUrl)},function(n){console.log("error: "+n)},{region:"SCN",domain:"https://static.mianyangjuan.com/",key:"",uptoken:e.QiniuData.token},function(n){console.log(n)},function(){},function(){},function(n){})},fail:function(n){console.log(JSON.stringify(n))}})},toHeight:function(){"https://static.mianyangjuan.com//add_image@3x.png"!==this.uploadurl?n.reLaunch({url:"Height",success:function(){console.log("success toHeight")},fail:function(){console.log("fail toHeight")}}):n.showToast({title:"请上传真人照片",icon:"none"})},initQiniu:function(){var n,t={},e=Math.round((new Date).getTime()/1e3)+3600;t.scope="bkd-res",t.deadline=e,n=(0,o.genUpToken)("wvew-LTcMBA2tG94lAngLOwayBpNFF4lwkDrX1iM","KQ4vURi-c-LmWaOjPsrkF6Sdeds-SiLvAUenfu2N",t),this.QiniuData.token=n}}};t.default=r}).call(this,e(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */1).default)},156:
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/Certification.vue?vue&type=style&index=0&id=801edc84&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */function(n,t,e){"use strict";e.r(t);var i=e(/*! -!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../HBuilderX.2.2.2.20190816.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./Certification.vue?vue&type=style&index=0&id=801edc84&scoped=true&lang=css& */157),o=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,function(){return i[n]})}(u);t.default=o.a},157:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/xch752/Downloads/hoda/pagesA/setBasicInfor/Certification.vue?vue&type=style&index=0&id=801edc84&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(n,t,e){}},[[150,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pagesA/setBasicInfor/Certification.js.map