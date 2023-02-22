<template>
	<view class="home">	
		<view class="home-container">
			<Banner :list='swiperData'></Banner>
		</view>
	</view>
</template>

<script>
	import Banner from './components/Banner.vue'
	import {getNavigationData as getNavigationDataApi} from '@/api/index'
	import {getSwiperBgData as getSwiperBgDataApi} from '@/api/index'
	
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
				const navigationDa = await getNavigationDataApi()
				const swiperBgDa = await getSwiperBgDataApi()
			
				if (navigationDa.status === this.API_STATUS_CODE.SUCCESS && swiperBgDa.status === this.API_STATUS_CODE.SUCCESS) {			
					this.swiperData = swiperBgDa.data.data.value['1642948693686001']
					app._initTabBar(navigationDa.data.data)
					console.log(this.swiperData)
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
