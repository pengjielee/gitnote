<template>
  <div>
    <note-upload></note-upload>
    <div class="note-images">
      <ul class="list">
        <li v-for="image in images" v-bind:key="image.sha" class="item">
          <dl class="media">
            <dt class="media-left">
              <img :src="image.download_url" width="100px" />
            </dt>
            <dd class="media-object">
              <p class="title">{{ image.name }}</p>
              <p class="size">{{ image.size }}</p>
              <p class="action">
                <a @click="handleCopy(image, 'http')">复制为HTTP</a
                ><a @click="handleCopy(image, 'md')">复制为MARKDOWN</a>
              </p>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import noteApi from "@/api/note";
import swal from "sweetalert";
import NoteUpload from "./Upload.vue";

export default {
  name: "NoteImages",
  components: {
    NoteUpload
  },
  created() {
    noteApi.getConfig().then(config => {
      noteApi.getImages(config).then(res => {
        var images = res.data;
        images.map(item => {
          item.size = parseInt(item.size / 1000) + "KB";
          return item;
        });
        this.images = images;
      });
    });
  },
  methods: {
    handleCopy(image, type) {
      var content = image.download_url;
      if (type === "md") {
        content = `![](${content})`;
      }
      this.$copyText(content).then(
        function() {
          swal("复制成功", "已复制到剪贴板", "success");
        },
        function() {
          swal("复制失败", "", "error");
        }
      );
    }
  },
  data() {
    return {
      images: []
    };
  }
};
</script>
