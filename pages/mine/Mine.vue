<template>
	<view class="full">
		<view class="header">
			<view class="flex margin-top-xl" style="margin-top: 60upx;">
				<view class="flex-twice"><view class="text-white text-df margin-top-sm suggestion" @click="toPreview()">预览</view></view>
				<view class="flex-treble"><view class="text-white text-xl text-center">我的中心</view></view>
				<view class="flex-twice"></view>
			</view>
			<view class="flex margin-top-xl margin-left-xl align-center">
				<image class="avatar" :src="avatarUrl" mode="aspectFill"></image>
				<view class="margin-left-xl text-center text-white text-xl text-bold">{{userName}}</view>
				<image v-if="isMember" class="vipStatus margin-left-sm" src="https://static.mianyangjuan.com//vip@3x.png" mode="aspectFill"></image>
				<image v-if="certificationStatus" class="cerStatus margin-left-sm" src="https://static.mianyangjuan.com//Certification@3x.png" mode="aspectFill"></image>
			</view>
		</view>

		<view class="item flex padding justify-between align-center" @click="toWhoLikeMe()">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//whoLikeMe@3x.png" mode="aspectFill" style="width: 46upx;height: 46upx;"></image>
				<view class="text-black text-lg text-bold padding-left-lg">
					喜欢我的人
				</view>
			</view>
			<view><image src="https://static.mianyangjuan.com//right_arrow@3x.png" mode="aspectFit" style="width: 26upx;height: 26upx;"></image></view>
		</view>
		
		<view class="item flex padding justify-between align-center" @click="toMemberCenter()">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//member_center@3x.png" mode="aspectFill" style="width: 46upx;height: 46upx;"></image>
				<view class="text-black text-lg text-bold padding-left-lg">
					会员中心
				</view>
			</view>
			<view><image src="https://static.mianyangjuan.com//right_arrow@3x.png" mode="aspectFit" style="width: 26upx;height: 26upx;"></image></view>
		</view>
		
		<view class="item flex padding justify-between align-center" @click="toDownloadApp()">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//personal_data@3x.png" mode="aspectFill" style="width: 46upx;height: 46upx;"></image>
				<view class="text-black text-lg text-bold padding-left-lg">
					完善资料
				</view>
			</view>
			<view><image src="https://static.mianyangjuan.com//right_arrow@3x.png" mode="aspectFit" style="width: 26upx;height: 26upx;"></image></view>
		</view>
		
		<view class="item flex padding justify-between align-center" @click="toTripartiteAccount()">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//tripartite_Account@3x.png" mode="aspectFill" style="width: 46upx;height: 46upx;"></image>
				<view class="text-black text-lg text-bold padding-left-lg">
					添加账号
				</view>
			</view>
			<view><image src="https://static.mianyangjuan.com//right_arrow@3x.png" mode="aspectFit" style="width: 26upx;height: 26upx;"></image></view>
		</view>
		
		<view class="item flex padding justify-between align-center" @click="toFeedback()">
			<view class="flex justify-start">
				<image src="https://static.mianyangjuan.com//feedback@3x.png" mode="aspectFill" style="width: 46upx;height: 46upx;"></image>
				<view class="text-black text-lg text-bold padding-left-lg">
					意见反馈
				</view>
			</view>
			<view><image src="https://static.mianyangjuan.com//right_arrow@3x.png" mode="aspectFit" style="width: 26upx;height: 26upx;"></image></view>
		</view>
		
		<view class="flex justify-center margin-top-xl" @click="toDownloadApp()">
			<image src="https://static.mianyangjuan.com//Promotion@3x.png" mode="aspectFit" style="width: 700upx;height: 178upx;"></image>
		</view>
	</view>
</template>

<script>
	import Request from '../../util/luch-request/request.js'
	import common from '../../common/globalVariable.js'
	export default{
		data(){
			return{
				certificationStatus:'',
				isMember:'',
				userId:'',
				userName:'',
				avatarUrl:'',
			}
		},
		onLoad(){
			this.userId = common.userId;
			console.log(this.userId);
			
			var THAT = this;
			const http = new Request();
			let params={
				params:{
					id:THAT.userId,
					cerStatus:''
				}
			}
			http.get('/user', params).then(res => {
				console.log(params);
				console.log(res);
			 	THAT.userName = res.data.result.user.userName;
				THAT.avatarUrl = res.data.result.user.icon;
				THAT.certificationStatus = res.data.result.user.certificationStatus==5?true:
				res.data.result.user.certificationStatus==2?true:false;
				THAT.isMember = res.data.result.user.isMember==1?true:false;
				console.log('THAT.certificationStatus',THAT.certificationStatus,'THAT.isMember',THAT.isMember)
			}).catch(err => {
				console.log(err);
			})
		},
		methods:{
			toPreview(){
				uni.navigateTo({
					url:'../../pagesB/Preview',
					success() {
						console.log("success toPreview");
					},
					fail(){
						console.log("fail toPreview");
					}
				})
			},
			toWhoLikeMe(){
				uni.switchTab({
					url:'../message/Message',
					sucess(){
						console.log("sucess Message");
					},
					fail(err){
						console.log("fail Message");
						console.log(err);
					},
					complete(){
						uni.setStorage({
							key:"messageCheckValue",
							data:"like"
						});
						console.log("complete")
					}
				})
			},
			toMemberCenter(){
				uni.navigateTo({
					url:'../../pagesB/subPages/memberCenter',
					success() {
						console.log("success toMemberCenter");
					},
					fail(){
						console.log("fail toMemberCenter");
					}
				})
			},
			// toImproveData(){
			// 	uni.navigateTo({
			// 		url:'DownloadApp',
			// 		success() {
			// 			console.log("success toDownloadApp");
			// 		},
			// 		fail(){
			// 			console.log("fail toDownloadApp");
			// 		}
			// 	})
			// },
			toTripartiteAccount(){
				uni.navigateTo({
					url:'../../pagesB/subPages/tripartiteAccount',
					success() {
						console.log("success toTripartiteAccount");
					},
					fail(){
						console.log("fail toTripartiteAccount");
					}
				})
			},
			toLogin(){
				uni.showModal({
				    title:'确定退出',
				    content:'您确定要退出吗?',
				    success:function(res){
				        if(res.confirm){
				            uni.reLaunch({//加载登陆页面
								url:'../login/login',
								success() {
									console.log("success toLogin");
								},
								fail(){
									console.log("fail toLogin");
								}
							})
				        }
						else if(res.cancel){
				            console.log('用户点击取消');
				        }
				    }
				});				
			},
			toDownloadApp(){
				uni.navigateTo({
					url:'../../pagesB/DownloadApp',
					sucess(){
						console.log("sucess toDownloadAPP");
					},
					fail(){
						console.log("fail toDownloadAPP");
					}
				})
			},
			toFeedback(){
				uni.navigateTo({
					url:'../../pagesA/setBasicInfor/Feedback',
					sucess(){
							console.log("sucess toFeedback");
					},
					fail(){
							console.log("fail toFeedback");
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
		background-color: #FFFFFF; 
	}
	.suggestion{
		margin-left: 50upx;
		letter-spacing:2upx;
	}
	.header{
		height: 395upx;
		background: #6A2BF8;
	}
	.avatar{
		width: 162upx;
		height: 162upx;
		border-radius: 50%;
		border:4upx solid #FFFFFF;
	}
	.vipStatus{
		width:30upx;
		height: 30upx;
	}
	.cerStatus{
		width:30upx;
		height: 30upx;
	}
	.item{
		padding-top: 40upx;
		padding-right: 50upx;
		padding-left: 50upx;
		height: 9%;/*百分比占高,为了适配Pad,若不适配Pad,可以使用单位upx,更加美观*/
		width: 100%;
	}
</style>
