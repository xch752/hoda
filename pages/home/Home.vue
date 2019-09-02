<template>
	<view class="full">
		<!-- hoda图标 -->
		<view class="flex justify-center animation-reverse">
			<image class="title" src="https://static.mianyangjuan.com//Hoda_purple_sm.png" mode="aspectFit"></image>
		</view>
		<!-- 操作按钮 -->
		<view class="button-group" v-show="slideLimit">
			<button class="margin-top-xl" 
			style="border-radius: 50%;width: 90upx;height: 90upx; background: url(https://static.mianyangjuan.com//withdraw@3x.png) no-repeat;background-size: 100% 100%"
			@click="withdraw"
			:disabled="btnDisabled">
			</button>
			<button class="margin-top-xl" 
			style="border-radius: 50%;width: 90upx;height: 90upx; background: url(https://static.mianyangjuan.com//like@3x.png) no-repeat;background-size: 100% 100%" 
			@click="animationRight"
			:disabled="btnDisabled">
			</button>
			<button class="margin-top-xl" 
			style="border-radius: 50%;width: 90upx;height: 90upx; background: url(https://static.mianyangjuan.com//Dislike@3x.png) no-repeat;background-size: 100% 100%"
			 @click="animationLeft"
			 :disabled="btnDisabled">
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
				<view class="text-white text-df memberTip">您还不是会员,会员无限滑动,<span @click="toMemberCenter()" >立即成为会员</span></view>
			</view>
			
		</view>
		<!-- 用户 -->
		<!-- <view class="flex justify-center detailed" > -->
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
					<view class="flex justify-start" style="flex-flow:row wrap">
						<view class="text-center flex align-center" v-if="item.height"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Height@3x.png" mode="aspectFit">
							</image>
							<text>{{item.height}}<text>cm</text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.figure"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Figure@3x.png" mode="aspectFit">
							</image>
							<text>{{item.figure}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.job"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//profession@3x.png" mode="aspectFit">
							</image>
							<text>{{item.job}}<text></text></text>
						</view>					
						<view class="text-center flex align-center" v-if="item.income"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Income@3x.png" mode="aspectFit">
							</image>
							<text>{{item.income}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.emotion"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Emotional_state_@3x.png" mode="aspectFit">
							</image>
							<text>{{item.emotion}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.smoking"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//smoking@3x.png" mode="aspectFit">
							</image>
							<text>{{item.smoking}}<text></text></text>
						</view>					
						<view class="text-center flex align-center" v-if="item.drinking"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//drink@3x.png" mode="aspectFit">
							</image>
							<text>{{item.drinking}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.child"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//child@3x.png" mode="aspectFit">
							</image>
							<text>{{item.child}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.relation"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Expectation_relationship@3x.png" mode="aspectFit">
							</image>
							<text>{{item.relation}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.constellation"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//constellation@3x.png" mode="aspectFit">
							</image>
							<text>{{item.constellation}}<text></text></text>
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
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				screenHeight:'',
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
						show:false,
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
						constellation:'天枰座',
						interest:['篮球'],
						address:['中国','深圳']
					},
					{
						id:1,
						animation:'',
						show:false,
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
						constellation:'金牛座',
						interest:['爬山','游泳'],
						address:['中国','南京']
					},
					{
						id:2,
						animation:'',
						show:false,
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
						constellation:'摩羯座',
						interest:['游戏','乒乓'],
						address:['中国','北京']
					},
					{
						id:3,
						animation:'',
						show:false,
						imgUrl:'http://p.store.itangyuan.com/p/chapter/attachment/4B6uegEtef/EgfwEtMwEgbt4BIu4gITelu4KNsdH69RKgiVHhy381iuG1aSiTuF6b2.jpg',
						name:'Catherine',
						age:26,
						introduction:'University of Alabama - The University of Alabama wants you to stay connected, even while on the go for ZTE Mercury Free App Download in Utilities',
						height:156,
						figure:'丰满',
						job:'艺人',
						income:'101-200w',
						emotion:'在一段恋情中',
						smoking:'保密',
						drinking:'保密',
						child:'没有',
						relation:'稳定的私密关系',
						constellation:'双鱼座',
						interest:['瑜伽','游泳','攀岩'],
						address:['中国','杭州']
					},
					{
						id:4,
						animation:'',
						show:false,
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
						constellation:'金牛座',
						interest:['游戏','游泳'],
						address:['中国','上海']
					},
					{
						id:5,
						animation:'',
						show:false,
						imgUrl:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2744267305,3823782124&fm=26&gp=0.jpg',
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
						constellation:'金牛座',
						interest:['游戏','游泳'],
						address:['中国','上海']
					},
					{	
						id:6,
						animation:'',
						show:false,
						imgUrl:'http://n.sinaimg.cn/sinacn17/601/w700h701/20180507/2b9b-hacuuvu5241250.jpg',
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
						constellation:'天枰座',
						interest:['篮球'],
						address:['中国','深圳']
					},
					{
						id:7,
						animation:'',
						show:false,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201806/10/20180610125955_mpyqg.thumb.700_0.jpg',
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
						constellation:'金牛座',
						interest:['爬山','游泳'],
						address:['中国','南京']
					},
					{
						id:8,
						animation:'',
						show:false,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201806/10/20180610125921_qbmcs.jpg',
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
						constellation:'摩羯座',
						interest:['游戏','乒乓'],
						address:['中国','北京']
					},
					{
						id:9,
						animation:'',
						show:false,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201907/09/20190709195456_tBMLh.jpeg',
						name:'Catherine',
						age:26,
						introduction:'University of Alabama - The University of Alabama wants you to stay connected, even while on the go for ZTE Mercury Free App Download in Utilities',
						height:156,
						figure:'丰满',
						job:'艺人',
						income:'101-200w',
						emotion:'在一段恋情中',
						smoking:'保密',
						drinking:'保密',
						child:'没有',
						relation:'稳定的私密关系',
						constellation:'双鱼座',
						interest:['瑜伽','游泳','攀岩'],
						address:['中国','杭州']
					},
					{
						id:10,
						animation:'',
						show:false,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201908/17/20190817211439_ZUnkU.jpeg',
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
						constellation:'金牛座',
						interest:['游戏','游泳'],
						address:['中国','上海']
					},
					{
						id:11,
						animation:'',
						show:false,
						imgUrl:'http://pic.qqtn.com/up/2017-12/15133953058033827.jpg',
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
						constellation:'金牛座',
						interest:['游戏','游泳'],
						address:['中国','上海']
					},
					{
						id:12,
						animation:'',
						show:false,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201807/16/20180716125817_nddwp.jpeg',
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
						constellation:'天枰座',
						interest:['篮球'],
						address:['中国','深圳']
					},
					{
						id:13,
						animation:'',
						show:false,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184445_xrkla.thumb.700_0.jpeg',
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
						constellation:'金牛座',
						interest:['爬山','游泳'],
						address:['中国','南京']
					},
					{
						id:14,
						animation:'',
						show:false,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184444_tmmzm.thumb.700_0.jpeg',
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
						constellation:'摩羯座',
						interest:['游戏','乒乓'],
						address:['中国','北京']
					},
					{
						id:15,
						animation:'',
						show:false,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184443_kukeg.thumb.700_0.jpeg',
						name:'Catherine',
						age:26,
						introduction:'University of Alabama - The University of Alabama wants you to stay connected, even while on the go for ZTE Mercury Free App Download in Utilities',
						height:156,
						figure:'丰满',
						job:'艺人',
						income:'101-200w',
						emotion:'在一段恋情中',
						smoking:'保密',
						drinking:'保密',
						child:'没有',
						relation:'稳定的私密关系',
						constellation:'双鱼座',
						interest:['瑜伽','游泳','攀岩'],
						address:['中国','杭州']
					},
					{
						id:16,
						animation:'',
						show:false,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184443_xooqg.thumb.700_0.jpeg',
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
						constellation:'金牛座',
						interest:['游戏','游泳'],
						address:['中国','上海']
					},
					{
						id:17,
						animation:'',
						show:false,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184442_skijn.thumb.700_0.jpeg',
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
						constellation:'金牛座',
						interest:['游戏','游泳'],
						address:['中国','上海']
					},
					{	
						id:18,
						animation:'',
						show:false,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201806/15/20180615090825_umwpk.thumb.700_0.jpeg',
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
						constellation:'天枰座',
						interest:['篮球'],
						address:['中国','深圳']
					},
					{
						id:19,
						animation:'',
						show:false,
						imgUrl:'https://c-ssl.duitang.com/uploads/item/201806/15/20180615090826_jogfw.thumb.700_0.jpeg',
						name:'Ash',
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
						constellation:'金牛座',
						interest:['爬山','游泳'],
						address:['中国','南京']
					}
				],
			};
		},
		onLoad() {
			this.userIndex = this.userList.length-1;
			// #ifdef H5
			this.screenHeight=window.screen.height*0.88*0.915;
			// #endif  
			this.isShow();
		},
		methods: {
			isShow(){
				for (let s = 0 ;s<=this.userIndex ; s++) {
					if(this.userIndex-s<2){
						this.userList[s].show=true;
					}
					else{
						this.userList[s].show=false;
					}
				}
				console.log(this.userList);
			},
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
						if(this.userIndex>0){
							this.userList[this.userIndex].show = true;
							this.userList[this.userIndex-1].show = true;
						}
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
						if(this.userIndex>0){
							this.userList[this.userIndex].show = true;
							this.userList[this.userIndex-1].show = true;
						}
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
						if(this.userIndex>0){
							this.userList[this.userIndex].show = true;
							this.userList[this.userIndex-1].show = true;
						}
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
						if(this.userIndex>0){
							this.userList[this.userIndex].show = true;
							this.userList[this.userIndex-1].show = true;
						}
						
					}, 750)
				}
				// this.isShow();
			},
			withdraw(){//撤回
				if(this.userIndex<this.userList.length-1){
					if(this.userIndex>0){this.userList[this.userIndex-1].show=false;}
					this.userIndex++
					this.userList[this.userIndex].animation = '';
					this.userList[this.userIndex].show = true
					this.userList[this.userIndex].animation = 'animation-fade';
				}
				setTimeout(()=>{
					this.btnDisabled=false;
					this.userList[this.userIndex].animation = '';
				},750)
				this.btnDisabled=true;
				// this.isShow();
			},
			toMemberCenter(){
				uni.navigateTo({
					url:'../mine/subPages/memberCenter',
					success() {
						console.log("success toMemberCenter")
					},
					fail() {
						console.log("fail toMemberCenter")
					}
				})
			}
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
		z-index: 99999;
	}
	/* #endif */
	
	/* #ifdef H5*/ /* 条件编译到H5 */
	.button-group{
		position: fixed;
		right: 60upx;
		bottom: 300upx;
		z-index: 99999;
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
		border: #FFFFFF solid 1upx;
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
		border: #FFFFFF solid 1upx;
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
		border: #EEEEEE solid 3upx;
		/* box-shadow:0px 2px 9px 0px rgba(10,0,32,0.2); */
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
		border: #EEEEEE solid 3upx;
		/* box-shadow:0px 2px 9px 0px rgba(10,0,32,0.2); */
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