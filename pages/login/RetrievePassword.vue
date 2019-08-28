<template>
	<view class="full">
		<view class="text-center" style="height:277upx;background: url(https://static.mianyangjuan.com//background_sm_@3x.png);background-repeat:no-repeat;background-size: 100% 100%;opacity: 0.90;">
			<view class="flex justify-start">
				<text class="arrow xl text-white cuIcon-back" @click="closePage"></text>
			</view>
			<view class="flex  p-xs mb-sm padding-top-xl flex-sub">
				<view class="flex-twice padding-top-xl radius text-xxl justify-center"><text id="loginType" class="text-white">找回密码</text></view>
			</view>
			<view class="flex  p-xs mb-sm flex-sub">
				<view class="flex-twice radius text-xxl justify-center" style="padding-top: 5upx;"><text class="lg text-white cuIcon-usefullfill"></text></view>
			</view>
		</view>
		
		<view class="content margin-top-xl">
			<view class="cu-form-group" style="padding:30upx 0 30upx 0;">
				<view class="title">手机号</view>
				<input placeholder="请输入中国大陆手机号码" name="input" type="number" v-model="logUserName" maxlength="11"></input>
			</view>
			<view class="cu-form-group" style="padding: 30upx 0 30upx 0;">
				<view class="title">验证码</view>
				<input placeholder="请输入验证码" name="input" type="number" v-model="verificationCodeValue" maxlength="4"></input>
				<button class='cu-btn bg-mauve btn-radius text-sm' 
				style="width: 180upx;"
				@click="verificationCode"
				:disabled="btnDisable">{{cooldownTime}}{{second}}</button>
			</view>
			<view class="cu-form-group" style="padding: 30upx 0 30upx 0;">
				<view class="title">密&nbsp&nbsp&nbsp&nbsp码</view>
				<input placeholder="请输入密码" password="true" name="input" v-model="ResetPassword"></input>
			</view>
			<view class="cu-form-group" style="padding: 30upx 0 30upx 0;">
				<view class="title">密&nbsp&nbsp&nbsp&nbsp码</view>
				<input placeholder="请再次输入密码" password="true" name="input" v-model="ResetPasswordSecond"></input>
			</view>
			<button class="cu-btn round bg-mauve lg padding-xl" style="width: 560upx;padding: 20upx 0 20upx 0;">重置密码</button>
		</view>	
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cooldownTime:'获取验证码',
				btnDisable:false,
				second:'',
				logUserName:'',
				ResetPassword:'',//重置密码
				ResetPasswordSecond:'',//重置密码重复
				verificationCodeValue:''//验证码
			}
		},
		onLoad() {
			
		},
		methods:{
			closePage(){
				uni.navigateBack({
				    delta: 1
				});
			},
			verificationCode(){//验证码函数
				var THAT = this;
				if(this.logUserName){
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
		}
	}
</script>

<style scoped>
	.arrow{
		padding-top:60upx;
		padding-left: 50upx;
	}
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
