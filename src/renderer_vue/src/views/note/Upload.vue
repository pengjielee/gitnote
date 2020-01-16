<template>
  <div class="note-upload">
    <input
      type="file"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
    />
  </div>
</template>

<script>
import noteApi from "@/api/note";
import swal from "sweetalert";

function readBlobAsDataURL(blob, callback) {
  var reader = new FileReader();
  reader.onload = function(e) {
    callback(e.target.result);
  };
  reader.readAsDataURL(blob);
}

export default {
  name: "NoteUpload",
  methods: {
    handleChange(e) {
      const file = e.target.files[0];
      readBlobAsDataURL(file, function(content) {
        content = content.slice(content.indexOf(",") + 1);
        noteApi
          .upload(file.name, { message: "upload image", content: content })
          .then(function(res) {
            if(res.status === 201){
              swal("上传成功", "", "success");
            }
          });
      });
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
