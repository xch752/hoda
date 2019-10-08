<template>
	<view class="full">
		<view class="flex padding justify-center">
			<view class="text-black text-bold text-xl">您的身材是?</view>
		</view>
		
		<view class="flex solid-bottom padding justify-between" v-for="(figureItem,index) in figureType" :key="index" @click="figureCheck(figureItem.id)">
			<view class="text-lg">{{figureItem.value}}</view>
			<view v-if="figureCheckValue==figureItem.id"><image src="https://static.mianyangjuan.com//commit@3x.png" mode="aspectFit" style="width: 32upx;height: 23upx;"></image></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				menuArrow:false,
				figureCheckValue:-1,
				figureType:[
					{
						id:0,
						value:'苗条',
					},
					{
						id:1,
						value:'健美',
					},
					{
						id:2,
						value:'匀称',
					},
					{
						id:3,
						value:'微胖',
					},
					{
						id:4,
						value:'丰满',
					},
				]
			}
		},
		onLoad(){
			
		},
		methods:{
			figureCheck(id){
				this.figureCheckValue=id;
				setTimeout(function(){
					uni.navigateTo({
						url:'Income',
						success() {
							console.log(id)
							console.log("success toIncome");
						},
						fail(){
							console.log(id)
							console.log("fail toIncome");
						}
					})
					},1000)
				// console.log(this.figureCheckValue)
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
