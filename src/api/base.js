import axios from "axios";

// const ERR_OK = 0;
// const baseURL = "/";

// axios.defaults.baseURL = baseURL;

// export function get(url,params){
//   return axios.get(url,{
//     params
//   }).then((res)=>{
//     const serverData = res.data;
//     if(serverDate.code === ERR_OK){
//       return serverData.result;
//     }
//   }).catch((e)=>{
//     console.log(e);
    
//   })
// }

export function getSinger(){
  return axios.get("/top/artists").then((res)=>{
      console.log(res)
  }).catch((e)=>{
    console.log(e);
  })
}