<template>
  <div class="loading">
    <img src="../assets/img/loading.png" class="img" />
    <p>努力加载中</p>
  </div>
</template>

<style>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading {
  margin: 20px 0;
  font-size: 14px;
}
.loading img {
  animation: rotate 3s linear infinite;
}
</style>
