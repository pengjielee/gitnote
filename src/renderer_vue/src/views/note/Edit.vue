<template>
  <div class="page note-edit">
    <div class="form-group">
      <input
        class="form-input"
        type="text"
        v-model="note.title"
        name="title"
        v-validate="'required'"
      />
      <div v-show="errors.has('title')" class="form-error">
        {{ errors.first("title") }}
      </div>
    </div>
    <div class="form-group form-area">
      <textarea class="textarea" v-model="note.body"></textarea>
    </div>
    <button class="btn btn-primary" @click="handleSave">保存</button>
  </div>
</template>

<script>
import noteApi from "@/api/note";
import swal from "sweetalert";

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
      this.$validator.validate().then(async result => {
        if (!result) {
          return false;
        }
        const note = this.note;
        const number = this.number;
        noteApi.editNote(number, note).then(res => {
          console.log(res);
          swal("保存成功");
        });
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
