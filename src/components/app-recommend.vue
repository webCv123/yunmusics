<template>
    <div class="box-scroll-y">
        <div class="one">
            <div :class="['songList',index<=2?'active':'']" v-for="(item,index) in store.state.Sheet" :key="item.id" @click="getClick(item.id)">
                <div class="ddd">
                    <div class="top">
                        <img :src="item.creator.avatarUrl" alt="">
                        <div class="content">
                            <h3>{{item.name}}</h3>
                            <p>{{item.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
    name:'Daily',
    setup() {
        const store = useStore()
        const router = useRouter()
        store.dispatch('setSheet')
        const getClick = (id)=>{
            router.push({
                path:`/cli${id}`
            })
        }
        return {
            store,getClick
        }
    }
}
</script>
<style scoped lang='less'>
.box-scroll-y{
    width: 1000px;
    margin: -60px auto;
    .one{
        width: 990px;
        height: 515px;
        margin: auto;
        overflow-y: scroll;
        .songList{
            width: 320px;
            &.active{margin-top: 10px;}
            margin-right: 10px;
            transform: all 1s;        
            float: left;
            display: flex;
            justify-content: center;
            .ddd{
                width: 318px;
            &:hover {transform: translate3d(0px,-3px,0px);}
            .top{
                width: 100%;
                height: 160px;
                display: flex;
                justify-content: space-around;
                cursor: pointer;
                box-shadow: 0px 0px 4px #000000;
                padding-top: 20px;
                margin-bottom: 10px;
                img{
                    width: 100px;
                    height: 100px;
                }
                .content{
                    width: 160px;
                    height: 100%;
                    p{
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
            }
            .main{
                width: 100%;
                height: 350px;
                background-color: #ffffff;
                overflow: scroll;
                .list{
                    width: 100%;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    line-height: 30px;
                    padding: 0 40px;
                    font-weight: 600;
                    justify-content: space-between;
                }
                .list:nth-child(odd){background-color: gray;} 
            }
        }
    }
}
</style>