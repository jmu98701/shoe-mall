export const products = [
  { id: 1, name: '轻云缓震跑鞋', subtitle: '轻盈回弹 · 日常训练', price: 329, originalPrice: 459, tag: '新品', color: 'mint', icon: '👟' },
  { id: 2, name: '城市经典板鞋', subtitle: '简约百搭 · 头层皮革', price: 289, originalPrice: 399, tag: '热卖', color: 'dark', icon: '👞' },
  { id: 3, name: '复古慢跑鞋', subtitle: '复古线条 · 舒适透气', price: 359, originalPrice: 499, tag: '人气款', color: 'sand', icon: '👟' },
  { id: 4, name: '轻步通勤休闲鞋', subtitle: '柔软鞋底 · 久走不累', price: 259, originalPrice: 369, tag: '限时特惠', color: 'blue', icon: '👟' }
]

export function goProduct(id = 1) {
  uni.navigateTo({ url: `/pages/product/index?id=${id}` })
}
