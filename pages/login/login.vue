<!-- 登陆注册 -->
<template>
	<view class="full">
		<!-- 头部 -->
		<view class="text-center bg-mauve" 
		style="height:448upx;background: url(https://static.mianyangjuan.com//background_lg_@3x.png);background-repeat:no-repeat;background-size: 100% 100%;opacity: 0.90;">
			<view>
				<image src="https://static.mianyangjuan.com//Hoda_white_lg.png" mode="aspectFit" style="width: 231upx;height: 93upx;margin-top: 177upx;"></image>
			</view>
			<view class="flex  p-xs mb-sm padding-top-xl flex-sub">
				<view class="flex-twice padding-top-lg radius padding-left-xl text-xxl" @click="chooseLogin"><text id="loginType" class="text-white ">登录</text></view>
				<view class="flex-treble radius"></view>
				<view class="flex-twice padding-top-lg radius padding-right-xl text-xxl" @click="chooseRegister"><text id="registerType" class="text-white ">注册</text></view>
			</view>
			<view class="flex  p-xs mb-sm flex-sub">
				<view class="flex-twice radius padding-left-xl text-xxl"><text v-if="typeCheck==0" class="lg text-white cuIcon-usefullfill"></text></view>
				<view class="flex-treble radius"></view>
				<view class="flex-twice radius padding-right-xl text-xxl"><text v-if="typeCheck==1"  class="lg text-white cuIcon-usefullfill"></text></view>
			</view>
		</view>
		<!-- 登陆 -->
		<view class="content" v-if="typeCheck==0">
			<view class="cu-form-group" style="padding:30upx 0 30upx 0;">
				<view class="title">手机号</view>
				<input placeholder="请输入中国大陆手机号码" name="input" type="number" v-model="logUserName" maxlength="12"></input>
			</view>
			<view class="cu-form-group solid-bottom" style="padding: 30upx 0 30upx 0;">
				<view class="title">密&nbsp&nbsp&nbsp&nbsp码</view>
				<input placeholder="请输入密码" password="true" name="input" v-model="logPassword"></input>
			</view>
			<button class="cu-btn round bg-mauve lg padding-xl margin-top-xl" style="width: 560upx;padding: 20upx 0 20upx 0;" @click="toHome">登录</button>
			<view class="padding-top-sm" @click="toRetrievePassword"><text class="text-center text-grey">忘记密码?</text></view>
		</view>
		<!-- 注册 -->
		<view class="content"  v-if="typeCheck==1">
			<view class="cu-form-group" style="padding:30upx 0 30upx 0;">
				<view class="title">手机号</view>
				<input placeholder="请输入中国大陆手机号码" name="input" type="number" v-model="registerUserName" maxlength="11"></input>
			</view>
			<view class="cu-form-group" style="padding: 30upx 0 30upx 0;">
				<view class="title">验证码</view>
				<input placeholder="请输入验证码" name="input" type="number" v-model="verificationCodeValue" maxlength="4"></input>
				<button class='cu-btn bg-mauve btn-radius text-sm' 
				style="width: 180upx;" 
				@click="verificationCode"  
				:disabled="btnDisable"
				>{{cooldownTime}}{{second}}</button>
			</view>
			<view class="cu-form-group" style="padding: 30upx 0 30upx 0;">
				<view class="title">密&nbsp&nbsp&nbsp&nbsp码</view>
				<input placeholder="请输入密码" password="true" name="input" v-model="registerPassword"></input>
			</view>
			<view class="cu-form-group solid-bottom" style="padding: 30upx 0 30upx 0;">
				<view class="title">密&nbsp&nbsp&nbsp&nbsp码</view>
				<input placeholder="请再次输入密码" password="true" name="input" v-model="registerPasswordSecond"></input>
			</view>
			<button class="cu-btn round bg-mauve lg padding-xl margin-top-xl" style="width: 560upx;padding: 20upx 0 20upx 0;" @click="toGender">注册</button>
			<view class="padding-top-sm padding-bottom-sm"><text class="text-center text-grey">注册即表示你已阅读，并同意《用户注册协议》</text></view>
		</view>	
	</view>
</template>

<script>
	import Request from '../../util/luch-request/request.js'
	import common from '../../common/globalVariable.js'
	import IMController from '../../common/im.js'
	export default {
		data() {
			return {
				account:'',
				IMtoken:'',
				channel:'',
				typeCheck:0,//0登录 1注册
				cooldownTime:'获取验证码',
				btnDisable:false,
				second:'',
				logUserName:'',//登陆用户名
				logPassword:'',//登陆密码
				registerUserName:'',//注册用户名
				registerPassword:'',//注册密码
				registerPasswordSecond:'',//注册密码重复
				verificationCodeValue:''//验证码
			}
		},
		onLoad() {
			let THAT = this;
			THAT.getLoginStorage();//取本地账号密码
			
			//获取手机信息
			uni.getSystemInfo({
				success: (res) => {
					console.log(res)
					if(res.system.includes("iOS")){
						console.log('IOS')
						THAT.channel = 'IOS';
					}
					else{
						console.log('Android')
						THAT.channel = 'Android';
					}
				}
			})
		},
		onShow() {
			console.log("onShow")
		},
		methods: {
			// 切换登陆
			chooseLogin(){
				this.typeCheck=0;
			},
			// 切换注册
			chooseRegister(){
				this.typeCheck=1;
			},
			//跳转忘记密码
			toRetrievePassword(){
				uni.navigateTo({
					url:'../../pagesA/RetrievePassword/RetrievePassword',
					success() {
						console.log("success toRetrievePassword");
					},
					fail(){
						console.log("fail toRetrievePassword");
					}
				})
			},
			//跳转选择性别
			toGender(){
				if(!this.registerUserName){
					uni.showToast({
						title:"请输入手机号",
						icon:"none"
					})
				}
				else if(!this.verificationCodeValue){
					uni.showToast({
						title:"请输入验证码",
						icon:"none"
					})
				}
				else if(!(this.registerPassword===this.registerPasswordSecond)){
					uni.showToast({
						title:"两次输入密码不一致",
						icon:"none"
					})
				}
				else{
					const http = new Request();
					let params={
						//+号转义字符 %2B
						phone: '+'+'86'+this.registerUserName,
						password:this.registerPassword,
						channel:this.channel,
						code:this.verificationCodeValue,
						type:1
					}
					http.post('/register', {},{
						params:params,
						header: {
						  'Content-Type': 'application/json;charset=UTF-8'
						},
						dataType: 'json',
						responseType: 'text'
					}).then(res => {
						console.log(params);
						console.log(res)
						common.userId = res.data.result.userId;
						console.log('common.userId',common.userId)
						if(res.data.ret==1){
							uni.navigateTo({//跳转Gender
								url:'../../pagesA/setBasicInfor/Gender',
								success() {
									uni.showToast({
										title:'注册成功'
									})
									console.log("success toGender");
								},
								fail(){
									console.log("fail toGender");
								}
							})
						}
						else{
							uni.showToast({
								icon:'none',
								title:'注册失败'
							})
						}
					}).catch(err =>{
						console.log(err);
					})
					console.log(`账号:${this.registerUserName} 密码:${this.registerPassword} 密码重复:${this.registerPasswordSecond} 验证码:${this.verificationCodeValue}`)
				}
				
			},
			//跳转主页
			toHome(){
				//登陆接口
				var THAT = this;
				const http = new Request();
				let params={
					params:{
						//转义字符%2B 传值时+可能需要转义
						phone:'+'+'86'+THAT.logUserName,
						password:THAT.logPassword,
						channel:THAT.channel
					}
				}
				http.get('/login', params).then(res => {
					console.log(params);
					console.log(res);
					if(res.data.ret==1){
						common.userId = res.data.result.userId;
						console.log('common.userId',common.userId)
						console.log(`账号:${this.logUserName} 密码:${this.logPassword}`);
						common.sex = res.data.result.userMsg.sex;
						console.log('common.sex',common.sex);
						uni.setStorage({//本地缓存账号
							key:"UserName",
							data:this.logUserName
						});
						uni.setStorage({//本地缓存密码
							key:"Password",
							data:this.logPassword
						});
						uni.reLaunch({
							url: '../home/Home',
							success() {
								new IMController({
									token:res.data.result.imtoken,
									account: res.data.result.userId
								})
								console.log(common.nim);
								console.log("success toHome");
							},
							fail(){
								console.log("fail toHome");
							}
						});
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:"none"
						})
					}
				}).catch(err => {
					console.log(err);
				})
			},
			//验证码函数
			verificationCode(){
				var THAT = this;
				if(this.registerUserName){
					const http = new Request();
					let params={
						//+号转义字符 %2B
						phone:'%2B'+'86'+THAT.registerUserName,
					}
					http.post('/sms/send', {},{
						params:params,
						header: {
						  'Content-Type': 'application/json;charset=UTF-8'
						},
						dataType: 'json',
						responseType: 'text'
					}).then(res => {
						console.log(params);
						console.log(res);
						uni.showToast({
							title:"验证码已发送"
						})
						//倒计时函数
						this.second = 's';
						this.cooldownTime = 60;
						this.btnDisable = true;
						var verTime = setInterval(function(){
							THAT.cooldownTime = THAT.cooldownTime - 1;
							if(THAT.cooldownTime==-1){
								THAT.btnDisable = false;
								THAT.cooldownTime='获取验证码';
								THAT.second='';
								clearInterval(verTime);
							}
						},1000)
					}).catch(err => {
						console.log(err);
					})
				}
				else{
					uni.showToast({
						title:"请输入手机号",
						icon:"none"
					})
				}
			},
			//取本地缓存的登陆账号密码
			getLoginStorage(){
				var That = this;
				uni.getStorage({
					key:"UserName",
					success(e){
						That.logUserName=e.data;
						console.log(That.logUserName);
					}
				})
				uni.getStorage({
					key:"Password",
					success(e){
						That.logPassword=e.data;
						console.log(That.logPassword);
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
		}
	}
</script>

<style scoped>
	.btn-radius{
		border-radius: 50upx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
