export default {
    state(){
        return {
            ulDate:[
                {name:'首页',count:0,router:'/home'},
                {name:'每日推荐',count:1,router:'/recommend'},
                {name:'国风古风',count:2,router:'/story'},
                {name:'我喜欢的',count:3,router:'/mylove'}
            ]
        }
    }
}