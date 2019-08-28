<template>
	<view class="full">
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
		
		<view class="content" v-if="typeCheck==0">
			<view class="cu-form-group" style="padding:30upx 0 30upx 0;">
				<view class="title">手机号</view>
				<input placeholder="请输入中国大陆手机号码" name="input" type="number" v-model="logUserName" maxlength="11"></input>
			</view>
			<view class="cu-form-group solid-bottom" style="padding: 30upx 0 30upx 0;">
				<view class="title">密&nbsp&nbsp&nbsp&nbsp码</view>
				<input placeholder="请输入密码" password="true" name="input" v-model="logPassword"></input>
			</view>
			<button class="cu-btn round bg-mauve lg padding-xl margin-top-xl" style="width: 560upx;padding: 20upx 0 20upx 0;" @click="toHome">登录</button>
			<view class="padding-top-sm" @click="toRetrievePassword"><text class="text-center text-grey">忘记密码?</text></view>
		</view>
		
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
	export default {
		data() {
			return {
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
			this.getLoginStorage();//取本地账号密码
		},
		methods: {
			chooseLogin(){
				this.typeCheck=0;
			},
			chooseRegister(){
				this.typeCheck=1;
			},
			toRetrievePassword(){
				uni.navigateTo({
					url:'RetrievePassword',
					success() {
						console.log("success toRetrievePassword");
					},
					fail(){
						console.log("fail toRetrievePassword");
					}
				})
			},
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
				// else if(){ //验证码错误
				// 	uni.showToast({
				// 	title:"验证码错误",
				// 	icon:"none"
				// 	})
				// }
				else{
					console.log(`账号:${this.registerUserName} 密码:${this.registerPassword} 密码重复:${this.registerPasswordSecond} 验证码:${this.verificationCodeValue}`)
					uni.navigateTo({//跳转Gender
						url:'../setBasicInfor/Gender',
						success() {
							console.log("success toGender");
						},
						fail(){
							console.log("fail toGender");
						}
					})
				}
				
			},
			toHome(){
				//登陆条件判断
				var That = this;
				console.log(`账号:${this.logUserName} 密码:${this.logPassword}`);
				uni.setStorage({//本地缓存账号
					key:"UserName",
					data:That.logUserName
				});
				uni.setStorage({//本地缓存密码
					key:"Password",
					data:That.logPassword
				});
				uni.reLaunch({
					url: '../home/Home',
					success() {
						console.log("success toHome");
					},
					fail(){
						console.log("fail toHome");
					}
				});
			},
			verificationCode(){//验证码函数
				var THAT = this;
				if(this.registerUserName){
					//这里写发送验证码函数
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
				}
				else{
					uni.showToast({
						title:"请输入手机号",
						icon:"none"
					})
				}
			},
			getLoginStorage(){//取本地缓存的登陆账号密码
				var That = this;
				uni.getStorage({
					key:"UserName",
					success(e){
						That.logUserName=e.data;
					}
				})
				uni.getStorage({
					key:"Password",
					success(e){
						That.logPassword=e.data;
					}
				})
			}
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
