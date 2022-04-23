

const baseURL:string = 'http://localhost:4000' 

type endPoints = 'biomes-list'|'biomes'



const get = async (point: endPoints) => fetch(`${baseURL}/${point}`)

const API ={
  get
}

export default API
