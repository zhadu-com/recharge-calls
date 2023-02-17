<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import {homeData as homeDataApi} from '@/api/home.js'
	
	export default {
		data() {
			return {
				title:'测试'
			}
		},
		onLoad(){	
			this._getHomeData()
		},
	
		methods: {
			async _getHomeData(){
				const{status , data, msg} = await homeDataApi()
	
				if(status = == this.API_STATUS_CODE.SUCCESS){
					
				}else{
					uni.showToast({
						icon: 'none',
						title: '首页数据获取失败 请刷新重试',
						duration:3000
					});

				}
				//console.log(this.API_STATUS_CODE);
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
