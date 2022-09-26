import request from '@/utils/request'
// 首页banner图
export const banner = ()=> request('/banner?type=0','get')
// banner歌曲数据
export const bannerData = Id=> request(`/cloudsearch?keywords=${Id}`,'get')
// 歌词
export const lrc = ()=> request('/lyric?id=407002483','get')
// banner歌词
export const bannerLrc = Id => request(`/lyric?id=${Id}`,'get')
// 歌曲评论
export const comment = ()=> request('/comment/music?id=407002483&limit=100','get')
// 歌曲url
export const songdates = Id=> request(`/song/url?id=${Id}`,'get')
// banner歌曲评论
export const commentBanner = Id=> request(`/comment/music?id=${Id}&limit=100`,'get')
export const songConst = ()=> request('/song/url?id=407002483','get')
export const songSheet = ()=> request('/top/playlist?limit=12','get')
// 列表一歌曲
export const SingOne = ()=> request('/playlist/track/all?id=87120496&limit=12&offset=1','get')
// 每日推荐歌曲列表
export const dayList = Id=> request(`/playlist/track/all?id=${Id}&limit=10&offset=1`,'get')
export const details = Id=> request(`/playlist/detail?id=${Id}`,'get')
export const songAll = Id=> request(`/playlist/track/all?id=${Id}&limit=20&offset=1`,'get')
export const searchList = ()=> request('/search/hot/detail','get')
export const search = data=> request(`/cloudsearch?keywords=${data}&limit=50`,'get')
// 登录
export const getLogin = (phone,pwd)=> request(`/login/cellphone?phone=${phone}&password=${pwd}`,'get')
//我喜欢的音乐
export const likesong = ()=> request('/playlist/detail?id=456566574','get')
export const likelist = ()=> request('/playlist/track/all?id=456566574&limit=164&offset=1','get')
// 国风古风
export const china = ()=> request('/cloudsearch?keywords=国风&limit=80','get')