<template>
	<view class="full">
		<scroll-view scroll-y="true" class="chatList flex scroll-view" >
			<view class="chatListItem scroll-view-item" v-for="item of allMatchUserList" :key="item.id" @click="toChatRoomPair(item.title,item.url)">
				<view class="chatListItemDetail flex justify-start">
					<image :src="item.url"></image>
					<view>
						<view class="chat-title text-black text-lg text-bold">{{item.title}}</view>
						<view class="chat-content text-gray text-sm margin-top-xs">配对时间剩余{{item.day}}天{{item.hour}}小时</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				allMatchUserList:[
					{
						id:0,
						url:'http://img.qqzhi.com/uploads/2018-12-05/095314426.jpg',
						title:'星星',
						day:6,
						hour:9
					},
					{
						id:1,
						url:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1017590850,3664578715&fm=26&gp=0.jpg',
						title:'可可',
						day:5,
						hour:4
					},
					{
						id:2,
						url:'http://img3.imgtn.bdimg.com/it/u=2708783067,814977852&fm=15&gp=0.jpg',
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
						url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2744267305,3823782124&fm=26&gp=0.jpg',
						title:'依依',
						day:6,
						hour:5
					},
					{
						id:6,
						url:'https://static.mianyangjuan.com//Facebook_lg_@3x.png',
						title:'克克',
						day:6,
						hour:9
					},
					{
						id:7,
						url:'https://static.mianyangjuan.com//WeChat_lg_@3x.png',
						title:'兮兮',
						day:3,
						hour:9
					},
					{
						id:8,
						url:'https://static.mianyangjuan.com//Telephone_lg_@3x.png',
						title:'依依',
						day:2,
						hour:9
					},
					{
						id:9,
						url:'https://static.mianyangjuan.com//Facebook_lg_@3x.png',
						title:'克克',
						day:4,
						hour:12
					}
				],
			}
		},
		onLoad:function(){
			
		},
		methods:{
			toChatRoomPair(title,url){
				uni.navigateTo({
					url:`ChatRoomPair?title=${title}&url=${url}`,
					success() {
						console.log("success toChatRoomPair");
					},
					fail(){
						console.log("fail toChatRoomPair");
					}
				})
			}
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
</style>
