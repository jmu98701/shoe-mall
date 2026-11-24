<template>
  <view class="page"><view v-if="cart.length" class="list"><view v-for="item in cart" :key="item.id" class="item"><view :class="['art', item.color]">{{ item.icon }}</view><view class="info"><text class="name">{{ item.name }}</text><text class="price">¥{{ item.price }}</text><view class="qty"><text @tap="change(item, -1)">－</text><text>{{ item.quantity }}</text><text @tap="change(item, 1)">＋</text></view></view></view></view><view v-else class="empty"><text class="empty-icon">🛍️</text><text class="empty-title">购物车还是空的</text><text class="empty-desc">去挑一双喜欢的鞋吧</text><button class="shop" @tap="shop">去逛逛</button></view><view v-if="cart.length" class="checkout"><view><text>合计 </text><text class="total">¥{{ total }}</text></view><button @tap="checkout">去结算</button></view></view>
</template>
<script setup>
import { computed, onShow, ref } from 'vue'
const cart = ref([])
const total = computed(() => cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2))
function refresh() { cart.value = uni.getStorageSync('cart') || [] }
onShow(refresh)
function change(item, amount) { item.quantity += amount; if (item.quantity <= 0) cart.value = cart.value.filter(row => row.id !== item.id); uni.setStorageSync('cart', cart.value) }
function shop() { uni.switchTab({ url: '/pages/category/index' }) }
function checkout() { uni.showToast({ title: '订单功能待接入', icon: 'none' }) }
</script>
<style scoped>
.page{padding:28rpx 30rpx 120rpx}.list{display:flex;flex-direction:column;gap:18rpx}.item{display:flex;background:#fff;padding:18rpx;border-radius:20rpx}.art{width:170rpx;height:160rpx;border-radius:16rpx;display:flex;align-items:center;justify-content:center;font-size:82rpx}.mint{background:#dcece5}.dark{background:#e2e2e2}.sand{background:#eee3d7}.blue{background:#dce6ef}.info{padding:8rpx 20rpx;flex:1}.name{font-size:27rpx;font-weight:700}.price{display:block;color:#b86f3e;font-size:26rpx;margin-top:12rpx}.qty{display:flex;align-items:center;gap:25rpx;margin-top:18rpx;font-size:25rpx}.qty text:first-child,.qty text:last-child{background:#f3f3f3;padding:4rpx 14rpx;border-radius:20rpx}.empty{height:78vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.empty-icon{font-size:90rpx}.empty-title{font-size:30rpx;font-weight:700;margin-top:22rpx}.empty-desc{color:#999;font-size:23rpx;margin-top:10rpx}.shop{margin-top:30rpx;background:#20251f;color:#fff;border-radius:36rpx;font-size:24rpx;padding:0 48rpx}.checkout{position:fixed;bottom:0;left:0;right:0;background:#fff;padding:18rpx 30rpx calc(18rpx + env(safe-area-inset-bottom));display:flex;align-items:center;justify-content:space-between}.total{font-size:34rpx;color:#b86f3e;font-weight:700}.checkout button{background:#20251f;color:white;border-radius:40rpx;font-size:25rpx;margin:0;padding:0 50rpx}
</style>
