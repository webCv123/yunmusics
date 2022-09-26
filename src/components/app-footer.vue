<template>
    <div class="footer">
        <!-- 抽屉 -->
        <el-drawer v-model="drawer" title="I am the title" :with-header="false">
            <div class="btn">
                <h3 style="margin-bottom:10px;">播放记录：</h3>
                <el-button type="primary" @click="clear">清空记录</el-button>
            </div>
            <div class="ps" 
                style="width:100%;height:40px;" 
                v-for="(item,index) in store.state.record.recordlist" 
                :key="item.id" 
                @click="getRecoredSong(item.id)">
                <span>{{index+1}}、</span>
                <div class="center">
                    <span>{{item.songname}}</span>
                    <svg t="1663658944120" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2501" width="35" height="35"><path d="M102.4 102.4m307.2 0l204.8 0q307.2 0 307.2 307.2l0 204.8q0 307.2-307.2 307.2l-204.8 0q-307.2 0-307.2-307.2l0-204.8q0-307.2 307.2-307.2Z" fill="#FCA77E" fill-opacity=".2" p-id="2502"></path><path d="M266.24 307.2m40.96 0l471.04 0q40.96 0 40.96 40.96l0 286.72q0 40.96-40.96 40.96l-471.04 0q-40.96 0-40.96-40.96l0-286.72q0-40.96 40.96-40.96Z" fill="#FCA77E" fill-opacity=".4" p-id="2503"></path><path d="M215.04 358.4m40.96 0l471.04 0q40.96 0 40.96 40.96l0 286.72q0 40.96-40.96 40.96l-471.04 0q-40.96 0-40.96-40.96l0-286.72q0-40.96 40.96-40.96Z" fill="#FCA77E" p-id="2504"></path><path d="M675.84 460.8a20.48 20.48 0 1 1 40.96 0v163.84a20.48 20.48 0 1 1-40.96 0V460.8z m-71.68 71.68a20.48 20.48 0 1 1 40.96 0v92.16a20.48 20.48 0 1 1-40.96 0v-92.16z m-71.68 51.2a20.48 20.48 0 1 1 40.96 0v40.96a20.48 20.48 0 1 1-40.96 0v-40.96z" fill="#FFFFFF" fill-opacity=".6" p-id="2505"></path><path d="M373.76 547.84m-117.76 0a117.76 117.76 0 1 0 235.52 0 117.76 117.76 0 1 0-235.52 0Z" fill="#FFFFFF" fill-opacity=".6" p-id="2506"></path><path d="M378.0608 471.04a10.24 10.24 0 0 1 10.24 10.24v1.69984c6.2976 6.22592 12.34944 10.06592 18.14528 11.53024 8.88832 2.23232 16.39424 12.1344 22.528 29.71648-9.75872-13.44512-18.24768-20.1728-25.45664-20.1728-4.5568 0-9.6256-1.26976-15.21664-3.81952V593.92c0 1.46432-0.3072 2.84672-0.86016 4.10624 0.69632 9.96352-9.04192 20.89984-23.53152 25.61024-16.13824 5.24288-32.0512 0.77824-35.54304-9.984-3.50208-10.752 6.7584-23.72608 22.8864-28.9792a42.46528 42.46528 0 0 1 16.56832-2.048V481.28a10.24 10.24 0 0 1 10.24-10.24z" fill="#FCA77E" p-id="2507"></path></svg>
                </div>
                <div class="icons">
                    <span>{{item.singer}}</span>
                    <svg t="1663659501348" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3434" width="20" height="20"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" p-id="3435"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" p-id="3436"></path></svg>
                </div>
            </div>
        </el-drawer>
        <div class="xianzhi"></div>
        <div class="boxFooter">
            <div class="footerBf">
                <div class="left">
                    <div class="iconList">
                        <svg t="1662015494269" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3810" width="25" height="25"><path d="M206 865h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56z m168.686-386.191l422.304-303.4c32.294-23.201 77.282-15.83 100.484 16.464A72 72 0 0 1 911 233.883v559.053c0 39.764-32.235 72-72 72a72 72 0 0 1-39.95-12.1L376.288 570.877c-25.73-17.16-32.677-51.93-15.517-77.66a56 56 0 0 1 13.915-14.408z" p-id="3811"></path></svg>
                        <svg  @click="show" v-if="store.state.bool" t="1662015293100" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2394" width="35" height="35"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" p-id="2395"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" p-id="2396"></path></svg>
                        <svg @click="hide" v-else t="1662446276820" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4109" width="35" height="35"><path d="M512 42.666667C252.793333 42.666667 42.666667 252.793333 42.666667 512s210.126667 469.333333 469.333333 469.333333 469.333333-210.126667 469.333333-469.333333S771.206667 42.666667 512 42.666667z m0 896c-235.64 0-426.666667-191.026667-426.666667-426.666667s191.026667-426.666667 426.666667-426.666667 426.666667 191.026667 426.666667 426.666667-191.026667 426.666667-426.666667 426.666667z m106.666667-213.333334a21.333333 21.333333 0 0 1-21.333334-21.333333V320a21.333333 21.333333 0 0 1 42.666667 0v384a21.333333 21.333333 0 0 1-21.333333 21.333333z m-213.333334 0a21.333333 21.333333 0 0 1-21.333333-21.333333V320a21.333333 21.333333 0 0 1 42.666667 0v384a21.333333 21.333333 0 0 1-21.333334 21.333333z" fill="#ffffff" p-id="4110"></path></svg>
                        <svg t="1662015462263" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3173" width="25" height="25"><path d="M817 160h38c30.928 0 56 25.072 56 56v593c0 30.928-25.072 56-56 56h-38c-30.928 0-56-25.072-56-56V216c0-30.928 25.072-56 56-56zM648.314 546.191l-422.304 303.4c-32.294 23.201-77.282 15.83-100.484-16.464A72 72 0 0 1 112 791.117V232.064c0-39.764 32.235-72 72-72a72 72 0 0 1 39.95 12.1l422.762 281.959c25.73 17.16 32.677 51.93 15.517 77.66a56 56 0 0 1-13.915 14.408z" p-id="3174"></path></svg>
                    </div>
                    <div class="SongImage">
                        <img ref="imgs" 
                            @click="getClasss" 
                            :class="[!store.state.bool?'discAnimation':'discAnimation',store.state.bool?'pause':'']" 
                            :src="store.state.playList[store.state.count].al.picUrl" alt="">
                    </div>
                </div>
                <div class="box">
                <div class="audio-item progress">
                    <el-slider @change="progressChange($event)" 
                               @mouseup.native="mouseupChangeTime"
                               v-model="audio.currentTime" 
                               :format-tooltip="realFormatSecond" 
                               :max="audio.maxTime">
                    </el-slider>
                </div>
                <div class="audio-item total-time" style="color:#ffffff;font-size:17px;">{{ times}}</div>
                </div>
                <div class="right">
                    <svg t="1662015644217" style="margin-right:10px;" class="icon" fill="#ffffff" viewBox="0 0 1179 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4730" width="25" height="25"><path d="M142.31918 540.267127l350.13559 373.653781c54.296613 63.852817 139.806023 63.883844 195.033436-1.054906l362.204951-388.670672c42.661625-48.866952 65.466202-112.130263 65.466203-182.902021a279.239726 279.239726 0 0 0-501.018122-169.653647 30.99561 30.99561 0 0 1-25.534922 12.131415 30.99561 30.99561 0 0 1-25.503895-12.131415A279.239726 279.239726 0 0 0 62.053272 341.293309c0 72.850542 28.792718 144.242832 77.411458 195.498835 1.054906 1.116959 1.985705 2.264944 2.85445 3.474983z m-54.606879 31.926409A349.732244 349.732244 0 0 1 0 341.293309C0 152.806494 152.806184 0.00031 341.292999 0.00031c95.065613 0 183.708713 39.155615 247.313317 106.111096A340.486306 340.486306 0 0 1 835.95066 0.00031c188.486815 0 341.292999 152.806184 341.292999 341.292999 0 80.793361-25.069522 154.636755-72.198982 213.463257-1.147986 1.923651-2.482131 3.754223-4.095516 5.491715l-5.181449 5.553768c-2.699317 3.071637-5.491715 6.112247-8.315138 9.090804-0.620533 0.620533-1.210039 1.241065-1.861598 1.799545L733.810974 954.069375c-79.055869 93.048882-209.553901 93.017855-287.616918 1.147985L90.783938 576.040839a31.243823 31.243823 0 0 1-3.102664-3.847303z" p-id="4731"></path></svg>
                    <svg t="1663657962534" @click="drawer = true" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2243" width="35" height="35"><path d="M608.9 288H225.6c-17.6 0-31.9-14.3-31.9-32s14.3-32 31.9-32H609c17.6 0 31.9 14.3 31.9 32s-14.3 32-32 32zM608.9 480H225.6c-17.6 0-31.9-14.3-31.9-32s14.3-32 31.9-32H609c17.6 0 31.9 14.3 31.9 32s-14.3 32-32 32zM417.3 672H225.6c-17.6 0-31.9-14.3-31.9-32s14.3-32 31.9-32h191.7c17.6 0 31.9 14.3 31.9 32s-14.3 32-31.9 32zM736.6 576c42.6 0 82.7 16.6 112.8 46.9 30.1 30.2 46.7 70.4 46.7 113.1s-16.6 82.9-46.7 113.1c-30.1 30.2-70.2 46.9-112.8 46.9-42.6 0-82.7-16.6-112.8-46.9-30.1-30.2-46.7-70.4-46.7-113.1s16.6-82.9 46.7-113.1C653.9 592.6 694 576 736.6 576m0-64c-123.4 0-223.4 100.3-223.4 224s100 224 223.4 224S960 859.7 960 736 860 512 736.6 512z" p-id="2244" fill="#ffffff"></path><path d="M159.7 832c-17.6 0-31.9-14.3-31.9-32V160c0-17.7 14.3-32 31.9-32h513.6c17.6 0 31.9 14.3 31.9 32v256c0 17.7 14.3 32 31.9 32 17.6 0 31.9-14.3 31.9-32V128c0-35.3-28.6-64-63.8-64H127.8C92.6 64 64 92.7 64 128v704c0 35.3 28.6 64 63.8 64h353.5c17.6 0 31.9-14.3 31.9-32s-14.3-32-31.9-32H159.7zM812.9 719l-100.1-57.8c-13.2-7.6-29.6 1.9-29.6 17.1v115.6c0 15.2 16.5 24.7 29.6 17.1l100.1-57.8c13.1-7.6 13.1-26.6 0-34.2z" p-id="2245" fill="#ffffff"></path></svg>
                </div>
                <!-- :src="store.state.newsong.data[0].url" -->
                <audio ref="song" 
                       id="audio" 
                       :src="`https://music.163.com/song/media/outer/url?id=${store.state.songDate}.mp3`"
                       @timeupdate="onTimeupdate"
                       @loadedmetadata="onLoadedmetadata">
                </audio>
            </div>
            <div :class="['main',store.state.Class?'active':'']">
                <img class="bgImg" :src="store.state.playList[store.state.count].al.picUrl" alt="">
                <div class="Chrldren">
                    <div class="left">
                        <div class="svgXL">
                            <svg t="1662606628908" @click="store.state.Class = false" class="iconOne" viewBox="0 0 1902 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2869" width="200" height="200"><path d="M155.204535 74.710455C126.615552 46.121472 80.483035 45.902117 51.719826 74.665326L51.719826 74.665326C23.155712 103.22944 23.012571 149.397723 51.378322 177.763474L827.770953 954.156105C884.758821 1011.143973 977.122889 1011.175424 1034.142208 954.156105L1810.534839 177.763474C1838.910318 149.387995 1838.956544 103.428535 1810.193335 74.665326L1810.193335 74.665326C1781.629294 46.101285 1735.477321 45.94176 1706.708626 74.710455L982.721463 798.697618C954.132553 827.286601 907.960393 827.466313 879.191698 798.697618L155.204535 74.710455 155.204535 74.710455Z" p-id="2870"></path></svg>
                        </div>
                        <div class="image">
                            <img :class="[!store.state.bool?'discAnimation':'discAnimation',store.state.bool?'pause':'']" 
                                 :src="store.state.playList[store.state.count].al.picUrl" alt="">
                        </div>
                    </div>
                    <div class="center">
                            <div class="h2">
                                <h2>{{store.state.playList[store.state.count].name}}</h2>
                            </div>
                            <div class="lyric" ref="lrcLists">
                                    <p ref="ppp" 
                                       :class="audio.currentTime*1000>=item.times&&audio.currentTime*1000<store.getters.lrcyLIst[i+1].times?'active':''"  
                                        v-for="(item,i) in store.getters.lrcyLIst" :key="i">
                                        {{item.lyric}}
                                    </p>
                            </div>
                    </div>
                    <div class="right"> 
                        <div class="comment" ref="comments">
                            <div class="list" v-for="item in store.state.SongReviews.comments">
                                <img :src="item.user.avatarUrl">
                                <div class="text">
                                    <p class="nameList">{{item.user.nickname}}</p>
                                    <p class="timess">{{item.timeStr}}</p>
                                    <div class="neirong">
                                        <p>{{item.content}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import {ElMessage} from 'element-plus'
import { computed, ref, onMounted, watch, reactive, nextTick, onUpdated} from 'vue'
  function realFormatSecond(second) {
    var secondType = typeof second;
    

    if (secondType === 'number' || secondType === 'string') {
      second = parseInt(second);

      var hours = Math.floor(second / 3600);
      second = second - hours * 3600;
      var mimute = Math.floor(second / 60);
      second = second - mimute * 60;

      return ('0' + mimute).slice(-2) + ':' + ('0' + second).slice(-2)
    } else {
      return '00:00'
    }
  }
export default {
    name:'Footer',
    data() {
      return {
        value: 20,
        times:0,
        audio: {
          playing: false,
          muted: false,
          currentTime: 0,
          volume: 1,
          maxTime: 0
        },
        cacheCurrent: 0,
        cacheVoice: 1,
      }
    },
    methods: {
      voiceChange() {
        this.cancelMute(false);
        if (this.audio.volume === 0) {
          this.mute(false)
        }
        this.$refs.song.volume = this.audio.volume;
      },
      mouseupChangeTime() {
        this.progressChange(this.cacheCurrent)
      },
      progressChange(value) {
        this.$refs.song.currentTime = value >= 0 ? value : this.cacheCurrent;
        this.audio.currentTime = value >= 0 ? value : this.cacheCurrent
      },
      onTimeupdate(res) {
        this.audio.currentTime = res.target.currentTime
      },
      onLoadedmetadata(res) {
        this.audio.maxTime = parseInt(res.target.duration)
        let secondTime = res.target.duration
            var minuteTime = 0 // 分
            var result = ''
            if (secondTime < 60) {
                result = secondTime + '秒'
            } else {
                if (secondTime >= 60) { // 如果秒数大于60，将秒数转换成整数
                    // 获取分钟，除以60取整数，得到整数分钟
                    minuteTime = parseInt(secondTime / 60)
                    // 获取秒数，秒数取佘，得到整数秒数
                    secondTime = parseInt(secondTime % 60)
                }
                if (secondTime > 0) {
                    secondTime = parseInt(secondTime) >= 10 ? secondTime : '0' + secondTime
                    result = '' + secondTime + ''
                }
                if (minuteTime > 0) {
                    minuteTime = parseInt(minuteTime) >= 10 ? minuteTime : '' + minuteTime
                    result = '' + minuteTime + ':' + result
                }
            }
        this.times = result
      },
      realFormatSecond(second) {
        this.cacheCurrent = second;
        return realFormatSecond(second);
      },
      handelVoice() {
        return parseInt(this.audio.volume.toFixed(2) * 100);
      }
    },
    watch:{
        'audio.currentTime':{
            handler(newValue) {
                if(parseInt(newValue)>=this.audio.maxTime-1){
                    this.store.commit('getBool')
                }
            let p = document.querySelector('p.active')
            this.$refs.lrcLists.scrollTop = p.offsetTop-270
    　　　　},
            deep:true            
        }
    },
    setup() {
        const store = useStore()
        const song = ref(null)
        const imgs = ref(null)
        const lrcLists = ref(null)
        const ppp = ref(null)
        const drawer = ref(false)
        const comments = ref(null)
        const getRecoredSong = (ids)=>{
          store.dispatch('setBannerSongs', ids)
          store.dispatch('setBannerLrc', ids)
          store.dispatch('setcommentBanner', ids)
          store.dispatch('setSongs', ids)
        //   store.dispatch('setsongdates',ids)
        }
        watch(()=> store.state.songDate, (newValue, oldValue)=>{
            if(store.state.bool){
                store.state.bool = true
                setTimeout(()=>{
                    store.state.bool = false
                    song.value.play()
                },0)
            }else{
                store.state.bool = true
                setTimeout(()=>{
                    store.state.bool = false
                    store.state.power = true
                    song.value.play()
                },600)
            }
        })
        watch(()=>store.state.SongReviews,(newV)=>{
            nextTick(()=>comments.value.scrollTop=0)
        })
        const getClasss = ()=>{
            store.state.Class = !store.state.Class
        }
        const show = ()=>{
            song.value.play()
            store.state.bool = false
        }
        const hide = ()=>{
            song.value.pause()
            store.state.bool = true
            clearInterval(store.state.id)
        }
        const clear = ()=> {
            store.commit('record/empty') 
            ElMessage.success('已清空！')
        }
        watch(()=> store.state.currentime,(newValue)=>{
            // console.log(newValue,(store.state.maxtime-1).toString())
            // if(newValue>=(store.state.maxtime-1).toString()){
            //     store.commit('getBool')
            // }
            // let p = document.querySelector('p.active')
            // lrcLists.value.scrollTop = p.offsetTop-225
        })

        return{
            store,song,show,
            hide,imgs,lrcLists,
            ppp,drawer,getClasss,
            comments,getRecoredSong,clear
        }
    }
}
</script>
<style scoped lang='less'>
@import '../assets/style/variables';
.box{
    width: 450px;
    height: 30px;
    display: flex;
    align-items: center;
}
.el-drawer__body{
    position: relative;
    .bgimgs{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: blur(30px);
        z-index: 998;
    }
    .btn{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
    }
    .ps{
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid #000000;
        padding: 0px 30px;
        transition: .5s;
        z-index: 999;
        &:hover{
            background-color: #cccccc;
        }
        .center{
            display: flex;
            align-items: center;
        }
        &:nth-child(odd ){
            background-color: #cccccc;
        }
        .icons{
            width: 70px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
}
    .audio-item {
      float: left;
      img {
        vertical-align: middle;
      }
      &.play-time {
        width: 25px;
      }
      &.progress {
        width: 400px;
        .el-slider__runway {
          margin: 0;
        }
      }
      &.total-time {
        width: 25px;
        margin-left: 5px;
      }
    }
    ::-webkit-scrollbar {display: none;}
.discAnimation {
  animation: disc 25s linear infinite;
}
.icon:hover{cursor: pointer;}
@keyframes disc {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
.pause {
  animation-play-state: paused;
  -webkit-animation-play-state: paused;
}
.footer{
    box-shadow: 0px 0px 3px .2px #000000;
    height: 60px;
    z-index: 999;
    position: relative;
    .xianzhi{
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #808080;
        z-index: -1;
    }
    .boxFooter{
        width: 1000px;
        margin: auto;
        height: 60px;
        .footerBf{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            box-shadow: -5px -3px -4px #ffffff;
            align-items: center;
        }
        .left{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            .SongImage{
                width: 60px;
                height: 80%;
                margin-left: 40px;
                img{
                    width: 80%;
                    height: 100%;
                    border-radius: 50%;
                    box-shadow: 0px 0px 12px #ffffff;
                }
            }
            .iconList{
                display: flex;
                align-items: center;
                .icon{
                    fill: #ffffff;
                    margin-right: 5px;
                    &:hover{
                        cursor: pointer;
                    }
                }
            }
        }
        .mainText{
            width: 70vh;
            display: flex;
            align-items: center;
            text-align: center;
            padding: 0 50px;
        }
        .right{
            display: flex;
            align-items: center;
        }
        .main{
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 830px;
            left: 0;
            transition: 1.5s;
            visibility: hidden;
            box-shadow: 0px 0px 0px #000000;
            background-color: #cccccc;
            z-index: -99;
            .bgImg{
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: -1;
                filter: blur(30px);
            }
            &.active{
                    z-index: -5;
                    visibility:visible;
                    position: absolute;
                    top: -100vh;
                    left: 0px;
            }
            .Chrldren{
                width: 1067px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin: auto;
                .left{
                    width: 300px;
                    height: 100%;
                    display: flex;
                    justify-content: flex-start;
                    .iconOne{
                        position: absolute;
                        top: 80px;
                        left: 30px;
                        width: 40px;
                        height: 40px;
                        fill: #cccccc;
                        &:hover{fill: @sucColor;}
                    }
                    .image{
                        width: 210px;
                        height: 210px;
                        border-radius: 50%;
                        background-color: #000000;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img{
                            width: 130px;
                            height: 130px;
                            border-radius: 50%;
                            position: relative;
                            z-index: 999;
                            box-shadow: 0px 0px 12px #ffffff;
                            position: relative;
                        }
                    }
                }
                .center{
                    width: 350px;
                    height: 100%;
                    text-align: center;      
                    color: #000000;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    // justify-content: center;
                    padding: 140px 0;
                    .h2{
                        height: 30px;
                        line-height: 30px;
                        z-index: 999;
                    }
                            .lyric{
                            margin-top: 10px;
                            width: 100%;
                            height: 555px;
                            font-size: 1em;
                            line-height: 2em;
                            padding: 35px 0;
                            overflow: scroll;
                            transition: .1s;
                            p{
                                height: 40px;
                                line-height: 40px;
                            }
                            .active{
                                font-size: 18px;
                                font-weight: 600;
                                transition: .7s;
                            }
                        }
                    // }
                }
                .right{
                    width: 400px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    padding: 140px 0;
                    color: #000000;
                    .comment{
                        padding: 0 10px;
                        width: 400px;
                        height: 600px;
                        color: #ffffff;
                        overflow: scroll;
                        .list{
                            width: 100%;
                            display: flex;
                            margin-bottom: 20px;
                            img{
                                width: 55px;
                                height: 55px;
                                border-radius: 100%;
                                margin-right: 10px;
                            }
                            .text{
                                color: #000000;
                                .nameList{font-size: 17px;}
                                .timess{font-size: 8px;color: #cccccc;}
                                .neirong{
                                    margin-top: 10px;
                                    width: 300px;
                                }
                            }
                        }
                    }         
                }
            }
        }
    }
}
</style>