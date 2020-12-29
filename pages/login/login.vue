<template>
	<view class="content">
		<!-- logo -->
		<view class="logo_image">
			<image class="imagewhr" src="../../static/logo.png"></image>
		</view>
		<!-- input account password -->
		<view class="flex direction-column align-center">
			<!-- account -->
			<view class="flex direction-row align-center login_account">
				<!-- account icon -->
				<view class="login_account_image">
					<image class="imagewh" src="../../static/image/login/account.png"></image>
				</view>
				<!-- account input -->
				<view class="login_account_input">
					<input placeholder="请输入账号" confirm-type="next" v-model="login.account" maxlength="20" />
				</view>
			</view>
			<!-- password -->
			<view class="flex direction-row align-center login_password">
				<!-- password icon -->
				<view class="login_password_image">
					<image class="imagewh" src="../../static/image/login/password.png"></image>
				</view>
				<!-- password input -->
				<view class="login_password_input">
					<input placeholder="请输入密码" :password="lookpassword" confirm-type="next" v-model="login.password" maxlength="20" />
				</view>
				<!-- No display & display password -->
				<view class="login_password_look" @click="lookpassword = !lookpassword">
					<image class="imagewh" :src="lookpassword ? '../../static/image/login/unlookpassword.png' : '../../static/image/login/lookpassword.png'"></image>
				</view>
			</view>
			<!-- register -->
			<view class="flex direction-row-reverse" style="width: 90%;margin: 20rpx 0 10rpx;">
				<view class="register_btn" @click="gotoregister">
					<text>前往注册</text>
				</view>
			</view>
			<!-- login -->
			<button class="login_btn" @click="gotologin">登录</button>
		</view>
	</view>
</template>

<script>
	import { userLogin } from '../../api/login.js'
	export default {
		data() {
			return {
				login:{
					account:'',
					password: ''
				},
				lookpassword: true
			}
		},
		onLoad(registerCallBack) {
			if (registerCallBack.account && registerCallBack.password) {
				this.login.account = registerCallBack.account
				this.login.password = registerCallBack.password
			}
		},
		methods: {
			// login
			gotologin(){
				if (this.login.account == '') {
					this.$ShowToast('请输入账号', 'none')
					return
				}else if (this.login.password == '') {
					this.$ShowToast('请输入密码', 'none')
					return
				}
				var data = {
					account: this.login.account,
					password: this.login.password
				}
				userLogin(data).then(res => {
					console.log('登录 ==> ', res);
					uni.setStorage({
						key:'account',
						data:this.login.account,
					})
					uni.setStorage({
						key:'password',
						data:this.login.password,
					})
					uni.setStorage({
						key: 'uid',
						data: res._id
					})
					uni.reLaunch({
						url: '../tabbar/home/home',
					});
				})
			},
			// register
			gotoregister(){
				uni.navigateTo({
					url: './register'
				});
			}
		}
	}
</script>

<style scoped>
	.content{
		padding: 0 20rpx;
	}
	/* logo */
	.logo_image{
		width: 100rpx;height: 100rpx;border-radius: 100%;margin: 100rpx auto;
	}
	/* login account */
	.login_account{
		border-bottom: 1px solid #1296db;padding: 0 10rpx 10rpx 10rpx;
	}
	.login_account_image{
		width: 50rpx;height: 55rpx;
	}
	.login_account_input{
		width: 550rpx;margin: 0 0 0 20rpx;
	}
	/* login password */
	.login_password{
		border-bottom: 1px solid #1296db;padding: 0 0 10rpx 0;padding: 30rpx 10rpx 10rpx 10rpx;
	}
	.login_password_image{
		width: 50rpx;height: 55rpx;
	}
	.login_password_input{
		width: 500rpx;margin: 0 0 0 20rpx;
	}
	.login_password_look{
		width: 50rpx;height: 55rpx;
	}
	/* register */
	.register_btn{
		font-size: 20rpx;color: #999999;
	}
	/* loginbtn */
	.login_btn{
		width: 80%;background-color: #1296db;color: #FFFFFF;margin: 50rpx 0;height: 70rpx;line-height: 70rpx;
	}
</style>
