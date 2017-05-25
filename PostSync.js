/**
  * vue-post-sync
  * (c) 2017 James Yeang
  * @license MIT
  * Github:https://github.com/ElderJames/vue-post-sync
  */

import Vue from "vue";

const PostForm = Vue.extend({
    template: `
        <form v-show="false"
            method="post"
            :action="postUrl">
        <input v-for="data in formData"
            :name="data.key"
            :value="data.val" />
        </form>
    `,
    props: {
        formData: {
            type: Array,
            default: () => {
                return [];
            }
        },
        postUrl: {
            type: String,
            default: ''
        }
    }
});

export default function (url, data = {}) {
    var formData = [];
    for (var key in data) {
        formData.push({ key: key, val: data[key] })
    }
    if (url != '' && formData.length > 0) {
        let ins = new PostForm({
            el: document.createElement("div")
        });

        ins.formData = formData;
        ins.postUrl = url;

        document.body.appendChild(ins.$el);

        Vue.nextTick(() => {
            ins.$el.submit();
        });
    }
}



