import { get } from './base'
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
  return get("/top/playlist")
}