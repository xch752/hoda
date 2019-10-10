<!-- 主页 -->
<template>
	<view class="full">
		<!-- hoda图标 -->
		<view class="flex justify-center animation-reverse">
			<image class="title" src="https://static.mianyangjuan.com//Hoda_purple_sm.png" mode="aspectFit"></image>
		</view>
		<!-- 操作按钮 -->
		<view class="button-group" v-if="slideLimit">
			<button class="margin-top-xl" v-if="isMember==0?false:true"
			style="border-radius: 50%;width: 90upx;height: 90upx; background: url(https://static.mianyangjuan.com//withdraw@3x.png) no-repeat;background-size: 100% 100%"
			@click="withdraw()"
			:disabled="btnDisabled">
			</button>
			<button class="margin-top-xl" 
			style="border-radius: 50%;width: 90upx;height: 90upx; background: url(https://static.mianyangjuan.com//like@3x.png) no-repeat;background-size: 100% 100%" 
			@click="animationRight()"
			:disabled="btnDisabled">
			</button>
			<button class="margin-top-xl" 
			style="border-radius: 50%;width: 90upx;height: 90upx; background: url(https://static.mianyangjuan.com//Dislike@3x.png) no-repeat;background-size: 100% 100%"
			 @click="animationLeft()"
			 :disabled="btnDisabled">
			 </button>
		</view>
		<!-- 无法无限滑动 -->
		<view class="flex justify-center align-center detailed" style="background-color: #6A2BF8;" v-if="!slideLimit">
			<view class="flex justify-center align-center margin-bottom-xl">
				<image src="https://static.mianyangjuan.com//time@3x.png" mode="" style="width: 100upx;height: 100upx;"></image>
			</view>
			<view class="flex justify-center align-center margin-bottom-xl margin-top-xl">
				<view class="text-white text-xl">休息一下</view>
			</view>
			<view class="flex justify-center align-center margin-bottom-xl">
				<view class="text-white text-df memberTip">下载APP,体验无限滑动 <span @click="toDownloadApp()" >点此立即下载</span></view>
			</view>
			<view v-if="slideNumber==1?false:true"  
			class="flex justify-center align-center margin-bottom-xl">
				<button type="primary" class="expand" @click="getUsers()">继续</button>
			</view>
		</view>
		<!-- 滑卡数据为0 -->
		<view class="flex justify-center align-center detailed" style="background-color: #6A2BF8;" v-if="isNull">
			<view class="flex justify-center align-center margin-bottom-lg">
				<image src="https://static.mianyangjuan.com//usercome.png" mode="" style="width: 190upx;height: 165upx;"></image>
			</view>
			<view class="flex justify-center align-center margin-bottom-xl margin-top-lg">
				<view class="text-white text-df memberTip">大批用户正在来的路上...</view>
			</view>
		</view>
		<!-- 无网络 -->
		<view class="flex justify-center align-center detailed" style="background-color: #6A2BF8;" v-if="!isNetwork">
			<view class="flex justify-center align-center margin-bottom-lg">
				<image src="https://static.mianyangjuan.com//noNet.png" mode="" style="width: 178upx;height: 146upx;"></image>
			</view>
			<view class="flex justify-center align-center margin-bottom-xl margin-top-lg">
				<view class="text-white text-df memberTip">网络跑到外太空去了</view>
			</view>
		</view>
		<!-- 用户 -->
		<!-- <view class="flex justify-center detailed" > -->
			<scroll-view class="scroll-detailed bg-white"
			:scroll-top="scrollTop" 
			scroll-y="true"  
			v-for="item in userList" 
			:key="item.id" 
			v-if="item.show" 
			:class="item.animation"
			>
				<!-- #ifdef H5 -->  
				<!-- 头像 -->
				<view class="scroll-view-item text-white" 
				style="font-size: 50upx;justify-content: center;background-color: #FFFFFF;"
				:style="{ 'background-image': 'url(' + item.icon + ')','background-repeat':'no-repeat','background-size':'cover','height':screenHeight+'px' }">
				<!-- #endif -->  
				
				<!-- #ifdef MP-WEIXIN -->
				<!-- 头像 -->
				<view class="scroll-view-item text-white" v-if="item.icon"
				style="height:100%;font-size: 50upx;justify-content: center;background-color: #FFFFFF;"
				:style="{ 'background-image': 'url(' + item.icon + ')','background-repeat':'no-repeat','background-size':'cover'}">
				<!-- #endif --> 
					<!-- 姓名，年龄，vip状态 -->
					<view class="name" 
					style="position: absolute;bottom: 0;margin:0 0 80upx 50upx;text-shadow:2px 2px 5px #333333;">
						{{item.userName}},{{item.age}}
						<image v-if="item.isMember==1?true:false" class="vipStatus margin-left-sm" src="https://static.mianyangjuan.com//vip@3x.png" mode="aspectFill"></image>
						<image v-if="item.certificationStatus==5?true:item.certificationStatus==2?true:false" class="cerStatus margin-left-sm" src="https://static.mianyangjuan.com//Certification@3x.png" mode="aspectFill"></image>
					</view>
					<view v-if="item.userForm.company" 
					class="company text-sm"
					style="position: absolute;bottom: 0;margin:0 0 45upx 50upx;text-shadow:2px 2px 5px #333333;">
						{{item.userForm.company}},{{item.userForm.position}}
					</view>
					<view v-if="item.userForm.school"  
					class="company text-sm"
					style="position: absolute;bottom: 0;margin:0 0 10upx 50upx;text-shadow:2px 2px 5px #333333;">
						{{item.userForm.school}},{{item.userForm.graduateTime}}毕业
					</view>
					<!-- 三方账号 -->
					<view class="name"
					style="position: absolute;top: 0;margin:40upx 0 0 40upx;">
						<image v-if="item.f"  
						class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Facebook@3x.png" mode="aspectFill"></image>
						<image v-if="item.t" 
						class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Twitter@3x.png" mode="aspectFill"></image>
						<image v-if="item.i"  
						class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Instagram@3x.png" mode="aspectFill"></image>
						<image v-if="item.l" 
						class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Line@3x.png" mode="aspectFill"></image>
						<image v-if="item.w"  
						class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//WeChat@3x.png" mode="aspectFill"></image>
						<image v-if="item.phone"  
						class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Telephone@3x.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="bg-white text-black text-xl padding-xl"
				style="word-break:break-all;border:0;">
					<text v-if="item.introduction" 
					style="word-break:break-all">
						{{item.introduction}}
					</text>
				</view>
				<!-- 基本资料 -->
				<view v-if="item.userForm!=null?true:false" class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						基本资料
					</text>
					<view class="flex justify-start" style="flex-flow:row wrap">
						<view class="text-center flex align-center" v-if="item.userForm.tall"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Height@3x.png" mode="aspectFit">
							</image>
							<text>{{item.userForm.tall}}<text>cm</text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.userForm.figure"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Figure@3x.png" mode="aspectFit">
							</image>
							<text>{{item.userForm.figure}}<text></text></text>
						</view>
						<!-- 职业 -->
						<!-- <view class="text-center flex align-center" v-if="item.userForm.profession"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//profession@3x.png" mode="aspectFit">
							</image>
							<text>{{item.userForm.profession}}<text></text></text>
						</view>	 -->				
						<view class="text-center flex align-center" v-if="item.userForm.income"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Income@3x.png" mode="aspectFit">
							</image>
							<text>{{item.userForm.income}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.userForm.feeling"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Emotional_state_@3x.png" mode="aspectFit">
							</image>
							<text>{{item.userForm.feeling}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.userForm.smoke"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//smoking@3x.png" mode="aspectFit">
							</image>
							<text>{{item.userForm.smoke}}<text></text></text>
						</view>					
						<view class="text-center flex align-center" v-if="item.userForm.drink"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//drink@3x.png" mode="aspectFit">
							</image>
							<text>{{item.userForm.drink}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.userForm.child"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//child@3x.png" mode="aspectFit">
							</image>
							<text>{{item.userForm.child}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.userForm.feeling"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Expectation_relationship@3x.png" mode="aspectFit">
							</image>
							<text>{{item.userForm.feeling}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.relation"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Expectation_relationship@3x.png" mode="aspectFit">
							</image>
							<text>{{item.relation}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="item.userForm.constellation"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//constellation@3x.png" mode="aspectFit">
							</image>
							<text>{{item.userForm.constellation}}<text></text></text>
						</view>
					</view>	
				</view>
				<!-- 相册 -->
				<view class="scroll-view-item text-white" v-for="(photoItem,index) in item.photos" :key="index" v-if="!index==0"
				style="width: 100%;height:70%;font-size: 50upx;justify-content: center;background-color: #FFFFFF;margin-bottom: 20upx;"
				
				:style="{ 'background-image': 'url(' + photoItem.url + ')','background-repeat':'no-repeat','background-size':'cover'}">
				</view>
				<!-- <image class="scroll-view-item text-white" v-for="(photoItem,index) in item.photos" :key="index" v-if="!index==0"
				style="width: 100%;height:70%;font-size: 50upx;justify-content: center;background-color: #FFFFFF;margin-bottom: 20upx;"
				
				:style="{ 'background-image': 'url(' + photoItem.url + ')','background-repeat':'no-repeat','background-size':'cover'}">
				</image> -->
				<!-- 社交账号 -->
				<view v-if="item.phone" class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						社交账号 <text class="text-bold text-red margin-left-lg text-sm">配对成功的会员才能查看</text>
					</text>
					<view v-if="item.f" 
					class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Facebook_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm"><text v-for="(item,index) in item.f.length" :key="index" >*</text></text>
					</view>
					<view v-if="item.t" 
					class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Twitter_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm"><text v-for="(item,index) in item.t.length" :key="index" >*</text></text>
					</view>
					<view v-if="item.i" 
					class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Instagram_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm"><text v-for="(item,index) in item.i.length" :key="index" >*</text></text>
					</view>
					<view v-if="item.l" 
					class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Line_sm@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm"><text v-for="(item,index) in item.l.length" :key="index" >*</text></text>
					</view>
					<view v-if="item.w" 
					class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//WeChat_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm"><text v-for="(item,index) in item.w.length" :key="index" >*</text></text>
					</view>
					<view v-if="item.phone" 
					class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Telephone_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm"><text v-for="(item,index) in item.phone.length" :key="index" >*</text></text>
					</view>
				</view>
				<!-- 兴趣爱好 -->
				<view v-if="item.userForm.interest" 
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						兴趣爱好
					</text>
					<view class="margin-top-sm">
						{{item.userForm.interest}}
					</view>
				</view>
				<!-- Q&A -->
				<view v-if="item.isQuestion" 
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;padding-bottom: 20upx;border:0;">
					<text class="text-bold">
						TA的交友观
					</text>
				</view>
				<view class="flex justify-start" style="flex-flow:row wrap;margin: 0 0 0 30upx;">
					<view v-if="item.question.makeFriendReason"  
					class="text-white flex align-center qa-item1">
						<view>
							<text class="text-sm" style="width: 186upx;">
								TA的交友目的?
							</text>
							<view class="text-bold" style="width: 186upx;">
								{{item.question.makeFriendReason}}
							</view>
						</view>
					</view>
					<view v-if="item.question.moneyRelation" 
					class="text-white flex align-center qa-item2">
						<view>
							<text class="text-sm" style="width: 186upx;">
								TA的金钱观?
							</text>
							<view class="text-bold" style="width: 186upx;">
								{{item.question.moneyRelation}}
							</view>
						</view>
					</view>
					<view v-if="item.question.characters" 
					class="text-white flex align-center qa-item3">
						<view>
							<text class="text-sm" style="width: 186upx;">
								TA的性格?
							</text>
							<view class="text-bold" style="width: 186upx;">
								{{item.question.characters}}
							</view>
						</view>
					</view>
					<view v-if="item.question.meet" 
					class="text-white flex align-center qa-item4">
						<view>
							<text class="text-sm" style="width: 290upx;">
								TA最快能接受多久见面?
							</text>
							<view class="text-bold" style="width: 290upx;">
								{{item.question.meet}}
							</view>
						</view>
					</view>
					<view v-if="item.question.trait" 
					class="text-white flex align-center qa-item5">
						<view>
							<text class="text-sm" style="width: 290upx;">
								TA最关心的对方的特质?
							</text>
							<view class="text-bold" style="width: 290upx;">
								{{item.question.trait}}
							</view> 
						</view>
					</view>
				</view>
				
				<!-- 旧question -->
				<!-- <view v-if="item.question.makeFriendReason" 
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						Q:您的交友目的是什么?
					</text>
					<view class="margin-top-sm">
						A:{{item.question.makeFriendReason}}
					</view>
				</view>
				<view v-if="item.question.moneyRelation"  
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						Q:金钱在两个人的关系里有多重要?
					</text>
					<view class="margin-top-sm">
						A:{{item.question.moneyRelation}}
					</view>
				</view>
				<view v-if="item.question.characters" 
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						Q:您认为自己是一个性格的人?
					</text>
					<view class="margin-top-sm">
						A:{{item.question.characters}}
					</view>
				</view>
				<view v-if="item.question.meet"  
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						Q:如果两个人聊得来的话，你接受最快多久见面?
					</text>
					<view class="margin-top-sm">
						A:{{item.question.meet}}
					</view>
				</view>
				<view v-if="item.question.trait"  
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						Q:对方的哪一个特质是您最关心的?
					</text>
					<view class="margin-top-sm">
						A:{{item.question.trait}}
					</view>
				</view> -->
				
				<!-- 当前位置 -->
				<view v-if="item.address" 
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
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
	import common from '../../common/globalVariable.js'
	import Request from '../../util/luch-request/request.js'
	// import NIM from '../../util/NIM_Web_NIM_weixin_v6.8.0.js'
	export default {
		data() {
			return {
				nowDayNum:'',
				slideNumber:4,
				isMember:'',
				chatList:[{}],
				screenHeight:'',
				slideLimit:true,
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				userIndex:0,
				btnDisabled:false,
				userList:[{},{}],
				isNull:false,
				isNetwork:true
			};
		},
		onLoad() {
			var THAT = this;
			var day = new Date().getDate().toString();
			// #ifdef H5
			this.screenHeight=window.screen.height*0.88*0.915;
			// #endif
			/**********************************************/
			//同步获取日期
			try {
			    THAT.nowDayNum = uni.getStorageSync('Today');
			    if (THAT.nowDayNum) {
			        console.log('THAT.nowDayNum',THAT.nowDayNum);
			    }else{
					THAT.nowDayNum = day;
					console.log('THAT.nowDayNum',THAT.nowDayNum);
				}
			} catch (e) {
			    // error
				console.log(e);
			}
			//同步获取限制次数
			try {
			    THAT.slideNumber = uni.getStorageSync('slideNumber');
				if (THAT.slideNumber){
					console.log('THAT.slideNumber',THAT.slideNumber)
				}else{
					THAT.slideNumber =4;
					console.log('THAT.slideNumber',THAT.slideNumber)
				}
			} catch (e) {
			    // error
				console.log(e);
			}
			console.log('THAT.nowDayNum',THAT.nowDayNum,'day',day)
			if(THAT.nowDayNum == day){
				//同一天
				console.log('同一天');
				try {
				    uni.setStorageSync('THAT.nowDayNum',day);
				} catch (e) {
				    // error
					console.log(e);
				}
			}else{
				//新的一天
				console.log('新一天');
				//同步存储日期
				try {
				    uni.setStorageSync('THAT.nowDayNum',day);
				} catch (e) {
				    // error
					console.log(e);
				}
				//同步限制次数
				try {
				    uni.setStorageSync('THAT.slideNumber',4);
				} catch (e) {
				    // error
					console.log(e);
				}
			}
			console.log('THAT.nowDayNum',THAT.nowDayNum,'day',day);
			/**********************************************/
			this.onNetwork();//监听网络状况
			this.getAddress();
			this.getUsers();
			this.getUserInfo();
			// this.userIndex = this.userList.length-1;
			// this.isShow();
			// console.log(this.userIndex)
		},
		onShow() {
			
		},
		methods: {
			//用户卡片显示初始化
			isShow(){
				for (let s = 0 ;s<=this.userIndex ; s++) {
					if(this.userIndex-s<2){
						this.userList[s].show=true;
					}
					else{
						this.userList[s].show=false;
					}
				}
				console.log('滑卡数据',this.userList);
				if(this.userList.length==0){
					this.isNull = true;
				}
			},
			//滚动
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			//左滑，不喜欢
			animationLeft() {
				var THAT = this;
				console.log(this.userIndex)
				if(this.userIndex>0){
					//这里接unlike接口
					const http = new Request();
					let params={
						unlikeUid:common.userId,
						unlikedUid:THAT.userList[THAT.userIndex].id
					}
					console.log(params);
					http.post('/unlike', {},{
						params:params,
						header: {
						  'Content-Type': 'application/json;charset=UTF-8'
						},
						dataType: 'json',
						responseType: 'text'
					}).then(res => {
						console.log(res);
					}).catch(err =>{
						console.log(err);
					})
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
					//这里接unlike接口
					const http = new Request();
					let params={
						unlikeUid:common.userId,
						unlikedUid:THAT.userList[THAT.userIndex].id
					}
					console.log(params);
					http.post('/unlike', {},{
						params:params,
						header: {
						  'Content-Type': 'application/json;charset=UTF-8'
						},
						dataType: 'json',
						responseType: 'text'
					}).then(res => {
						console.log(res);
					}).catch(err =>{
						console.log(err);
					})
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
			//右滑喜欢
			animationRight() {
				console.log(this.userIndex)
				var THAT = this;
				if(this.userIndex>0){
					//这里接like接口
					const http = new Request();
					let params={
						likeUid:common.userId,
						likedUid:THAT.userList[THAT.userIndex].id
					}
					console.log(params);
					http.post('/like', {},{
						params:params,
						header: {
						  'Content-Type': 'application/json;charset=UTF-8'
						},
						dataType: 'json',
						responseType: 'text'
					}).then(res => {
						console.log(res);
						if(res.data.result.sta==1){
							//弹窗
							uni.navigateTo({
								url:`../message/Pair?pairUserId=${THAT.userList[THAT.userIndex].id}`,
								animationType:'fade-in',
								animationDuration:'100',
								success: (res) => {
									console.log('success to pair',res)
								}
							})
						}else{
							//不弹窗
						}
					}).catch(err =>{
						console.log(err);
					})
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
					//这里接like接口
					const http = new Request();
					let params={
						likeUid:common.userId,
						likedUid:THAT.userList[THAT.userIndex].id
					}
					console.log(params);
					http.post('/like', {},{
						params:params,
						header: {
						  'Content-Type': 'application/json;charset=UTF-8'
						},
						dataType: 'json',
						responseType: 'text'
					}).then(res => {
						console.log(res);
						if(res.data.result.sta==1){
							//弹窗
							uni.navigateTo({
								url:`../message/Pair?pairUserId=${THAT.userList[THAT.userIndex].id}`,
								animationType:'fade-in',
								animationDuration:'100',
								success: (res) => {
									console.log('success to pair',res)
								}
							})
						}else{
							//不弹窗
						}
					}).catch(err =>{
						console.log(err);
					})
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
			//撤回
			withdraw(){
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
			//跳转下载
			toDownloadApp(){
				uni.navigateTo({
					url:'../../pagesB/DownloadApp',
					success() {
						console.log("success toDownloadApp")
					},
					fail() {
						console.log("fail toDownloadApp")
					}
				})
			},
			//右上角分享功能
			onShareAppMessage: function (res) {
				var that = this;
				return {
					title: '',
					path: '/pages/home/Home',
					imageUrl: "",
					success: function (res) {
						console.log(res);
					},
					fail: function (res) {
						console.log(res);
					}
				}
			},
			//获取用户信息
			getUsers(){
				var THAT = this;
				/**********************************************/
				//同步获取限制次数
				try {
				    THAT.slideNumber = uni.getStorageSync('slideNumber');
				    if (THAT.slideNumber) {
				        console.log('THAT.slideNumber',THAT.slideNumber);
				    }
					else{
						THAT.slideNumber = 4;
						console.log('THAT.slideNumber',THAT.slideNumber);
					}
				} catch (e) {
				    // error
					console.log(e);
				}
				//限制次数-1
				if(THAT.slideNumber>1){
					THAT.slideNumber--;
					//同步写入限制次数
					try {
						uni.setStorageSync('slideNumber',THAT.slideNumber);
						console.log('THAT.slideNumber',THAT.slideNumber)
					} catch (e) {
						// error
						console.log(e);
					}
					THAT.slideLimit = true;
					const http = new Request();
					let params={
						params:{
							id:common.userId
						}
					}
					http.get('/users', params).then(res => {
						//用户信息处理
						res.data.result.users.map((cur,index)=>{
							cur.animation = '';
							cur.show = '';
							cur.age = THAT.jsGetAge(cur.age);
							cur.userForm.figure = cur.userForm.figure=='0'?'苗条':cur.userForm.figure=='1'?'健美':cur.userForm.figure=='2'?'匀称':cur.userForm.figure=='3'?'微胖':cur.userForm.figure=='4'?'丰满':'';
							cur.userForm.income = cur.userForm.income=='0'?'10万以内':cur.userForm.income=='1'?'11-20万':cur.userForm.income=='2'?'21-50万':cur.userForm.income=='3'?'51-100万':cur.userForm.income=='4'?'100万以上':'';
							cur.userForm.feeling = cur.userForm.feeling=='0'?'单身':cur.userForm.feeling=='1'?'在一段恋情中':cur.userForm.feeling=='2'?'已婚':cur.userForm.feeling=='3'?'离婚':'';
							cur.userForm.smoke = cur.userForm.smoke=='0'?'从不抽烟':cur.userForm.smoke=='1'?'偶尔抽烟':cur.userForm.smoke=='2'?'经常抽烟':cur.userForm.smoke=='3'?'保密':'';
							cur.userForm.drink = cur.userForm.drink=='0'?'从不喝酒':cur.userForm.drink=='1'?'偶尔喝酒':cur.userForm.drink=='2'?'经常喝酒':cur.userForm.drink=='3'?'保密':'';
							cur.userForm.child = cur.userForm.child=='0'?'没有':cur.userForm.child=='1'?'1个':cur.userForm.child=='2'?'2个':cur.userForm.child=='3'?'3个以上':'';
							cur.relation = cur.relation=='0'?'恋爱关系':cur.relation=='1'?'私密关系':cur.relation=='2'?'还没想好':cur.relation=='3'?'婚姻':'';
							//question
							if(cur.question){
								cur.isQuestion = true;
								if(cur.question.makeFriendReason){
									cur.question.makeFriendReason = cur.question.makeFriendReason=='0'?'新朋友':cur.question.makeFriendReason=='1'?'短期交往':cur.question.makeFriendReason=='2'?'长期恋爱':cur.question.makeFriendReason=='3'?'灵魂伴侣':cur.question.makeFriendReason=='4'?'暂不确定':'';	
								}
								if(cur.question.moneyRelation){
									cur.question.moneyRelation = cur.question.moneyRelation=='0'?'非常重要':cur.question.moneyRelation=='1'?'一般重要':cur.question.moneyRelation=='2'?'并不重要':'';
								}
								if(cur.question.characters){
									cur.question.characters = cur.question.characters=='0'?'相当保守':cur.question.characters=='1'?'慢热腼腆':cur.question.characters=='2'?'外冷内热':cur.question.characters=='3'?'开朗活泼':cur.question.characters=='4'?'热情奔放':cur.question.characters=='5'?'毫无底线':'';
								}
								if(cur.question.meet){
									cur.question.meet = cur.question.meet=='0'?'当天奔现':cur.question.meet=='1'?'一周内搞定':cur.question.meet=='2'?'一个月内':cur.question.meet=='3'?'不着急,慢慢来':'';
								}
								if(cur.question.trait){
									cur.question.trait = cur.question.trait=='0'?'颜值':cur.question.trait=='1'?'身材':cur.question.trait=='2'?'性格':cur.question.trait=='3'?'经济条件':cur.question.trait=='4'?'工作学历':cur.question.trait=='5'?'家庭背景':'';
								}
							}else{
								cur.isQuestion = false;
							}
						})
						THAT.userList = res.data.result.users.reverse();
						THAT.userIndex = THAT.userList.length-1;
						THAT.isShow();
					}).catch(err => {
						console.log(err);
					})
				}else{
					THAT.slideLimit=false;
				}
				/**********************************************/
				
			},
			//日期转年龄函数
			jsGetAge(strBirthday)
			{       
			    var returnAge;
			    var strBirthdayArr=strBirthday.split("-");
			    var birthYear = strBirthdayArr[0];
			    var birthMonth = strBirthdayArr[1];
			    var birthDay = strBirthdayArr[2];
			    let d = new Date();
			    var nowYear = d.getFullYear();
			    var nowMonth = d.getMonth() + 1;
			    var nowDay = d.getDate();
			    if(nowYear == birthYear)
			    {
			        returnAge = 0;//同年 则为0岁
			    }
			    else
			    {
			        var ageDiff = nowYear - birthYear ; //年之差
			        if(ageDiff > 0)
			        {
			            if(nowMonth == birthMonth)
			            {
			                var dayDiff = nowDay - birthDay;//日之差
			                if(dayDiff < 0)
			                {
			                    returnAge = ageDiff - 1;
			                }
			                else
			                {
			                    returnAge = ageDiff ;
			                }
			            }
			            else
			            {
			                var monthDiff = nowMonth - birthMonth;//月之差
			                if(monthDiff < 0)
			                {
			                    returnAge = ageDiff - 1;
			                }
			                else
			                {
			                    returnAge = ageDiff ;
			                }
			            }
			        }
			        else
			        {
			            returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
			        }
			    }
			    return returnAge;//返回周岁年龄
			},
			//获取登陆者用户信息
			getUserInfo(){
				var THAT = this;
				const http = new Request();
				let params={
					params:{
						id:common.userId
					}
				}
				http.get('/user', params).then(res => {
					console.log(res);
					common.isMember = res.data.result.user.isMember;
					THAT.isMember = common.isMember;
				}).catch(err=>{
					console.log(err);
				})
			},
			//获取用户地理位置
			getAddress(){
				uni.getLocation({
					type: 'wgs84',
					success: function (res) {
						console.log('地理位置',res);
					}
				})
			},
			//监听网络状况
			onNetwork(){
				var THAT = this;
				uni.onNetworkStatusChange((res)=>{
					if(isConnected==true){
						THAT.slideLimit = true;
						THAT.isNetwork = true;
					}else{
						THAT.slideLimit = false;
						THAT.isNetwork = false;
					}
				});
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
	
	.expand{
		width: 300upx;
		height: 80upx;
		border-radius:999upx;
		background-color: #FFFFFF;
		color: #6A2BF8;
		justify-content: center;
		align-items: center;
		text-align: center;	
		font-size: 31upx;
		line-height: 80upx;
		font-weight: bold;
	}
	
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
	.qa-item1{
		margin: 0 0 20upx 20upx;
		background: linear-gradient(#6A2BF8,#E1A9F8);
		width: 186upx;
		height: 85upx;
		border-radius: 10upx;
		text-align: center;
	}
	.qa-item2{
		margin: 0 0 20upx 20upx;
		background: linear-gradient(#F8D92B,#DAA030);
		width: 186upx;
		height: 85upx;
		border-radius: 10upx;
		text-align: center;
	}
	.qa-item3{
		margin: 0 0 20upx 20upx;
		background: linear-gradient(#FDBF5F,#FAB691);
		width: 186upx;
		height: 85upx;
		border-radius: 10upx;
		text-align: center;
	}
	.qa-item4{
		margin: 0 0 20upx 20upx;
		background: linear-gradient(#6CACFD,#91FAE0);
		width: 290upx;
		height: 85upx;
		border-radius: 10upx;
		text-align: center;
	}
	.qa-item5{
		margin: 0 0 20upx 20upx;
		background: linear-gradient(#FF5D58,#FA91DB);
		width: 290upx;
		height: 85upx;
		border-radius: 10upx;
		text-align: center;
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