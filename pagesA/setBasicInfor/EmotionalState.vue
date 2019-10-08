<template>
	<view class="full">
		<view class="flex padding justify-center">
			<view class="text-black text-bold text-xl">您的感情状态是?</view>
		</view>
		
		<view class="flex solid-bottom padding justify-between" v-for="(emotionalStateItem,index) in emotionalStateType" :key="index" @click="emotionalStateCheck(emotionalStateItem.id)">
			<view class="text-lg">{{emotionalStateItem.value}}</view>
			<view v-if="emotionalStateCheckValue==emotionalStateItem.id"><image src="https://static.mianyangjuan.com//commit@3x.png" mode="aspectFit" style="width: 32upx;height: 23upx;"></image></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				menuArrow:false,
				emotionalStateCheckValue:-1,
				emotionalStateType:[
					{
						id:0,
						value:'单身',
					},
					{
						id:1,
						value:'在一段恋情中',
					},
					{
						id:2,
						value:'已婚',
					},
					{
						id:3,
						value:'离婚',
					}
				]
			}
		},
		onLoad(){
			
		},
		methods:{
			emotionalStateCheck(id){
				this.emotionalStateCheckValue=id;
				setTimeout(function(){
					uni.navigateTo({
						url:'Relationship',
						success() {
							console.log("success toRelationship");
						},
						fail(){
							console.log("fail toRelationship");
						}
					})
					},1000)
				console.log(this.emotionalStateCheckValue)
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
