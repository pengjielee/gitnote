<template>
  <div class="page page-setting">
    <div class="form-group">
      <div class="form-label">
        <span class="required">*</span><label>仓库名</label>
      </div>
      <input
        class="form-input"
        type="text"
        v-model="config.repo"
        name="repo"
        v-validate="'required'"
      />
      <div v-show="errors.has('repo')" class="form-error">
        {{ errors.first("repo") }}
      </div>
    </div>
    <div class="form-group">
      <div class="form-label">
        <span class="required">*</span><label>token</label>
      </div>
      <input
        class="form-input"
        type="text"
        v-model="config.token"
        name="token"
        v-validate="'required'"
      />
      <div v-show="errors.has('token')" class="form-error">
        {{ errors.first("token") }}
      </div>
    </div>
    <div class="form-group">
      <div class="form-label"><label>每页显示几条</label></div>
      <input
        class="form-input"
        type="text"
        v-model="config.size"
        name="size"
        v-validate="'required'"
      />
      <div v-show="errors.has('size')" class="form-error">
        {{ errors.first("size") }}
      </div>
    </div>
    <div class="form-group">
      <button class="btn btn-primary" @click="handleSave">保存</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting",
  methods: {
    handleSave() {
      this.$validator.validate().then(async result => {
        if (!result) {
          return false;
        }
      });
    }
  },
  data() {
    return {
      config: {
        repo: "",
        token: "",
        size: 30
      }
    };
  }
};
</script>
