<template>
  <div class="note-tags">
    <div class="tags">
      <span
        v-for="tag in tags"
        v-bind:key="tag.id"
        class="tag"
        :style="{ background: '#' + tag.color }"
        @click="handleTag(tag.name)"
      >
        {{ tag.name }}
      </span>
    </div>
  </div>
</template>

<script>
import noteApi from "@/api/note";

export default {
  name: "NoteTags",
  created() {
    noteApi.getConfig().then(config => {
      noteApi.getTags(config).then(res => {
        let tags = [];
        res.data.forEach(tag => {
          if (this.systemTags.indexOf(tag.name) < 0) {
            tags.push(tag);
          }
        });
        this.tags = tags;
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
      tags: [],
      systemTags: [
        "bug",
        "documentation",
        "duplicate",
        "enhancement",
        "good first issue",
        "help wanted",
        "invalid",
        "question",
        "wontfix"
      ]
    };
  }
};
</script>
