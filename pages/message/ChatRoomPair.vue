<template>
	<view class="full">
		<view class="flex justify-center tips">
			<text class="text-black text-xxl text-bold">你们互相喜欢对方</text>
		</view>
		<view class="avatar">
			<view class="avatarContent">
				<view style="width: 100%;height: 100%; border-radius: 50%;" :style="{ 'background-image': 'url(' + url + ')','background-repeat':'no-repeat','background-size':'cover' }"></view>
			</view>
		</view>
		<view class="tipsone">
			还剩{{number}}小时
		</view>
		<view class="tipstwo">
			你们的配对将在{{number}}小时后失效，马上开始聊天吧。
		</view>
		<view class="bottom" v-if="gender=='female'?true:false">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//Voice@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
				<input type="text" value="" placeholder="请输入内容..." placeholder-class="phClass"/>
				<image src="https://static.mianyangjuan.com//Emoticon@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
				<image src="https://static.mianyangjuan.com//send@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				title:'',
				gender:'female',
				number:12,
				url:'',
			}
		},
		onLoad: function (option) {
			this.title=option.title;
			this.url=option.url;
			uni.setNavigationBarTitle({
				 title: this.title
			})
		},
		methods:{
			closePage(){
				uni.navigateBack({
				    delta: 1
				});
			},
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
		background-color: #EEEEEE; 
	}
	.tips{
		position: fixed;
		top:20.67%;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		margin: 0 auto;
		left: 0;
		right: 0;
	}
	.avatar{
		position: fixed;
		top:32%;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		margin: 0 auto;
		left: 0;
		right: 0;
		height: 246upx;
		width: 246upx;
		background-color: #FFFFFF;
		box-sizing: border-box;
		border-radius: 50%;
		padding: 10upx;
		background-image: linear-gradient(top, #0B47E1 0%, #6819EC 33%, #DB17AF 66%, #F02C64 100%);  
	}
	.avatarContent{
		width:100%; 
		height:100%; 
		border-radius:50%;
		background: #FFFFFF;
	}
	.tipsone{
		position: fixed;
		top:55%;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		margin: 0 auto;
		left: 0;
		right: 0;
		height: 3.28%;
		width: 21.36%;
		border-radius: 9999upx;
		background-color: #E7E7E7;
		color: #000000;
		font-size: 22upx;
	}
	.tipstwo{
		position: fixed;
		top:61.12%;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		margin: 0 auto;
		left: 0;
		right: 0;
		height: 2.3%;
		width: 80.51%;
		color: #737373;
		font-size: 28upx;
	}
	.bottom{
		position: fixed;
		width: 100%;
		height: 120upx;
		bottom: 0;
		background-color: #FFFFFF;
	}
	input{
		width: 495upx;
		height: 88upx;
		border-radius: 44upx;
		background-color: #EEEEEE;
		padding-left: 50upx;
		margin: 16upx 0 16upx 14upx;
		font-size: 30upx;
	}
</style>
