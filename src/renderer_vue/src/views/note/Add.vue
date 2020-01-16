<template>
  <div class="note-edit">
    <div class="form-group">
      <input
        type="text"
        class="form-input"
        v-model="note.title"
        placeholder="请输入标题"
        name="title"
        v-validate="'required'"
      />
      <div v-show="errors.has('title')" class="form-error">
        {{ errors.first("title") }}
      </div>
    </div>
    <div class="form-group">
      <input-tag
        placeholder="请输入标签"
        v-model="note.labels"
        :limit="limit"
      ></input-tag>
    </div>
    <div class="form-group form-area">
      <textarea
        class="textarea"
        v-model="note.body"
        placeholder="请输入内容"
      ></textarea>
    </div>
    <button class="btn btn-primary" @click="handleSave">保存</button>
  </div>
</template>

<script>
import noteApi from "@/api/note";
import swal from "sweetalert";

export default {
  name: "NoteAdd",
  methods: {
    handleSave() {
      this.$validator.validate().then(async result => {
        if (!result) {
          return false;
        }
        const note = this.note;
        noteApi.addNote(note).then(res => {
          if (res.status === 201) {
            swal("添加成功", "", "success");
          }
        });
      });
    }
  },
  data() {
    return {
      note: {
        title: "",
        body: "",
        labels: []
      },
      limit: 10
    };
  }
};
</script>
