import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Editor from '@tinymce/tinymce-vue';
Vue.use(Vuetify);

export default new Vuetify({
    components:{
        'editor': Editor
    }
});
