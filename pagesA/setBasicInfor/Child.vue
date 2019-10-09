<!-- 孩子 -->
<template>
	<view class="full">
		<view class="flex padding justify-center">
			<view class="text-black text-bold text-xl">您是否有孩子?</view>
		</view>
		
		<view class="flex solid-bottom padding justify-between" v-for="(childItem,index) in childType" :key="index" @click="childCheck(childItem.id)">
			<view class="text-lg">{{childItem.value}}</view>
			<view v-if="childCheckValue==childItem.id"><image src="https://static.mianyangjuan.com//commit@3x.png" mode="aspectFit" style="width: 32upx;height: 23upx;"></image></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				menuArrow:false,
				childCheckValue:-1,
				childType:[
					{
						id:0,
						value:'没有',
					},
					{
						id:1,
						value:'1个',
					},
					{
						id:2,
						value:'2个',
					},
					{
						id:3,
						value:'3个以上',
					}
				]
			}
		},
		onLoad(){
			
		},
		methods:{
			childCheck(id){
				this.childCheckValue=id;
				setTimeout(function(){
					uni.reLaunch({
						url: 'CertifiCationNotes',
						success() {
							console.log(id);
						},
						fail(err){
							console.log(err)
						}
					});
				},1000)
				
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
