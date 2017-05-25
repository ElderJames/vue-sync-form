# Vue 同步POST扩展

简单地使用Vue的扩展方法和 `vm.$el` api 实现同步submit。原理就是在html页面插入form表单再调用submit方法。

### 使用方法

```
import PostSync from 'path/PostSync';

PostSync('www.yangshunjie.com',{say:"Hello James!"});

```