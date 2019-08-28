<template>
	<view class="full">
		<view class="justify-center radius text-center tip">
			<text class="text-center class">昵称和年龄都不可更改，请务必认真填写</text>
		</view>
		
		<view class="flex padding justify-center">
			<image :src="uploadAvatarUrl" mode="aspectFill" style="width: 220upx;height: 220upx;border-radius: 220upx;" @click="takePicture"></image>
		 </view>
		 
		 <view class="flex content justify-center">
		 	<view class="cu-form-group" style="padding:30upx 0 30upx 0;">
		 		<input class="align-center text-center"
				 placeholder="请填写您的昵称,限制10字"
				 name="input" 
				 style="text-align: center;font-size: 35upx;"
				 v-model="nickName"></input>
		 	</view>
		 	<!-- <view class="cu-form-group solid-bottom" style="padding: 30upx 0 30upx 0;">
		 		<input class="align-center text-center" placeholder="请选择您的年龄" name="input"></input>
		 	</view> -->
			<view class="flex justify-center cu-form-group solid-bottom" style="padding: 30upx 0 30upx 0;">
				<picker class="flex justify-center text-center" mode="date" :value="date" start="1950-09-01" end="2020-09-01" style="width:100upx" @change="DateChange">
					<input class="picker"
					 placeholder="请选择您的年龄" 
					 name="input" 
					 v-model="date" 
					 disabled="true"
					 style="text-align: center;font-size: 35upx;"></input>
				</picker>
			</view>
		 	<button 
			class="cu-btn round bg-mauve lg padding-xl margin-top-xl" 
			style="width: 520upx;height:98upx;padding: 20upx 0 20upx 0;"
			@click="toCertiFication">
			下一步
			</button>
		 </view>	
	</view>
</template>

<script>
	import common from '../../common/globalVariable.js'
	export default {
		data(){
			return{
				nickName:'',//昵称
				date: '',//年龄 出生日期
				// gender:''
				uploadAvatarUrl:'https://static.mianyangjuan.com//Upload_Avatar@3x.png'
			}
		},
		onLoad: function (options){
			// this.gender=options.gender;
			// console.log(this.gender);
		},
		onHide:function(){
			common.uploadAvatar=this.uploadAvatarUrl

		},
		methods:{
			toCertiFication(){
				if(this.uploadAvatarUrl==='https://static.mianyangjuan.com//Upload_Avatar@3x.png'){
					uni.showToast({
						title:"请选择头像",
						icon:"none"
					})
				}
				else if(!this.nickName){
					uni.showToast({
						title:"请输入昵称",
						icon:"none"
					})
				}
				else if(!this.date){
					uni.showToast({
						title:"请选择年龄",
						icon:"none"
					})
				}
				else{
					var THAT = this;
					uni.navigateTo({
						url:'Certification',
						success() {
							console.log("success toCertification");
							console.log(`昵称:${THAT.nickName} 年龄:${THAT.date}`)
						},
						fail(){
							console.log("fail toCertification");
						}
					})
				}
				
			},
			takePicture(){
				var THAT=this;
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //拍照
				    success: function (res) {
						THAT.uploadAvatarUrl=res.tempFilePaths[0],
						console.log(THAT.uploadAvatarUrl);
				    },
					fail: function(err){
						console.log(JSON.stringify(err));
					}
				});
			},
			DateChange(e) {
				this.date = e.detail.value
			},
		},
	}
</script>

<style scoped>
	picker{
		padding-right:0;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
