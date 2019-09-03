<template>
	<view class="full">
		<view class="flex margin-top-xl">
			<view class="flex-twice" @click="toFeedback()"><view class="text-white text-sm margin-top-sm suggestion">意见反馈</view></view>
			<view class="flex-treble"><view class="text-white text-xl text-center">审核界面</view></view>
			<view class="flex-twice"></view>
		</view>
		<view class="notes bg-white margin-top-xl">
			<view class="flex justify-center">
				<image class="certificationNotes" src="https://static.mianyangjuan.com//Certification_note@3x.png" mode="aspectFill"></image>
			</view>
			<view class="avatarsAuditNote flex justify-center solid align-center">
				<view class="avatarsAudit flex justify-center align-end" 
				@click="reSubmitAva()"
				:style="{'background':'#FFFFFF', 'background-image': 'url(' + uploadAvatar + ')','background-repeat':'no-repeat','background-size':'cover' }">
					<text class="text-white text-center" style="width: 100%;background:rgba(0,0,0,1);opacity:0.5;">审核中</text>
				</view>
				<view class="avatarsTip text-sm text-gray text-center flex align-center justify-center"><text>上传本人真实清晰\n的照片作为形象照</text></view>
			</view>
			<view class="avatarsAuditNote flex justify-center solid align-center">
				<view class="avatarsAudit flex justify-center align-end"
				@click="reSubmitCer()"
				:style="{'background':'#FFFFFF', 'background-image': 'url(' + uploadCertification + ')','background-repeat':'no-repeat','background-size':'cover' }">
					<text class="text-white text-center" style="width: 100%;background:rgba(0,0,0,1);opacity:0.5;">审核不通过</text>
				</view>
				<view class="avatarsTip text-sm text-gray text-center flex align-center justify-center"><text>上传本人真实清晰\n的照片作为认证照</text></view>
			</view>
			<view class="avatarsAuditNote">
				<text class="text-lg text-black text-left" style="line-height: 100upx;">认证说明:\n</text>
				<text class="text-df text-black text-left" style="line-height: 50upx;">1、头像照片一定要与认证照片为同一人\n2、不可遮挡脸部，照片光线要好</text>
			</view>
			<view class="flex justify-center align-end btn-end">
				<button class="cu-btn round bg-mauve lg padding-xl margin-top-xl" style="width: 500upx;padding: 20upx 20upx 20upx 20upx;" @click="toHeight">提交认证</button>
			</view>
		</view>
	</view>
</template>

<script>
	import common from '../../common/globalVariable.js'
	import {genUpToken} from '../../util/qiniuToken.js'
	import qiniuUploader from '../../util/qiniuUploader.js'
	export default{
		data(){
			return {
				QiniuData:{
					key:'',
					token:''
				},
				uploadAvatar:'https://static.mianyangjuan.com/tmp/wxc80dfbc2926371ac.o6zAJs1ibWiOutd7ivachCLskOGo.6Z1PEDb9ETMY251ead86cae8ade05f11f241c20ac388.jpg',
				uploadCertification:'https://static.mianyangjuan.com/tmp/wxc80dfbc2926371ac.o6zAJs1ibWiOutd7ivachCLskOGo.EyzQpPPReefM6d9d413a81d16018b43ff413a02e389b.jpg'
			}
		},
		onLoad: function (options){
			this.initQiniu();
			this.uploadAvatar=common.uploadAvatar;
			this.uploadCertification=common.uploadCertification;
			// console.log(this.uploadAvatar)
			// console.log(this.uploadCertification)
		},
		methods:{
			toHeight(){
				uni.reLaunch({
					url:'../home/Home',
					success(){
						console.log("success toHome");
					},
					fail(){
						console.log("fail toHome");
					}
				})
			},
			toFeedback(){
				uni.navigateTo({
					url:'Feedback',
					success(){
						console.log("success toFeedback");
					},
					fail(){
						console.log("fail toFeedback");
					},
				})
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
			},
			reSubmitAva(){//头像重新提交
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
							_THAT.uploadAvatar=res.fileUrl;
							common.uploadAvatar=res.fileUrl;
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
			reSubmitCer(){//真人认证重新提交
				var THAT=this;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['camera'], //拍照
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
							_THAT.uploadCertification=res.fileUrl;
							common.uploadCertification=res.fileUrl;
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
			}
		}
	}
</script>

<style scoped>
	.full{
		position: fixed;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		background: linear-gradient(90deg, #6A2BF8, #C90CFF);
	}
	.suggestion{
		margin-left: 20upx;
		letter-spacing:2upx;
	}
	.notes{
		top:90upx;
		right: 25upx;
		left: 25upx;
		bottom: 25upx;
		border-radius: 10upx;
		position: fixed;
		height: 88%;
		width: 93%;
		display: flex;
		flex-direction: column;
	}
	.certificationNotes{
		margin-top: 35upx;
		width: 660upx;
		height: 256upx;
		background: #000000;
	}
	.certificationNotes .text-xl{
		margin-top: 88upx;
	}
	.avatarsAuditNote{
		margin-top: 41upx;
		margin-left: 58upx;
		margin-right:58upx;
	}
	.avatarsAudit{
		width: 180upx;
		height: 180upx;
	}
	.avatarsTip{
		width:414upx;
		height: 180upx;
	}
	.btn-end{
		height: 20%;
		width: 100%;
		margin-bottom: 50upx;
	}
</style>
