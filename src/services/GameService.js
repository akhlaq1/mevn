import axios from 'axios'

const BASE_URL = "http://localhost:3000/api/";


export function getGame(){
  axios.post(BASE_URL+'getGame',{
      name:'Mobile Legends'
  }).then((data)=>{
      console.log(data)  
  });

  
}  


export default {
  getGame,
} 