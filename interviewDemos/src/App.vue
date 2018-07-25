<template>
  <div id="app">
    <div id="articles">
      <h2>文章列表</h2>
      <hr>
      <ul class="article-list">
        <li>
          <router-link to="/css">前端面试练习 ---- CSS篇</router-link>
        </li>
        <li>
          <router-link to="/javascript">前端面试练习 ---- Javascript篇</router-link>
        </li>
        <li>
          <router-link to="/other">前端面试练习 ---- 其他</router-link>
        </li>
      </ul>   
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 60%;
  min-width: 600px;
  margin-left: 20px;
}

.article-list li {
  margin-top: 20px;
}
.article-list li > a{
  color:#0269c8;
}
.article-list li > a:hover {
  color: #000;
}
</style>
