import axios from 'axios'

import {
	API_HOST,
	API_VERSION,
	API_TIMEOUT
} from '@/config/http.js'

const http = axios.create({
	baseURL: `${API_HOST}${API_VERSION}`,
	timeout: API_TIMEOUT,
	crossDomain: true
})

// 请求拦截
http.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

// 响应拦截
http.interceptors.response.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

//真机获取 解决app上adapter is not a function问题
axios.defaults.adapter = function(config) {
	 return new Promise((resolve, reject) => {
			var settle = require('axios/lib/core/settle');
			var buildURL = require('axios/lib/helpers/buildURL');
			var buildFullPath = require('axios/lib/core/buildFullPath');
			let fullurl = buildFullPath(config.baseURL,config.url)
			uni.request({
				method: config.method.toUpperCase(),
				url: buildURL(fullurl, config.params, config.paramsSerializer),
				header: config.headers,
				data: config.data,
				dataType: config.dataType,
				responseType: config.responseType,
				sslVerify: config.sslVerify,
				complete:function complete(response){
					response = {
					  data: response.data,
					  status: response.statusCode,
					  errMsg: response.errMsg,
					  header: response.header,
					  config: config
					};
					
				settle(resolve, reject, response);
				}
			})
	    })
}

export default http
