<template>
	<view class="content">
		<!-- logo -->
		<view class="logo_image">
			<image class="imagewhr" src="../../static/logo.png"></image>
		</view>
		<!-- input account password -->
		<view class="flex direction-column align-center">
			<!-- account -->
			<view class="flex direction-row align-center register_account">
				<!-- account icon -->
				<view class="register_account_image">
					<image class="imagewh" src="../../static/image/login/account.png"></image>
				</view>
				<!-- account input -->
				<view class="register_account_input">
					<input placeholder="请输入账号" confirm-type="next" v-model="register.account" maxlength="20" />
				</view>
			</view>
			<!-- password -->
			<view class="flex direction-row align-center register_password">
				<!-- password icon -->
				<view class="register_password_image">
					<image class="imagewh" src="../../static/image/login/password.png"></image>
				</view>
				<!-- password input -->
				<view class="register_password_input">
					<input placeholder="请输入密码" :password="lookpassword" confirm-type="next" v-model="register.password" maxlength="20" />
				</view>
				<!-- No display & display password -->
				<view class="register_password_look" @click="lookpassword = !lookpassword">
					<image class="imagewh" :src="lookpassword ? '../../static/image/login/unlookpassword.png' : '../../static/image/login/lookpassword.png'"></image>
				</view>
			</view>
			<!-- register -->
			<button class="register_btn" @click="gotoregister">注册</button>
		</view>
	</view>
</template>

<script>
	import { register } from '../../api/login.js'
	export default {
		data() {
			return {
				register:{
					account: '',
					password: ''
				},
				lookpassword: true
			}
		},
		methods: {
			// register
			gotoregister(){
				if (this.register.account == '') {
					this.$ShowToast('请输入账号', 'none')
					return
				}else if (this.register.password == '') {
					this.$ShowToast('请输入密码', 'none')
					return
				}
				var data = {
					account: this.register.account,
					password: this.register.password
				}
				register(data).then(res => {
					console.log('注册 ==> ', res);
					this.$ShowToast('注册成功', 'success')
					uni.reLaunch({
						url: './login?account=' + this.register.account + '&password=' + this.register.password,
					})
				})
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
	.register_account{
		border-bottom: 1px solid #1296db;padding: 0 10rpx 10rpx 10rpx;
	}
	.register_account_image{
		width: 50rpx;height: 55rpx;
	}
	.register_account_input{
		width: 550rpx;margin: 0 0 0 20rpx;
	}
	/* login password */
	.register_password{
		border-bottom: 1px solid #1296db;padding: 0 0 10rpx 0;padding: 30rpx 10rpx 10rpx 10rpx;
	}
	.register_password_image{
		width: 50rpx;height: 55rpx;
	}
	.register_password_input{
		width: 500rpx;margin: 0 0 0 20rpx;
	}
	.register_password_look{
		width: 50rpx;height: 55rpx;
	}
	/* registerbtn */
	.register_btn{
		width: 80%;background-color: #1296db;color: #FFFFFF;margin: 50rpx 0;height: 70rpx;line-height: 70rpx;
	}
</style>
