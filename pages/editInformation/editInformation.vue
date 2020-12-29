<template>
	<view class="content">
		<view class="flex justify-between align-center">
			<view>
				<text>头像</text>
			</view>
			<view style="width: 100rpx;height: 100rpx;border-radius: 100%;">
				<avatar selWidth="338px" selHeight="338px" @upload="myUpload" :avatarSrc="userImage" avatarStyle="width: 100rpx;height: 100rpx;border-radius: 100%;"></avatar>
			</view>
		</view>
		<view class="flex justify-between align-center" style="margin: 30rpx 0;">
			<view>
				<text>昵称</text>
			</view>
			<view>
				<input placeholder="请输入昵称" maxlength="8" v-model="userName" style="text-align: right;" />
			</view>
		</view>
		<view class="flex justify-between align-center" style="margin: 30rpx 0;">
			<view>
				<text>账号</text>
			</view>
			<view>
				<text>{{account}}</text>
			</view>
		</view>
		<view class="flex justify-between align-center" style="margin: 30rpx 0;">
			<view>
				<text>生日</text>
			</view>
			<view>
				<picker mode="date" v-model="userBirth" @change="choseUserBirth">{{userBirth}}</picker>
			</view>
		</view>
		<view class="flex justify-between align-center" style="margin: 30rpx 0;">
			<view>
				<text>年龄</text>
			</view>
			<view>
				<text>{{userAge}}</text>
			</view>
		</view>
		<button class="save_user_btn" @click="saveUserInfo">保存</button>
	</view>
</template>

<script>
	import { userInfo, updataUserinfo } from '../../api/mine.js'
	import avatar from "../../components/yq-avatar/yq-avatar.vue";
	export default {
		components: {
			avatar
		},
		data() {
			return {
				userName:'',
				userBirth:'',
				userAge: '',
				userImage: '',
				account: '',
			}
		},
		onLoad() {
			this.getUserInfo()
		},
		methods: {
			getUserInfo(){
				var data = {
					uid: uni.getStorageSync('uid')
				}
				userInfo(data).then(res => {
					console.log('获取用户信息 ==> ', res);
					this.userName = res.userName == '' ? '' : res.userName
					this.userAge = res.userAge
					this.userImage = res.userImage
					this.account = res.account
					this.userBirth = res.userBirth
				})
			},
			myUpload(rsp) {
				this.userImage = rsp.path; //更新头像方式一
			},
			choseUserBirth(Birth){
				this.userBirth = Birth.detail.value
				this.getUserAge(Birth.detail.value)
			},
			getUserAge(e){
				let choseBirth = e.split('-')
				var myDate = new Date();
				var Year = myDate.getFullYear();
				var Month = myDate.getMonth() + 1;
				var Day = myDate.getDate();
				if (choseBirth[0] - Year !== 0) {
					this.userAge = Year - choseBirth[0] + '岁'
				}else if (choseBirth[1] - Month !== 0) {
					this.userAge = Month - choseBirth[1] + '个月大'
				}else {
					if (Day - choseBirth[2] == 0) {
						this.userAge = '您今天刚出生'
					}else{
						this.userAge = Day - choseBirth[2] + '天'
					}
				}
			},
			saveUserInfo(){
				console.log(this.userImage.substring(27) + '.png');
				uniCloud.uploadFile({
					filePath:this.userImage,
					cloudPath: this.userImage.substring(27) + '.png',
					fileType: 'image',
					success: (uploadSuccess) => {
						var data = {
							userImage: uploadSuccess.fileID,
							userName: this.userName,
							userAge: this.userAge,
							userBirth: this.userBirth,
							uid: uni.getStorageSync('uid')
						}
						updataUserinfo(data).then(res => {
							console.log('修改用户信息 ==> ', res);
							this.$ShowToast('修改成功', 'success')
						})
					}
				})
			},
		}
	}
</script>

<style>
	.content{
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	.save_user_btn{
		background: #1296DB;color: #FFFFFF;width: 80%;height: 70rpx;line-height: 70rpx;margin: 60rpx auto 0 auto;
	}
</style>
