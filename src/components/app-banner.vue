<template>
    <el-carousel height="540px" 
                 v-if="!store.state.banner.bannerList.banners">
      <el-carousel-item v-for="item in 7" :key="item">
        <Loading/>
      </el-carousel-item>
    </el-carousel>
<div class="banner" v-else>
      <el-carousel height="60vh" type="card" style="cursor: pointer;">
      <el-carousel-item v-for="item in store.state.bannerConst" :key="item.id" @click="getSongs(item.id,item.singer,item.songname)">
        <img :src="item.picUrl" alt="">
      </el-carousel-item>
    </el-carousel>
</div>
</template>
<script>
import Loading from './app-loading'
import {useStore} from 'vuex'
import {computed, watch} from 'vue'
export default {
    name:"Banner",
    components:{
      Loading
    },
    setup() {
        const store = useStore()
        const getSongs = (ids,ser,sgn)=>{
          store.dispatch('setBannerSongs', ids)
          store.dispatch('setBannerLrc', ids)
          store.dispatch('setcommentBanner', ids)
          store.dispatch('setSongs', ids)
          // store.dispatch('setsongdates',ids)
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
        
        return {
            store,getSongs
        }
    }

}
</script>
<style lang="less" scoped>

// .el-carousel{
//   margin-top: 130px;
// }
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

      /deep/ .el-carousel__button {// 指示器按钮
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 1);
        display: none;
    }
    /deep/ .is-active .el-carousel__button {// 指示器激活按钮
        background: #ffffff;
    }

    .demonstration {
  color: var(--el-text-color-secondary);
}


.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>