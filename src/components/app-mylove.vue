<template>
    <div class="mylove">
        <div class="top">
            <div class="left">
                <img :src="store.state.mylike.like.coverImgUrl" alt="">
            </div>
            <div class="right">
                <h3>{{store.state.mylike.like.name}}</h3>
                <div class="establish">
                    <img :src="store.state.mylike.user.data.profile.avatarUrl" alt="">
                    <span>a好懒666创建</span>
                </div>
                <p style="margin-top:10px;">歌曲：{{store.state.mylike.like.trackCount}}首</p>
                <p style="margin-top:10px;">收听量：{{store.state.mylike.like.playCount}}</p>
            </div>
        </div>
        <div class="bottom">
            <div class="li" v-for="(item,i) in store.state.mylike.list" :key="item.id" @click="songs(item.id)">
                <div style="width:30px;">{{i+1}}、</div>
                <div style="width:200px;">{{item.name}}</div>
                <div style="width:200px;">{{item.al.name}}</div>
                <svg t="1663816702334" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2741" width="25" height="25"><path d="M928.492 527.839c0 211.347-171.32 382.655-382.684 382.655-211.305 0-382.682-171.31-382.682-382.655S334.504 145.185 545.81 145.185c211.362 0 382.682 171.307 382.682 382.654" fill="#F7E946" p-id="2742"></path><path d="M282.664 197.012c-9.163 0-18.159-4.416-23.629-12.592-8.747-13.051-5.276-30.71 7.774-39.457 36.042-24.171 75.526-42.914 117.343-55.714 53.7-16.452 109.067-22.463 164.573-18.146 15.66 1.25 27.352 14.953 26.102 30.599-1.25 15.647-14.466 27.351-30.6 26.101-48.369-3.846-96.629 1.472-143.416 15.813-36.514 11.176-70.943 27.517-102.349 48.579a28.242 28.242 0 0 1-15.798 4.817zM166.209 313.882a28.328 28.328 0 0 1-14.605-4.054c-13.467-8.08-17.826-25.545-9.746-39.013 11.912-19.853 19.686-28.572 31.432-41.775l7.497-8.455c10.33-11.843 28.35-12.967 40.123-2.638 11.801 10.357 12.995 28.322 2.638 40.123l-7.774 8.788c-10.968 12.315-15.994 17.938-25.157 33.223-5.332 8.886-14.744 13.801-24.408 13.801zM513.268 956.212c-71.5 0-142.36-17.507-207.308-51.994C201.446 848.686 124.81 755.79 90.156 642.614c-30.21-98.671-24.962-205.351 14.772-300.396 6.053-14.494 22.769-21.325 37.208-15.258 14.495 6.053 21.325 22.699 15.272 37.193-34.625 82.83-39.207 175.805-12.884 261.799 30.21 98.655 97.017 179.639 188.12 228.05 91.075 48.383 195.646 58.406 294.219 28.21 98.653-30.196 179.649-96.989 228.048-188.104 48.396-91.104 58.422-195.59 28.238-294.246-10.162-33.153-24.602-64.641-42.899-93.588-8.385-13.272-4.415-30.834 8.857-39.22 13.301-8.4 30.876-4.429 39.234 8.843 20.992 33.209 37.541 69.32 49.175 107.319 34.653 113.177 23.158 233.062-32.376 337.574-55.534 104.53-148.44 181.166-261.619 215.791-42.872 13.133-86.688 19.631-130.253 19.631z" fill="#213847" p-id="2743"></path><path d="M803.68 215.34c-20.936-83.523-99.987-109.442-139.75-111.4-7.749-0.25-15.467 2.471-21.104 7.914a28.424 28.424 0 0 0-8.719 20.769l0.142 14.241c-0.014 0.351-0.029 0.702-0.03 1.056l-0.958 288.528c-27.977-21.394-64.173-34.323-103.666-34.323-88.438 0-160.41 64.794-160.41 144.43 0 79.648 71.973 144.443 160.41 144.443s160.381-64.795 160.381-144.443c0-3.512-0.147-6.993-0.423-10.443 0.159-1.199 0.252-2.42 0.256-3.662l0.921-276.916h86.487c0.167-0.014 0.39 0 0.557 0 15.716 0 28.434-12.731 28.434-28.434-0.001-4.194-0.889-8.178-2.528-11.76zM529.595 634.131c-57.089 0-103.543-39.291-103.543-87.576 0-48.287 46.454-87.563 103.543-87.563 57.088 0 103.515 39.275 103.516 87.563-0.001 48.285-46.428 87.576-103.516 87.576z m162.046-435.464l-0.305-30.96c14.244 5.317 30.738 14.647 42.9 30.96h-42.595z" fill="#213847" p-id="2744"></path></svg>
            </div>
        </div>
    </div>
</template>

<script>
import  {songdates} from '@/api/getData'
import {useStore} from 'vuex'
import {ElMessage} from 'element-plus'
export default {
    name:'mylike',
    setup() {
        const store = useStore()
        store.dispatch('mylike/setlike')
        store.dispatch('mylike/setlikelist')
        const songs = async (ids)=>{
            const p = await songdates(ids)
                if(p.data[0].fee===1||p.data[0].url===null||!p.data[0].url.includes('mp3')){
                    ElMessage.error('没有版权，暂时无法播放！')
                }else{
                    // store.dispatch('setsongdates',ids)
                    store.dispatch('setBannerSongs', ids)
                    store.dispatch('setBannerLrc', ids)
                    store.dispatch('setSongs', ids)
                    store.dispatch('setcommentBanner', ids)
                } 
        }
        return{
            store,songs
        }
    }
}
</script>
<style scoped lang='less'>
.mylove{
    width: 1000px;
    // background-color: red;
    margin: -50px auto;
    .top{
        width: 100%;
        height: 200px;
        // background: green;
        display: flex;
        .left{
            width: 220px;
            height: 90%;
            img{
                width: 220px;
                height: 100%;
                box-shadow: 0px 0px 3px #000000;
            }
        }
        .right{
            width: 750px;
            height: 100%;
            // background-color: hotpink;
            padding: 20px;
            .establish{
                width: 100%;
                height: 50px;
                img{border-radius: 50%;margin-right: 5px;}
                margin-top: 10px;
            }
        }
    }
    .bottom{
        width: 100%;
        height: 370px;
        overflow: scroll;
        .li{
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0, 0, 0, .4);
            padding: 0 50px;
            transition: .5s;
            &:hover{background-color: #1DC779;}
            margin-top: 10px;
        }
    }
}
</style>