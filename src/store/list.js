import {details,songAll,getLogin} from '@/api/getData'
export default {
    namespaced:true,
    state(){
        return{
            list1:{},
            list2:{},
        }
    },
    mutations:{
        getdetails(state, data){
            state.list1 = data
            console.log(state.list1)
        },
        getsongAll(state, data){
            state.list2 = data
            console.log(state.list2)
        },
        getLogin(state, data){
            // state.bannerList = newList
            console.log(data)
        }
    },
    actions:{
        async setdetails({commit},id){
            const data = await details(id)
            commit('getdetails',data)
        },
        async setsongAll({commit},id){
            const data = await songAll(id)
            commit('getsongAll',data)
        },
        async setLogin({commit},obj){
            const data = await getLogin(obj.phone,obj.pwdss)
            console.log(data)
            commit('getLogin', data)
        }
    }
}