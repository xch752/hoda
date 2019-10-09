<!-- 反馈列表 -->
<template>
	<view class="full">
		<!-- 表单 -->
		<view class="flex justify-start" style="margin: 42upx 50upx 0 50upx;">
			<text class="text-black">为了方便我们联系您，请留下您的联系方式</text>
		</view>
		<view class="flex justify-center" style="margin: 29upx 50upx 0 50upx;">
			<input type="text" value="" 
			class="text-xl padding-sm"
			style="width: 100%;height: 88upx;background-color: #F4F5F9;" 
			v-model="contact"/>
		</view>
		<!-- 表单 -->
		<view class="flex justify-start" style="margin: 40upx 50upx 0 50upx;">
			<text class="text-black text-sm">请详细描述您遇到的问题</text>
		</view>
		<view class="flex justify-start" style="margin: 29upx 50upx 0 50upx;">
			<textarea maxlength="-1"  
			class="text-xl padding"
			style="width: 100%;height: 454upx;background-color: #F4F5F9;"
			v-model="feedbackValue"></textarea>
		</view>
		<view class="flex justify-start" style="margin: 42upx 50upx 0 50upx;">
			<text class="text-black">您也可以联系我们的邮箱：hodating@gmail.com</text>
		</view>
		<!-- 图片提交 -->
		<view class="flex justify-start" style="margin-left: 50upx;margin-top: 36upx;">
			<view v-for="(item,index) in uploadAvatarUrl" :key="index"
			class="flex justify-center align-center" style="width: 150upx;height: 150upx;margin-right: 25upx;background: #F4F5F9;border-radius: 10upx;">
				<image :src="item" mode="aspectFill" style="width: 150upx;height: 150upx;"></image>
			</view>
			<view @click="takePicture()" 
			v-if="uploadAvatarUrl.length==3?false:true"
			class="flex justify-center align-center" style="width: 150upx;height: 150upx;margin-right: 25upx;background: #F4F5F9;border-radius: 10upx;">
				<image src="https://static.mianyangjuan.com//add_image@3x.png" mode="aspectFill" style="width: 45upx;height: 45upx;"></image>
			</view>
		</view>
		<!-- 提交 -->
		<view class="flex justify-center">
			<button @click="feedback()" class="cu-btn round bg-mauve lg padding-xl margin-top-xl" style="width: 560upx;padding: 20upx 0 20upx 0;">提交</button>
		</view>
		
	</view>
</template>

<script>
	import common from '../../common/globalVariable.js'
	import Request from '../../util/luch-request/request.js'
	import {genUpToken} from '../../util/qiniuToken.js'
	import qiniuUploader from '../../util/qiniuUploader.js'
	export default{
		data(){
			return{
				contact:'',//联系方式
				feedbackValue:'',//反馈内容
				version:'',
				brand:'',
				QiniuData:{
					key:'',
					token:''
				},
				uploadAvatarUrl:[],
				suggestionUrl:''
			}
		},
		onLoad:function(){
			var THAT = this;
			uni.getSystemInfo({
				success: (res) => {
					console.log(res);
					THAT.version = res.version;
					THAT.brand = res.brand;
				}
			})
			this.initQiniu();
		},
		methods:{
			//反馈提交
			feedback(){
				var THAT = this;
				if(THAT.uploadAvatarUrl.length!=0){
					THAT.suggestionUrl = THAT.uploadAvatarUrl.join();
					console.log(THAT.suggestionUrl)
				}
				if(!THAT.contact){
					uni.showToast({
						title:'请输入联系方式',
						icon:'none'
					})
				}else if(!THAT.feedbackValue){
					uni.showToast({
						title:'请输入反馈内容',
						icon:'none'
					})
				}else{
					const http = new Request();
					let params={
						userId:common.userId,
						suggestionDesc:THAT.feedbackValue,
						email:THAT.contact,
						equipment:THAT.brand,
						appVersion:'1.0.0',
						version:THAT.version,
						suggestUrl:THAT.suggestionUrl
					}
					http.post('/suggestion', {},{
						params:params,
						header: {
						  'Content-Type': 'application/json;charset=UTF-8'
						},
						dataType: 'json',
						responseType: 'text'
					}).then(res => {
						console.log(params);
						console.log(res)
						THAT.clearValue();
						uni.showModal({
							title:'提示',
							content:'提交成功',
							showCancel:false,
							success: () => {
								uni.navigateBack({
									delta:1
								})
							}
						})
					})
				}
			},
			//清空
			clearValue(){
				this.contact = '';
				this.feedbackValue = '';
			},
			//拍照
			takePicture(){
				var THAT=this;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //相册
				    success: function (res) {
						// 本地路径设置
						// THAT.uploadAvatarUrl=res.tempFilePaths[0], 
						// console.log(THAT.uploadAvatarUrl);
						
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
							_THAT.uploadAvatarUrl.push(res.fileUrl);
							console.log('file url is: ' + res.fileUrl);
						}, (error) => {
							console.log('error: ' + error);
						}, {
						  region: 'SCN',
						  domain: 'https://static.mianyangjuan.com/', // // bucket 域名，下载资源时用到。如果设置，会在 success callback 的 res 参数加上可以直接使用的 ImageURL 字段。否则需要自己拼接
						  key: 'wechat/'+(new Date()).valueOf(), // [非必须]自定义文件 key。如果不设置，默认为使用微信小程序 API 的临时文件名
						  // 以下方法三选一即可，优先级为：uptoken > uptokenURL > uptokenFunc
						  uptoken: _THAT.QiniuData.token, // 由其他程序生成七牛 uptoken
						}, (res) => {
							console.log(res);
							if(res.progress!==100){
								uni.showToast({
									title:`上传中，已上传${res.progress}`,
									icon:'loading'
								})
							}else if(res.progress===100){
								uni.showToast({
									title:`上传完成`,
									icon:'success'
								})
							}
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
			//初始化七牛
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
</style>
