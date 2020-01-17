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
    <div class="form-group">
      <input-tag
        placeholder="请输入标签"
        v-model="note.labels"
        :limit="limit"
      ></input-tag>
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
    const number = this.$route.params.number;
    this.number = number;
    noteApi.getConfig().then(config => {
      noteApi.getDetail(number, config).then(res => {
        const data = res.data;
        const labels = data.labels.map(item => item.name);
        this.note = { title: data.title, body: data.body, labels: labels };
      });
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
        noteApi.getConfig().then(config => {
          noteApi.editNote(number, note, config).then(res => {
            if (res.status === 200) {
              swal("保存成功", "", "success");
            }
          });
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
