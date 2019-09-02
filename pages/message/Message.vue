<template>
	<view class="full">
		<!-- 消息 -->
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
				<scroll-view scroll-x="true" class="matchUser flex scroll-view" >
				<view class="matchUserItem scroll-view-item" style="margin: 32upx" @click="toAllPair()">
					<view class="matchUserItemContent flex align-center justify-center">
						<view class="flex justify-center align-center" style="width: 94%;height: 94%; border-radius: 50%;background-color: #FFFFFF;">
							<view class="text-bold text-xl" 
							style="background: linear-gradient(to bottom,blue,red);-webkit-text-fill-color: transparent;-webkit-background-clip: text;font-style: italic"><text>ALL</text></view>
						</view>
					</view>
				</view>
				</scroll-view>
				<scroll-view scroll-x="true" class="matchUser flex scroll-view" style="width: 566upx;">
					<view class="matchUserItem scroll-view-item" v-for="item of matchUserList" :key="item.id" @click="toChatRoomPair(item.title,item.url)">
						<view class="matchUserItemContent flex align-center justify-center">
							<view style="width: 94%;height: 94%; border-radius: 50%;" :style="{ 'background-image': 'url(' + item.url + ')','background-repeat':'no-repeat','background-size':'cover' }"></view>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 消息 -->
			<view>
				<view class="flex justify-start padding-top padding-left-lg text-bold text-df solid-bottom"
				style="height: 96upx;">
					消息
				</view>
			</view>
			<!-- 没有聊天记录 -->
			<view class="flex justify-center align-center chatchoose" v-if="!isChatRecord">
				<view style="text-align:center">
					<image src="https://static.mianyangjuan.com//no_Chat_@3x.png" mode="aspectFit" style="width: 120upx;height: 126upx;"></image>
					<view class="text-gray text-sm margin-top-sm">还没有聊天记录</view>
				</view>
			</view>
			<!-- 有聊天记录 -->
			<view class="flex chatchoose" v-if="isChatRecord">
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
						 v-if="item.show">
							<view class="cu-avatar round lg" 
							@click="toChatRoom(item.title)"
							:style="{'background':'#FFFFFF', 'background-image': 'url(' + item.url + ')','background-repeat':'no-repeat','background-size':'cover' }"></view>
							<view class="content" @click="toChatRoom(item.title)">
								<view class="text-black text-bold">{{item.title}}</view>
								<view class="text-gray text-sm">
									<!-- <text class="cuIcon-infofill text-red  margin-right-xs"></text> -->
									{{item.content}}
								</view>
							</view>
							<view class="action" @click="toChatRoom(item.title)">
								<view class="text-grey text-xs">22:20</view>
								<view class="cu-tag round bg-grey sm">5</view>
							</view>
							<view class="move">
								<!-- <view class="bg-grey">置顶</view> -->
								<view class="bg-red" @click="deleteChatListItem(index)">删除</view>
							</view>
						</view>
					</view>	
				</scroll-view>
			</view>
		</view>
		<!-- 喜欢 -->
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
					<view v-for="likeItem of likeUserList" :key="likeItem.date">
						<view class="flex justify-start">
							<view class="margin-sm"><text class="text-bold text-lg">{{likeItem.day}}</text>/{{likeItem.mounth}}月</view>
						</view>
						<scroll-view scroll-x="true" class="likeUser flex scroll-view" style="width: 100%;">
							<view class="likeUserItem scroll-view-item" 
							v-for="item of likeItem.data" :key="item.id"
							@click="toCheckPeople()"
							:style="{ 'background-image': 'url(' + item.url + ')','background-repeat':'no-repeat','background-size':'cover'}">
								
							</view>
						</scroll-view>
					</view>
				</scroll-view>
			</view>	
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				checkValue:'message',
				matchUserList:[
					{
						id:0,
						url:'https://c-ssl.duitang.com/uploads/item/201806/15/20180615090826_jogfw.thumb.700_0.jpeg',
						title:'星星',
						day:6,
						hour:9
					},
					{
						id:1,
						url:'https://c-ssl.duitang.com/uploads/item/201806/15/20180615090825_umwpk.thumb.700_0.jpeg',
						title:'可可',
						day:5,
						hour:4
					},
					{
						id:2,
						url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184442_skijn.thumb.700_0.jpeg',
						title:'露露',
						day:6,
						hour:9
					},
					{
						id:3,
						url:'http://p.store.itangyuan.com/p/chapter/attachment/4B6uegEtef/EgfwEtMwEgbt4BIu4gITelu4KNsdH69RKgiVHhy381iuG1aSiTuF6b2.jpg',
						title:'西西',
						day:6,
						hour:14
					},
					{
						id:4,
						url:'http://pic2.zhimg.com/50/v2-d0a633461de5f57127628eee0d38d2e6_hd.jpg',
						title:'兮兮',
						day:5,
						hour:21
					},
					{
						id:5,
						url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184443_xooqg.thumb.700_0.jpeg',
						title:'依依',
						day:6,
						hour:5
					},
					{
						id:6,
						url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184443_kukeg.thumb.700_0.jpeg',
						title:'克克',
						day:6,
						hour:9
					},
					{
						id:7,
						url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184444_tmmzm.thumb.700_0.jpeg',
						title:'兮兮',
						day:3,
						hour:9
					},
					{
						id:8,
						url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184445_xrkla.thumb.700_0.jpeg',
						title:'依依',
						day:2,
						hour:9
					},
					{
						id:9,
						url:'https://c-ssl.duitang.com/uploads/item/201807/16/20180716125817_nddwp.jpeg',
						title:'克克',
						day:4,
						hour:12
					}
				],
				isChatRecord:true,
				chatList:[
					{
						id:0,
						url:'https://c-ssl.duitang.com/uploads/item/201806/15/20180615090826_jogfw.thumb.700_0.jpeg',
						title:'可可',
						content:'你好！',
						show:true,
					},
					{
						id:1,
						url:'https://c-ssl.duitang.com/uploads/item/201806/15/20180615090825_umwpk.thumb.700_0.jpeg',
						title:'星星',
						content:'很高兴认识你',
						show:true,
					},
					{
						id:2,
						url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184442_skijn.thumb.700_0.jpeg',
						title:'露露',
						content:'你好，在吗',
						show:true,
					},
					{
						id:3,
						url:'http://p.store.itangyuan.com/p/chapter/attachment/4B6uegEtef/EgfwEtMwEgbt4BIu4gITelu4KNsdH69RKgiVHhy381iuG1aSiTuF6b2.jpg',
						title:'西西',
						content:'hello',
						show:true,
					},
					{
						id:4,
						url:'http://pic2.zhimg.com/50/v2-d0a633461de5f57127628eee0d38d2e6_hd.jpg',
						title:'兮兮',
						content:'你好',
						show:true,
					},
					{
						id:5,
						url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184443_xooqg.thumb.700_0.jpeg',
						title:'依依',
						content:'在吗',
						show:true,
					},
					{
						id:6,
						url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184443_kukeg.thumb.700_0.jpeg',
						title:'克克',
						content:'你好！',
						show:true,
					},
					{
						id:7,
						url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184444_tmmzm.thumb.700_0.jpeg',
						title:'兮兮',
						content:'很高兴认识你',
						show:true,
					},
					{
						id:8,
						url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184445_xrkla.thumb.700_0.jpeg',
						title:'依依',
						content:'你好，在吗',
						show:true,
					},
					{
						id:9,
						url:'https://c-ssl.duitang.com/uploads/item/201807/16/20180716125817_nddwp.jpeg',
						title:'克克',
						content:'hello',
						show:true,
					},
					{
						id:10,
						url:'http://pic.qqtn.com/up/2017-12/15133953058033827.jpg',
						title:'欣欣',
						content:'你好',
						show:true,
					},
					{
						id:11,
						url:'https://c-ssl.duitang.com/uploads/item/201908/17/20190817211439_ZUnkU.jpeg',
						title:'露露',
						content:'在吗',
						show:true,
					}
					
				],
				modalName: null,
				listTouchStartX: 0,
				listTouchStartY: 0,
				listTouchDirection: null,
				showScrollbar:true,
				likeUserList:[
					{
						day:'27',
						mounth:'08',
						data:[
							{
								id:0,
								url:'http://pic2.zhimg.com/50/v2-d0a633461de5f57127628eee0d38d2e6_hd.jpg',
								show:true,
							},
							{
								id:1,
								url:'https://c-ssl.duitang.com/uploads/item/201806/15/20180615090826_jogfw.thumb.700_0.jpeg',
								show:true,
							},
							{
								id:2,
								url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567674597&di=dce782555bed0bbd66c5e9223e5d0a14&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F07%2F20180207212343_XB3Te.jpeg',
								show:true,
							},
							{
								id:3,
								url:'http://p.store.itangyuan.com/p/chapter/attachment/4B6uegEtef/EgfwEtMwEgbt4BIu4gITelu4KNsdH69RKgiVHhy381iuG1aSiTuF6b2.jpg',
								show:true,
							}
						]
					},
					{
						day:'20',
						mounth:'08',
						data:[
							{
								id:0,
								url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184442_skijn.thumb.700_0.jpeg',
								show:true,
							},
							{
								id:1,
								url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184443_xooqg.thumb.700_0.jpeg',
								show:true,
							}
						]
					},
					{
						day:'27',
						mounth:'07',
						data:[
							{
								id:1,
								url:'http://img3.imgtn.bdimg.com/it/u=2708783067,814977852&fm=15&gp=0.jpg',
								show:true,
							}
						]
					},
					{
						day:'15',
						mounth:'07',
						data:[
							{
								id:0,
								url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184443_kukeg.thumb.700_0.jpeg',
								show:true,
							},
							{
								id:1,
								url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184444_tmmzm.thumb.700_0.jpeg',
								show:true,
							},
							{
								id:2,
								url:'https://c-ssl.duitang.com/uploads/item/201806/14/20180614184445_xrkla.thumb.700_0.jpeg',
								show:true,
							}
							
						]
					},
						
				],
			}	
		},
		onLoad:function(option){
			this.checkValue = 'message';
			console.log(`onLoad ${this.checkValue}`)
		},
		onUnload:function(){
			uni.setStorage({
				key:"messageCheckValue",
				data:"message"
			});
			console.log(`onUnload ${this.checkValue}`)
		},
		onShow:function(option){
			var THAT = this;
			uni.getStorage({
				key:"messageCheckValue",
				success(e){
					THAT.checkValue=e.data;
					console.log(`onShow ${THAT.checkValue}`)
				}
			})
		},
		// onHide:function(){
		// 	uni.setStorage({
		// 		key:"messageCheckValue",
		// 		data:"message"
		// 	});
		// 	console.log(`onHide ${this.checkValue}`)
		// },
		methods:{
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
			toChatRoom(title){
				uni.navigateTo({
					url:'ChatRoom?title='+title,
					success() {
						console.log("success toChatRoom");
					},
					fail(){
						console.log("fail toChatRoom");
					}
				})
			},
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
			toChatRoomPair(title,url){
				uni.navigateTo({
					url:`ChatRoomPair?title=${title}&url=${url}`,
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
			toCheckPeople(){
				uni.navigateTo({
					url:'CheckPeople',
					success() {
						console.log("success toCheckPeople");
					},
					fail(err) {
						console.log(err);
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
	}
	.likeUserItem{
		display: inline-flex;
		height: 300upx;
		width: 200upx;
		margin: 0upx 25upx 0upx 25upx;
		box-sizing: border-box; 
		border-radius: 20upx;
		padding: 7upx;
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
</style>
