import { variables } from '../variables.js'

export const { biomesApi } = variables

const baseURL:string = biomesApi

type endPoints = 'biomes-list'|'biomes'|string

const get = async (point: endPoints) => {
  console.log(`${baseURL}/${point}`)

  const res = fetch(`${baseURL}/${point}`)
  return (await res).json()
} 

const API ={
  get
}

export default API
