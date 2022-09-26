import {likesong,likelist} from '@/api/getData'
export default {
    namespaced:true,
    state(){
        return{
            like:[],
            user:{data:{userPoint:{userId:''}}},
            list:[]
        }
    },
    mutations:{
        getlike(state, data){
            state.like = data.playlist
        },
        getuser(state, data){
            state.user = data
        },
        getlikelist(state, data){
            state.list = data.songs
        },
        hidelo(state){
            state.user = {data:{userPoint:{userId:''}}}
        }
    },
    actions:{
        async setlike({commit}){
            const data = await likesong()
            commit('getlike', data)
        },
        async setlikelist({commit}){
            const data = await likelist()
            commit('getlikelist', data)
        },
    }
}