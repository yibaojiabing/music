import { get , getForId , getForIds } from './base'
//获取歌手信息
export function getSinger(){
  return get("/top/artists")
}
//获取推荐页轮播图数据
export function getBanners(){
  return get("/banner")
}
//获取推荐页热门歌单数据
export function getPopSongList(){
  return get("/top/playlist/highquality")
}
//获取歌单详细数据
export function getSongListDetails(id){
  return getForId("/playlist/detail",id)
}
//获取热门歌手列表数据
export function getHotSingerList(){
  return get("/artist/list")
}
//获取歌单的歌曲列表
export function getSongList(id){
  return getForIds("/song/detail",id)
}
//获取歌手详情数据
export function getSingerDetails(id){
  return getForId("/artist/detail",id)
}
//获取歌手热门歌曲
export function getSingerHotMusic(id){
  return getForId("/artist/top/song",id)
}