<template>
  <view class="page"><view class="heading"><text class="title">全部好鞋</text><text class="hint">精选舒适鞋履，陪你自在出发</text></view><view class="filters"><text v-for="(name, i) in categories" :key="name" :class="['filter', active === i ? 'selected' : '']" @tap="active = i">{{ name }}</text></view><view class="list"><view class="item" v-for="item in filtered" :key="item.id" @tap="goProduct(item.id)"><view :class="['art', item.color]"><text>{{ item.icon }}</text></view><view class="info"><text class="name">{{ item.name }}</text><text class="desc">{{ item.subtitle }}</text><text class="price">¥{{ item.price }}</text></view><text class="arrow">›</text></view></view></view>
</template>
<script setup>
import { computed, ref } from 'vue'
import { products, goProduct } from '../../common/products.js'
const categories = ['全部', '运动鞋', '休闲鞋', '板鞋']
const active = ref(0)
const filtered = computed(() => products)
</script>
<style scoped>
.page{padding:32rpx}.heading{padding:16rpx 2rpx 28rpx}.title{display:block;font-size:42rpx;font-weight:800}.hint{display:block;color:#999;font-size:23rpx;margin-top:8rpx}.filters{display:flex;gap:16rpx;margin-bottom:24rpx}.filter{padding:13rpx 24rpx;border-radius:30rpx;background:#fff;color:#777;font-size:22rpx}.selected{background:#20251f;color:#fff}.list{display:flex;flex-direction:column;gap:18rpx}.item{display:flex;align-items:center;background:#fff;border-radius:20rpx;padding:16rpx}.art{width:160rpx;height:150rpx;border-radius:15rpx;display:flex;align-items:center;justify-content:center;font-size:78rpx}.mint{background:#dcece5}.dark{background:#e2e2e2}.sand{background:#eee3d7}.blue{background:#dce6ef}.info{flex:1;padding-left:22rpx;display:flex;flex-direction:column}.name{font-size:27rpx;font-weight:700}.desc{font-size:20rpx;color:#999;margin-top:8rpx}.price{font-size:27rpx;color:#b86f3e;font-weight:700;margin-top:20rpx}.arrow{font-size:40rpx;color:#aaa;padding:0 8rpx}
</style>
