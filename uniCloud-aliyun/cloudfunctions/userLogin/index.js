'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	var callbackJSON
	const collection = db.collection('tb_user')
	const res = await collection.where({
		account: event.account
	}).get().then(getres => {
		console.log('获取到用户 ==> ', getres);
		// 获取到用户了
		if (getres.data.length != 0) {
			// 密码错了! 蔡不蔡啊, 密码都能记错
			if (getres.data[0].password !== event.password) {
				callbackJSON = {
					code: 1,
					message:'密码错了! 蔡不蔡啊, 密码都能记错! '
				}
				return callbackJSON
			// 密码正确, 进入首页
			}else{
				let token = Date.parse(new Date()) + 'occ_lux'
				getres.data[0].token = token
				callbackJSON = {
					code: 0,
					message:'成功',
					data: getres.data[0]
				}
				return callbackJSON
			}
		// 没这个账号! 连账号都不知道注册没注册
		}else{
			callbackJSON = {
				code: 1,
				message:'没这个账号! 连账号都不知道注册没注册! '
			}
			return callbackJSON
		}
	}).catch(geterr => {
		console.log('获取用户失败 ==> ', geterr);
		callbackJSON = {
			code: 1,
			message:'catch登录获取用户信息错误'
		}
		return callbackJSON
	})
	return res
};


