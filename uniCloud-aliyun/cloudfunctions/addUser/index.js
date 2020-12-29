'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	console.log(event);
	var callbackJSON
	if (event.account == '' || event.account == undefined) {
		callbackJSON = {
			code: 1,
			message:'请输入账号'
		}
		return callbackJSON
	}else if (event.password == '' || event.password == undefined) {
		callbackJSON = {
			code: 1,
			message:'请输入密码'
		}
		return callbackJSON
	}
	const collection = db.collection("tb_user")
	const getUser = await collection.where({
		account: event.account
	}).get().then(getres => {
		if (getres.data.length == 0) {
			const addUser = collection.add({
				account: event.account,
				password: event.password,
				userCreateTime: Date.parse(new Date()),
				userImage: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-74kwmxi1m0t6bf81b5/fcea1cf0-4998-11eb-bd01-97bc1429a9ff.png',
				userName: '',
				userAge: '',
				userBirth: '请选择生日'
			}).then(addres => {
				console.log('添加用户成功 ==>', addres);
				callbackJSON = {
					code: 0,
					message:'注册成功',
					data: addres
				}
				return callbackJSON
			}).catch(adderr => {
				console.log('添加用户失败');
				callbackJSON = {
					code: 1,
					message:'注册失败'
				}
				return callbackJSON
			})
			return addUser
		}else{
			console.log('查询用户成功,有此用户');
			callbackJSON = {
				code: 1,
				message:'此用户已存在'
			}
			return callbackJSON
		}
	}).catch(geterr => {
		console.log('用户查询失败');
		callbackJSON = {
			code: 1,
			message:'用户查询失败'
		}
		return callbackJSON
	})
	return getUser
};
