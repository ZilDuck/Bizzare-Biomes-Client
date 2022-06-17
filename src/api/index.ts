import { variables } from '../variables.js'
import dotenv from 'dotenv';
dotenv.config()

process.env.IS_TESTNET ? console.log("UTILS TESTNET") : console.log("UTILS MAINNET")
const apiURL = process.env.IS_TESTNET ? process.env.TESTNET_API : process.env.MAINNET_API
console.log(`using endpoint ${apiURL}`)

export const { biomesApi } = variables

const baseURL:string = biomesApi

type endPoints = 'biomes-list'|'biomes'|string

const get = async (point: endPoints) => {
  const res = fetch(`${baseURL}/${point}`)
  return (await res).json()
} 

const API ={
  get
}

export default API
