<template>
    <div>
        <h1>Vue Sync Form Sample</h1>
        <textarea v-model="form"></textarea>
        <button @click='postSync'>Submit</button>
    </div>
</template>

<style>
textarea {
  width: 200px;
  height: 100px;
}
</style>


<script>
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
    }
  },
  watch: {
    form() {
      console.log(this.form);
    }
  }
};
</script>

