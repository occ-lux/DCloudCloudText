'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	var callbackJSON
	const collection = db.collection("tb_user")
	const getUser = await collection.where({
		_id: event.uid
	}).get().then(getres => {
		console.log('用户查询成功 ==> ', getres);
		callbackJSON = {
			code: 0,
			message:'用户查询成功',
			data: getres.data[0]
		}
		return callbackJSON
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
