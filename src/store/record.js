export default {
    namespaced:true,
    state(){
        return{
            recordlist:[{singer:'徐佳莹',songname:'浪费',id:407002483}]
        }
    },
    mutations:{
        getrecord(state, data){
            state.recordlist = [...state.recordlist,data]
        },
        empty(state){
            state.recordlist = []
        }
    },
}