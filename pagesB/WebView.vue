<!-- webview -->
<template>
	<web-view :src="url"></web-view>
</template>

<script>
	export default{
		data(){
			return {
				url:'https://a.app.qq.com/o/simple.jsp?pkgname=com.honey.jiaoyou',
			}
		},
		//webview 页面推广
		//安卓跳转应用宝 苹果跳转APP store
		//需要在微信公众平台配置业务域名
		onLoad:function(option){
			if(option.system=='iOS'){
				this.url="https://apps.apple.com/cn/app/%C4%E3%CE%D2near-%D5%E6%C8%CB%D4%BC%BB%E1%BD%BB%D3%D1%C8%ED%BC%FE/id1459514761"
				// this.url="https://a.app.qq.com/o/simple.jsp?pkgname=com.honey.jiaoyou"
			}
			else{
				// this.url="https://apps.apple.com/cn/app/hoda-在最真实的小世界里追ta/id1459514761"
				this.url="https://a.app.qq.com/o/simple.jsp?pkgname=com.honey.jiaoyou"
			}
			console.log(this.url)
		}
	}
</script>

<style scoped>
</style>
