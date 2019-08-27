<template>
	<view class="full">
		<swiper class="card-swiper" :indicator-dots="false" :circular="false"
		 :autoplay="false" @change="cardSwiper">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item shadow">
					<image class="radius" :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<view v-if="cardCur==0">
			<view class="content flex justify-center margin-bottom-xl">
				<text style="color: #c2a97a;">认证须知</text>
			</view>
			
			<view class="text-lg">
				<view class="flex justify-start">
					<view class="lg text-black cuIcon-title">用户上传的头像要与认证照片一致才能通过真人认证</view>
				</view>
				<view class="flex justify-start">
					<view class="lg text-black cuIcon-title">可额外获得30金币</view>
				</view>
				<view class="flex justify-start">
					<view class="lg text-black cuIcon-title">认证照片仅供内部认证使用</view>
				</view>
			</view>
			
			<view class="flex text-gray text-sm justify-center margin-top-xl" @tap="showModal" data-target="bottomModal">
				我们为什么要收费?
			</view>
			<view class="content">
				<button class="cu-btn round bg-mauve lg padding-xl margin-top-sm" style="width: 500upx;padding: 20upx 0 20upx 0;">
				去支付
				</button>
			</view>
		</view>
		
		<view v-if="cardCur==1">
			<view class="content flex justify-center margin-bottom-xl">
				<text style="color: #c2a97a;">高级认证</text>
			</view>
			
			<view class="text-lg">
				<view class="flex justify-start">
					<view class="lg text-black cuIcon-title">高级认证用户上传的头像会进行隐私处理，头像不会展示给其他用户，方便身份隐藏</view>
				</view>
				<view class="flex justify-start">
					<view class="lg text-black cuIcon-title">可额外获得800金币</view>
				</view>
				<view class="flex justify-start">
					<view class="lg text-black cuIcon-title">高级认证用户享受极速认证特权</view>
				</view>
			</view>
			
			<view class="flex text-gray text-sm justify-center margin-top-xl" @tap="showModal" data-target="bottomModal">
				我们为什么要收费?
			</view>
			<view class="content">
				<button class="cu-btn round bg-mauve lg padding-xl margin-top-sm" style="width: 500upx;padding: 20upx 0 20upx 0;">
				去支付
				</button>
			</view>
		</view>
		
		<view class="cu-modal bottom-modal" :class="modalName=='bottomModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action text-mauve" @tap="hideModal">确定</view>
					<view class="action text-gray" @tap="hideModal">取消</view>
				</view>
				<view class="padding-sm text-df flex justify-start text-left margin-top-sm" >
					1、我们致力于打造100%真实健康交友平台，通过 收取基本的认证费用，筛选掉大部分酒饭托、微商 广告等虚假用户及保证交友安全。
				</view>
				<view class="padding-sm text-df flex justify-start text-left margin-bottom-sm">
					2、进行严格的身份认证需要耗费大量的人力成本， 收取基本的认证费用可以保证我们持续稳定运营。
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}],
				modalName: null,
			}
		},
		onLoad() {
			
		},
		methods:{
			cardSwiper(e) {
				this.cardCur = e.detail.current;
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
		}
	}
</script>

<style scoped>
	.radius{
		border-radius: 30upx;
	}
	.justify-start{
		padding: 10upx 100upx 10upx 100upx;
		line-height: 50upx;
	}
	.cu-bar{
		height: 40upx;
	}
	.text-left{
		padding-left: 50upx;
		padding-right: 50upx;
		line-height: 30upx;
	}
</style>
