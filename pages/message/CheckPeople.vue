<template>
	<view class="full">
		<!-- 操作按钮 -->
		<view class="button-group">
			<button class="margin-top-xl" 
			style="border-radius: 50%;width: 90upx;height: 90upx; background: url(https://static.mianyangjuan.com//like@3x.png) no-repeat;background-size: 100% 100%" 
			>
			</button>
			<button class="margin-top-xl" 
			style="border-radius: 50%;width: 90upx;height: 90upx; background: url(https://static.mianyangjuan.com//Dislike@3x.png) no-repeat;background-size: 100% 100%"
			 >
			 </button>
		</view>
		<!-- 用户 -->
		<view class="flex justify-center detailed" >
			<scroll-view class="scroll-detailed bg-white" 
			:scroll-top="scrollTop" 
			scroll-y="true"  
			@scroll="scroll" 
			show-scrollbar="true"
			v-for="item of userList"
			:class="item.animation"
			v-if="item.show"
			:key="item.id"
			>	
				<!-- #ifdef H5 -->  
				<!-- 图片 -->
				<view class="scroll-view-item text-white" 
				style="font-size: 50upx;justify-content: center;background-color: #FFFFFF;"
				:style="{ 'background-image': 'url(' + item.imgUrl + ')','background-repeat':'no-repeat','background-size':'cover','height':screenHeight+'px' }">
				<!-- #endif -->  
				
				<!-- #ifdef MP-WEIXIN -->
				<!-- 图片 -->
				<view class="scroll-view-item text-white" 
				style="height:100%;font-size: 50upx;justify-content: center;background-color: #FFFFFF;"
				:style="{ 'background-image': 'url(' + item.imgUrl + ')','background-repeat':'no-repeat','background-size':'cover'}">
				<!-- #endif --> 
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
						style="padding: 0 15upx 0 15upx;background:#EAD2FE;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="https://static.mianyangjuan.com//Height@3x.png" mode="aspectFit">
							</image>
							{{item.height}}cm
						</view>
						<view class="text-center" v-if="item.figure"
						style="padding: 0 15upx 0 15upx;background:#EAD2FE;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;margin-left: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="https://static.mianyangjuan.com//no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.figure}}
						</view>
						<view class="text-center" v-if="item.job"
						style="padding: 0 15upx 0 15upx;background:#EAD2FE;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;margin-left: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="https://static.mianyangjuan.com//no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.job}}
						</view>
					</view>
					<view class="flex justify-start">
						<view class="text-center" v-if="item.income"
						style="padding: 0 15upx 0 15upx;background:#EAD2FE;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="https://static.mianyangjuan.com//no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.income}}
						</view>
						<view class="text-center" v-if="item.emotion"
						style="padding: 0 15upx 0 15upx;background:#EAD2FE;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;margin-left: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="https://static.mianyangjuan.com//no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.emotion}}
						</view>
						<view class="text-center" v-if="item.smoking"
						style="padding: 0 15upx 0 15upx;background:#EAD2FE;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;margin-left: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="https://static.mianyangjuan.com//no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.smoking}}
						</view>
					</view>
					<view class="flex justify-start">
						<view class="text-center" v-if="item.drinking"
						 style="padding: 0 15upx 0 15upx;background:#EAD2FE;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="https://static.mianyangjuan.com//no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.drinking}}
						</view>
						<view class="text-center" v-if="item.child"
						style="padding: 0 15upx 0 15upx;background:#EAD2FE;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;margin-left: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="https://static.mianyangjuan.com//no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.child}}
						</view>
						<view class="text-center" v-if="item.relation" 
						style="padding: 0 15upx 0 15upx;background:#EAD2FE;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;margin-left: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="https://static.mianyangjuan.com//no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.relation}}
						</view>
					</view>
					<view class="flex justify-start">
						<view class="text-center" v-if="item.constellation"
						style="padding: 0 15upx 0 15upx;background:#EAD2FE;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin-top: 20upx;">
							<image style="width: 25upx;height: 25upx;" src="https://static.mianyangjuan.com//no_Chat_@3x.png" mode="aspectFit">
							</image>
							{{item.constellation}}
						</view>
					</view>	
				</view>
				<!-- 社交账号 -->
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
				<!-- 兴趣爱好 -->
				<view class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						兴趣爱好
					</text>
					<view class="margin-top-sm">
						{{item.interest}}
					</view>
				</view>
				<!-- Q&A -->
				<view class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						Q:金钱在两个人的关系里有多重要？
					</text>
					<view class="margin-top-sm">
						A:非常重要
					</view>
				</view>
				<!-- 当前位置 -->
				<view class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						当前位置
					</text>
					<view class="margin-top-sm">
						{{item.address}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				userList:[
					{	
						id:0,
						animation:'',
						show:true,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184444_tmmzm.thumb.700_0.jpeg',
						name:'Kathleen',
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
						constellation:'天枰座',
						interest:['篮球'],
						address:['中国','深圳']
					}
				],
				screenHeight:'',
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
			}
		},
		onLoad:function(){
			// #ifdef H5
			this.screenHeight=window.screen.height*0.88*0.915;
			// #endif  
		},
		methods:{
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style scoped>
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
		top:20upx;
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
		top:50upx;
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
</style>
