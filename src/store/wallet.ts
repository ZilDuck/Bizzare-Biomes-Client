import type { Writable } from 'svelte/store'
import Big from 'big.js'
import * as Cookie from 'cookie'
import { browser } from '$app/env'
import { writable } from 'svelte/store'


export type Wallet = {
  base16? : string
  bech32?: string
  balance?: Big
  isConnected: boolean
  network?: typeof window.zilPay.wallet.net
  nonce?: number
}

const createWalletStore = () => {
  const { subscribe, update }: Writable<Wallet> = writable({
    isConnected: false
  })

  const updateWalletData = async () => {
    const { wallet, blockchain } = window.zilPay
    const { base16, bech32 } = wallet.defaultAccount
    const network = wallet.net

    const getBalanceResponse = await blockchain.getBalance(base16)

    document.cookie = Cookie.serialize('userAddress', base16, { path: '' })

    update(() => ({
      base16,
      bech32,
      network,
      isConnected: true,
      balance: Big(getBalanceResponse.result.balance),
      nonce: getBalanceResponse.result.nonce
    }))
  }

  const connect = async () => {
    console.log('connect')
    const { wallet } = window.zilPay

    const wasConnectionSuccessful = await wallet.connect()

    if (!wasConnectionSuccessful) return false

    wallet.observableAccount().subscribe(updateWalletData)

    wallet.observableNetwork().subscribe((network: any) => {
      update((w) => ({ ...w, network }))
    })

    updateWalletData()
  }

  const increaseNonce = () => {
    update((w) => ({
      ...w,
      nonce: w.nonce! + 1
    }))
  }

  const fetchNonce = async () => {
    const { blockchain } = window.zilPay
    return new Promise<number>((resolve) => {
      const unsubscribe = subscribe(async (wallet) => {
        const getBalanceResponse = await blockchain.getBalance(
          wallet.base16!
        )
        update((w) => ({
          ...w,
          nonce: getBalanceResponse.result.nonce
        }))
        unsubscribe()
        resolve(getBalanceResponse.result.nonce as number)
      })
    })
  }

  if (browser && window.zilPay && window.zilPay.wallet.defaultAccount) {
    connect()
  }

  return {
    subscribe,
    connect,
    increaseNonce,
    fetchNonce
  }
}

export default createWalletStore()
