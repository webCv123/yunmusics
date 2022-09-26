<template>
    <Nav/>
    <div class="banner">
        <router-view></router-view>
    </div>
    <Footer/>
    <img class="imgss" src="../assets/images/背景.jpg" alt="">
</template>

<script>
import {useStore} from 'vuex'
import Nav from '@/components/app-nav'
import Footer from '@/components/app-footer.vue'
export default {
    name:'LayOut',
    components:{
        Nav,Footer
    },
    setup() {
        const store = useStore()
        store.dispatch('banner/AssetBanner')
        store.dispatch('setLrc')
        store.dispatch('setComment')
    }
}
</script>
<style scoped lang='less'>
    .nav{
        width: 100%;
        position: fixed;
        top: 0px;
    }
    .banner{
        width: 100%;
        position: fixed;
        top: 20vh;
        left: 0px;

    }
        .imgss{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            filter: blur(30px);
            z-index: -1;
        }
    .footer{
        width: 100%;
        position: fixed;
        bottom: 0;
    }
</style>