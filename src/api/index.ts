const baseURL:string = process.env.BIOMES_API ?? import.meta.env.VITE_BIOMES_API

type endPoints = 'biomes-list'|'biomes'|string

const get = async (point: endPoints) => {
  console.log(import.meta.env.VITE_BIOMES_API)
  console.log(process.env.BIOMES_API);
  console.log(`${baseURL}/${point}`);
  const resp = await fetch(`${baseURL}/${point}`);
  const body = await resp.text();
  console.log(body)
  return JSON.parse(body)
} 

const API ={
  get
}

export default API
