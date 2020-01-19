<template>
  <div class="note-detail">
    <template v-if="isShowLoading">
      <Loading height="300" />
    </template>
    <template v-else>
      <h3 class="title">{{ note.title }}</h3>
      <p class="date">{{ note.created_at }}</p>
      <div class="tags" v-if="note.tags">
        <span
          v-for="tag in note.tags"
          v-bind:key="tag.id"
          class="tag"
          :style="{ background: '#' + tag.color }"
          @click="handleTag(tag.name)"
        >
          {{ tag.name }}
        </span>
      </div>
      <div class="content">
        <pre>{{ note.body }}</pre>
      </div>
    </template>
  </div>
</template>

<script>
import noteApi from "@/api/note";
import { loadingMixin } from "@/mixins/loading.js";

export default {
  name: "NoteDetail",
  mixins: [loadingMixin],
  created() {
    const number = this.$route.params.number;
    noteApi.getConfig().then(config => {
      noteApi.getDetail(number, config).then(res => {
        this.note = res.data;
      });
    });
  },
  methods: {
    handleTag(name) {
      this.$router.push(`/note/list/${name}`);
    }
  },
  data() {
    return {
      note: {
        title: "",
        created_at: "",
        body: ""
      }
    };
  }
};
</script>
