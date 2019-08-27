<template>
	<view class="full">
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
		<view class="flex justify-center">
			<view class="card-item flex justify-center align-center" style="margin-right: 35upx;" :class="payList[0].choose?'active':''" @click="payChoose(0)">
				<view style="width: 330upx;height: 260upx;background: url(../../../static/img/price1.png) no-repeat;background-size: 100% 100%"></view>
			</view>
			<view class="card-item" :class="payList[1].choose?'active':''" @click="payChoose(1)">
				
			</view>
		</view>
		<view class="flex justify-center" style="margin-top: 35upx;">
			<view class="card-item" style="margin-right: 35upx;" :class="payList[2].choose?'active':''" @click="payChoose(2)">
				
			</view>
			<view class="card-item" :class="payList[3].choose?'active':''" @click="payChoose(3)">
				
			</view>
		</view>
		<view class="flex justify-center" style="margin-top: 35upx;">
			<button class="cu-btn round bg-mauve lg padding-xl margin-top-xl" style="width: 695upx;padding: 20upx 0 20upx 0;" @click="showmsg">成为VIP</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://static.mianyangjuan.com//member_center_1.png'
				}, {
					id: 1,
					type: 'image',
					url: 'https://static.mianyangjuan.com//member_center_2.png',
				}, {
					id: 2,
					type: 'image',
					url: 'https://static.mianyangjuan.com//member_center_3.png'
				}, {
					id: 3,
					type: 'image',
					url: 'https://static.mianyangjuan.com//member_center_4.png'
				}, {
					id: 4,
					type: 'image',
					url: 'https://static.mianyangjuan.com//member_center_5.png'
				}, {
					id: 5,
					type: 'image',
					url: 'https://static.mianyangjuan.com//member_center_6.png'
				}, {
					id: 6,
					type: 'image',
					url: 'https://static.mianyangjuan.com//member_center_7.png'
				}, {
					id: 7,
					type: 'image',
					url: 'https://static.mianyangjuan.com//member_center_8.png'
				}, {
					id: 8,
					type: 'image',
					url: 'https://static.mianyangjuan.com//member_center_9.png'
				}],
				dotStyle: true,
				payList:[
					{
						id:0,
						choose:true,
					},
					{
						id:1,
						choose:false,
					},
					{
						id:2,
						choose:false,
					},
					{
						id:3,
						choose:false,
					}
				]
			}
		},
		onLoad() {
			
		},
		methods:{
			payChoose(num){
				for (let item of this.payList) {
					item.choose=false;
				}
				this.payList[num].choose = true;
			},
			showmsg(){
				uni.showModal({
					title:'提示',
					content:'下载APP成为会员',
					showCancel:false,
				})
			}
		}
	}
</script>

<style scoped>
	.full{
		background-color: #f9f9f9;
	}
	swiper{
		margin: 36upx 22upx;
		border-radius: 30upx;
	}
	swiper-item{
		border-radius: 30upx;
	}
	.card-item{
		width: 330upx;
		height: 260upx;
		border: 4upx solid #EEEEEE;
		border-radius: 30upx;
		background-color: #FFFFFF;
	}
	.active{
		background-color: #FEF4E5;
		border: 4upx solid #F3C837;
	}
</style>
