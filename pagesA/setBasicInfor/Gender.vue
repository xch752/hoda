<template>
	<view class="full">
		<view class="justify-center radius text-center tip margin-bottom-xl">
			<text class="text-center class">性别选定后不可更改，请认真填写</text>
		</view>
		
		<view class="flex  p-xs margin-bottom-sm mb-sm" id="genderSelector">
			<view class="flex-twice padding-sm margin-xs radius" @click="maleCheck">
				<view class="cu-avatar xl round margin-left" :class="grayMale">
				</view>
			</view>
			<view class="flex-sub padding-sm margin-xs radius"></view>
			<view class="flex-twice padding-sm margin-xs radius" @click="femaleCheck">
				<view class="cu-avatar xl round margin-left" :class="grayFemale" >
				</view>
			</view>
		</view>
		
		<view class="justify-center flex  p-xs margin-bottom-sm mb-sm" style="margin: 50upx 50upx;">
			<view class="flex-twice padding-sm margin-xs radius">
				<view class="flex padding justify-center">
					<text class="text-center" id="male" :class="fontMale">男士</text>
				</view>
			</view>
			<view class="flex-sub padding-sm margin-xs radius"></view>
			<view class="flex-twice padding-sm margin-xs radius">
				<view class="flex padding justify-center">
					<text class="text-center" id="female" :class="fontFemale">女士</text>
				</view>
			</view>
		</view>
		
		<view class="content">
			<button class="cu-btn round bg-mauve lg padding-xl content text-center" 
			style="width: 520upx;height:98upx;padding: 20upx 0 20upx 0;margin-top:50upx;"
			@click="toNickName">
				下一步
			</button>
		</view>
		
	</view>
</template>

<script>
	import common from '../../common/globalVariable.js'
	export default {
		data(){
			return {
				grayMale:'grayMale',//男性灰度class
				grayFemale:'grayFemale',//女性灰度class
				fontMale:'text-grey',//男性字体颜色
				fontFemale:'text-grey',//女性字体颜色
				genderCheck:'',//1男性 2女性
			}
		},
		onLoad() {

		},
		methods: {
			maleCheck(){
				this.genderCheck=1;
				this.grayMale='colorMale';
				this.grayFemale='grayFemale';
				this.fontMale='text-mauve'
				this.fontFemale='text-grey'
				console.log(this.genderCheck);
			},
			femaleCheck(){
				this.genderCheck=2;
				this.grayMale='grayMale';
				this.grayFemale='colorFemale';
				this.fontMale='text-grey'
				this.fontFemale='text-mauve'
				console.log(this.genderCheck);
			},
			toNickName(){
				if(this.genderCheck==1){
					uni.navigateTo({
						url:'NickName?gender=male',
						success() {
							common.sex = 2;
							console.log('common.sex',common.sex);
							console.log("success toNickName male");
						},
						fail(){
							console.log("fail toNickName male")
						}
					})
				}
				else if(this.genderCheck==2){
					uni.navigateTo({
						url:'NickName?gender=female',
						success() {
							common.sex = 2;
							console.log('common.sex',common.sex);
							console.log("success toNickName female");
						},
						fail(){
							console.log("fail toNickName female")
						}
					})
				}
				else{
					uni.showToast({
						title:"请选择性别",
						icon:"none"
					})
				}
			}
		}
	}
</script>

<style scoped>
	#genderSelector{
		margin: 100upx 50upx 0 50upx;
	}
	.grayMale{
		background: url(https://static.mianyangjuan.com//male_nocheck@3x.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.grayFemale{
		background: url(https://static.mianyangjuan.com//female_nocheck@3x.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.colorMale{
		background: url(https://static.mianyangjuan.com//male_check@3x.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.colorFemale{
		background: url(https://static.mianyangjuan.com//female_check@3x.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
