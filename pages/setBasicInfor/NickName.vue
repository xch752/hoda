<template>
	<view class="full">
		<view class="justify-center radius text-center tip">
			<text class="text-center class">昵称和年龄都不可更改，请务必认真填写</text>
		</view>
		
		<view class="flex padding justify-center">
			<image :src="uploadAvatarUrl" mode="aspectFill" style="width: 220upx;height: 220upx;border-radius: 220upx;" @click="takePicture"></image>
		 </view>
		 
		 <view class="flex content justify-center">
		 	<view class="cu-form-group" style="padding:30upx 0 30upx 0;">
		 		<input class="align-center text-center"
				 placeholder="请填写您的昵称,限制10字"
				 name="input" 
				 style="text-align: center;font-size: 35upx;"
				 v-model="nickName"></input>
		 	</view>
		 	<!-- <view class="cu-form-group solid-bottom" style="padding: 30upx 0 30upx 0;">
		 		<input class="align-center text-center" placeholder="请选择您的年龄" name="input"></input>
		 	</view> -->
			<view class="flex justify-center cu-form-group solid-bottom" style="padding: 30upx 0 30upx 0;">
				<picker class="flex justify-center text-center" mode="date" :value="date" start="1950-09-01" end="2020-09-01" style="width:100upx" @change="DateChange">
					<input class="picker"
					 placeholder="请选择您的年龄" 
					 name="input" 
					 v-model="date" 
					 disabled="true"
					 style="text-align: center;font-size: 35upx;"></input>
				</picker>
			</view>
		 	<button 
			class="cu-btn round bg-mauve lg padding-xl margin-top-xl" 
			style="width: 520upx;height:98upx;padding: 20upx 0 20upx 0;"
			@click="toCertiFication">
			下一步
			</button>
		 </view>	
	</view>
</template>

<script>
	import common from '../../common/globalVariable.js'
	import {genUpToken} from '../../util/qiniuToken.js'
	import qiniuUploader from '../../util/qiniuUploader.js'
	export default {
		data(){
			return{
				nickName:'',//昵称
				date: '',//年龄 出生日期
				// gender:''
				uploadAvatarUrl:'https://static.mianyangjuan.com//Upload_Avatar@3x.png',
				QiniuData:{
					key:'',
					token:''
				}
			}
		},
		onLoad: function (options){
			// this.gender=options.gender;
			// console.log(this.gender);
			this.initQiniu();
		},
		onHide:function(){
			common.uploadAvatar=this.uploadAvatarUrl
		},
		methods:{
			toCertiFication(){
				if(this.uploadAvatarUrl==='https://static.mianyangjuan.com//Upload_Avatar@3x.png'){
					uni.showToast({
						title:"请选择头像",
						icon:"none"
					})
				}
				else if(!this.nickName){
					uni.showToast({
						title:"请输入昵称",
						icon:"none"
					})
				}
				else if(!this.date){
					uni.showToast({
						title:"请选择年龄",
						icon:"none"
					})
				}
				else{
					var THAT = this;
					uni.navigateTo({
						url:'Certification',
						success() {
							console.log("success toCertification");
							console.log(`昵称:${THAT.nickName} 年龄:${THAT.date}`)
						},
						fail(){
							console.log("fail toCertification");
						}
					})
				}
				
			},
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
							_THAT.uploadAvatarUrl=res.fileUrl;
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
			DateChange(e) {
				this.date = e.detail.value
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
		},
	}
</script>

<style scoped>
	picker{
		padding-right:0;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
