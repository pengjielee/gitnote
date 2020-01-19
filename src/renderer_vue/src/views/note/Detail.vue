<template>
  <div class="note-detail">
    <h3 class="title">{{ note.title }}</h3>
    <div class="content">
      <pre>{{ note.body }}</pre>
    </div>
  </div>
</template>

<script>
import noteApi from "@/api/note";

export default {
  name: "NoteDetail",
  created() {
    const number = this.$route.params.number;
    noteApi.getConfig().then(config => {
      noteApi.getDetail(number, config).then(res => {
        this.note = res.data;
      });
    });
  },
  data() {
    return {
      note: {
        title: "",
        body: ""
      }
    };
  }
};
</script>
