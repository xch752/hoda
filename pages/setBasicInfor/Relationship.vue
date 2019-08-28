<template>
	<view class="full">
		<view class="flex padding justify-center">
			<view class="text-black text-bold text-xl">您期待关系是?</view>
		</view>
		
		<view class="flex solid-bottom padding justify-between" v-for="(relationshipItem,index) in relationshipType" :key="index" @click="relationshipCheck(relationshipItem.id)">
			<view class="text-lg">{{relationshipItem.value}}</view>
			<view v-if="relationshipCheckValue==relationshipItem.id"><image src="https://static.mianyangjuan.com//commit@3x.png" mode="aspectFit" style="width: 32upx;height: 23upx;"></image></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				menuArrow:false,
				relationshipCheckValue:-1,
				relationshipType:[
					{
						id:0,
						value:'一些约会',
					},
					{
						id:1,
						value:'长期关系',
					},
					{
						id:2,
						value:'认真的感情',
					},
					{
						id:3,
						value:'稳定的私密关系',
					}
				]
			}
		},
		onLoad(){
			
		},
		methods:{
			relationshipCheck(id){
				this.relationshipCheckValue=id;
				setTimeout(function(){
					uni.navigateTo({
						url:'Smoking',
						success() {
							console.log("success toSmoking");
						},
						fail(){
							console.log("fail toSmoking");
						}
					})
					},1000)
				console.log(this.relationshipCheckValue)
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
