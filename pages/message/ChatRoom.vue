<template>
	<view class="full">
		<view v-if="msgList.length==0?true:false">
			<view class="flex justify-center tips">
				<text class="text-black text-xxl text-bold">你们互相喜欢对方</text>
			</view>
			<view class="avatar">
				<view class="avatarContent flex justify-center align-center">
					<view style="width: 96%;height: 96%; border-radius: 50%;" :style="{ 'background-image': 'url(' + avatar + ')','background-repeat':'no-repeat','background-size':'cover' }"></view>
				</view>
			</view>
			<view class="tipsone">
				还剩{{second}}
			</view>
			<view class="tipstwo" v-if="sex==1?true:false">
				你们的配对将在{{second}}后失效，马上开始聊天吧
			</view>
			<view class="tipstwo" v-if="sex==2?true:false">
				你们的配对将在{{second}}后失效，等待她开启聊天
			</view>
		</view>
		
		<scroll-view :scroll-top="scrollTop" 
			scroll-y="true"  
			@scroll="scroll" >
			
			<view class="cu-chat">
				<view class="cu-item" :class="item.flow=='out'?'self':''" v-for="(item,index) in msgList" :key="index" >
					<view v-if="item.show" class="date" style="text-align: center;" >{{item.time}}</view>
					<view v-if="item.flow=='out'?false:true" class="cu-avatar radius" 
					:style="'background-image :'+'url(' + avatar + ')'"></view>
					<view class="main">
						<view class="content shadow" :class="item.flow=='out'?'bg-mauve':'bg-grey'" >
							<text v-if="item.type=='text'">{{item.text}}</text>
							<text v-if="item.type!='text'">不支持的消息类型,请在下载APP查看</text>
						</view>
					</view>
					<view v-if="item.flow=='out'?true:false" class="cu-avatar radius" 
					:style="'background-image :'+'url(' + myAvatar + ')'"></view>
				</view>
				
				<view style="height: 100upx;"></view>
			</view>
		</scroll-view>
		
		
		<view v-if="showSend" class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<image @click="showModal()" src="https://static.mianyangjuan.com//Voice@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur" placeholder="请输入内容" v-model="body"></input>
			<view class="action">
				<image @click="showModal()" src="https://static.mianyangjuan.com//Emoticon@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
			</view>
			<image @click="sendMSG()" src="https://static.mianyangjuan.com//send@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
		</view>
		
		<!-- <view class="bottom">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//Voice@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
				<input type="text" value="" placeholder="请输入内容..." placeholder-class="phClass"/>
				<image src="https://static.mianyangjuan.com//Emoticon@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
				<image src="https://static.mianyangjuan.com//send@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
			</view>
		</view> -->
	</view>
</template>

<script>
	import common from '../../common/globalVariable.js'
	// import NIM from '../../util/NIM_Web_NIM_weixin_v6.8.0.js'
	export default{
		data(){
			return {
				height:0,
				scrollTop: 3000,
				old: {
					scrollTop: 0
				},
				InputBottom: 0,
				fromNick:'',
				userId:'',
				msgList:[],
				body:'',
				flag:'',
				avatar:'',
				myAvatar:'',
				isChat:'',
				second:'',
				sex:'',
				showSend:true,
			}
		},
		onLoad: function (option) {
			var  THAT = this;
			console.log(option)
			this.fromNick = option.fromNick;
			this.userId = option.userId;
			this.avatar = option.avatar;
			this.second = option.second;
			this.second = this.timeStamp(this.second);
			this.sex = common.sex;
			uni.setNavigationBarTitle({
				 title: this.fromNick
			})
			common.isChatRoom=this.userId;
			common.nim.resetSessionUnread(`p2p-${this.userId}`);
			this.initHistoryChat()
			this.myAvatar = common.myInfo.avatar;
		},
		onUnload:function(){
			this.msgList=[];
			clearInterval(this.flag);
			common.isChatRoom=''
			common.nim.resetSessionUnread(`p2p-${this.userId}`);
		},
		onShow:function(){
			console.log(this.msgList)
			if(this.userId=='4804'){
				this.showSend = false;
			}else if(this.sex ==2 && this.msgList.length==0){
				this.showSend = false;
			}else{
				this.showSend = true;
			}
		},
		methods:{
			scroll: function(e) {
				console.log(e.detail.scrollTop)
				this.old.scrollTop = e.detail.scrollTop
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},
			initHistoryChat(){
				var THAT = this;
				common.msgs.map((cur,index)=>{
					if(cur.to===THAT.userId&&THAT.msgList != cur.msgs){
						console.log(THAT.msgList)
						THAT.msgList = [].concat(JSON.parse(JSON.stringify(cur.msgs)));		
						for(let i = 1;i<THAT.msgList.length;i++){
							if(THAT.msgList[i].time-THAT.msgList[i-1].time<300000){
								THAT.msgList[i].show=false;
							}else{
								THAT.msgList[i].show=true;
							}
						}
						THAT.msgList[0].show=true;
						// if(THAT.msgList[THAT.msgList.length-1].time-THAT.msgList[THAT.msgList.length-2].time<300000){
						// 	THAT.msgList[THAT.msgList.length-1].time=null;
						// }
						
						THAT.msgList.map((cur,index)=>{
							if(cur.time!=null){
								cur.time=common.calcTimeHeader(cur.time);
							}
							
						})
						console.log('THAT.msgList',THAT.msgList);
						THAT.flag = setInterval(()=>{
							if(THAT.msgList.length!=cur.msgs.length){
								console.log(THAT.msgList)
								// console.log(`THAT.msgList`,THAT.msgList.length,`cur.msgs`,cur.msgs.length)
								THAT.msgList=[].concat(JSON.parse(JSON.stringify(cur.msgs)));
								
								for(let i = 1;i<THAT.msgList.length;i++){
									if(THAT.msgList[i].time-THAT.msgList[i-1].time<300000){
										THAT.msgList[i].show=false;
									}else{
										THAT.msgList[i].show=true;
									}
								}
								THAT.msgList[0].show=true;
								// if(THAT.msgList[THAT.msgList.length-1].time-THAT.msgList[THAT.msgList.length-2].time<300000){
								// 	THAT.msgList[THAT.msgList.length-1].time=null;
								// }
								
								THAT.msgList.map((cur,index)=>{
									if(cur.time!=null){
										cur.time=common.calcTimeHeader(cur.time);
									}
								})
								// console.log(`THAT.msgList`,THAT.msgList.length,`cur.msgs`,cur.msgs.length)
								setTimeout(()=>{
									uni.pageScrollTo({
										scrollTop: THAT.msgList.length*150,
										duration: 0
									});
								},0)
							}
						},1000)
						setTimeout(()=>{
							uni.pageScrollTo({
								scrollTop: THAT.msgList.length*150,
								duration: 0
							});
						},0) 
					}else{
						THAT.isChat = false;
					}
				})
				// THAT.old.scrollTop = THAT.msgList.length*75;
			},
			sendMSG(){
				var THAT = this;
				var msg = common.nim.sendText({
				    scene: 'p2p',
				    to: THAT.userId,
				    text: THAT.body,
				    done: (error, msg)=>{
						console.log(error);
						console.log(msg);
						console.log('发送' + msg.scene + ' ' + msg.type + '消息' + (!error?'成功':'失败') + ', id=' + msg.idClient);
						
						// THAT.msgList.push(msg);
						
						console.log(common.msgs);
						var ind = 0;
						var flag = false;
						common.msgs.map((cur,index)=>{
							if(cur.to===THAT.userId){
								console.log(cur)
								flag = true;
								cur.msgs.push(msg);
							}
							ind++;
						})
						if(flag==false){
							console.log(ind);
							common.msgs[ind]={sessionId:'p2p-'+msg.to,scene:'p2p',to:msg.to,msgs:[],timetag:(new Date()).valueOf(),time:'NaN-NaN-NaN NaN:NaN'};
							console.log(common.msgs[ind].msgs);
							common.msgs[ind].msgs.push(msg);
							console.log(common.msgs[ind].msgs);
							THAT.msgList=[].concat(JSON.parse(JSON.stringify(common.msgs[ind].msgs)));
							console.log(THAT.msgList);
							THAT.initHistoryChat();
						}
						THAT.body="";
					}
				});
			},
			showModal(){
				uni.showModal({
				    title: '提示',
				    content: '下载APP体验更多功能',
				    success: function (res) {
				        if (res.confirm) {
							uni.navigateTo({
								url:'../../pagesB/DownloadApp'
							})
							console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			timeStamp( second_time ){
				var time = parseInt(second_time) + "秒";  
				if( parseInt(second_time )> 60){  
					var second = parseInt(second_time) % 60;  
					var min = parseInt(second_time / 60);  
					time = min + "分" + second + "秒";  
					if( min > 60 ){  
						min = parseInt(second_time / 60) % 60;  
						var hour = parseInt( parseInt(second_time / 60) /60 );  
						// time = hour + "小时" + min + "分" + second + "秒";  
						time = hour + "小时" + min + "分";
						if( hour > 24 ){  
							hour = parseInt( parseInt(second_time / 60) /60 ) % 24;  
							var day = parseInt( parseInt( parseInt(second_time / 60) /60 ) / 24 );  
							// time = day + "天" + hour + "小时" + min + "分" + second + "秒"; 
							time = day + "天" + hour + "小时";
						}  
					}  
				}  
				return time;          
			},
		}
	}
</script>

<style scoped>
	.cu-chat{
		height: 100%;
	}
	.bg-grey{
		background-color: #EEEEEE;
		color: #000000;
	}
	scroll-view{
		background-color: #FFFFFF;
		top: 0;
		right: 0;
		left: 0;
		bottom: 100upx;
		/* position: fixed; */
		height: 90%;
		width: 100%;
	}
	.full{
		/* position: fixed; */
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: #EEEEEE; 
	}
	/* .full{
		position: fixed;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF; 
	} */
	.tips{
		position: fixed;
		top:20.67%;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		margin: 0 auto;
		left: 0;
		right: 0;
	}
	.avatar{
		position: fixed;
		top:32%;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		margin: 0 auto;
		left: 0;
		right: 0;
		height: 246upx;
		width: 246upx;
		background-color: #FFFFFF;
		box-sizing: border-box;
		border-radius: 50%;
		padding: 10upx;
		background-image: linear-gradient(top, #0B47E1 0%, #6819EC 33%, #DB17AF 66%, #F02C64 100%);  
	}
	.avatarContent{
		width:100%; 
		height:100%; 
		border-radius:50%;
		background: #FFFFFF;
	}
	.tipsone{
		position: fixed;
		top:55%;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		margin: 0 auto;
		left: 0;
		right: 0;
		height: 3.28%;
		width: 21.36%;
		border-radius: 9999upx;
		background-color: #E7E7E7;
		color: #000000;
		font-size: 22upx;
	}
	.tipstwo{
		position: fixed;
		top:61.12%;
		display: flex;
		justify-content: center;
		align-content: center;
		align-items: center;
		margin: 0 auto;
		left: 0;
		right: 0;
		height: 2.3%;
		width: 80.51%;
		color: #737373;
		font-size: 28upx;
	}
	/* .header{
		position: fixed;
		top: 0;
		height: 128upx;
		width: 100%;
		background: #6A2BF8;
	}
	.bottom{
		position: fixed;
		width: 100%;
		height: 120upx;
		bottom: 0;
		background-color: #FFFFFF;
	}
	input{
		width: 495upx;
		height: 88upx;
		border-radius: 44upx;
		background-color: #EEEEEE;
		padding-left: 50upx;
		margin: 16upx 0 16upx 14upx;
		font-size: 30upx;
	} */
	page{
	  padding-bottom: 100upx;
	  background-color: #EEEEEE;
	}
	.cu-item{
		padding: 30upx 30upx 30upx;
	}
	.date{
		position: absolute;
		font-size: 24rpx;
		color: #8799a3;
		width: calc(100% - 320rpx);
		top: 0rpx;
		left: 160rpx;
	}
</style>
