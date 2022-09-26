import {banner} from '../api/getData'
export default{
    namespaced:true,
    state(){
        return {
            bannerList: [{banners:[]}]
        }
    },
    mutations: {
        setBanner(state, newList){
            state.bannerList = newList
        }
    },
    actions: {
        async AssetBanner({commit}){
            const data = await banner()
            commit('setBanner', data)
        }
    }
}