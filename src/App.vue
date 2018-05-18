<!-- 单文件组件 -->
<template>
  <div id="app">
  	<!-- keep-alive 路由的内容被加载过一次后就把内容放到内存里面 -->
  	<!-- exclude='Detail' 表示detail组件不计入缓存 -->
    <keep-alive exclude='Detail'>
    <!-- 显示的是当前路由地址所对应的内容 -->
	    <router-view/>
	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

