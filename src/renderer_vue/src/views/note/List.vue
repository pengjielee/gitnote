<template>
  <div class="list note-list">
    <ul>
      <li v-for="note in notes" v-bind:key="note.id" class="item">
        <h3 @click="handleJumpToNoteDetail(note.number)" class="title">{{ note.title }}</h3>
        <p>{{ note.url }}</p>
        <p>{{ note.number }}</p>
        <p>{{ note.created_at }}</p>
        <p>{{ note.html_url }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import noteApi from "@/api/note";

export default {
  name: "NoteList",
  created: function() {
    const self = this;
    noteApi.getList().then(res => {
      self.notes = res.data;
    });
  },
  methods: {
    handleSave() {
      console.log("save");
    },
    handleJumpToNoteDetail(number) {
      console.log(number);
      this.$router.push(`/note/detail/${number}`);
    }
  },
  data() {
    return {
      notes: []
    };
  }
};
</script>
