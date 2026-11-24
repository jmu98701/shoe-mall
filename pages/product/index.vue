<template>
  <view class="page"><view :class="['art', product.color]"><text>{{ product.icon }}</text><text class="badge">{{ product.tag }}</text></view><view class="details"><text class="name">{{ product.name }}</text><text class="desc">{{ product.subtitle }}</text><view class="price-line"><text class="price">¥{{ product.price }}</text><text class="old">¥{{ product.originalPrice }}</text><text class="sold">已售 1.2万+</text></view><view class="policy"><text>✓ 正品保障</text><text>✓ 7天无理由退换</text><text>✓ 极速发货</text></view><view class="choice"><text>尺码</text><view class="sizes"><text v-for="size in sizes" :key="size" :class="['size', selectedSize === size ? 'active' : '']" @tap="selectedSize = size">{{ size }}</text></view></view><view class="desc-box"><text class="desc-title">商品介绍</text><text class="desc-body">轻盈舒适的日常鞋履设计，柔软鞋面搭配回弹鞋底，让每一次出发都更加自在。商品图片及描述为演示内容，上线前请替换为真实商品资料。</text></view></view><view class="bottom"><text class="cart" @tap="goCart">🛒</text><button @tap="addCart">加入购物车</button><button class="buy" @tap="buy">立即购买</button></view></view>
</template>
<script setup>
import { computed, ref } from 'vue'
import { products } from '../../common/products.js'
const productId = Number(getCurrentPages().at(-1)?.options?.id || 1)
const product = computed(() => products.find(item => item.id === productId) || products[0])
const sizes = ['36', '37', '38', '39', '40', '41', '42', '43']
const selectedSize = ref('')
function addCart() {
  const cart = uni.getStorageSync('cart') || []
  const found = cart.find(row => row.id === product.value.id)
  if (found) found.quantity += 1
  else cart.push({ ...product.value, quantity: 1 })
  uni.setStorageSync('cart', cart)
  uni.showToast({ title: '已加入购物车', icon: 'success' })
}
function buy() { if (!selectedSize.value) return uni.showToast({ title: '请先选择尺码', icon: 'none' }); addCart(); uni.switchTab({ url: '/pages/cart/index' }) }
function goCart() { uni.switchTab({ url: '/pages/cart/index' }) }
</script>
<style scoped>
.page{padding-bottom:130rpx}.art{height:620rpx;display:flex;align-items:center;justify-content:center;position:relative;font-size:190rpx}.mint{background:linear-gradient(145deg,#deeee7,#a8c9bc)}.dark{background:linear-gradient(145deg,#e5e5e5,#b9bbc0)}.sand{background:linear-gradient(145deg,#f1e7db,#dac7ad)}.blue{background:linear-gradient(145deg,#e2eaf1,#b7c8d8)}.badge{position:absolute;top:30rpx;left:30rpx;font-size:21rpx;background:#fff;border-radius:24rpx;padding:9rpx 20rpx;color:#66573e}.details{background:#fff;border-radius:28rpx 28rpx 0 0;margin-top:-22rpx;position:relative;padding:30rpx}.name{display:block;font-size:36rpx;font-weight:800}.desc{display:block;font-size:23rpx;color:#999;margin-top:10rpx}.price-line{display:flex;align-items:center;margin-top:24rpx}.price{color:#b86f3e;font-size:40rpx;font-weight:800}.old{color:#bbb;text-decoration:line-through;font-size:22rpx;margin-left:12rpx}.sold{color:#999;font-size:21rpx;margin-left:auto}.policy{display:flex;justify-content:space-between;background:#faf8f4;border-radius:14rpx;padding:18rpx 12rpx;margin-top:25rpx;color:#766c5b;font-size:19rpx}.choice{margin-top:28rpx;font-weight:700;font-size:25rpx}.sizes{display:flex;flex-wrap:wrap;gap:14rpx;margin-top:17rpx}.size{padding:13rpx 23rpx;border-radius:10rpx;background:#f6f6f6;font-weight:400}.active{background:#20251f;color:white}.desc-box{margin-top:34rpx}.desc-title{display:block;font-size:27rpx;font-weight:700}.desc-body{display:block;color:#888;line-height:1.8;font-size:22rpx;margin-top:14rpx}.bottom{position:fixed;bottom:0;left:0;right:0;background:#fff;display:flex;align-items:center;padding:16rpx 22rpx calc(16rpx + env(safe-area-inset-bottom));gap:14rpx}.cart{width:62rpx;text-align:center;font-size:36rpx}.bottom button{margin:0;border-radius:40rpx;background:#eee;color:#222;font-size:23rpx;padding:0 27rpx}.bottom .buy{background:#20251f;color:#fff}
</style>
