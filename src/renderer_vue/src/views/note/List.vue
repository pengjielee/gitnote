<template>
  <div class="page note-list">
    <div class="page-header">
      <button class="btn btn-sort" @click="handleSort">
        {{ directionName }}排列
      </button>
    </div>
    <div class="list">
      <ul>
        <li v-for="note in notes" v-bind:key="note.id" class="item">
          <p class="title" @click="handleLook(note.number)">
            {{ note.title }}
          </p>
          <div class="content">{{ note.body }}</div>
          <div class="tags">
            <span v-for="tag in note.labels" v-bind:key="tag.id" class="tag">{{
              tag.name
            }}</span>
          </div>
          <div class="date">{{ note.created_at }}</div>
          <div class="action"><a @click="handleEdit(note.number)">编辑</a></div>
        </li>
      </ul>
      <div class="load-more">
        <button class="btn" @click="handleLoad" v-if="!isLoadOver">
          加载更多
        </button>
        <p class="info" v-else>没有更多了</p>
      </div>
    </div>
  </div>
</template>

<script>
import noteApi from "@/api/note";

export default {
  name: "NoteList",
  created: function() {
    const tag = this.$route.params && this.$route.params.tag;
    if (tag) {
      this.search.labels = tag;
    }
    this.getNotes();
  },
  computed: {
    directionName: function() {
      return this.search.direction === "asc" ? "升序" : "降序";
    }
  },
  methods: {
    handleSort() {
      let direction = "";
      if (this.search.direction === "asc") {
        direction = "desc";
      } else {
        direction = "asc";
      }
      this.search.direction = direction;
      this.notes = [];
      this.search.page = 1;
      this.isLoadOver = false;
      this.getNotes();
    },
    handleSave() {
      console.log("save");
    },
    handleEdit(number) {
      this.$router.push(`/note/edit/${number}`);
    },
    handleLook(number) {
      this.$router.push(`/note/detail/${number}`);
    },
    handleLoad() {
      this.search.page = this.search.page + 1;
      this.getNotes();
    },
    getNotes() {
      const { page, size, direction, labels } = this.search;
      noteApi.getList(page, size, direction, labels).then(res => {
        const newNotes = res.data;
        const oldNotes = this.notes;
        if (newNotes.length <= 0) {
          this.isLoadOver = true;
        }
        this.notes = oldNotes.concat(newNotes);
      });
    }
  },
  data() {
    return {
      notes: [],
      search: {
        page: 1,
        size: 2,
        direction: "desc",
        labels: ""
      },
      isLoadOver: false
    };
  }
};
</script>
