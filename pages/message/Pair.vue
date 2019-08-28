<template>
	<view class="full">
		<view v-if="gender=='male'?true:false">
			<view class="congratulations"></view>
			<view>
				<view class="avatar_female"></view>
				<view class="avatar_male"></view>
			</view>
			<view class="text-white tips">
				新配对! {{nickname}}需要在24小时内发消息给您。
			</view>
			<button type="primary" class="expand">延长匹配时间</button>
			<button type="primary" class="continue">继续</button>
		</view>
		
		<view v-if="gender=='female'?true:false">
			<view class="congratulations"></view>
			<view>
				<view class="avatar_female"></view>
				<view class="avatar_male"></view>
			</view>
			<view class="text-white tips">
				新配对! 您需要在24小时内发消息给他。
			</view>
			<view class="text-white tipsone">
				马上开始聊天吧
			</view>
			<input type="text" class="sendMSG" v-model="msg" maxlength="20"/>
			<button type="primary" class="btn-send" @click="sendMsg()"></button>
			<button type="primary" class="continue">继续</button>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				nickname:'星星',
				gender:'female',
				msg:'Hi，很高兴认识你。'
			}
		},
		onLoad:function(){
			
		},
		methods:{
			sendMsg(){
				console.log(this.msg)
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
