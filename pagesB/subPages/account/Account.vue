<template>
	<view class="full">
		<view class="flex justify-center" style="margin: 85upx 0 65upx 0;">
			<text class="text-gray text-df">请输入您的{{title}}账号</text>
		</view>
		<view class="flex justify-center text-center">
			<input class="solid-bottom" type="text" :placeholder="'您的'+title+'账号'" v-model="account" />
		</view>
		<view class="flex justify-center">
			<button @click="postAccount()" class="cu-btn round bg-mauve lg padding-xl margin-top-xl" style="width: 560upx;padding: 20upx 0 20upx 0;">确定</button>
		</view>
		<view class="flex justify-center text-center margin-top-sm">
			<text class="text-gray text-sm" style="line-height: 50upx;">若您填写该账号,与您匹配的会员用户可查看账号信息。\n若您需要关闭,下载我们的APP进行关闭显示设置。</text>
		</view>
	</view>
</template>

<script>
	import common from '../../../common/globalVariable.js'
	import Request from '../../../util/luch-request/request.js'
	export default{
		data(){
			return {
				title:'',
				account:'',
				F:'',
				T:'',
				I:'',
				L:'',
				W:'',
			}
		},
		onLoad: function (option) {
			console.log(option)
			this.title=option.title;
			console.log(this.title)
			console.log(option.title)
			uni.setNavigationBarTitle({
				 title: `添加${this.title}`
			})
		},
		methods:{
			postAccount(){
				let params;
				switch (this.title){
					case 'Facebook':
						params={
							id:common.userId,
							F:this.account
						}
						break;
					case 'Twitte':
						params={
							id:common.userId,
							T:this.account
						}
						break;
					case 'Instagram':
						params={
							id:common.userId,
							I:this.account
						}
						break;
					case 'Line':
						params={
							id:common.userId,
							L:this.account
						}
						break;
					case 'WeChat':
						params={
							id:common.userId,
							W:this.account
						}
						break;
					default:
						break;
				}
				const http = new Request();
				console.log(params);
				http.post('/user', {},{
					params:params,
					header: {
					  'Content-Type': 'application/json;charset=UTF-8'
					},
					dataType: 'json',
					responseType: 'text'
				}).then(res => {
					console.log(res);
					if(res.data.result.result==1){
						uni.showToast({
							title:'修改成功'
						})
						setTimeout(()=>{
							uni.navigateBack({
								delta:1
							})
						},1500)
					}else{
						uni.showToast({
							title:'请重试'
						})
					}
				}).catch(err =>{
					console.log(err);
				})
			}
			
		}
	}
</script>

<style scoped>
	input{
		font-size: 29upx;
	}
</style>
