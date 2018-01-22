import sync_Form from './syncForm'

export let syncForm = sync_Form;

export default {
    install: function (Vue) {
        if (this.isInstall) {
            return;
        }
        this.isInstall = true;
        Object.defineProperty(Vue.prototype, '$syncForm', {
            get() { return sync_Form }
        })
    }
}

if (window && window.Vue) {
    window.Vue.use(syncForm)
}
