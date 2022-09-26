<template>
    <div class="box">
        <div class="main">
            <div class="left">
                <img :src="store.state.searchddd.searchsong.songs[0].al.picUrl" alt="">
                <h3 style="margin-top:20px;">{{store.state.searchddd.searchsong.songs[0].al.name}}</h3>
                <p style="margin-top:15px;">一个人，静静地坐在教室里听音乐—享受；一个人，静静地走在江畔听音乐—享受；一个人，静静地仰卧在星空下听音乐—享受；一个人，静静地站在竹林里听音乐—享受；我的世界里什么都没有，有的只是音乐。音乐，让我忧伤，让我快乐；音乐，让我忘我，让我心碎。</p>
            </div>
            <div class="right" ref="topll">
                <div class="list" v-for="(item,index) in store.state.searchddd.searchsong.songs" :key="item.id" @click="getId(item.id,item.ar[0].name,item.name)">
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
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import {useStore} from 'vuex'
import {useRoute,useRouter} from 'vue-router'
import { ElMessage } from 'element-plus'
export default {
    name:'search',
    setup() {
        const route = useRoute()
        const store = useStore()
        const router = useRouter()
        const topll = ref(null)
        watch(()=>route.params.name,(newV)=>{nextTick(()=>topll.value.scrollTop=0)})
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


        return{
            store,getId,topll
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
    padding: 30px 0px;
    margin: -45px auto;
    .icons{fill: #ffffff;}
    .icons:hover{
        fill: #1DC779;
        cursor: pointer;
    }
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
                -webkit-line-clamp: 7;
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
                // border-bottom: 1px solid #000000;
                border-bottom: 1px solid rgba(0, 0, 0, .4);
                &:hover{
                    background-color: teal;
                    transition: .5s;
                }
                .left{
                    .index{
                        margin-right: 30px;
                        &.active{
                            color: red;
                        }
                    }
                }
            }
        }
    }
}
</style>