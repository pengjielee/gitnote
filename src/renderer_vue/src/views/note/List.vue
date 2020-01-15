<template>
  <div class="page page-note">
    <div class="page-header">
      <button class="btn btn-primary">新笔记</button>
      <button class="btn">新笔记</button>
    </div>
    <div class="page-body">
      <div class="list note-list">
        <ul>
          <li
            v-for="note in notes"
            v-bind:key="note.id"
            class="item"
            @click="handleNote(note.number)"
          >
            <p class="title">
              {{ note.title }}
            </p>
            <div class="content">{{ note.body }}</div>
            <div class="date">{{ note.created_at }}</div>
          </li>
        </ul>
      </div>
      <div class="note-edit">
        <input
          class="form-input"
          type="text"
          v-model="note.title"
          @change="handleChange"
        />
        <textarea
          class="form-area"
          v-model="note.body"
          @change="handleChange"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import noteApi from "@/api/note";

export default {
  name: "NoteList",
  created: function() {
    noteApi.getList().then(res => {
      const notes = res.data;
      this.notes = notes;
      this.getNote(notes[0].number);
    });
  },
  methods: {
    handleSave() {
      console.log("save");
    },
    handleNote(number) {
      this.getNote(number);
    },
    handleChange() {
      const { note, number } = this;
      noteApi.editNote(number, note).then(res => {
        console.log(res);
      });
    },
    getNote(number) {
      this.number = number;
      noteApi.getDetail(number).then(res => {
        const data = res.data;
        this.note = { title: data.title, body: data.body };
      });
    }
  },
  data() {
    return {
      notes: [],
      note: {
        title: "",
        body: ""
      }
    };
  }
};
</script>
