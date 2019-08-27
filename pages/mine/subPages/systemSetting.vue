<template>
	<view class="full">
		<view class="item flex padding justify-between align-center solid-bottom">
			<view class="flex justify-start">
				<view class="text-black text-lg padding-left-lg">
					修改密码
				</view>
			</view>
			<view><image src="https://static.mianyangjuan.com//right_arrow@3x.png" mode="aspectFit" style="width: 26upx;height: 26upx;"></image></view>
		</view>
		<view class="item flex padding justify-between align-center solid-bottom">
			<view class="flex justify-start">
				<view class="text-black text-lg padding-left-lg">
					意见反馈
				</view>
			</view>
			<view><image src="https://static.mianyangjuan.com//right_arrow@3x.png" mode="aspectFit" style="width: 26upx;height: 26upx;"></image></view>
		</view>
		<view class="footer flex justify-center">
			<button class="cu-btn round bg-mauve lg" style="width: 560upx;padding: 20upx 0 20upx 0;" @click="toLogin">退出登录</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		onLoad() {
			
		},
		methods:{
			toLogin(){
				uni.reLaunch({
					url:'../../login/login',
					success() {
						console.log("success toLogin");
					},
					fail(){
						console.log("fail toLogin");
					}
				})
			}
		}
	}
</script>

<style scoped>
	#full{
		position: fixed;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		background: linear-gradient(90deg, #6A2BF8, #C90CFF);
	}
	.footer{
		width: 750upx;
		height:100upx;
		position:fixed; 
		bottom:0;
	}
</style>
