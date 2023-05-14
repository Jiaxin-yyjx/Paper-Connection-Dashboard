import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)
const data = require('../output.json');
const API_BASE = 'http://127.0.0.1:5000'
const API_FUNCTION_GET_FILES = API_BASE + '/data'
export default new Vuex.Store({
    state: {
        // files:,
        keywords:data,
        files: data,
        author_title: data
    },
    mutations: {
        // syncrous
        setFiles(state, files) {
            state.files = files
        },
        selectKeywords(state, keywords){
            console.log(keywords)
            state.author_title = Vue.set([], state.author_title, keywords)
            console.log(state.author_title)
        }
    },
    actions: {
			// asyncronous
        async getFiles() {
            return fetch(API_FUNCTION_GET_FILES)
                .then((result) => result.json())
                .then((files) => {
                    this.commit('setFiles', files)
                });
        }
    },
    getters:{
        getfiles: state => state.files,
        getkeywords: state =>state.keywords,
        getauthor_title: state => state.author_title
    }
})
