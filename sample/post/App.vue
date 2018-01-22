<template>
    <div>
        <h1>Vue Sync Form Sample</h1>
        <textarea v-model="form"></textarea>
        <br/>
        <button @click='postSync'>Submit</button>
          <br/>
        <button @click='postSync'>Submit using a class</button>
    </div>
</template>

<style>
textarea {
  width: 200px;
  height: 100px;
}
</style>


<script>
import { syncForm } from "vue-sync-form";

export default {
  name: "App",
  data() {
    return {
      form: JSON.stringify({
        test: "hello words!"
      })
    };
  },
  methods: {
    postSync() {
      this.$syncForm.postSync("/test", JSON.parse(this.form));
    },
    postSyncWithClass() {
      syncForm.postSync("/test", JSON.parse(this.form));
    }
  },
  watch: {
    form() {
      console.log(this.form);
    }
  }
};
</script>

