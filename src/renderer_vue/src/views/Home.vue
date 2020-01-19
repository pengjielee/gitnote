<template>
  <div class="page page-home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Loading />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Loading
  }
};
</script>
