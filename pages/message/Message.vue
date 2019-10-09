<!-- 消息页面 与 喜欢页面 -->
<template>
	<view class="full">
		<!-- 消息页面 -->
		<view v-show="checkValue=='message'?true:false">
			<view class="header">
				<view class="flex justify-center padding-top-xl" style="padding-top: 60upx;">
					<view class="text-white text-center" style="font-size: 40upx;margin-right:40upx">消息</view>
					<view class="text-gray text-center" style="line-height: 60upx;font-size: 30upx;margin-left: 50upx;" @click="checkValueChange()">喜欢</view>
				</view>
				<view class="flex justify-center">
					<view class="bg-white" 
					style="height: 4upx;width: 20upx;margin-right: 150upx;border-radius: 2upx;"
					v-show="checkValue=='message'?true:false"></view>
					<view class="bg-white" 
					style="height: 4upx;width: 20upx;margin-left: 150upx;border-radius: 2upx;"
					v-show="checkValue=='like'?true:false"></view>
				</view>
			</view>
			<!-- 配对用户 -->
			<view>
				<view class="flex justify-start padding-top padding-left-lg text-bold text-df"
				style="height: 96upx;">
					配对用户({{matchUserList.length}})
				</view>
			</view>
			<view class="flex justify-start">
				<!-- <view class="matchUserItem" style="height: 120upx;width: 120upx;">
					<view  style="height: 113upx;width: 113upx;padding: 0;background-color: #FFFFFF;">
						<view style="width: 100%;height: 100%; border-radius: 50%;"></view>
					</view>
				</view> -->
				<!-- <scroll-view scroll-x="true" class="matchUser flex scroll-view" @scroll="" style="width:150upx">
				<view class="matchUserItem scroll-view-item" @click="toAllPair()">
					<view class="matchUserItemContent flex align-center justify-center">
						<view class="flex justify-center align-center" style="width: 94%;height: 94%; border-radius: 50%;background-color: #FFFFFF;">
							<view class="text-bold text-xl" 
							style="background: linear-gradient(to bottom,blue,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;font-style: italic"><text>ALL</text></view>
						</view>
					</view>
				</view>
				</scroll-view> -->
				<scroll-view scroll-x="true" class="matchUser flex scroll-view">
					<view class="matchUserItem scroll-view-item flex align-center justify-start" style="margin-right: 0;" @click="toAllPair()" >
						<view class="matchUserItemContent flex align-center justify-center">
							<view class="matchUserItemContent flex align-center justify-center">
								<view style="width: 94%;height: 94%; border-radius: 50%;background-repeat: no-repeat;background-size: cover;background-image: url(https://static.mianyangjuan.com/pairList.png);"></view>
							</view>
							
							<!-- <view class="flex justify-center align-center" style="width: 94%;height: 94%; border-radius: 50%;background-color: #FFFFFF;">
								<view class="text-bold text-xl" 
								style="background: linear-gradient(to bottom,blue,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;font-style: italic"><text>ALL</text></view>
							</view> -->
						</view>
					</view>
					<view class="scroll-view-item matchUserItem flex align-center justify-start" style="margin-right: 0;"
					v-for="(item,index) of matchUserList" :key="index" @click="toChatRoom(item.userName,item.likeUid,item.icon,item.second)">
						<view class="matchUserItemContent flex align-center justify-center">
							<view style="width: 94%;height: 94%; border-radius: 50%;" :style="{ 'background-image': 'url(' + item.icon + ')','background-repeat':'no-repeat','background-size':'cover' }"></view>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 会话列表 -->
			<view>
				<view class="flex justify-start padding-top padding-left-lg text-bold text-df solid-bottom"
				style="height: 96upx;">
					消息
				</view>
			</view>
			<!-- 没有聊天记录 -->
			<view class="flex justify-center align-center chatchoose" v-show="!isChatRecord">
				<view style="text-align:center">
					<image src="https://static.mianyangjuan.com//no_Chat_@3x.png" mode="aspectFit" style="width: 120upx;height: 126upx;"></image>
					<view class="text-gray text-sm margin-top-sm">还没有聊天记录</view>
				</view>
			</view>
			<!-- 有聊天记录 -->
			<view class="flex chatchoose" v-show="isChatRecord">
				<!-- <scroll-view scroll-y="true" class="chatList flex scroll-view" >
					<view class="chatListItem scroll-view-item" v-for="item of chatList" :key="item.id" @click="toChatRoom(item.title)">
						<view class="chatListItemDetail flex justify-start">
							<image src="https://static.mianyangjuan.com//no_Chat_@3x.png" mode="aspectFit"></image>
							<view class="text-white text-xs text-center" 
							style="min-width: 20upx;width: auto;height: 20upx;background-color: red;border-radius: 10upx;margin: 25upx 0 0 -20upx;"
							></view>
							<view>
								<view class="chat-title text-black text-lg text-bold">{{item.title}}</view>
								<view class="chat-content text-black text-sm margin-top-xs">{{item.content}}</view>
							</view>
						</view>
					</view>
				</scroll-view> -->
				<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
					<view class="cu-list menu-avatar">
						<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in chatList" :key="index"
						 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index"
						 @click="toChatRoom(item.nick,item.to,item.avatar)">
							<view class="cu-avatar round lg" 
							:style="{'backlground':'#FFFFFF', 'background-image': 'url(' + item.avatar + ')','background-repeat':'no-repeat','background-size':'cover' }"></view>
							<view class="content">
								<!-- 昵称，头像走接口获取 -->
								<view class="text-black text-bold">{{item.nick}}</view>
								<view class="text-gray text-sm" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
									{{item.lastMsg.text}}
								</view>
							</view>
							<view class="action">
								<view class="text-grey text-xs">{{item.updateTime}}</view>
								<view v-show="item.unread" class="cu-tag round bg-red sm">{{item.unread}}</view>
							</view>
							<view class="move">
								<view class="bg-red" @click="deleteChatListItem(index)">删除</view>
							</view>
						</view>
					</view>	
				</scroll-view>
			</view>
		</view>
		<!-- 喜欢页面 -->
		<view v-show="checkValue=='message'?false:true">
			<view class="header">
				<view class="flex justify-center padding-top-xl" style="padding-top: 60upx;">
					<view class="text-gray text-center" style="line-height: 60upx;font-size: 30upx;margin-right: 50upx;" @click="checkValueChange()">消息</view>
					<view class="text-white text-center" style="font-size: 40upx;margin-left:40upx;">喜欢</view>
				</view>
				<view class="flex justify-center">
					<view class="bg-white" 
					style="height: 4upx;width: 20upx;margin-right: 150upx;border-radius: 2upx;"
					v-show="checkValue=='message'?true:false"></view>
					<view class="bg-white" 
					style="height: 4upx;width: 20upx;margin-left: 150upx;border-radius: 2upx;"
					v-show="checkValue=='like'?true:false"></view>
				</view>
			</view>
			<view>
				<scroll-view scroll-y="true" class="scrollView">
					<view v-for="(likeItem,index) of likeUserList" :key="index" >
						<view class="flex justify-start">
							<view class="margin-sm"><text class="text-bold text-lg">{{likeItem[0].createTime[2]}}</text><text class="text-gray">/ {{likeItem[0].createTime[1]}}月</text></view>
						</view>
						<scroll-view scroll-x="true" class="likeUser flex scroll-view" style="width: 100%;overflow: hidden;">
							<view v-if="isMember==0?true:false" class="likeUserItemPar" v-for="Item of likeItem" :key="Item.likeUid">
								<image class="likeUserItem scroll-view-item filter" 
								:src="Item.icon" mode="aspectFill" 
								@tap="toMemberCenter()"
								></image>
							</view>
							<view v-if="isMember==1?true:false" class="likeUserItemPar" v-for="Item of likeItem" :key="Item.likeUid">
								<image class="likeUserItem scroll-view-item" 
								:src="Item.icon" mode="aspectFill" 
								@tap="toCheckPeople(Item.likeUid)" ></image>
							</view>
						</scroll-view>
					</view>
				</scroll-view>
			</view>	
		</view>
		
	</view>
</template>

<script>
	import Request from '../../util/luch-request/request.js'
	// import IMController from '../../common/im.js'
	// import NIM from '../../util/NIM_Web_NIM_weixin_v6.8.0.js'
	import common from '../../common/globalVariable.js'
	export default{
		data(){
			return{
				flag:'',
				userList:[],
				msgs:[],
				chatFlag:false,
				isMember:'',
				checkValue:'message',
				matchUserList:[],
				isChatRecord:true,
				chatList:[{}],
				modalName: null,
				listTouchStartX: 0,
				listTouchStartY: 0,
				listTouchDirection: null,
				showScrollbar:true,
				likeUserList:[]
			}	
		},
		onLoad:function(option){
			var THAT = this;
			this.checkValue = 'message';
			console.log(`onLoad ${this.checkValue}`)
			this.isMember = common.isMember;
			// common.chatList.map((cur,index)=>{
			// 	common.nim.getUser({
			// 		account:cur.id.substr(4),
			// 		done:(error, user)=>{
			// 			console.log(user);
			// 			common.chatList[index].avatar = JSON.parse(JSON.stringify(user.avatar));
			// 			common.chatList[index].nick = JSON.parse(JSON.stringify(user.nick));
			// 		}
			// 	})
			// })
			// setTimeout(()=>{
			// 	this.chatList = common.chatList;
			// 	// this.chatList = [].concat(JSON.parse(JSON.stringify(common.chatList)));
			// }, 200);
			// this.flag = setInterval(()=>{
			// 	common.chatList.map((cur,index)=>{
			// 		common.nim.getUser({
			// 			account:cur.id.substr(4),
			// 			done:(error, user)=>{
			// 				// console.log(user);
			// 				common.chatList[index].avatar = JSON.parse(JSON.stringify(user.avatar));
			// 				common.chatList[index].nick = JSON.parse(JSON.stringify(user.nick));
			// 			}
			// 		})
			// 	})
			// 	setTimeout(()=>{
			// 		this.chatList = common.chatList;
			// 		// this.chatList = [].concat(JSON.parse(JSON.stringify(common.chatList)));
			// 	}, 200);
			// },2000)
			// console.log(this.timeStamp(150000)); 
			// console.log(common.nim);
		},
		updated:function () {
			// console.log('updated',common.chatList)
			// console.log('updated',this.chatList)
		},
		onReady:function(){
			console.log(`onReady`)
		},
		onUnload:function(){
			uni.setStorage({
				key:"messageCheckValue",
				data:"message"
			});
			console.log(`onUnload ${this.checkValue}`)
			clearInterval(this.flag);
		},
		onShow:function(option){
			var THAT = this;
			this.getPairList();
			this.getLikeList();
			uni.getStorage({
				key:"messageCheckValue",
				success(e){
					THAT.checkValue=e.data;
					console.log(`onShow ${THAT.checkValue}`)
				}
			})
			common.chatList.map((cur,index)=>{
				common.nim.getUser({
					account:cur.id.substr(4),
					done:(error, user)=>{
						console.log(user);
						common.chatList[index].avatar = JSON.parse(JSON.stringify(user.avatar));
						common.chatList[index].nick = JSON.parse(JSON.stringify(user.nick));
					}
				})
			})
			setTimeout(()=>{
				if(THAT.chatList!=common.chatList){
					THAT.chatList = [].concat(JSON.parse(JSON.stringify(common.chatList)));
				}
				// this.chatList = common.chatList;
			}, 200);
			THAT.flag = setInterval(()=>{
				common.chatList.map((cur,index)=>{
					common.nim.getUser({
						account:cur.id.substr(4),
						done:(error, user)=>{
							// console.log(user);
							common.chatList[index].avatar = JSON.parse(JSON.stringify(user.avatar));
							common.chatList[index].nick = JSON.parse(JSON.stringify(user.nick));
						}
					})
				})
				if(common.chatList.length==0){
					THAT.isChatRecord = false;
				}else{
					THAT.isChatRecord = true;
				}
				setTimeout(()=>{
					if(THAT.chatList!=common.chatList){
						THAT.chatList = [].concat(JSON.parse(JSON.stringify(common.chatList)));
					}
				}, 200);
			},2000)
			// this.chatList=common.chatList
			// setInterval(()=>{
			// 	// if(THAT.chatList!=common.chatList){
			// 	// 	THAT.chatList=common.chatList
			// 	// 	console.log('this.chatList',THAT.chatList)
			// 	// 	console.log('common.chatList',common.chatList)
			// 	// }else if (THAT.chatList ==common.chatList){
			// 	// 	console.log(THAT.chatList)
			// 	// 	console.log(common.chatList)
			// 	// 	console.log('sample')
			// 	// }
			// 	THAT.chatList=common.chatList
			// 	console.log('this.chatList',THAT.chatList)
			// 	console.log('common.chatList',common.chatList)
			// }, 5000);
		},
		onHide:function(){
			clearInterval(this.flag);
		},
		methods:{
			//跳转所有配对用户页面
			toAllPair(){
				uni.navigateTo({
					url:'AllPair',
					success() {
						console.log("success toAllPair");
					},
					fail(){
						console.log("fail toAllPair");
					}
				})
			},
			//跳转聊天室
			toChatRoom(fromNick,userId,avatar,second){
				common.chatList.map((cur,index)=>{
					if(cur.to==userId){
						cur.unread=0;
					}
				})
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
			//消息页面，喜欢页面切换
			checkValueChange(){
				if(this.checkValue==='message'){
					uni.setStorage({
						key:"messageCheckValue",
						data:"like"
					});
					this.checkValue='like';
				}
				else if(this.checkValue==='like'){
					uni.setStorage({
						key:"messageCheckValue",
						data:"message"
					});
					this.checkValue='message';
				}
			},
			//跳转配对聊天室 未使用
			toChatRoomPair(userId,second){
				uni.navigateTo({
					url:`ChatRoomPair?userId=${userId}&second=${second}`,
					// url:'ChatRoomPair?title='+title+'&url='+url,
					success() {
						console.log("success toChatRoomPair");
					},
					fail(){
						console.log("fail toChatRoomPair");
					}
				})
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStartX = e.touches[0].pageX;
				this.listTouchStartY = e.touches[0].pageY;
			},
			// ListTouch计算方向
			ListTouchMove(e) {
				if((e.touches[0].pageX - this.listTouchStartX) > 80 && Math.abs(e.touches[0].pageY - this.listTouchStartY) < 80){
					this.listTouchDirection = 'right'
				}
				else if((e.touches[0].pageX - this.listTouchStartX) < -80 && Math.abs(e.touches[0].pageY - this.listTouchStartY) < 80){
					this.listTouchDirection = 'left'
				}
				// this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},	
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			},
			deleteChatListItem(index){
				this.chatList[index].show=false;
			},
			//跳转查看
			toCheckPeople(id){
				uni.navigateTo({
					url:'CheckPeople?id='+id,
					success() {
						console.log("success toCheckPeople");
					},
					fail(err) {
						console.log(err);
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
						pageSize:20
					}
				}
				http.get('/pairList', params).then(res => {
					console.log(params);
					console.log(res);
					THAT.matchUserList = res.data.result.list;
				}).catch(err => {
					console.log(err);
				})
			},
			//时间戳函数
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
			//获取喜欢列表
			getLikeList(){
				var THAT =this;
				const http = new Request();
				let params={
					params:{
						id:common.userId,
						pageNum:1,
						pageSize:20
					}
				}
				http.get('/likeList', params).then(res => {
					console.log(res);
					// var timestamp = 1527521052;时间戳转换日期
					// var newDate = new Date();
					// newDate.setTime(timestamp * 1000);
					// newDate.toLocaleDateString() 
					let newDate = new Date();
					var nameContainer = {}; // 针对键code进行归类的容器
					res.data.result.map((cur,index)=>{
						newDate.setTime(cur.createTime*1000);
						cur.createTime = newDate.toLocaleDateString();
						nameContainer[cur.createTime] = nameContainer[cur.createTime] || [];
						nameContainer[cur.createTime].push(cur);
					})
					
					let arrWrap = [];
					Object.keys(nameContainer).map(key=>{
					  arrWrap.push(nameContainer[key])
					})
					arrWrap.map((cur,index)=>{
						cur.map((item,ind)=>{
							item.createTime = item.createTime.split('/');
						})
					})
					console.log(arrWrap);
					THAT.likeUserList = arrWrap;
				}).catch(err => {
					console.log(err);
				})
			},
			//跳转会员中心
			toMemberCenter(){
				uni.navigateTo({
					url:'../../pagesB/subPages/memberCenter',
					success: (res) => {
						console.log('success to memberCenter',res);
					},
					fail: (err) => {
						console.log('fail to memberCenter',err);
					}
				})
			}
		}
	}
</script>

<style scoped>
	.header{
		height: 128upx;
		background: #6A2BF8;
	}
	.scroll-view{
		/* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
		white-space: nowrap;
		width: 100%;
	}
	.matchUser{
		width: 100%;
		height: 184upx;
		background-color: #F6F6F6;
	}
	.matchUserItem{
		display: inline-flex;
		height: 120upx;
		width: 120upx;
		box-sizing: border-box; 
		border-radius: 50%;
		padding: 7upx;
		margin: 32upx;
		background-image: linear-gradient(top, #0B47E1 0%, #6819EC 33%, #DB17AF 66%, #F02C64 100%);
	}
	.matchUserItemGray{
		display: inline-flex;
		height: 120upx;
		width: 120upx;
		box-sizing: border-box; 
		border-radius: 50%;
		padding: 7upx;
		margin: 32upx;
		background-image: linear-gradient(top, #DDDDDD 0%, #DDDDDD 33%, #DDDDDD 66%, #DDDDDD 100%);
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
		border: #6A2BF8 solid 3upx;
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
	.likeUser{
		width: 100%;
		height: 350upx;
		background-color: #FFFFFF;
		overflow: hidden;
	}
	.likeUserItemPar{
		display: inline-flex;
		height: 320upx;
		width: 210upx;
		margin: 0upx 20upx 0upx 20upx;
		box-sizing: border-box; 
		border-radius: 20upx;
		/* padding: 7upx; */
		overflow: hidden;
	}
	.likeUserItem{
		display: inline-flex;
		height: 320upx;
		width: 210upx;
		/* margin: 0upx 20upx 0upx 20upx; */
		box-sizing: border-box; 
		border-radius: 20upx;
		/* padding: 7upx; */
		overflow: hidden;
	}
	/* #ifdef MP-WEIXIN*/ /* 条件编译到微信小程序 */
	.scrollView{
		top:128upx;
		right: 0;
		left: 0;
		bottom: 25upx;
		position: fixed;
		height: 90%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	/* #endif */
	/* #ifdef H5*/ /* 条件编译到H5 */
	.scrollView{
		top:128upx;
		right: 0;
		left: 0;
		bottom: 25upx;
		position: fixed;
		height: 85%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	/* #endif */
	.filter{
		filter: blur(5px);
	}
</style>
