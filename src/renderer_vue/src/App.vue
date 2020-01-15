<template>
  <div id="app" class="app">
    <div class="app-body">
      <div class="sidebar">
        <ul class="nav">
          <li><router-link to="/">欢迎</router-link></li>
          <li><router-link to="/note/list">我的笔记</router-link></li>
          <li><router-link to="/note/add">新建笔记</router-link></li>
          <li><router-link to="/setting">设置</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
          <li><router-link to="/help">帮助</router-link></li>
        </ul>
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>
