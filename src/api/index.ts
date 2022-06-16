const baseURL = process.env.BIOMES_API ?? import.meta.env.VITE_BIOMES_API

type endPoints = 'biomes-list'|'biomes'|string

const get = async (point: endPoints) => {
  if (baseURL) {
    const res = await fetch(`${baseURL}/${point}`);
    return res.json()
  } else {
    return JSON.parse("[]")
  }
} 

const API = {
  get
}

export default API
