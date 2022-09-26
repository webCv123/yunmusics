import { createStore } from 'vuex'
import banner from '@/store/banner'
import index from '@/store/ulIndex'
import ulDateList from '@/store/ulListDate' 
import  {bannerData,bannerLrc,comment,commentBanner,songSheet,searchList,songdates,getLogin} from '@/api/getData'
import list from './list'
import searchddd from '@/store/search'
import record from '@/store/record'
import mylike from '@/store/mylike'
// 数据持久化
import createPersistedstate from 'vuex-persistedstate'
export default createStore({
  state: {
    power:false,
    count: 0,
    bool:true,
    playList:[{
      id: '407002483',
      name:"浪费",
      ar:[{id:34569090,name:"徐佳莹","tns":[],"alias":[]}],
      al:{
        id:34569090,
        name:'我是歌手第四季 第10期',
        picUrl:"http://p4.music.126.net/6rRiJ_bBS-jOA-IwGUY9dw==/3422779700149849.jpg",
        tns:[],
        alias:[],
      },
    }],
    songDate:'34569090',
    newsong:{data:[{id:'',url:''}]},
    displaysong:true,
    lrc:'[00:00.000] 作词 : 陈信延\n[00:01.000] 作曲 : 郑楠\n[00:02.000] 编曲 : 郑楠\n[00:27.080]多久了 我都没变\n[00:30.160]爱你这回事 整整六年\n[00:40.680]你最好 做好准备\n[00:44.410]我没有打算 停止一切\n[00:54.150]想说我没有志愿\n[01:00.990]也没有事情好消遣\n[01:08.610]有一个人能去爱\n[01:13.360]多珍贵\n[01:20.510]没关系你也不用给我机会\n[01:27.360]反正我还有一生可以浪费\n[01:34.570]我就是剩这么一点点倔\n[01:40.760]称得上 我的优点\n[01:48.240]没关系你也不用对我惭愧\n[01:54.830]也许我根本喜欢被你浪费\n[02:01.730]随便你今天拼命爱上谁\n[02:08.170]我都会 坦然面对\n[02:15.510]即使要我跟你再耗个十年 无所谓\n[02:29.840]\n[02:57.910]你和他 没有如愿\n[03:01.520]短短半年内 开始分裂\n[03:11.730]我的爱 依旧没变\n[03:14.830]连我自己都 对我钦佩\n[03:25.730]有的是很多资源\n[03:31.720]我有的是很多时间\n[03:39.120]不去爱才是浪费\n[03:44.880]多不对\n[03:51.460]没关系你也不用给我机会\n[03:58.530]反正我还有一生可以浪费\n[04:05.150]我就是剩这么一点点倔\n[04:11.290]称得上 我的优点\n[04:19.010]没关系你也不用对我惭愧\n[04:25.830]也许我根本喜欢被你浪费\n[04:33.050]就算我再去努力爱上谁\n[04:39.150]到头来 也是白费\n[04:55.900]不如永远跟你耗来得快乐\n[05:03.800]对不对',
    bannerConst:[
      {id:'417859631',singer:'薛之谦',songname:'我好像在哪见过你',picUrl:'http://p3.music.126.net/hti_a0LADoFMBHvOBwAtRA==/1369991500930171.jpg'},
      {id:'288991',singer:'赛宁',songname:'小观园',picUrl:'http://p3.music.126.net/Cjyfdq3eeEGX2bw74-UJVg==/30786325592314.jpg'},
      {id:'1346961369',singer:'微笑子',songname:'約束',picUrl:'http://p4.music.126.net/HGrpfAlzlR4q9Nf-DuytBg==/109951164529412260.jpg'},
      {id:'327089',singer:'张靓颖',songname:'画皮',picUrl:'http://p4.music.126.net/9YeRLbaJmAc3FiHRxJXxzw==/109951165641456869.jpg'},
      {id:'501347079',singer:'曾沛慈',songname:'一个人想着一个人',picUrl:'http://p4.music.126.net/7136kwDE1UvY6uh0VXQ01g==/109951167220899564.jpg'},
      {id:'35403523',singer:'陈奕迅',songname:'陪你度过漫长岁月',picUrl:'http://p3.music.126.net/Nm5rwMYaH_20Zh61XhGn8Q==/109951166600775221.jpg'},
      {id:'27571001',singer:'イマドン',songname:'Letter Song',picUrl:'http://p3.music.126.net/zJae2lg6igf-mBb5vbecew==/3099523278777600.jpg'},
      {id:'5257138',singer:'周杰伦',songname:'屋顶',picUrl:'https://pic2.zhimg.com/80/v2-92713f72b2784e779e257222ebba503d_720w.jpg'},
      {id:'28563317',singer:'陈奕迅',songname:'阴天快乐',picUrl:'http://p3.music.126.net/itkdsMFR8nYzaTiDdHO3tA==/109951165995320408.jpg'},
    ],
    currentime:0,
    intervalId:0,   
    Class: false,
    // {comments:[{user:{avatarUrl:'',nickname:''},timeStr:'',content:''},]}
    SongReviews: {},
    Sheet:[],
    Singles:[],
    audio:null,
    inputTT:false,
    searchs:{},
    // 歌曲最大时间
    maxtime:0,
  },
  
  getters: {
    lrcyLIst:(state)=>{
      let time = state.lrc.split(/\n/).map((item,i)=>{
          let min = item.slice(1,3)
          let sec = item.slice(4,6)
          let mill = item.slice(7,10)
          let text = ''
          if(item!=''){
            text = item.slice(11,item.length)
          }
          return {
            min,sec,mill,
            lyric:text,
            times:parseInt(mill) + parseInt(sec) * 1000 + parseInt(min) * 60 * 1000
          }
      })
      return time
    }
  },
  mutations: {
    getBool(state){state.bool = true},
    getBannerSongs(state, data){state.playList = data.songs},
    getBannerLrc(state, data){state.lrc = data.lrc.lyric},
    getCurrentime(state, data){state.currentime = data},
    setCurrentTime(state, value){state.currentime = value},
    getComment(state, data){state.SongReviews = data},
    getSongs(state, data){state.songDate = data},
    getcommentBanner(state, data){state.SongReviews = data},  
    getSheet(state, data){state.Sheet = data.playlists},
    getDom(state,data){state.audio = data},
    getSearchList(state, data){state.searchs = data.data},
    getsongdates(state,data){
      if(data.data[0].url.includes('mp3')){
        state.newsong = data
      }else{
        return
      }
    },
    gologining(state,data){

    }
  },
  actions: {
    async setBannerSongs({commit}, bannerId){
      const {result} = await bannerData(bannerId)
      commit('getBannerSongs', result)
    },
    async setBannerLrc({commit}, bannerId){
      const data = await bannerLrc(bannerId)
      commit('getBannerLrc', data)
    },
    async setComment({commit}){
      const data = await comment()
      commit('getComment', data)
    },
    async setSongs({commit}, id){
      commit('getSongs', id)
    },
    async setcommentBanner({commit}, id){
      const data = await commentBanner(id)
      commit('getcommentBanner', data)
    },
    async setSheet({commit}){
      const data = await songSheet()
      commit('getSheet', data)
    },
    setDom({commit}, data){
      commit('getDom', data)
    },
    async setsearchList({commit}){
      const data = await searchList()
      commit('getSearchList',data)
    },
    async setsongdates({commit}, id){
      const data = await songdates(id)
      commit('getsongdates',data)
    },
    async setlogining({commit},obj){
      const result = await getLogin(obj.phone,obj.pwdss)
      commit('gologining',result)
    }
  },
  modules: {
    banner,index,ulDateList,list,searchddd,record,mylike
  },
  plugins: [
    createPersistedstate({
    key: 'emomusic-client-pc-store',
    paths: ['list','searchddd','record','mylike']
    })
  ]
})
