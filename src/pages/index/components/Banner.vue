<template>
	<view class="banner" v-if="list.isShow.val">
		<view class='banner-container'>
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="item in list.imgList.list">
					<image :src="item.img"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style>
</style>
