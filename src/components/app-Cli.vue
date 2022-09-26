<template>
    <div class="box">
        <svg t="1663662124292" @click="goBack" class="icons" style="position: absolute;top:-20px;left:-60px;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4564" width="40" height="40"><path d="M230.8608 544l198.8096 198.8096a32 32 0 0 1-45.2608 45.2608l-249.856-249.856a37.12 37.12 0 0 1 0-52.48l249.856-249.8048a32 32 0 0 1 45.2608 45.2608L230.8608 480H870.4a32 32 0 1 1 0 64H230.8608z" p-id="4565"></path></svg>
        <div class="main">
            <div class="left">
                <img :src="store.state.list.list1.playlist.creator.avatarUrl" alt="">
                <h3 style="margin-top:20px;">{{store.state.list.list1.playlist.name}}</h3>
                <p style="margin-top:15px;">{{store.state.list.list1.playlist.description}}</p>
            </div>
            <div class="right">
                <div class="list" v-for="(item,index) in store.state.list.list2.songs" :key="item.id" @click="getId(item.id,item.ar[0].name,item.name)">
                    <div class="left">
                        <span :class="['index',index+1<=3?'active':'']">{{index+1}}、</span><span class="names">{{item.name}}</span>     
                    </div>   
                        <span class="singer" style="margin-right:20px;">{{item.ar[0].name}}</span>
                        <svg t="1663573019030" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2403" width="20" height="20"><path d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z" fill="#3D3D3D" p-id="2404"></path></svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import  {songdates} from '@/api/getData'
import {useRoute, useRouter} from 'vue-router'
import {useStore} from 'vuex'
import { ElMessage } from 'element-plus'
export default {
    name:"Cli",
    setup() {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        const getList = ()=>{
            store.dispatch('list/setdetails',route.params.id)
            store.dispatch('list/setsongAll',route.params.id)
        }
        const getId = async (ids,ser,sgn)=>{
            const p = await songdates(ids)
                if(p.data[0].fee===1||p.data[0].url===null||!p.data[0].url.includes('mp3')){
                    ElMessage.error('没有版权，暂时无法播放！')
                }else{
                    // store.dispatch('setsongdates',ids)
                    store.dispatch('setBannerSongs', ids)
                    store.dispatch('setBannerLrc', ids)
                    store.dispatch('setSongs', ids)
                    store.dispatch('setcommentBanner', ids)
                    // 去重
                    let obj = {id:ids,singer:ser,songname:sgn}
                    let obj2 = {}
                    store.state.record.recordlist.forEach(item=>{
                        if(item.id===obj.id){
                            obj2 = item
                        }
                    })
                    if(obj2.id===obj.id){
                        return 
                    }else{
                        store.commit('record/getrecord',obj)
                    }
                }
        }
        const goBack = ()=> router.go(-1)
        getList()
        return{
            store,getId,goBack
        }
    }
}
</script>
<style scoped lang='less'>
::-webkit-scrollbar {display: none;}
.box{
    width: 1000px;
    height: 76vh;
    position: relative;
    .icons{fill:#ffffff;}
    .icons:hover{
        fill: #1DC779;
        cursor: pointer;
    }
    padding: 30px 0px;
    margin: -45px auto;
    .overimg{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        filter: blur(30px);
        z-index: -1;
    }
    .main{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .left{
            width: 260px;
            height: 100%;
            img{
                width: 250px;
                height: 250px;
                box-shadow: 0 0 10px 0.5px #000000;
            }
            p{
                text-indent: 2rem;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 5;
                overflow: hidden;
                text-overflow: ellipsis;            
            }
        }
        .right{
            width: 700px;
            height: 100%;
            overflow: scroll;
            .list{
                width: 100%;
                height: 50px;
                line-height: 50px;
                display: flex;
                padding: 0 40px;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgba(0, 0, 0, .4);
                &:hover{
                    background-color: teal;
                    transition: .5s;
                }
                .left{
                        .index{margin-right: 30px;
                        &.active{color: red;}
                    }
                }
            }
        }
    }
}
</style>