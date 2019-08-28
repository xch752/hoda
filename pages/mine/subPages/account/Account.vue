<template>
	<view class="full">
		<view class="flex justify-center" style="margin: 85upx 0 65upx 0;">
			<text class="text-gray text-df">请输入您的{{title}}账号</text>
		</view>
		<view class="flex justify-center text-center">
			<input class="solid-bottom" type="text" :placeholder="'您的'+title+'账号'" v-model="account" />
		</view>
		<view class="flex justify-center">
			<button class="cu-btn round bg-mauve lg padding-xl margin-top-xl" style="width: 560upx;padding: 20upx 0 20upx 0;">确定</button>
		</view>
		<view class="flex justify-center text-center margin-top-sm">
			<text class="text-gray text-sm" style="line-height: 50upx;">若您填写该账号,与您匹配的会员用户可查看账号信息。\n若您需要关闭,下载我们的APP进行关闭显示设置。</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				title:'',
				account:'',
			}
		},
		onLoad: function (option) {
			console.log(option)
			this.title=option.title;
			console.log(this.title)
			console.log(option.title)
			uni.setNavigationBarTitle({
				 title: `添加${this.title}`
			})
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	input{
		font-size: 29upx;
	}
</style>
