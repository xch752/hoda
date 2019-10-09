<!-- 会员中心 -->
<template>
	<view class="full">
		<!-- 轮播 -->
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
		<!-- 会员选项 -->
		<view class="flex justify-center">
			<view class="card-item" style="margin-right: 35upx;" :class="payList[0].choose?'active':''" @click="payChoose(0)">
				<view class="member-time">一周</view>
				<view class="member-price" :class="payList[0].choose?'active-color':''" @click="payChoose(0)"><text>$</text>1.6/天</view>
				<view class="member-priceall"><text>$</text>10.99</view>
				<!-- <view style="width: 330upx;height: 260upx;background: url(../../../static/img/price1.png) no-repeat;background-size: 100% 100%"></view> -->
			</view>
			<view class="card-item" :class="payList[1].choose?'active':''" @click="payChoose(1)">
				<view class="member-title">推荐</view>
				<view class="member-discount">5.4折</view>
				<view class="member-time">1个月</view>
				<view class="member-price" :class="payList[1].choose?'active-color':''" @click="payChoose(1)"><text>$</text>0.8/天</view>
				<view class="member-priceall"><text>$</text>23.99</view>
			</view>
		</view>
		<view class="flex justify-center" style="margin-top: 35upx;">
			<view class="card-item" style="margin-right: 35upx;" :class="payList[2].choose?'active':''" @click="payChoose(2)">
				<view class="member-discount">4.1折</view>
				<view class="member-time">3个月</view>
				<view class="member-price" :class="payList[2].choose?'active-color':''" @click="payChoose(2)"><text>$</text>0.6/天</view>
				<view class="member-priceall"><text>$</text>54.99</view>
			</view>
			<view class="card-item" :class="payList[3].choose?'active':''" @click="payChoose(3)">
				<view class="member-discount">1.8折</view>
				<view class="member-time">12个月</view>
				<view class="member-price" :class="payList[3].choose?'active-color':''" @click="payChoose(3)"><text>$</text>0.3/天</view>
				<view class="member-priceall"><text>$</text>99.99</view>
			</view>
		</view>
		<!-- 提交 -->
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
			//选择选项
			payChoose(num){
				for (let item of this.payList) {
					item.choose=false;
				}
				this.payList[num].choose = true;
			},
			//显示模态弹窗
			showmsg(){
				uni.showModal({
					title:'提示',
					content:'下载APP成为会员',
					showCancel:false,
					success:function(){
						//跳转
						uni.navigateTo({
							url:'../DownloadApp',
							success() {
								console.log("sucess toDownloadApp")
							},
							fail() {
								console.log("fail toDownloadApp")
							},
						})
					}
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
		position:relative;
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
	.active-color{
		color: #FE8402;
	}
	.member-title{
		position: absolute;
		text-align: center;
		left:0;
		right: 0;
		top: -20upx;
		margin: 0 auto;
		font-size: 23upx;
		line-height: 40upx;
		background-color: #F4CE4E;
		border-radius: 999upx;
		width: 98upx;
		height: 40upx;
		color: #FFFFFF;
	}
	.member-discount{
		position: absolute;
		text-align: center;
		overflow: hidden;
		left:0;
		right: 0;
		top: 0;
		font-size: 17upx;
		line-height: 35upx;
		color: #FFFFFF;
		background-color: #F8DE87;
		border-radius: 26upx 0 26upx 0;
		width: 81upx;
		height: 35upx;
	}
	.member-time{
		position: absolute;
		text-align: center;
		left:0;
		right: 0;
		top: 47upx;
		margin: 0 auto;
		font-size: 33upx;
		line-height: 33upx;
	}
	.member-price{
		position: absolute;
		text-align: center;
		left:0;
		right: 0;
		top: 103upx;
		margin: 0 auto;
		font-size: 55upx;
		line-height: 55upx;
		font-weight: 600;
	}
	.member-price text{
		font-size: 30upx;
		line-height: 30upx;
	}
	.member-priceall{
		position: absolute;
		text-align: center;
		left:0;
		right: 0;
		top: 188upx;
		margin: 0 auto;
		font-size: 24upx;
		line-height: 24upx;
		color: #737373;
	}
</style>
