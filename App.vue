<script>
	export default {
		globalData: {  
			netcallController:null 
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 
		引入colorUI 
		在coolrUI目录下
	*/
	 @import "colorui/main.css";
	 @import "colorui/icon.css";
	 @import "common/theme.css"
	/*每个页面公共css */
</style>
