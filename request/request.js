export default {
	// 全局配置
	common: {
		data: {}
	},
	// 请求 返回promise
	request(options = {}) {
		// 组织参数
		options.name = options.name
		options.data = options.data || this.common.data
		// 请求
		return new Promise((res, rej) => {
			// 请求之前... todo
			// 请求中...
			uniCloud.callFunction({
				...options
			}).then((result) => {
				if (result.result.code === 0) {
					return res(result.result.data);
				}else if (result.result.code === 1) {
					uni.showToast({
						title: result.result.message,
						icon: 'none'
					});
					console.log('code不为0 =>', result);
				}
			}).catch((error) => {
				console.log(error);
				uni.showToast({
					title: '网络连接失败',
					icon: 'none'
				});
				return rej()
			})
		}).catch((e) => {});
	},
	gotocloud(name, data = {}, options = {}) {
		options.name = name
		options.data = data
		return this.request(options)
	},
}
