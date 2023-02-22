<script>
	export default {
		onLaunch: function() {
		},
		onShow: function() {
		},
		onHide: function() {
		},
		methods: {			
			 _initTabBar(data) {	
				data.menuList.forEach(({link,name,imgList}, idx)=>{
					uni.setTabBarItem({
						index: idx,
						pagePath: link,
						iconPath: imgList[1],
						selectedIconPath: imgList[0],
						text: name
					})
				})
			} 
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
