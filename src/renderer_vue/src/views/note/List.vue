<template>
  <div class="page page-note">
    <div class="list note-list">
      <ul>
        <li v-for="note in notes" v-bind:key="note.id" class="item">
          <p class="title" @click="handleLook(note.number)">
            {{ note.title }}
          </p>
          <div class="content">{{ note.body }}</div>
          <div class="date">{{ note.created_at }}</div>
          <div class="action"><a @click="handleEdit(note.number)">编辑</a></div>
        </li>
      </ul>
      <div class="load-more" v-if="!isLoadOver">
        <button class="btn" @click="handleLoad">加载更多</button>
      </div>
    </div>
  </div>
</template>

<script>
import noteApi from "@/api/note";

export default {
  name: "NoteList",
  created: function() {
    this.getNotes();
  },
  methods: {
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
      this.page = this.page + 1;
      this.getNotes();
    },
    getNotes() {
      const page = this.page;
      const size = 2;
      noteApi.getList(page,size).then(res => {
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
      page: 1,
      isLoadOver: false
    };
  }
};
</script>
