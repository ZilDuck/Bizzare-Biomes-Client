const baseURL:string = process.env.BIOMES_API ?? import.meta.env.VITE_BIOMES_API

type endPoints = 'biomes-list'|'biomes'|string

const get = async (point: endPoints) => {
  console.log(import.meta.env.VITE_BIOMES_API)
  console.log(process.env.BIOMES_API);
  console.log(baseURL);
  const res = fetch(`${baseURL}/${point}`)
  return (await res).json()
} 

const API ={
  get
}

export default API
