<template>
	<view class="full">
		<view class="item flex padding justify-between align-center" @click="toAccount('Facebook')">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//Facebook_lg_@3x.png" mode="aspectFill" style="width: 46upx;height: 46upx;"></image>
				<view class="text-black text-lg text-bold padding-left-lg">
					Facebook
				</view>
			</view>
			<view><image src="https://static.mianyangjuan.com//right_arrow@3x.png" mode="aspectFit" style="width: 26upx;height: 26upx;"></image></view>
		</view>
		
		<view class="item flex padding justify-between align-center" @click="toAccount('Twitter')">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//Twitter_lg_@3x.png" mode="aspectFill" style="width: 46upx;height: 46upx;"></image>
				<view class="text-black text-lg text-bold padding-left-lg">
					Twitter
				</view>
			</view>
			<view><image src="https://static.mianyangjuan.com//right_arrow@3x.png" mode="aspectFit" style="width: 26upx;height: 26upx;"></image></view>
		</view>
		
		<view class="item flex padding justify-between align-center" @click="toAccount('Instagram')">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//Instagram_lg_@3x.png" mode="aspectFill" style="width: 46upx;height: 46upx;"></image>
				<view class="text-black text-lg text-bold padding-left-lg">
					Instagram
				</view>
			</view>
			<view><image src="https://static.mianyangjuan.com//right_arrow@3x.png" mode="aspectFit" style="width: 26upx;height: 26upx;"></image></view>
		</view>
		
		<view class="item flex padding justify-between align-center" @click="toAccount('Line')">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//Line_sm@3x.png" mode="aspectFill" style="width: 46upx;height: 46upx;"></image>
				<view class="text-black text-lg text-bold padding-left-lg">
					Line
				</view>
			</view>
			<view><image src="https://static.mianyangjuan.com//right_arrow@3x.png" mode="aspectFit" style="width: 26upx;height: 26upx;"></image></view>
		</view>
		
		<view class="item flex padding justify-between align-center" @click="toAccount('WeChat')">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//WeChat_lg_@3x.png" mode="aspectFill" style="width: 46upx;height: 46upx;"></image>
				<view class="text-black text-lg text-bold padding-left-lg">
					WeChat
				</view>
			</view>
			<view><image src="https://static.mianyangjuan.com//right_arrow@3x.png" mode="aspectFit" style="width: 26upx;height: 26upx;"></image></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		onLoad: function (option) {
			
		},
		methods:{
			toAccount(title){
				uni.navigateTo({
					url:'account/Account?title='+title,
					success() {
						console.log(`success toAccount ${title}`);
					},
					fail() {
						console.log(`fail toAccount ${title}`);
					}
				})
			}
		}
	}
</script>

<style scoped>
	.full{
		line-height: 50upx;
	}
</style>
