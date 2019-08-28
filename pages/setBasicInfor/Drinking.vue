<template>
	<view class="full">
		<view class="flex padding justify-center">
			<view class="text-black text-bold text-xl">您是否喝酒?</view>
		</view>
		
		<view class="flex solid-bottom padding justify-between" v-for="(drinkingItem,index) in drinkingType" :key="index" @click="drinkingCheck(drinkingItem.id)">
			<view class="text-lg">{{drinkingItem.value}}</view>
			<view v-if="drinkingCheckValue==drinkingItem.id"><image src="https://static.mianyangjuan.com//commit@3x.png" mode="aspectFit" style="width: 32upx;height: 23upx;"></image></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				menuArrow:false,
				drinkingCheckValue:-1,
				drinkingType:[
					{
						id:0,
						value:'从不喝酒',
					},
					{
						id:1,
						value:'偶尔喝酒',
					},
					{
						id:2,
						value:'经常喝酒',
					},
					{
						id:3,
						value:'保密',
					}
				]
			}
		},
		onLoad(){
			
		},
		methods:{
			drinkingCheck(id){
				this.drinkingCheckValue=id;
				setTimeout(function(){
					uni.navigateTo({
						url:'Child',
						success() {
							console.log("success toChild");
						},
						fail(){
							console.log("fail toChild");
						}
					})
					},1000)
				console.log(this.drinkingCheckValue)
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
