<template>
  <div class="page note-edit">
    <div class="form-group">
      <input class="form-input" type="text" v-model="note.title" />
    </div>
    <div class="form-group form-area">
      <textarea class="textarea" v-model="note.body"></textarea>
    </div>
    <button class="btn btn-primary" @click="handleSave">保存</button>
  </div>
</template>

<script>
import noteApi from "@/api/note";

export default {
  name: "NoteEdit",
  created() {
    const self = this;
    const number = this.$route.params.number;
    self.number = number;
    noteApi.getDetail(number).then(res => {
      const data = res.data;
      self.note = { title: data.title, body: data.body };
    });
  },
  methods: {
    handleSave() {
      const self = this;
      const note = self.note;
      const number = self.number;
      noteApi.editNote(number, note).then(res => {
        console.log(res);
      });
    }
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
