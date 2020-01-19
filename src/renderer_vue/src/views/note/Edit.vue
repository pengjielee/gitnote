<template>
  <div class="page note-edit">
    <template v-if="isShowLoading">
      <Loading height="300" />
    </template>
    <template v-else>
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
    </template>
  </div>
</template>

<script>
import noteApi from "@/api/note";
import swal from "sweetalert";
import { loadingMixin } from "@/mixins/loading.js";

export default {
  name: "NoteEdit",
  mixins: [loadingMixin],
  async created() {
    const config = await noteApi.getConfig();
    if (!config) {
      this.$router.replace("/note/setting");
      return;
    }

    const number = this.$route.params.number;
    this.number = number;
    this.isShowLoading = true;
    try {
      const res = await noteApi.getDetail(number, config);
      const data = res.data;
      const labels = data.labels.map(item => item.name);
      this.note = { title: data.title, body: data.body, labels: labels };
      this.isShowLoading = false;
    } catch (error) {
      swal("出错了", error.message, "error");
    }
  },
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
      const number = this.number;
      try {
        const res = await noteApi.editNote(number, note, config);
        if (res.status === 200) {
          swal("保存成功", "", "success");
        }
      } catch (error) {
        swal("出错了", error.message, "error");
      }
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
