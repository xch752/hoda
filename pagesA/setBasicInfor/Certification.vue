<template>
	<view class="full">
		<view class="justify-center radius text-center tip">
			<text class="text-center class text-df">Hoda是一个100%真人的社交平台\n</text>
			<text class="text-center class text-bold text-xl">所有人都需要经过真人认证</text>
		</view>
		
		<view class="flex justify-center align-center" 
		style="margin-left: 112upx;width: 526upx;height: 742upx;border:#6A2BF8 solid;border-radius: 20upx;">
			<image class="radius" :src="uploadurl" mode="aspectFill" 
			:class="(uploadurl=='https://static.mianyangjuan.com//add_image@3x.png')?'bg-add':'bg-pic'"
			@click="takePicture">	
			</image>
		</view>
		
		<view class="content">
			<button class="cu-btn round bg-mauve lg padding-xl margin-top-xl" style="width: 520upx;height: 98upx;padding: 20upx 0 20upx 0;"
			@click="toHeight">
			{{msg}}
			</button>
		</view>
		
	</view>
</template>

<script>
	import common from '../../common/globalVariable.js'
	// import {genUpToken} from '../../util/qiniuToken.js'
	// import qiniuUploader from '../../util/qiniuUploader.js'
	export default {
		data(){
			return {
				msg:'下一步',
				uploadurl:'https://static.mianyangjuan.com//add_image@3x.png',
				QiniuData:{
					key:'',
					token:''
				}
			}
		},
		onLoad: function (options){
			this.initQiniu();
		},
		onUnload:function(){
			common.uploadCertification=this.uploadurl;

		},
		methods:{
			takePicture(){
				var THAT=this;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['camera'], //拍照
				    success: function (res) {
						// 设置本地路径
						// THAT.uploadurl=res.tempFilePaths[0]
						// console.log(THAT.uploadurl);
						
						//上传七牛
						var _THAT = THAT;
						var filePath = res.tempFilePaths[0];
						// 交给七牛上传
						qiniuUploader.upload(filePath, (res) => {
						  // 每个文件上传成功后,处理相关的事情
						  // 其中 info 是文件上传成功后，服务端返回的json，形式如
						  // {
						  //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
						  //    "key": "gogopher.jpg"
						  //  }
						  // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html
							_THAT.uploadurl=res.fileUrl;
							console.log('file url is: ' + res.fileUrl);
						}, (error) => {
							console.log('error: ' + error);
						}, {
						  region: 'SCN',
						  domain: 'https://static.mianyangjuan.com/', // // bucket 域名，下载资源时用到。如果设置，会在 success callback 的 res 参数加上可以直接使用的 ImageURL 字段。否则需要自己拼接
						  key: '', // [非必须]自定义文件 key。如果不设置，默认为使用微信小程序 API 的临时文件名
						  // 以下方法三选一即可，优先级为：uptoken > uptokenURL > uptokenFunc
						  uptoken: _THAT.QiniuData.token, // 由其他程序生成七牛 uptoken
						}, (res) => {
							console.log(res);
							// console.log('上传进度', res.progress)
							// console.log('已经上传的数据长度', res.totalBytesSent)
							// console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
						}, () => {
						  // 取消上传
						}, () => {
						  // `before` 上传前执行的操作
						}, (err) => {
						  // `complete` 上传接受后执行的操作(无论成功还是失败都执行)
						});
				    },
					fail: function(err){
						console.log(JSON.stringify(err));
					}
				});				
			},
			toHeight(){
				if(!(this.uploadurl==='https://static.mianyangjuan.com//add_image@3x.png')){
					uni.reLaunch({
						url:'Height',
						success() {
							console.log("success toHeight");
						},
						fail(){
							console.log("fail toHeight");
						}
					})
				}
				else{
					uni.showToast({
						title:"请上传真人照片",
						icon:"none"
					})
				}
				
			},
			initQiniu(){
				var token;
				var policy = {};
				var bucketName = 'bkd-res';
				var AK ='wvew-LTcMBA2tG94lAngLOwayBpNFF4lwkDrX1iM';
				var SK = 'KQ4vURi-c-LmWaOjPsrkF6Sdeds-SiLvAUenfu2N';
				var deadline = Math.round(new Date().getTime()/1000) + 3600;
				policy.scope = bucketName;
				policy.deadline = deadline;
				token=genUpToken(AK,SK,policy);
				this.QiniuData.token=token;
			}
		}
	}
</script>

<style scoped>
	.text-xl{
		letter-spacing:5upx
	}
	/* .full{
		top:0;
		position: fixed;
		height: 100%;
		width: 100%;
		display:flex;
		flex-direction:column;
		background-color: #ffffff;
		margin: 0;
	} */
	/* .tip{
		margin-top:25upx;
	} */
	.radius{
		border-radius: 20upx;
	}
	.bg-add{
		height: 100upx;
		width: 100upx;
	}
	.bg-pic{
		width: 526upx;
		height: 742upx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
