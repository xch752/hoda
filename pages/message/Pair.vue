<template>
	<view class="full">
		<view v-if="sex==2?true:false">
			<view class="congratulations"></view>
			<view>
				<view class="avatar_female" :style="{'background-image': 'url(' + myAvatar + ')','background-repeat':'no-repeat','background-size':'cover'}" ></view>
				<view class="avatar_male" :style="{'background-image': 'url(' + pairAvatar + ')','background-repeat':'no-repeat','background-size':'cover'}"></view>
			</view>
			<view class="text-white tips">
				新配对! {{pairNickname}}需要在24小时内发消息给您。
			</view>
			<button type="primary" class="expand" >延长匹配时间</button>
			<button type="primary" class="continue" @click="closePage()">继续</button>
		</view>
		
		<view v-if="sex==1?true:false">
			<view class="congratulations"></view>
			<view>
				<view class="avatar_female" :style="{'background-image': 'url(' + pairAvatar + ')','background-repeat':'no-repeat','background-size':'cover'}"></view>
				<view class="avatar_male" :style="{'background-image': 'url(' + myAvatar + ')','background-repeat':'no-repeat','background-size':'cover'}"></view>
			</view>
			<view class="text-white tips">
				新配对! 您需要在24小时内发消息给他。
			</view>
			<view class="text-white tipsone">
				马上开始聊天吧
			</view>
			<input type="text" class="sendMSG" v-model="msgValue" maxlength="20"/>
			<button type="primary" class="btn-send" @click="sendMsg()"></button>
			<button type="primary" class="continue" @click="closePage()">继续</button>
		</view>
		
	</view>
</template>

<script>
	import Request from '../../util/luch-request/request.js'
	import common from '../../common/globalVariable.js'
	export default{
		data(){
			return{
				sex:'',
				myAvatar:'',
				pairUserId:'',
				pairNickname:'',
				pairAvatar:'',
				msgValue:'Hi，很高兴认识你。'
			}
		},
		onLoad:function(option){
			this.pairUserId = option.pairUserId;
			this.sex = common.sex;
			this.myInfo();
			this.pairUserInfo();
			console.log('sex',sex,'myAvatar',myAvatar,'pairUserID',pairUserID,'pairNickName',pairNickName,'pairAvatar',pairAvatar)
		},
		methods:{
			sendMsg(){
				var THAT = this;
				var msg = common.nim.sendText({
				    scene: 'p2p',
				    to: THAT.pairUserId,
				    text: THAT.msgValue,
				    done: (error, msg)=>{
						console.log(error);
						console.log(msg);
						console.log('发送' + msg.scene + ' ' + msg.type + '消息' + (!error?'成功':'失败') + ', id=' + msg.idClient);
						
						var ind = 0;
						var flag = false;
						common.msgs.map((cur,index)=>{
							if(cur.to==msg.from){
								flag = true;
								common.msgs[index].msgs.push(msg);
							}
							ind++;
						})
						if(flag==false){
							console.log(ind);
							common.msgs[ind]={sessionId:'p2p-'+msg.to,scene:'p2p',to:msg.to,msgs:[],timetag:(new Date()).valueOf(),time:'NaN-NaN-NaN NaN:NaN'};
							console.log(common.msgs[ind].msgs);
							common.msgs[ind].msgs.push(msg);
						}
						
						
						// THAT.msgList.push(msg);
						setTimeout(()=>{
							console.log('common.msgs',common.msgs)
							common.msgs.map((cur,index)=>{
								if(cur.to===THAT.userId){
									
									cur.msgs.push(msg);
								}
							})	
							uni.showToast({
								title:'发送成功',
								icon:'success'
							})
						},100)
						setTimeout(()=>{
							uni.navigateBack({
								delta:1
							})
						},1500)
					}
				});
			},
			myInfo(){
				var THAT = this;
				const http = new Request();
				let params={
					params:{
						id:common.userId,
						cerStatus:''
					}
				}
				http.get('/user', params).then(res => {
					console.log(params);
					console.log(res);
					THAT.myAvatar = res.data.result.user.icon;
				}).catch(err => {
					console.log(err);
				})
			},
			pairUserInfo(){
				var THAT = this;
				const http = new Request();
				let params={
					params:{
						id:THAT.pairUserId,
						cerStatus:''
					}
				}
				http.get('/user', params).then(res => {
					console.log(params);
					console.log(res);
					THAT.pairAvatar = res.data.result.user.icon;
					THAT.pairNickname = res.data.result.user.userName;
				}).catch(err => {
					console.log(err);
				})
			},
			closePage(){
				uni.navigateBack({
					delta:1
				})
			},
			toDownloadApp(){
				uni.navigateTo({
					url:'../../pagesB/DownloadApp',
					success: (res) => {
						console.log('success to Download',res);
					},
					fail: (err) => {
						console.log('fail to Download',fail)
					}
				})
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
		background: linear-gradient(90deg, #6A2BF8, #C90CFF);
	}
	.congratulations{
		position: fixed;
		top: 19%;
		background:url(https://static.mianyangjuan.com//Congratulations@3x.png) no-repeat;
		background-size: 100%;
		display: flex;
		height: 7%;
		width: 598upx;
		margin: 0 76upx 0 76upx;
	}
	.avatar_female{
		position: fixed;
		top: 30%;
		left:167upx;
		width: 223upx;
		height: 223upx;
		border-radius: 50%;
		background: #0081FF;
		border: #FFFFFF solid 10upx;
	}
	.avatar_male{
		position: fixed;
		top: 30%;
		left:358upx;
		width: 223upx;
		height: 223upx;
		border-radius: 50%;
		background: #0081FF;
		border: #FFFFFF solid 10upx;
	}
	.tips{
		position: fixed;
		top:52%;
		text-align: center;
		display: flex;
		justify-content: center;
		margin:0 auto;
		left:0;
		right:0;
	}
	.tipsone{
		position: fixed;
		top:56%;
		text-align: center;
		display: flex;
		justify-content: center;
		margin:0 auto;
		left:0;
		right:0;
	}
	.expand{
		position: fixed;
		display: flex;
		top:64.49%;
		left: 25.87%;
		height: 7.35%;
		width: 48.27%;
		border-radius:999upx;
		background-color: #FFFFFF;
		color: #000000;
		justify-content: center;
		align-items: center;
		text-align: center;	
		font-size: 31upx;
	}
	.continue{
		position: fixed;
		display: flex;
		top:74.21%;
		left: 29.33%;
		height: 7.35%;
		width: 41.33%;
		border-radius:999upx;
		background-color: #BA71F6;
		color: #FFFFFF;
		justify-content: center;
		align-items: center;
		text-align: center;	
		font-size: 31upx;
	}
	.sendMSG{
		position: fixed;
		display: flex;
		top:64.49%;
		left: 8.67%;
		height: 7.35%;
		width: 82.67%;
		border-radius:999upx;
		background-color: #FFFFFF;
		color: #000000;
		padding-left: 50upx;
		padding-right: 100upx;
		font-size: 31upx;
	}
	.btn-send{
		position: fixed;
		display: flex;
		top:66.27%;
		left: 80.53%;
		height: 4.2%;
		width: 7.47%;
		border-radius:999upx;
		background: url(https://static.mianyangjuan.com//send@3x.png) no-repeat;
		background-size: cover;
	}
</style>
