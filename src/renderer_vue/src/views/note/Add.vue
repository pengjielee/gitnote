<template>
  <div class="note-edit">
    <div class="form-group">
      <div class="fluid ui input">
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
    <div class="form-group">
      <button class="ui primary button" @click="handleSave">保存</button>
      <button class="ui button" @click="handleBack">返回</button>
    </div>
  </div>
</template>

<script>
import noteApi from "@/api/note";

export default {
  name: "NoteAdd",
  methods: {
    async handleSave() {
      const valid = await this.$validator.validate();
      if (!valid) {
        return false;
      }

      const config = await noteApi.getConfig();
      if (!config) {
        this.$router.replace("/note/setting");
        return;
      }

      const note = this.note;
      try {
        const res = await noteApi.addNote(note, config);
        if (res.status === 201) {
          this.$swal("添加成功", "", "success");
        }
      } catch (error) {
        this.$swal("出错了", error.message, "error");
      }
    },
    handleBack() {
      this.$router.back();
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
