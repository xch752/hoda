<!-- 该页面未使用 -->
<!-- 聊天室配对 -->
<template>
	<view class="full">
		<view class="flex justify-center tips">
			<text class="text-black text-xxl text-bold">你们互相喜欢对方</text>
		</view>
		<view class="avatar">
			<view class="avatarContent flex justify-center align-center">
				<view style="width: 96%;height: 96%; border-radius: 50%;" :style="{ 'background-image': 'url(' + icon + ')','background-repeat':'no-repeat','background-size':'cover' }"></view>
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
		<view class="bottom" v-if="sex==1?true:false">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//Voice@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
				<input type="text" value="" placeholder="请输入内容..." placeholder-class="phClass"/>
				<image src="https://static.mianyangjuan.com//Emoticon@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
				<image src="https://static.mianyangjuan.com//send@3x.png" mode="aspectFit" style="width: 60upx;height: 60upx;margin: 30upx 0 30upx 15upx;"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import Request from '../../util/luch-request/request.js'
	import common from '../../common/globalVariable.js'
	export default{
		data(){
			return {
				userId:'',
				fromNick:'',
				icon:'',
				sex:'',
				second:''
			}
		},
		onLoad: function (option) {
			var THAT = this;
			console.log(option);
			this.sex = common.sex;
			this.userId=option.userId;
			this.second=this.timeStamp(option.second);
			this.getUser();
		},
		methods:{
			closePage(){
				uni.navigateBack({
				    delta: 1
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
			getUser(){
				var THAT = this;
				const http = new Request();
				let params={
					params:{
						id:THAT.userId,
						cerStatus:''
					}
				}
				http.get('/user', params).then(res => {
					console.log(res);
					THAT.fromNick = res.data.result.user.userName;
					THAT.icon = res.data.result.user.icon;
					uni.setNavigationBarTitle({
						 title: THAT.fromNick
					})
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
		background-color: #FFFFFF; 
	}
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
	}
</style>
