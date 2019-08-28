<template>
	<view class="full">
		<view class="flex justify-center align-center">
			<button class="text-white btn-download" type="primary">立即下载</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		onLoad() {
			
		},
		methods:{

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
		background: url(../../static/img/组172@3x.png) no-repeat;
		background-size: 100%;
	}
	.btn-download{
		position: fixed;
		top:41.43%;
		background: linear-gradient(90deg, #9364FD, #545CF4); /* 标准的语法 */
		width: 340upx;
		height: 66upx;
		border-radius: 66upx;
		text-align: center;
		align-items: center;
		line-height: 66upx;
		font-size: 28upx;
	}
</style>
