<template>
    <div class="nav">
        <div class="boxNav">
            <div class="logo">
                <img src="../assets/images/logo.png-2.png" alt="">
            </div>
            <ul>
                <li v-for="item in store.state.ulDateList.ulDate" 
                    :key="item.count" 
                    :class="store.state.index.index===item.count?'active':''">
                    <router-link @click="getBool(item.count)" :to="`${item.router}`">{{item.name}}</router-link>
                </li>
            </ul>
            <div class="input">
                <div :class="['searchList',store.state.inputTT?'active':'']">
                    <p style="color:#cccccc;font-size:15px">热搜榜：</p>
                    <div class="list" v-for="(item,i) in store.state.searchs" @mousedown="getGolist(item.searchWord)">
                        <p style="color:red;">{{i+1}}</p>
                        <div class="lis">
                            <div class="top"><span style="font-weight: 600;">{{item.searchWord}}</span><span style="margin-left:10px;font-size:12px;color:#cccccc;">{{item.score}}</span></div>
                            <div class="bottom"><span class="activeSpan" style="font-size:13px;color:#cccccc;">{{item.content}}</span></div>
                        </div>
                    </div>
                </div>
                <input ref="inputs" type="text" :placeholder="describe" v-model="search" @focus="show" @blur="hide" @keyup.enter="getLis">
                <svg t="1662002959935" 
                @click="getLis"
                    style="cursor: pointer;"
                    class="icon" 
                    viewBox="0 0 1024 1024" 
                    version="1.1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    p-id="2394" width="35" height="35">
                    <path d="M64.704 455.808h682.368L426.496 142.656l78.592-77.568 452.928 446.656-453.824 446.976-77.184-76.864 319.872-317.76H64.704V455.808z" p-id="2395"></path>
                </svg>
            </div>
            <!-- 头像 -->
            <div class="user active" v-if="store.state.mylike.user.data.userPoint.userId===327512661">
                <img :src="store.state.mylike.user.data.profile.avatarUrl" alt="">
                <span>{{store.state.mylike.user.data.profile.artistName}}</span>
                <el-button class="menu" type="primary" @click="hidelogin">退出登录</el-button>
            </div>
            <div class="user" v-else>
                <div class="login" @click="goLogin">点击登录</div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default {
    name:"MyNav",
    setup() {
        const store = useStore()
        const router = useRouter()
        const inputs = ref(null)
        let describe = '音乐/专辑/歌手'
        let bool = false
        let search = ref('')
        store.dispatch('setsearchList')
        const getBool = (count)=>{
            store.state.index.index = count
        }
        const show = ()=>{
            store.state.inputTT = true
        }
        const hide = ()=>{
            store.state.inputTT = false
        }
        const goLogin = ()=> {
            router.push({path:'/Gologin'})
        }
        const getGolist = (name)=>{
            store.state.inputTT = true
            store.dispatch('searchddd/setserachsong', name)
            router.push({
                path:`/search${name}`
            })   
            search.value = name         
        }
        const getLis = ()=>{
            store.state.inputTT = false
            inputs.value.blur()
            store.dispatch('searchddd/setserachsong', search.value)
            router.push({
                path:`/search${search.value}`
            })
        }
        const hidelogin = ()=>{
            store.commit('mylike/hidelo')
        }
        return {
            describe,store,getBool,bool,show,hide,search,getLis,getGolist,inputs,goLogin,hidelogin
        }
    }
}
</script>
<style scoped lang='less'>
@import '../assets/style/variables';
::-webkit-scrollbar {display: none;}
.nav{ 
    height: 70px;
    padding: 0 100px;
    box-shadow: 0px 0px 3px .2px #000000;
    background: rgba(204, 204, 204, .4);
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    .boxNav{
        width: 1000px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        .user{
            width: 100px;
            height: 69px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            position: relative;
            cursor: pointer;
            .menu{
                display: none;
                position: absolute;
                top: 65px;
                left: 0;
                transition: .2s;
            }
            &.active:hover{
                .menu{display: block;}
                img{transform: rotate(360deg);}
            }
            img{
                width: 55px;
                height: 55px;
                border-radius: 50%;
                transition: .5s;
            }
            .login{
                width: 65px;
                height: 65px;
                line-height: 65px;
                text-align: center;
                border-radius: 50px;
                &:hover{color: #1DC779;cursor: pointer;}
            }
        }
        .logo{
            width: 150px;
            height: 150px;
            img{
                width: 100%;
                height: 100%;
                margin-left: -25px;
            }
        }
        ul{
            display: flex;
            justify-content: space-around;
            li{
                width: 100px;
                text-align: center;
                > a{
                    line-height: 26px;
                    font-size: 16px;
                    font-weight: 600;
                }
                    &:hover{
                        > a{
                            border-bottom: 1px solid @xtxColor;
                        }
                    }
                    &.active{
                        > a{
                            color: @xtxColor;
                            border-bottom: 1px solid @xtxColor;
                        }
                    }
            }
        }
        .input{
            width: 250px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            .gogogo:hover{fill: olivedrab;}
            .searchList{
                width: 270px;
                height: 400px;
                background-color: #ffffff;
                position: absolute;
                top:39px;
                left:-20px;
                padding: 20px 20px;
                box-shadow: 0px 0px 8px 1.5px #cccccc;
                display: none;
                overflow: scroll;
                &.active{
                    display: block;
                }
                .list{
                    width: 100%;
                    height: 50px;
                    display: flex;
                    margin-top: 10px;
                    justify-content: space-around;
                    align-items: center;
                    .activeSpan{
                        width: 170px;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    &:hover{
                        background-color: sandybrown;
                        transition: .5s;
                    }
                }
            }
            input{
                width: 210px;
                height: 100%;
                border-radius: 30px;
                text-align: center;
                font-size: 16px;
                border: 1px solid #999999;
            }
            .icon{
                display: line-block;
                fill: #999999;
                &:hover{fill: olivedrab;}
            }
        }
    }
}
</style>