<template>
  <div class="note-upload">
    <div class="uploader" @click="handleUpload">
      <input
        type="file"
        ref="input"
        :accept="accept"
        :multiple="multiple"
        @change="handleChange"
      />
      <span class="plus">+</span>
    </div>
  </div>
</template>

<script>
import noteApi from "@/api/note";
import swal from "sweetalert";

const toDataURL = blob => {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function(e) {
      resolve(e.target.result);
    };
    reader.onerror = function() {
      reject(false);
    };
    reader.readAsDataURL(blob);
  });
};

export default {
  name: "NoteUpload",
  methods: {
    handleChange(e) {
      const file = e.target.files[0];
      toDataURL(file).then(function(content) {
        content = content.slice(content.indexOf(",") + 1);
        noteApi.getConfig().then(config => {
          noteApi
            .upload(
              file.name,
              { message: "upload image", content: content },
              config
            )
            .then(function(res) {
              if (res.status === 201) {
                swal("上传成功", "", "success");
              }
            });
        });
      });
    },
    handleUpload() {
      this.$refs.input.value = null;
      this.$refs.input.click();
    }
  },
  data() {
    return {
      accept: ".jpg, .jpeg, .png",
      multiple: false
    };
  }
};
</script>
