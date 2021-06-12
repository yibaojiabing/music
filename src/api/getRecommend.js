import { get } from './base'

export function getRecommend(){
  return get("/top/artists")
}