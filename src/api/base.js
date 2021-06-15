import axios from "axios";

export function get(url){
  return axios.get(url).then((res)=>{
    return res;
  }).catch((e)=>{
    console.log(e);
    
  })
}

// 传参id
export function getForId(url,id){
  return axios.get(url,{
    params: {
      id: id,
    }
  }).then((res)=>{
    return res;
  }).catch((e)=>{
    console.log(e);
  })
}
//传参ids
export function getForIds(url,ids){
  return axios.get(url,{
    params: {
      ids: ids,
    }
  }).then((res)=>{
    return res;
  }).catch((e)=>{
    console.log(e);
  })
}
