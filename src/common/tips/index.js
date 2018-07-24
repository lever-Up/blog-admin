import tipsComponent from './Tips.vue'

const Dialog = [];

Dialog.install = function(Vue, opt) {
    Vue.prototype.$toast = (msg, timeout) => {
        timeout = timeout || 2000;

        let toastTpl = Vue.extend({
            template: '<div class="app-toast">' + msg + '</div>'
        });
        let tpl = new toastTpl().$mount().$el;
        document.body.appendChild(tpl);
        setTimeout(function () {
            document.body.removeChild(tpl);
        }, timeout)
    };

    Vue.prototype.$alert = (options) => {
        let instance = Vue.extend(tipsComponent);
        let vm = new instance({el: document.createElement('div')});
        document.body.appendChild(vm.$mount().$el);
        Object.assign(vm, options, {type:'alert'});
        // $.extend(true, vm, options, {type:'alert'});
    };

    Vue.prototype.$confirm = (options) => {
        let instance = Vue.extend(tipsComponent);
        let vm = new instance({el: document.createElement('div')});
        document.body.appendChild(vm.$mount().$el);
        Object.assign(vm, options, {type:'confirm'})
        // $.extend(true, vm, options, {type:'confirm'});
    }
};

export default Dialog;
