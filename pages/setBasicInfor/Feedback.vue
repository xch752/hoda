<template>
	<view class="full">
		<view class="flex justify-start" style="margin: 42upx 50upx 0 50upx;">
			<text class="text-black">为了方便我们联系您，请留下您的联系方式</text>
		</view>
		<view class="flex justify-center" style="margin: 29upx 50upx 0 50upx;">
			<input type="text" value="" 
			class="text-xl padding-sm"
			style="width: 100%;height: 88upx;background-color: #F4F5F9;" 
			v-model="contact"/>
		</view>
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
		<view class="flex justify-center">
			<button class="cu-btn round bg-mauve lg padding-xl margin-top-xl" style="width: 560upx;padding: 20upx 0 20upx 0;">提交</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				contact:'',//联系方式
				feedbackValue:'',//反馈内容
			}
		},
		onLoad:function(){
			
		},
		methods:{
			
		}
	}
</script>

<style scoped>
</style>
