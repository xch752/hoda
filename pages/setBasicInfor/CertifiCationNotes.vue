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
				<image class="avatarsAudit" :src="uploadAvatar" mode="aspectFill"></image>
				<view class="avatarsTip text-sm text-gray text-center flex align-center justify-center"><text>上传本人真实清晰\n的照片作为形象照</text></view>
			</view>
			<view class="avatarsAuditNote flex justify-center solid align-center">
				<image class="avatarsAudit" :src="uploadCertification" mode="aspectFill"></image>
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
	export default{
		data(){
			return {
				uploadAvatar:'',
				uploadCertification:''
			}
		},
		onLoad: function (options){
			this.uploadAvatar=common.uploadAvatar;
			this.uploadCertification=common.uploadCertification;
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
					}
				})
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
