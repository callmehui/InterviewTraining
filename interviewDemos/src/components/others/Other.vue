<template>
    <div class="other">
        <h3>其他</h3>
        <hr>
        <hr>
        <b>1. get请求长度限制限制</b>
        <p class="css-mb20">http协议没有限制get和post请求的请求长度，是浏览器和服务器对请求长度做了限制，在浏览器上对get请求的长度做了限制，比如IE限制为2K+53（2083字节），chrome为8182字节</p>
        <b>2. get和post请求缓存的区别</b>
        <ul class="css-mb20">
        <li>get请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存</li>
        <li>post不同，post做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。因此get请求适合于请求缓存。</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .css-mb20 {
        margin-bottom: 20px;
    }
</style>
