//-----------axios de forma global url/instancia única ----------------------

// import Vue from 'vue'
// import axios from 'axios'

// axios.defaults.baseURL = 'https://codercursos-vueaxios-default-rtdb.firebaseio.com/'

// Vue.use({
//     install(Vue) {
//         Vue.prototype.$http = axios
//     }
// })




// -------------------axios multi-instancia--------------------------

import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://codercursos-vueaxios-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create ({
            baseURL: 'https://codercursos-vueaxios-default-rtdb.firebaseio.com/'
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            // eslint-disable-next-line no-console
            console.log(config.method)
            return config
        }, error => Promise.rejected(error))
        
        // Vue.prototype.$http.interceptors.response.use(config => {
        //     // const array = []
        //     // for(let chave in res.data){
        //     //     array.push({ id: chave, ...res.data[chave]})    
        //     // }
            
        //     // res.data = array
        //     // return res
        // }, error => Promise.rejected(error))
    }
})