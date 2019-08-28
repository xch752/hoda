<template>
	<view class="full">
		<view class="justify-center radius text-center tip">
			<text class="text-center class text-df">Hoda是一个100%真人的社交平台\n</text>
			<text class="text-center class text-bold text-xl">所有人都需要经过真人认证</text>
		</view>
		
		<view class="flex justify-center align-center" 
		style="margin-left: 112upx;width: 526upx;height: 742upx;border:#6A2BF8 solid;border-radius: 20upx;">
			<image class="radius" :src="uploadurl" mode="aspectFill" 
			:class="(uploadurl=='https://static.mianyangjuan.com//add_image@3x.png')?'bg-add':'bg-pic'"
			@click="takePicture">	
			</image>
		</view>
		
		<view class="content">
			<button class="cu-btn round bg-mauve lg padding-xl margin-top-xl" style="width: 520upx;height: 98upx;padding: 20upx 0 20upx 0;"
			@click="toHeight">
			{{msg}}
			</button>
		</view>
		
	</view>
</template>

<script>
	import common from '../../common/globalVariable.js'
	export default {
		data(){
			return {
				msg:'下一步',
				uploadurl:'https://static.mianyangjuan.com//add_image@3x.png'
			}
		},
		onLoad: function (options){

		},
		onUnload:function(){
			common.uploadCertification=this.uploadurl;

		},
		methods:{
			takePicture(){
				var THAT=this;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['camera'], //拍照
				    success: function (res) {
						THAT.uploadurl=res.tempFilePaths[0]
						console.log(THAT.uploadurl);
				    },
					fail: function(err){
						console.log(JSON.stringify(err));
					}
				});				
			},
			toHeight(){
				if(!(this.uploadurl==='https://static.mianyangjuan.com//add_image@3x.png')){
					uni.reLaunch({
						url:'Height',
						success() {
							console.log("success toHeight");
						},
						fail(){
							console.log("fail toHeight");
						}
					})
				}
				else{
					uni.showToast({
						title:"请上传真人照片",
						icon:"none"
					})
				}
				
			}
		}
	}
</script>

<style scoped>
	.text-xl{
		letter-spacing:5upx
	}
	/* .full{
		top:0;
		position: fixed;
		height: 100%;
		width: 100%;
		display:flex;
		flex-direction:column;
		background-color: #ffffff;
		margin: 0;
	} */
	/* .tip{
		margin-top:25upx;
	} */
	.radius{
		border-radius: 20upx;
	}
	.bg-add{
		height: 100upx;
		width: 100upx;
	}
	.bg-pic{
		width: 526upx;
		height: 742upx;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
