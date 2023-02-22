import http from '@/utils/http.js'

//获取导航栏
export const getNavigationData = () =>{
	const url = 'navigation'   
	return http.get(url)
}

//获取轮播图
export const getSwiperBgData = ()=>{
	const url = 'v2/diy/get_diy/default'
	return http.get(url)
}
