<template>
	<view class="content flex">
		<view class="flex align-between align-center w100">
			<view class="flex direction-row align-center">
				<view class="user_headimage">
					<image class="imagewhr" :src="userinfo.userImage"></image>
				</view>
				<view class="flex direction-column justify-around h100 user_info_font">
					<view class="user_info_name">
						<text>{{userinfo.userName}}</text>
					</view>
					<view>
						<text>账号: {{userinfo.account}}</text>
					</view>
				</view>
			</view>
			<view class="flex-1" style="font-size: 27rpx;text-align: right;" @click="editInformation">
				<text>编辑资料 ></text>
			</view>
		</view>
		
	</view>
</template>

<script>
	import { userInfo } from '../../../api/mine.js'
	export default {
		data() {
			return {
				userinfo:{
					userName:'',
					userImage:'',
					account: ''
				}
			}
		},
		onLoad() {
			
		},
		onShow() {
			this.getUserInfo()
		},
		methods: {
			getUserInfo(){
				var data = {
					uid: uni.getStorageSync('uid')
				}
				userInfo(data).then(res => {
					console.log('获取用户信息 ==> ', res);
					this.userinfo.account = res.account
					this.userinfo.userName = res.userName == '' ? '没有昵称!' : res.userName 
					this.userinfo.userImage = res.userImage
				})
			},
			editInformation(){
				uni.navigateTo({
					url: '../../editInformation/editInformation'
				});
			}
		}
	}
</script>

<style>
	.content{
		padding: 0 20px;
	}
	.user_headimage{
		width: 100rpx;height: 100rpx;border-radius: 100%;margin: 0 20rpx 0 0;
	}
	.user_info_font{
		font-size: 28rpx;
	}
	.user_info_name{
		font-weight: bold;
	}
</style>
