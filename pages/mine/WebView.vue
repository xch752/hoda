<template>
	<web-view :src="url"></web-view>
</template>

<script>
	export default{
		data(){
			return {
				url:'https://sj.qq.com/myapp/detail.htm?apkName=com.honey.jiaoyou'
			}
		},
		onLoad:function(option){
			if(option.system=='iOS'){
				this.url="https://apps.apple.com/cn/app/hoda-在最真实的小世界里追ta/id1459514761"
			}
			else{
				this.url="https://sj.qq.com/myapp/detail.htm?apkName=com.honey.jiaoyou"
			}
		}
	}
</script>

<style scoped>
</style>
