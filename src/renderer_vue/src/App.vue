<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/note/list">Note List</router-link> |
      <router-link to="/note/add">Note Add</router-link> |
      <router-link to="/note/edit">Note Edit</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
