const baseURL = process.env.BIOMES_API ?? import.meta.env.VITE_BIOMES_API
const processApi = process.env.BIOMES_API
const envApi = import.meta.env.BIOMES_API
const envViteApi = import.meta.env.VITE_BIOMES_API

type endPoints = 'biomes-list'|'biomes'|string

const get = async (point: endPoints) => {
  console.log(processApi)
  console.log(envApi)
  console.log(envViteApi)
  const res = await fetch(`${baseURL}/${point}`);
  return res.json()
} 

const API = {
  get
}

export default API
