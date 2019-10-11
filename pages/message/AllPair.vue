<!-- 所有配对 -->
<template>
	<view class="full">
		<scroll-view scroll-y="true" class="chatList flex scroll-view">
			<view class="chatListItem scroll-view-item" v-for="item of allMatchUserList" :key="item.likeUid" @click="toChatRoom(item.userName,item.likeUid,item.icon,item.second)">
				<view class="chatListItemDetail flex justify-start">
					<image :src="item.icon" :lazy-load="true" mode="aspectFill"></image>
					<view>
						<view class="chat-title text-black text-lg text-bold">{{item.userName}}</view>
						<view class="chat-content text-gray text-sm margin-top-xs">配对时间剩余{{timeStamp(item.second)}}</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 无内容 -->
		<view class="flex justify-center align-center detailed" v-if="allMatchUserList.length==0?true:false">
			<view class="flex justify-center align-center margin-bottom-lg">
				<image src="https://static.mianyangjuan.com//nocontent.png" mode="" style="width: 178upx;height: 146upx;"></image>
			</view>
			<view class="flex justify-center align-center margin-bottom-xl margin-top-lg">
				<view class="text-df memberTip">暂无有效配对</view>
			</view>
		</view>
	</view>
</template>

<script>
	import common from '../../common/globalVariable.js'
	import Request from '../../util/luch-request/request.js'
	export default{
		data(){
			return {
				allMatchUserList:[]//所有配对列表
			}
		},
		onLoad:function(){
			this.getPairList();
		},
		methods:{
			//跳转聊天室
			toChatRoom(fromNick,userId,avatar,second){
				uni.navigateTo({
					url:`ChatRoom?second=${second}&fromNick=${fromNick}&userId=${userId}&avatar=${avatar}`,
					// url:'ChatRoomPair?title='+title+'&url='+url,
					success() {
						console.log("success toChatRoom");
					},
					fail(){
						console.log("fail toChatRoom");
					}
				})
			},
			//获取配对列表
			getPairList(){
				var THAT = this;
				const http = new Request();
				let params={
					params:{
						likeUid:common.userId,
						pageNum:1,
						pageSize:50
					}
				}
				http.get('/pairList', params).then(res => {
					console.log(params);
					console.log(res);
					// res.data.result.list.map((cur,index)=>{
					// 	cur.second = THAT.timeStamp(cur.second)
					// })
					THAT.allMatchUserList = [].concat(JSON.parse(JSON.stringify(res.data.result.list)));
					console.log(THAT.allMatchUserList)
				}).catch(err => {
					console.log(err);
				})
			},
			//时间戳转换函数
			timeStamp( second_time ){
				var time = parseInt(second_time) + "秒";  
				if( parseInt(second_time )> 60){  
					var second = parseInt(second_time) % 60;  
					var min = parseInt(second_time / 60);  
					time = min + "分" + second + "秒";  
					if( min > 60 ){  
						min = parseInt(second_time / 60) % 60;  
						var hour = parseInt( parseInt(second_time / 60) /60 );  
						time = hour + "小时" + min + "分" + second + "秒";  
						if( hour > 24 ){  
							hour = parseInt( parseInt(second_time / 60) /60 ) % 24;  
							var day = parseInt( parseInt( parseInt(second_time / 60) /60 ) / 24 );  
							time = day + "天" + hour + "小时" + min + "分" + second + "秒";  
						}  
					}  
				}  
				return time;          
			},
		}
	}
</script>

<style scoped>
	.scroll-view{
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: 100%;
	}
	.matchUser{
		height: 184upx;
		background-color: #F6F6F6;
	}
	.matchUserItem{
		display: inline-flex;
		height: 120upx;
		width: 120upx;
		margin: 32upx 32upx 32upx 0upx;
		box-sizing: border-box; 
		border-radius: 50%;
		padding: 7upx;
		background-image: linear-gradient(top, #0B47E1 0%, #6819EC 33%, #DB17AF 66%, #F02C64 100%);  
	}
	.matchUserItemContent{
		width:100%; 
		height:100%; 
		border-radius:50%; 
		background-color: #FFFFFF;
	}
	.chatchoose{
		width: 100%;
		position: absolute;
		top: 504upx;
		bottom: 0;
		left: 0;
	}
	.chatListItem{
		height: 164upx;
		width: 750upx;
	}
	.chatListItemDetail{
		width: 752upx;
		height: 164upx;
	}
	.chatListItemDetail image{
		/* border: #6A2BF8 solid 3upx; */
		border-radius: 50%;
		margin-left: 36upx;
		margin-top: 26upx;
		width: 112upx;
		height: 112upx;
	}
	.chatListItemDetail .chat-title{
		margin-top: 42upx;
		margin-left: 30upx;
	}
	.chatListItemDetail .chat-content{
		margin-left: 30upx;
	}
	.detailed{
		top:0;
		right: 0;
		left: 0;
		bottom: 0;
		position: fixed;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.memberTip{
		letter-spacing: 5upx;
		color: #6A2BF8;
	}
</style>
