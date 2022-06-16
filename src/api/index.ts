const baseURL = process.env.BIOMES_API ?? import.meta.env.VITE_BIOMES_API

type endPoints = 'biomes-list'|'biomes'|string

const get = async (point: endPoints) => {
  const res = await fetch(`http://staging-api.bizarrebiomes.com/${point}`);
  return res.json()
} 

const API = {
  get
}

export default API
