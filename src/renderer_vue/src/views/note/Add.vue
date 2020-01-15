<template>
  <div class="note-edit">
    <div class="form-group">
      <input type="text" class="form-input" v-model="note.title" />
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
  name: "NoteAdd",
  methods: {
    handleSave() {
      const self = this;
      const note = self.note;
      noteApi.addNote(note).then(res => {
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
