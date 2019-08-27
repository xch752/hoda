<template>
	<view class="full">
		<view class="bottom">
			<view class="flex justify-start">
				<image src="../../static/img/Voice@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
				<input type="text" value="" placeholder="请输入内容..." placeholder-class="phClass"/>
				<image src="../../static/img/Emoticon@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
				<image src="../../static/img/send@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				title:''
			}
		},
		onLoad: function (option) {
			this.title=option.title;
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
	.header{
		position: fixed;
		top: 0;
		height: 128upx;
		width: 100%;
		background: #6A2BF8;
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
	}
</style>
