<template>
  <div class="app-body">
    <div class="sidebar">
      <ul class="nav">
        <li><router-link to="/note/list">我的笔记</router-link></li>
        <li><router-link to="/note/tags">笔记标签</router-link></li>
        <li><router-link to="/note/images">图片列表</router-link></li>
        <li><router-link to="/note/setting">设置</router-link></li>
      </ul>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "NoteIndex",
  created: function() {
    // const self = this;
    // window.localForage.getItem("config", function(err, value) {
    //   if (err) {
    //     return;
    //   }
    //   console.log(value);
    //   let isAuth = false;
    //   let path = "/note/setting";
    //   if (!value) {
    //     isAuth = false;
    //   } else {
    //     isAuth = true;
    //     path = "/note/list";
    //   }
    //   console.log(isAuth);
    //   self.isAuth = isAuth;
    //   self.$router.replace(path);
    // });
  },
  data() {
    return {
      isAuth: true
    };
  }
};
</script>
