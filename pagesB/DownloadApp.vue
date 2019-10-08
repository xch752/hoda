<template>
	<view class="full">
		<view class="bg-top flex justify-center text-white" style="background: url(https://static.mianyangjuan.com//download-top.png);background-repeat:no-repeat;background-size: 100% 100%;width: 750upx;height: 627upx;">
			<text class="conduct-text">享受完整APP功能体验马上下载</text>
			<view class="flex justify-center align-center">
				<button @click="toDownloadUrl()" class="text-white btn-download" type="primary">
					立即下载
				</button>
			</view>
		</view>
		<view class="bg-bottom" style="background: url(https://static.mianyangjuan.com//download-bottom.png);background-repeat:no-repeat;background-size: 80% 100%;width: 750upx;height: 564upx;"></view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				url: 'https://a.app.qq.com/o/simple.jsp?pkgname=com.honey.jiaoyou',
				system:''
			}
		},
		onLoad() {
			this.determiningSystem();
		},
		methods:{
			determiningSystem(){
				var THAT = this;
				uni.getSystemInfo({
				    success: function (res) {
						if(res.system.includes("iOS")){
							THAT.system="iOS";
						}
						else{
							THAT.system="Android";
						}
				    }
				});
			},
			toDownloadUrl(){
				// #ifdef H5 
				window.location.href = this.url;
				// #endif  
				// app跳转
				// plus.runtime.openURL(this.url, function(res){
				// 	uni.showToast({
				// 		title:'跳转失败'
				// 	})
				// });  
				// #ifdef MP-WEIXIN
				uni.navigateTo({
					url:'WebView?system='+this.system,
					success() {
						console.log("success");
					},
					fail(err) {
						console.log(err);
					}
				})
				// #endif  
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
	.btn-download{
		position: fixed;
		top:449upx;
		background: linear-gradient(90deg, #9364FD, #545CF4); 
		width: 340upx;
		height: 66upx;
		border-radius: 66upx;
		text-align: center;
		align-items: center;
		line-height: 66upx;
		font-size: 28upx;
	}
	.bg-top{
		position: fixed;
		top:0;
	}
	.conduct-text{
		position: fixed;
		top:384upx;
	}
	.bg-bottom{
		position:fixed;
		bottom: 0;
		left: 75upx;
		right: 0;
		margin: 0 auto;
	}
</style>
