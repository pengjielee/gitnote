<template>
  <div class="note-add">
    <h1>This is an note add page</h1>
    <textarea></textarea>
    <button class="btn" @click="handleSave">保存</button>
  </div>
</template>

<script>
export default {
  name: "NoteAdd",
  methods: {
    handleSave() {
      console.log("save");
    }
  }
};
</script>

<style scoped>
.note-add {
  padding: 20px;
}
.note-add textarea {
  width: 100%;
  height: 100px;
  resize: none;
}
.note-add .btn {
  width: 100%;
  padding: 10px 0;
  height: 40px;
  border: none;
  background: #eee;
  color: #333;
  margin: 10px 0;
}
</style>
