# Vue 同步POST扩展

[![Version](https://img.shields.io/npm/v/vue-sync-form.svg?style=flat-square)](https://www.npmjs.com/package/vue-sync-form)
[![Author](https://img.shields.io/badge/author-ElderJames-blue.svg?style=flat-square)](https://elderjames.github.io)
[![Download](https://img.shields.io/npm/dm/vue-sync-form.svg?style=flat-square)](https://www.npmjs.com/package/vue-sync-form)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ElderJames/vue-sync-form/blob/master/LICENSE)


简单地使用Vue的扩展方法和 `vm.$el` api 实现同步submit。原理就是在html页面插入form表单再调用submit方法。

### Usage

1. Use as vue plugin  

```js
import Vue from 'vue'
import syncForm from 'vue-sync-form'

//in vue instance
this.$syncForm.postSync("/path", formData);
```

2. Use as a class

```js
import { syncForm } from "vue-sync-form";

syncForm.postSync("/test", JSON.parse(this.form));
```

3. For more information,please read the [sample code](https://github.com/ElderJames/vue-sync-form/tree/master/sample), or run the sample with the cmd:

```bash
npm run dev
```
 