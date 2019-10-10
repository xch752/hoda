<!-- 预览页面 -->
<template>
	<view class="full">
		<view class="flex justify-center detailed" >
			<scroll-view class="scroll-detailed bg-white" 
			:scroll-top="scrollTop" 
			scroll-y="true"  
			@scroll="scroll" 
			show-scrollbar="true"
			:class="item.animation"
			>	
				<!-- #ifdef H5 -->  
				<!-- 图片 -->
				<view class="scroll-view-item text-white" 
				style="font-size: 50upx;justify-content: center;background-color: #FFFFFF;"
				:style="{ 'background-image': 'url(' + userResult.userResult.user.icon + ')','background-repeat':'no-repeat','background-size':'cover','height':screenHeight+'px' }">
				<!-- #endif -->  
				
				<!-- #ifdef MP-WEIXIN -->
				<!-- 图片 -->
				<view class="scroll-view-item text-white" v-if="userResult.user.icon"
				style="height:100%;font-size: 50upx;justify-content: center;background-color: #FFFFFF;"
				:style="{ 'background-image': 'url(' + userResult.user.icon + ')','background-repeat':'no-repeat','background-size':'cover'}">
				<!-- #endif --> 
					<!-- 姓名，年龄，vip状态 -->
					<view class="name" 
					style="position: absolute;bottom: 0;margin:0 0 80upx 50upx;text-shadow:2px 2px 5px #333333;">
						{{userResult.user.userName}},{{userResult.user.age}}
						<image v-if="userResult.user.isMember==1?true:false" class="vipStatus margin-left-sm" src="https://static.mianyangjuan.com//vip@3x.png" mode="aspectFill"></image>
						<image v-if="userResult.user.certificationStatus==5?true:userResult.user.certificationStatus==2?true:false" class="cerStatus margin-left-sm" src="https://static.mianyangjuan.com//Certification@3x.png" mode="aspectFill"></image>
					</view>
					<view v-if="userResult.user.userForm.company" 
					class="company text-sm"
					style="position: absolute;bottom: 0;margin:0 0 45upx 50upx;text-shadow:2px 2px 5px #333333;">
						{{userResult.user.userForm.company}},{{userResult.user.userForm.position}}
					</view>
					<view v-if="userResult.user.userForm.school"  
					class="company text-sm"
					style="position: absolute;bottom: 0;margin:0 0 10upx 50upx;text-shadow:2px 2px 5px #333333;">
						{{userResult.user.userForm.school}},{{userResult.user.userForm.graduateTime}}毕业
					</view>
					<!-- 三方账号 -->
					<view class="name"
					style="position: absolute;top: 0;margin:40upx 0 0 40upx;">
						<image v-if="userResult.user.face"  
						class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Facebook@3x.png" mode="aspectFill"></image>
						<image v-if="userResult.user.twi" 
						class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Twitter@3x.png" mode="aspectFill"></image>
						<image v-if="userResult.user.insta"  
						class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Instagram@3x.png" mode="aspectFill"></image>
						<image v-if="userResult.user.lines" 
						class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Line@3x.png" mode="aspectFill"></image>
						<image v-if="userResult.user.whapp"  
						class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//WeChat@3x.png" mode="aspectFill"></image>
						<image v-if="userResult.user.phone"  
						class="margin-left-sm" style="width: 32upx;height: 32upx;" src="https://static.mianyangjuan.com//Telephone@3x.png" mode="aspectFill"></image>
					</view>
				</view>
				<view class="bg-white text-black text-xl padding-xl"
				style="word-break:break-all;border:0;">
					<text v-if="userResult.user.introduction" 
					style="word-break:break-all">
						{{userResult.user.introduction}}
					</text>
				</view>
				<!-- 基本资料 -->
				<view v-if="userResult.user.userForm!=null?true:false" class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						基本资料
					</text>
					<view class="flex justify-start" style="flex-flow:row wrap">
						<view class="text-center flex align-center" v-if="userResult.user.userForm.tall"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Height@3x.png" mode="aspectFit">
							</image>
							<text>{{userResult.user.userForm.tall}}<text>cm</text></text>
						</view>
						<view class="text-center flex align-center" v-if="userResult.user.userForm.figure"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Figure@3x.png" mode="aspectFit">
							</image>
							<text>{{userResult.user.userForm.figure}}<text></text></text>
						</view>
						<!-- 职业 -->
						<!-- <view class="text-center flex align-center" v-if="userResult.user.userForm.profession"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//profession@3x.png" mode="aspectFit">
							</image>
							<text>{{userResult.user.userForm.profession}}<text></text></text>
						</view>	 -->				
						<view class="text-center flex align-center" v-if="userResult.user.userForm.income"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Income@3x.png" mode="aspectFit">
							</image>
							<text>{{userResult.user.userForm.income}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="userResult.user.userForm.feeling"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Emotional_state_@3x.png" mode="aspectFit">
							</image>
							<text>{{userResult.user.userForm.feeling}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="userResult.user.userForm.smoke"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//smoking@3x.png" mode="aspectFit">
							</image>
							<text>{{userResult.user.userForm.smoke}}<text></text></text>
						</view>					
						<view class="text-center flex align-center" v-if="userResult.user.userForm.drink"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//drink@3x.png" mode="aspectFit">
							</image>
							<text>{{userResult.user.userForm.drink}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="userResult.user.userForm.child"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//child@3x.png" mode="aspectFit">
							</image>
							<text>{{userResult.user.userForm.child}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="userResult.user.userForm.feeling"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Expectation_relationship@3x.png" mode="aspectFit">
							</image>
							<text>{{userResult.user.userForm.feeling}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="userResult.user.relation"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//Expectation_relationship@3x.png" mode="aspectFit">
							</image>
							<text>{{userResult.user.relation}}<text></text></text>
						</view>
						<view class="text-center flex align-center" v-if="userResult.user.userForm.constellation"
						style="padding: 0 15upx 0 15upx;background:#FFFFFF;width: auto;height: 48upx;border-radius: 24upx;line-height: 48upx;margin: 20upx 20upx 0 0;border: #EEEEEE solid 3upx;">
							<image style="width: 38upx;height: 38upx;margin-right: 5upx;" src="https://static.mianyangjuan.com//constellation@3x.png" mode="aspectFit">
							</image>
							<text>{{userResult.user.userForm.constellation}}<text></text></text>
						</view>
					</view>	
				</view>
				<!-- 相册 -->
				<view class="scroll-view-item text-white" v-for="(item,index) in userResult.photoPass" :key="index" v-if="!index==0"
				style="height:70%;font-size: 50upx;justify-content: center;background-color: #FFFFFF;margin-bottom: 20upx;"
				:style="{ 'background-image': 'url(' + item.url + ')','background-repeat':'no-repeat','background-size':'cover'}">
				</view>
				<!-- 社交账号 -->
				<view v-if="userResult.user.phone" class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						社交账号 <text class="text-bold text-red margin-left-lg text-sm">配对成功的会员才能查看</text>
					</text>
					<view v-if="userResult.user.face" 
					class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Facebook_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm"><text v-for="(item,index) in userResult.user.face[0].length" :key="index" >*</text></text>
					</view>
					<view v-if="userResult.user.twi" 
					class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Twitter_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm"><text v-for="(item,index) in userResult.user.twi[0].length" :key="index" >*</text></text>
					</view>
					<view v-if="userResult.user.insta" 
					class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Instagram_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm"><text v-for="(item,index) in userResult.user.insta[0].length" :key="index" >*</text></text>
					</view>
					<view v-if="userResult.user.lines" 
					class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Line_sm@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm"><text v-for="(item,index) in userResult.user.lines[0].length" :key="index" >*</text></text>
					</view>
					<view v-if="userResult.user.whapp" 
					class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//WeChat_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm"><text v-for="(item,index) in userResult.user.whapp[0].length" :key="index" >*</text></text>
					</view>
					<view v-if="userResult.user.phone" 
					class="flex justify-start align-center margin-top-sm">
						<image src="https://static.mianyangjuan.com//Telephone_lg_@3x.png" mode="aspectFit"
						style="width:68upx;height: 68upx;"></image>
						<text class="text-lg margin-left-sm"><text v-for="(item,index) in userResult.user.phone.length" :key="index" >*</text></text>
					</view>
				</view>
				<!-- 兴趣爱好 -->
				<view v-if="userResult.user.userForm.interest" 
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						兴趣爱好
					</text>
					<view class="margin-top-sm">
						{{userResult.user.userForm.interest}}
					</view>
				</view>
				<!-- QA -->
				<view v-if="userResult.isQuestion"
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;padding-bottom: 20upx;border:0;">
					<text class="text-bold">
						TA的交友观
					</text>
				</view>
				<view class="flex justify-start" style="flex-flow:row wrap;margin: 0 0 0 30upx;">
					<view v-if="userResult.question.makeFriendReason"  
					class="text-white flex align-center qa-item1">
						<view>
							<text class="text-sm" style="width: 186upx;">
								TA的交友目的?
							</text>
							<view class="text-bold" style="width: 186upx;">
								{{userResult.question.makeFriendReason}}
							</view>
						</view>
					</view>
					<view v-if="userResult.question.moneyRelation" 
					class="text-white flex align-center qa-item2">
						<view>
							<text class="text-sm" style="width: 186upx;">
								TA的金钱观?
							</text>
							<view class="text-bold" style="width: 186upx;">
								{{userResult.question.moneyRelation}}
							</view>
						</view>
					</view>
					<view v-if="userResult.question.characters" 
					class="text-white flex align-center qa-item3">
						<view>
							<text class="text-sm" style="width: 186upx;">
								TA的性格?
							</text>
							<view class="text-bold" style="width: 186upx;">
								{{userResult.question.characters}}
							</view>
						</view>
					</view>
					<view v-if="userResult.question.meet" 
					class="text-white flex align-center qa-item4">
						<view>
							<text class="text-sm" style="width: 290upx;">
								TA最快能接受多久见面?
							</text>
							<view class="text-bold" style="width: 290upx;">
								{{userResult.question.meet}}
							</view>
						</view>
					</view>
					<view v-if="userResult.question.trait" 
					class="text-white flex align-center qa-item5">
						<view>
							<text class="text-sm" style="width: 290upx;">
								TA最关心的对方的特质?
							</text>
							<view class="text-bold" style="width: 290upx;">
								{{userResult.question.trait}}
							</view> 
						</view>
					</view>
				</view>
				<!-- 旧Q&A -->
				<!-- <view v-if="userResult.question.makeFriendReason" 
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						Q:您的交友目的是什么?
					</text>
					<view class="margin-top-sm">
						A:{{userResult.question.makeFriendReason}}
					</view>
				</view>
				<view v-if="userResult.question.moneyRelation"  
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						Q:金钱在两个人的关系里有多重要?
					</text>
					<view class="margin-top-sm">
						A:{{userResult.question.moneyRelation}}
					</view>
				</view>
				<view v-if="userResult.question.characters" 
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						Q:您认为自己是一个性格的人?
					</text>
					<view class="margin-top-sm">
						A:{{userResult.question.characters}}
					</view>
				</view>
				<view v-if="userResult.question.meet"  
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						Q:如果两个人聊得来的话，你接受最快多久见面?
					</text>
					<view class="margin-top-sm">
						A:{{userResult.question.meet}}
					</view>
				</view>
				<view v-if="userResult.question.trait"  
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						Q:对方的哪一个特质是您最关心的?
					</text>
					<view class="margin-top-sm">
						A:{{userResult.question.trait}}
					</view>
				</view> -->
				<!-- 当前位置 -->
				<view v-if="userResult.user.address" 
				class="bg-white text-black text-df padding-xl" style="padding-top: 0;border:0;">
					<text class="text-bold">
						当前位置
					</text>
					<view class="margin-top-sm">
						{{userResult.user.address}}
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import common from '../common/globalVariable.js'
	import Request from '../util/luch-request/request.js'
	export default{
		data(){
			return {
				userResult:'',
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
			this.initUser();
		},
		methods:{
			//滚动
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			//用户信息初始化
			initUser(){
				var THAT = this;
				const http = new Request();
				let params={
					params:{
						//id:301,
						id:common.userId,
						cerStatus:''
					}
				}
				http.get('/user', params).then(res => {
					console.log(params);
					console.log(res);
					THAT.userResult = res.data.result;
					//年龄
					THAT.userResult.user.age = THAT.jsGetAge(res.data.result.user.age);
					//基本资料 userForm
					THAT.userResult.user.userForm.figure = THAT.userResult.user.userForm.figure=='0'?'苗条':THAT.userResult.user.userForm.figure=='1'?'健美':THAT.userResult.user.userForm.figure=='2'?'匀称':THAT.userResult.user.userForm.figure=='3'?'微胖':THAT.userResult.user.userForm.figure=='4'?'丰满':'';
					THAT.userResult.user.userForm.income = THAT.userResult.user.userForm.income=='0'?'10万以内':THAT.userResult.user.userForm.income=='1'?'11-20万':THAT.userResult.user.userForm.income=='2'?'21-50万':THAT.userResult.user.userForm.income=='3'?'51-100万':THAT.userResult.user.userForm.income=='4'?'100万以上':'';
					THAT.userResult.user.userForm.feeling = THAT.userResult.user.userForm.feeling=='0'?'单身':THAT.userResult.user.userForm.feeling=='1'?'在一段恋情中':THAT.userResult.user.userForm.feeling=='2'?'已婚':THAT.userResult.user.userForm.feeling=='3'?'离婚':'';
					THAT.userResult.user.userForm.smoke = THAT.userResult.user.userForm.smoke=='0'?'从不抽烟':THAT.userResult.user.userForm.smoke=='1'?'偶尔抽烟':THAT.userResult.user.userForm.smoke=='2'?'经常抽烟':THAT.userResult.user.userForm.smoke=='3'?'保密':'';
					THAT.userResult.user.userForm.drink = THAT.userResult.user.userForm.drink=='0'?'从不喝酒':THAT.userResult.user.userForm.drink=='1'?'偶尔喝酒':THAT.userResult.user.userForm.drink=='2'?'经常喝酒':THAT.userResult.user.userForm.drink=='3'?'保密':'';
					THAT.userResult.user.userForm.child = THAT.userResult.user.userForm.child=='0'?'没有':THAT.userResult.user.userForm.child=='1'?'1个':THAT.userResult.user.userForm.child=='2'?'2个':THAT.userResult.user.userForm.child=='3'?'3个以上':'';
					THAT.userResult.user.relation = THAT.userResult.user.relation=='0'?'恋爱关系':THAT.userResult.user.relation=='1'?'私密关系':THAT.userResult.user.relation=='2'?'还没想好':THAT.userResult.user.relation=='3'?'婚姻':'';
					//question
					if(THAT.userResult.question){
						THAT.userResult.isQuestion = true;
						THAT.userResult.question.makeFriendReason = THAT.userResult.question.makeFriendReason=='0'?'新朋友':THAT.userResult.question.makeFriendReason=='1'?'短期交往':THAT.userResult.question.makeFriendReason=='2'?'长期恋爱':THAT.userResult.question.makeFriendReason=='3'?'灵魂伴侣':THAT.userResult.question.makeFriendReason=='4'?'暂不确定':'';
						THAT.userResult.question.moneyRelation = THAT.userResult.question.moneyRelation=='0'?'非常重要':THAT.userResult.question.moneyRelation=='1'?'一般重要':THAT.userResult.question.moneyRelation=='2'?'并不重要':'';
						THAT.userResult.question.characters = THAT.userResult.question.characters=='0'?'相当保守':THAT.userResult.question.characters=='1'?'慢热腼腆':THAT.userResult.question.characters=='2'?'外冷内热':THAT.userResult.question.characters=='3'?'开朗活泼':THAT.userResult.question.characters=='4'?'热情奔放':THAT.userResult.question.characters=='5'?'毫无底线':'';
						THAT.userResult.question.meet = THAT.userResult.question.meet=='0'?'当天奔现':THAT.userResult.question.meet=='1'?'一周内搞定':THAT.userResult.question.meet=='2'?'一个月内':THAT.userResult.question.meet=='3'?'不着急,慢慢来':'';
						THAT.userResult.question.trait = THAT.userResult.question.trait=='0'?'颜值':THAT.userResult.question.trait=='1'?'身材':THAT.userResult.question.trait=='2'?'性格':THAT.userResult.question.trait=='3'?'经济条件':THAT.userResult.question.trait=='4'?'工作学历':THAT.userResult.question.trait=='5'?'家庭背景':'';
					}else{
						THAT.userResult.isQuestion = false;
					}
				}).catch(err => {
					console.log(err);
				})
			},
			//日期转换年龄
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
			    return returnAge;//返回虚岁年龄
			}
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
</style>