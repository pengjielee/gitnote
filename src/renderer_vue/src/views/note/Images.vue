<template>
  <div class="note-images">
    <ul class="list">
      <li v-for="image in images" v-bind:key="image.sha" class="item">
        <dl class="media">
          <dt class="media-left">
            <img :src="image.download_url" width="100px" />
          </dt>
          <dd class="media-object">
            <p>{{ image.name }}</p>
            <p>{{ image.size }}</p>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import noteApi from "@/api/note";

export default {
  name: "NoteImages",
  created() {
    noteApi.getImages().then(res => {
      console.log(res);
      this.images = res.data;
    });
  },
  data() {
    return {
      images: []
    };
  }
};
</script>
