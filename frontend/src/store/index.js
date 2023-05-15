import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex)
const data = require('../output.json');
const API_BASE = 'http://127.0.0.1:5000'
const API_FUNCTION_GET_FILES = API_BASE + '/data'

export default new Vuex.Store({
    state: {
        // files:,
        keywords: data,
        files: data,
        author_title: data,
        abstract: "Please select the article you want to know more."
    },
    mutations: {
        // syncrous
        setFiles(state, files) {
            state.files = files
        },
        selectKeywords(state, keywords){
             console.log('select keywords',keywords)
            // update author_title
            if (keywords.length === 0) {
                state.author_title = data    
            } else {
                state.author_title = data.filter(item => {
                    const keyname = item.name;
                    return keywords.some(keyword => keyname.includes(keyword.name));
                  });
            }      
            // console.log('selectKeywords',state.author_title)
        },    
        selectArticle(state, title){
            // console.log('select title',title)
            // update abstract
            if (title !== null && title.nameArticle !== undefined) {
                const keyname = title.nameArticle;
                const article = data.find(item => keyname.includes(item.nameArticle));
                state.abstract = article ? article.Abstract : "Article not found.";
            } else {
                state.abstract = "Please select the article you want to know more."   
            }
        //    console.log('selectArticle',state.abstract)
        },         
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
        getAuthorTitle: state => state.author_title,
        getAbstract: state => state.abstract
    }
})
