const baseURL:string = import.meta.env.VITE_BIOMES_API ?? process.env.BIOMES_API

type endPoints = 'biomes-list'|'biomes'|string

const get = async (point: endPoints) => {
  console.log(import.meta.env.VITE_BIOMES_API)
  console.log(process.env.BIOMES_API);
  const res = fetch(`${baseURL}/${point}`)
  return (await res).json()
} 

const API ={
  get
}

export default API
