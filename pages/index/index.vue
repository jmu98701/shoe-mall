<template>
  <view class="page">
    <view class="topbar"><text class="brand">STEP</text><view class="search" @tap="openCategory">⌕　搜索你喜欢的鞋</view><text class="avatar">☺</text></view>
    <view class="welcome"><text class="eyebrow">WALK YOUR WAY</text><text class="headline">每一步，都自在</text><text class="subhead">为日常挑一双舒服的鞋</text></view>
    <view class="hero"><view><text class="hero-label">NEW SEASON · 2025</text><text class="hero-title">轻盈上新</text><text class="hero-desc">从容出发，步履有型</text><view class="hero-button" @tap="openProduct">探索新品　→</view></view><text class="hero-shoe">👟</text></view>
    <view class="section-head"><view><text class="section-title">人气精选</text><text class="section-sub">好穿，也好看</text></view><text class="more" @tap="openCategory">全部商品　›</text></view>
    <view class="grid"><view class="card" v-for="item in products" :key="item.id" @tap="openProduct(item.id)"><view :class="['product-art', item.color]"><text class="tag">{{ item.tag }}</text><text class="shoe">{{ item.icon }}</text></view><text class="product-name">{{ item.name }}</text><text class="product-sub">{{ item.subtitle }}</text><view class="price-row"><text class="price">¥{{ item.price }}</text><text class="old-price">¥{{ item.originalPrice }}</text><text class="add" @tap.stop="addToCart(item)">＋</text></view></view></view>
    <view class="service"><text>✦ 品质精选</text><text>↺ 7天无理由退换</text><text>♡ 贴心客服</text></view>
  </view>
</template>

<script setup>
import { products, goProduct } from '../../common/products.js'
function openCategory() { uni.switchTab({ url: '/pages/category/index' }) }
function openProduct(id = 1) { goProduct(id) }
function addToCart(item) {
  const cart = uni.getStorageSync('cart') || []
  const found = cart.find(row => row.id === item.id)
  if (found) found.quantity += 1
  else cart.push({ ...item, quantity: 1 })
  uni.setStorageSync('cart', cart)
  uni.showToast({ title: '已加入购物车', icon: 'success' })
}
</script>

<style scoped>
.page{padding:30rpx 30rpx 46rpx}.topbar{display:flex;align-items:center;gap:20rpx}.brand{font-size:32rpx;font-weight:900;letter-spacing:3rpx}.search{flex:1;background:#fff;border-radius:40rpx;padding:18rpx 24rpx;color:#999;font-size:24rpx}.avatar{font-size:38rpx}.welcome{padding:46rpx 4rpx 32rpx;display:flex;flex-direction:column}.eyebrow{font-size:18rpx;color:#a38b67;letter-spacing:4rpx}.headline{font-weight:800;font-size:48rpx;margin-top:8rpx}.subhead{color:#888;font-size:25rpx;margin-top:8rpx}.hero{background:linear-gradient(115deg,#18231e,#334f43);border-radius:26rpx;color:#fff;padding:36rpx;display:flex;align-items:center;justify-content:space-between;overflow:hidden}.hero-label{font-size:17rpx;letter-spacing:2rpx;color:#d7c6a5}.hero-title{display:block;font-size:42rpx;font-weight:800;margin-top:18rpx}.hero-desc{display:block;font-size:23rpx;color:#d3d9d4;margin-top:8rpx}.hero-button{display:inline-block;margin-top:26rpx;background:#d8c29a;color:#20251f;padding:14rpx 20rpx;border-radius:30rpx;font-size:21rpx}.hero-shoe{font-size:116rpx;transform:rotate(-18deg);filter:drop-shadow(0 18rpx 10rpx #1118)}.section-head{display:flex;justify-content:space-between;align-items:end;margin:42rpx 2rpx 22rpx}.section-title{font-size:34rpx;font-weight:800}.section-sub{display:block;color:#999;font-size:21rpx;margin-top:5rpx}.more{font-size:21rpx;color:#888}.grid{display:grid;grid-template-columns:1fr 1fr;gap:20rpx}.card{background:#fff;border-radius:20rpx;padding:14rpx;overflow:hidden}.product-art{height:220rpx;border-radius:15rpx;display:flex;align-items:center;justify-content:center;position:relative}.mint{background:linear-gradient(145deg,#deeee7,#a8c9bc)}.dark{background:linear-gradient(145deg,#e5e5e5,#b9bbc0)}.sand{background:linear-gradient(145deg,#f1e7db,#dac7ad)}.blue{background:linear-gradient(145deg,#e2eaf1,#b7c8d8)}.shoe{font-size:100rpx;filter:drop-shadow(0 13rpx 6rpx #0003)}.tag{position:absolute;top:12rpx;left:12rpx;background:#fff;border-radius:18rpx;padding:5rpx 12rpx;font-size:17rpx;color:#6b5940}.product-name{display:block;font-size:25rpx;font-weight:700;margin:16rpx 4rpx 5rpx}.product-sub{display:block;font-size:19rpx;color:#999;margin:0 4rpx}.price-row{display:flex;align-items:center;margin:15rpx 4rpx 3rpx}.price{color:#b86f3e;font-weight:700;font-size:27rpx}.old-price{color:#bbb;text-decoration:line-through;font-size:19rpx;margin-left:10rpx}.add{margin-left:auto;background:#20251f;color:#fff;border-radius:50%;width:42rpx;height:42rpx;text-align:center;line-height:42rpx;font-size:30rpx}.service{display:flex;justify-content:space-between;color:#777;font-size:18rpx;padding:28rpx 4rpx 0}
</style>
