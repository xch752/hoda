<template>
	<view class="full">
		<view class="flex padding justify-center">
			<view class="text-black text-bold text-xl">您是否抽烟?</view>
		</view>
		
		<view class="flex solid-bottom padding justify-between" v-for="(smokingItem,index) in smokingType" :key="index" @click="smokingCheck(smokingItem.id)">
			<view class="text-lg">{{smokingItem.value}}</view>
			<view v-if="smokingCheckValue==smokingItem.id"><image src="https://static.mianyangjuan.com//commit@3x.png" mode="aspectFit" style="width: 32upx;height: 23upx;"></image></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				menuArrow:false,
				smokingCheckValue:-1,
				smokingType:[
					{
						id:0,
						value:'从不抽烟',
					},
					{
						id:1,
						value:'偶尔抽烟',
					},
					{
						id:2,
						value:'经常抽烟',
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
			smokingCheck(id){
				this.smokingCheckValue=id;
				setTimeout(function(){
					uni.navigateTo({
						url:'Drinking',
						success() {
							console.log("success toDrinking");
						},
						fail(err){
							console.log(err)
							console.log("fail toDrinking");
						}
					})
					},1000)
				console.log(this.smokingCheckValue)
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
