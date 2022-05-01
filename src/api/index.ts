

const baseURL:string = 'http://localhost:4000' 

type endPoints = 'biomes-list'|'biomes'|string



const get = async (point: endPoints) => {
  const res = fetch(`${baseURL}/${point}`)
  return (await res).json()
} 

const API ={
  get
}

export default API
