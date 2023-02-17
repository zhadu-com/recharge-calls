import http from '@/utils/http.js'


export const homeData = () =>{
	const url = 'diy/get_diy/moren'
	
	return http.get(url)
}