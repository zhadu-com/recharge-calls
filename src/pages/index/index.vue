<template>
	<view class="home">	
		<view class="home-container">
			<Banner :list='swiperData'></Banner>
		</view>
	</view>
</template>

<script>
	import Banner from './components/Banner.vue'
	import {homeData as homeDataApi} from '@/api/home.js'
	
	const app = getApp();
	
	export default {
		components: {
			Banner
		},
		data() {
			return{
				swiperData:{}
			}
		},
		onLoad() {
			this._getHomeData()
		},

		methods: {
			async _getHomeData() {
				const {status,data,msg} = await homeDataApi()

				if (status === this.API_STATUS_CODE.SUCCESS) {
					var tabBarDatavb = data.data.tabBar.defaultVal
					this.swiperData = data.data.swiperBg.defaultVal
				
					app._initTabBar(tabBarDatavb)
				} else {
					uni.showToast({
						icon: 'none',
						title: '首页数据获取失败 请刷新重试',
						duration: 3000
					})

				}
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
