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
		onLoad:function(option){
			if(option.system=='iOS'){
				this.url="https://apps.apple.com/cn/app/hoda-messenger-%E5%90%8C%E5%9F%8E%E6%88%80%E6%84%9B%E4%BA%A4%E5%8F%8B%E8%BB%9F%E9%AB%94/id1459514761"
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
