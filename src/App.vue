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
				data.tabBarList.list.forEach(({link,name,imgList}, idx)=>{
					console.log(data)
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
