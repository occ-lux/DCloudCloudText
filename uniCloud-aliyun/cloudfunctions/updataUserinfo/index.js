'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	var callbackJSON
	const collection = db.collection('tb_user')
	const getUserinfo = await collection.where({
		_id: event.uid
	}).update({
		userName: event.userName,
		userBirth: event.userBirth,
		userAge: event.userAge,
		userImage: event.userImage
	}).then(updatares => {
		console.log('修改用户信息 ==> ', updatares);
		callbackJSON = {
			code: 0,
			message:'修改信息成功',
			data: updatares
		}
		return callbackJSON
	}).catch(updataerr => {
		console.log('修改用户信息失败 ==> ', updataerr);
		callbackJSON = {
			code: 1,
			message:'修改信息失败'
		}
		return callbackJSON
	})
	return getUserinfo
};
