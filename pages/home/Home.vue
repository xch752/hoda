<template>
	<view class="full">
		<!-- hoda图标 -->
		<view class="flex justify-center animation-reverse">
			<image class="title" src="https://static.mianyangjuan.com//Hoda_purple_sm.png" mode="aspectFit"></image>
		</view>
		<!-- 操作按钮 -->
		<view class="button-group">
			<button class="margin-top-xl" 
			style="border-radius: 50%;width: 90upx;height: 90upx; background: url(https://static.mianyangjuan.com//withdraw@3x.png) no-repeat;background-size: 100% 100%"
			@click="withdraw"
			:disabled="btnDisabled"
			v-if="slideLimit"
			></button>
			<button class="margin-top-xl" 
			style="border-radius: 50%;width: 90upx;height: 90upx; background: url(https://static.mianyangjuan.com//like@3x.png) no-repeat;background-size: 100% 100%" 
			@click="animationRight"
			:disabled="btnDisabled"
			v-if="slideLimit">
			</button>
			<button class="margin-top-xl" 
			style="border-radius: 50%;width: 90upx;height: 90upx; background: url(https://static.mianyangjuan.com//Dislike@3x.png) no-repeat;background-size: 100% 100%"
			 @click="animationLeft"
			 :disabled="btnDisabled"
			 v-if="slideLimit">
			 </button>
		</view>
		<!-- 无法无限滑动 -->
		<view class="flex justify-center align-center detailed" style="background-color: #6A2BF8;" v-if="!slideLimit">
			<view class="flex justify-center align-center margin-bottom-xl">
				<image src="https://static.mianyangjuan.com//time@3x.png" mode="" style="width: 100upx;height: 100upx;"></image>
			</view>
			<view class="flex justify-center align-center margin-bottom-xl margin-top-xl">
				<view class="text-white text-xl">休息8小时</view>
			</view>
			<view class="flex justify-center align-center margin-bottom-xl">
				<view class="text-white text-df memberTip">您还不是会员,会员无限滑动,<span>立即成为会员</span></view>
			</view>
			
		</view>
		<!-- 用户 -->
		<view class="flex justify-center detailed" >
			<scroll-view class="scroll-detailed" 
			:scroll-top="scrollTop" 
			scroll-y="true"  
			@scroll="scroll" 
			show-scrollbar="true"
			v-for="item of userList"
			:class="item.animation"
			v-if="item.show"
			:key="item.id"
			>	
				<!-- 图片 -->
				<view class="scroll-view-item text-white" 
				style="height: 100%;font-size: 50upx;justify-content: center;background-color: #FFFFFF;"
				:style="{ 'background-image': 'url(' + item.imgUrl + ')','background-repeat':'no-repeat','background-size':'cover' }">
					<!-- 姓名，年龄，vip状态 -->
					<view class="name" 
					style="position: absolute;bottom: 0;margin:0 0 40upx 50upx;">
						{{item.name}},{{item.age}}
						<image class="vipStatus margin-left-sm" src="https://static.mianyangjuan.com//vip@3x.png" mode="aspectFill"></image>
						<image class="cerStatus margin-left-sm" src="https://static.mianyangjuan.com//Certification@3x.png" mode="aspectFill"></image>
					</view>
					<!-- 三方账号 -->
					<view class="name"
					style="position: absolute;top: 0;margin:40upx 0 0 40upx;">
						<image class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Facebook@3x.png" mode="aspectFill"></image>
						<image class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Twitter@3x.png" mode="aspectFill"></image>
						<image class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Instagram@3x.png" mode="aspectFill"></image>
						<image class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Line@3x.png" mode="aspectFill"></image>
						<image class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//WeChat@3x.png" mode="aspectFill"></image>
						<image class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Telephone@3x.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="bg-white text-black text-xl padding-xl"
				style="word-break:break-all;border:0;">
					<text style="word-break:break-all">
						{{item.introduction}}
					</text>
				</view>
				<!-- 基本资料 -->
				<view class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						基本资料
					</text>
					<view class="flex justify-start">
						<view class="text-center" v-if="item.height"
						style="background:#EAD2FE;width: 163upx;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="https://static.mianyangjuan.com//Height@3x.png" mode="aspectFit">
							</image>
							{{item.height}}cm
						</view>
						<view class="text-center" v-if="item.figure"
						style="background:#EAD2FE;width: 127upx;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;margin-left: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="../../static/img/no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.figure}}
						</view>
						<view class="text-center" v-if="item.job"
						style="background:#EAD2FE;width: 127upx;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;margin-left: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="../../static/img/no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.job}}
						</view>
					</view>
					<view class="flex justify-start">
						<view class="text-center" v-if="item.income"
						style="background:#EAD2FE;width: 188upx;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="../../static/img/no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.income}}
						</view>
						<view class="text-center" v-if="item.emotion"
						style="background:#EAD2FE;width: 127upx;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;margin-left: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="../../static/img/no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.emotion}}
						</view>
						<view class="text-center" v-if="item.smoking"
						style="background:#EAD2FE;width: 127upx;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;margin-left: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="../../static/img/no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.smoking}}
						</view>
					</view>
					<view class="flex justify-start">
						<view class="text-center" v-if="item.drinking"
						 style="background:#EAD2FE;width: 127upx;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="../../static/img/no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.drinking}}
						</view>
						<view class="text-center" v-if="item.child"
						style="background:#EAD2FE;width: 127upx;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;margin-left: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="../../static/img/no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.child}}
						</view>
						<view class="text-center" v-if="item.relation" 
						style="background:#EAD2FE;width: 182upx;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;margin-left: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="../../static/img/no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.relation}}
						</view>
					</view>
					<view class="flex justify-start">
						<view class="text-center" v-if="item.constellation"
						style="background:#EAD2FE;width: 158upx;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="../../static/img/no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.constellation}}
						</view>
					</view>	
				</view>
				<!-- 个人账号 -->
				<view class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						社交账号
					</text>
					<view class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Facebook_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm">**********</text>
					</view>
					<view class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Twitter_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm">**********</text>
					</view>
					<view class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Instagram_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm">**********</text>
					</view>
					<view class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Line_sm@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm">**********</text>
					</view>
					<view class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//WeChat_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm">**********</text>
					</view>
					<view class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Telephone_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm">**********</text>
					</view>
				</view>
				<!-- 相册 -->
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				slideLimit:true,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				userIndex:0,
				// animation:[
				// 	'',
				// 	''
				// ],
				btnDisabled:false,
				userList:[
					{	
						id:0,
						animation:'',
						show:true,
						imgUrl:'http://img.qqzhi.com/uploads/2018-12-05/095314426.jpg',
						name:'Hannah',
						age:23,
						introduction:'Looking forward to dating Looking Looking forward to dating fo',
						height:165,
						figure:'丰满',
						job:'艺人',
						income:'51-100w',
						emotion:'单身',
						smoking:'保密',
						drinking:'保密',
						child:'没有',
						relation:'长期关系',
						constellation:'天枰座'
					},
					{
						id:1,
						animation:'',
						show:true,
						imgUrl:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1017590850,3664578715&fm=26&gp=0.jpg',
						name:'Bob',
						age:20,
						introduction:'Students seeking a Transfer Admission Guarantee ',
						height:178,
						figure:'丰满',
						job:'艺人',
						income:'51-100w',
						emotion:'单身',
						smoking:'保密',
						drinking:'保密',
						child:'没有',
						relation:'长期关系',
						constellation:'金牛座'
					},
					{
						id:2,
						animation:'',
						show:true,
						imgUrl:'http://img3.imgtn.bdimg.com/it/u=2708783067,814977852&fm=15&gp=0.jpg',
						name:'Kathleen',
						age:32,
						introduction:'Android Open Source - UniApp D B Handler',
						height:156,
						figure:'丰满',
						job:'艺人',
						income:'51-100w',
						emotion:'单身',
						smoking:'保密',
						drinking:'保密',
						child:'没有',
						relation:'长期关系',
						constellation:'金牛座'
					},
					{
						id:3,
						animation:'',
						show:true,
						imgUrl:'http://p.store.itangyuan.com/p/chapter/attachment/4B6uegEtef/EgfwEtMwEgbt4BIu4gITelu4KNsdH69RKgiVHhy381iuG1aSiTuF6b2.jpg',
						name:'Catherine',
						age:26,
						introduction:'University of Alabama - The University of Alabama wants you to stay connected, even while on the go for ZTE Mercury Free App Download in Utilities',
						height:156,
						figure:'丰满',
						job:'艺人',
						income:'51-100w',
						emotion:'单身',
						smoking:'保密',
						drinking:'保密',
						child:'没有',
						relation:'长期关系',
						constellation:'金牛座'
					},
					{
						id:4,
						animation:'',
						show:true,
						imgUrl:'http://pic2.zhimg.com/50/v2-d0a633461de5f57127628eee0d38d2e6_hd.jpg',
						name:'Emily',
						age:22,
						introduction:'Do you regularly misplace your keys? The Cobra Tag, StickNFind, and BiKN Smart Case can help with that, and Consumer Reports tells you how',
						height:156,
						figure:'丰满',
						job:'艺人',
						income:'51-100w',
						emotion:'单身',
						smoking:'保密',
						drinking:'保密',
						child:'没有',
						relation:'长期关系',
						constellation:'金牛座'
					},
					// {
					// 	id:5,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:6,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:7,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:8,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:9,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:10,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:11,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:12,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:13,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:14,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:15,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:16,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:17,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:18,
					// 	animation:'',
					// 	show:true
					// },
					// {
					// 	id:19,
					// 	animation:'',
					// 	show:true
					// }
				],
			};
		},
		onLoad() {
			this.userIndex = this.userList.length-1;
		},
		methods: {
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			animationLeft() {
				if(this.userIndex>0){
					this.userList[this.userIndex].animation = 'animation-slide-left';
					this.btnDisabled = true;
					setTimeout(()=>{
						this.userList[this.userIndex].show = false;
						this.userList[this.userIndex].animation = '';
						this.userIndex--;
						this.btnDisabled = false;
					}, 750)
				}
				else if(this.userIndex==0){
					this.userList[this.userIndex].animation = 'animation-slide-left';
					this.btnDisabled = true;
					setTimeout(()=>{
						this.userList[this.userIndex].show = false;
						this.userList[this.userIndex].animation = '';
						this.userIndex--;
						this.btnDisabled = false;
						this.slideLimit=false;
					}, 750)
				}
			},
			animationRight() {
				if(this.userIndex>0){
					this.userList[this.userIndex].animation = 'animation-slide-right';
					this.btnDisabled = true;
					setTimeout(()=>{
						this.userList[this.userIndex].show = false;
						this.userList[this.userIndex].animation = '';
						this.userIndex--;
						this.btnDisabled = false;
					}, 750)
				}
				else if(this.userIndex==0){
					this.userList[this.userIndex].animation = 'animation-slide-right';
					this.btnDisabled = true;
					setTimeout(()=>{
						this.userList[this.userIndex].show = false;
						this.userList[this.userIndex].animation = '';
						this.userIndex--;
						this.btnDisabled = false;
						this.slideLimit=false;
					}, 750)
				}
			},
			withdraw(){
				if(this.userIndex<this.userList.length-1){
					this.userIndex++
					this.userList[this.userIndex].animation = '';
					setTimeout(()=>{
						this.userList[this.userIndex].show = true;
						this.userList[this.userIndex].animation = 'animation-fade';
					}, 0)
				}	
			},
			// showTrue(){
			// 	console.log("showtrue")
			// 	for(var item of this.userList){
			// 		item.show=true;
			// 	}
			// 	this.userIndex = this.userList.length-1;
			// }
		}
	}
</script>

<style scoped>
	/* @import "../../colorui/animation.css"; */
	.full{
		position: fixed;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
	}
	.title{
		width: 115upx;
		height: 46upx;
		margin-top: 60upx;
	}
	/* #ifdef MP-WEIXIN*/ /* 条件编译到微信小程序 */
	.button-group{
		position: fixed;
		right: 60upx;
		bottom: 200upx;
		z-index: 999;
	}
	/* #endif */
	
	/* #ifdef H5*/ /* 条件编译到H5 */
	.button-group{
		position: fixed;
		right: 60upx;
		bottom: 300upx;
		z-index: 999;
	}
	/* #endif */
	
	/* #ifdef MP-WEIXIN*/ /* 条件编译到微信小程序 */
	.detailed{
		top:144upx;
		right: 25upx;
		left: 25upx;
		bottom: 25upx;
		border-radius: 30upx;
		position: fixed;
		height: 88%;
		width: 93%;
		display: flex;
		flex-direction: column;
	}
	/* #endif */
	
	/* #ifdef H5*/ /* 条件编译到H5 */
	.detailed{
		top:144upx;
		right: 25upx;
		left: 25upx;
		bottom: 25upx;
		border-radius: 30upx;
		position: fixed;
		height: 80%;
		width: 93%;
		display: flex;
		flex-direction: column;
	}
	/* #endif */
	
	/* #ifdef MP-WEIXIN*/ /* 条件编译到H5 */
	.scroll-detailed{
		top:144upx;
		right: 25upx;
		left: 25upx;
		bottom: 25upx;
		border-radius: 30upx;
		position: fixed;
		height: 88%;
		width: 93%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		box-shadow:0px 2px 9px 0px rgba(10,0,32,0.2);
	}
	/* #endif */
	
	/* #ifdef H5*/ /* 条件编译到H5 */
	.scroll-detailed{
		top:144upx;
		right: 25upx;
		left: 25upx;
		bottom: 25upx;
		border-radius: 30upx;
		position: fixed;
		height: 80%;
		width: 93%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		box-shadow:0px 2px 9px 0px rgba(10,0,32,0.2);
	}
	/* #endif */
	.vipStatus{
		width:30upx;
		height: 30upx;
	}
	.cerStatus{
		width:30upx;
		height: 30upx;
	}
	.memberTip{
		letter-spacing: 5upx;
	}
	.memberTip span{
		text-decoration:underline;
	}
	/* 动画 */
	[class*=animation-] {
	    animation-duration: .5s;
	    animation-timing-function: ease-out;
	    animation-fill-mode: both
	}
	.animation-slide-left {
	    animation-name: slide-left
	}
	@keyframes slide-left {
	    0% {
	        opacity: 1;
			transform: translateX(0) translateY(0) rotate(0deg)
	    }
	    100% {
	        opacity: 0;
			transform: translateX(-100%) translateY(20%) rotate(-40deg)
	    }
	}
	.animation-slide-right {
	    animation-name: slide-right
	}
	@keyframes slide-right {
	    0% {
	        opacity: 1;
			transform: translateX(0) translateY(0) rotate(0deg)
	    }
	    100% {
	        opacity: 0;
			transform: translateX(100%) translateY(20%) rotate(40deg)
	    }
	}
	.animation-fade {
	    animation-name: fade
	}
	@keyframes fade {
	    0% {
	        opacity: 0;
	        transform: translateX(-100%) translateY(20%) rotate(-40deg)
	    }
	    100% {
			opacity: 1;
			transform: translateX(0) translateY(0) rotate(0deg)
	    }
	}
</style>
