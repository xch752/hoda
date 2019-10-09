<!-- 收入 -->
<template>
	<view class="full">
		<view class="flex padding justify-center">
			<view class="text-black text-bold text-xl">您的年收入是?</view>
		</view>
		
		<view class="flex solid-bottom padding justify-between" v-for="(incomeItem,index) in incomeType" :key="index" @click="incomeCheck(incomeItem.id)">
			<view class="text-lg">{{incomeItem.value}}</view>
			<view v-if="incomeCheckValue==incomeItem.id"><image src="https://static.mianyangjuan.com//commit@3x.png" mode="aspectFit" style="width: 32upx;height: 23upx;"></image></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				menuArrow:false,
				incomeCheckValue:-1,
				incomeType:[
					{
						id:0,
						value:'10万以内',
					},
					{
						id:1,
						value:'11-20万',
					},
					{
						id:2,
						value:'21-50万',
					},
					{
						id:3,
						value:'51-100万',
					},
					{
						id:4,
						value:'101-200万',
					},
				]
			}
		},
		onLoad(){
			
		},
		methods:{
			incomeCheck(id){
				this.incomeCheckValue=id;
				setTimeout(function(){
					uni.navigateTo({
						url:'EmotionalState',
						success() {
							console.log("success toEmotionalState");
						},
						fail(){
							console.log("fail toEmotionalState");
						}
					})
					},1000)
				console.log(this.incomeCheckValue)
			}
		}
	}
</script>

<style scoped>
	.text-bold{
		margin-top: 80upx;
		margin-bottom: 70upx;
	}
	.justify-between{
		padding-left: 50upx;
		padding-right: 50upx;
	}
</style>
