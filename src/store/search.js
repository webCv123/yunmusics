import {search} from '../api/getData'
export default{
    namespaced:true,
    state(){
        return {
            searchsong: [],
        }
    },
    mutations: {
          getserachsong(state, data){
            state.searchsong = data.result
          },
    },
    actions: {
          async setserachsong({commit}, name){
            const data = await search(name)
            commit('getserachsong', data)
          },
    }
}