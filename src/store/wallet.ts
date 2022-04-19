import type { Writable } from 'svelte/store'
import Big from 'big.js'
import { browser } from '$app/env'
import { writable } from 'svelte/store'
import { zilliqa } from '../zilliqa/zilliqa'

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
    const { wallet } = window.zilPay
    const { base16, bech32 } = wallet.defaultAccount
    const network = wallet.net

    const getBalanceResponse = await zilliqa.blockchain.getBalance(base16)

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
    const { wallet } = window.zilPay

    const wasConnectionSuccessful = await wallet.connect()

    if (!wasConnectionSuccessful) return false

    wallet.observableAccount().subscribe(updateWalletData)

    wallet.observableNetwork().subscribe((network) => {
      update((w) => ({ ...w, network }))
    })

    updateWalletData()
  }

  const increaseNonce = () => {
    update((w) => ({
      ...w,
      nonce: w.nonce + 1
    }))
  }

  const fetchNonce = async () => {
    return new Promise<number>((resolve) => {
      const unsubscribe = subscribe(async (wallet) => {
        const getBalanceResponse = await zilliqa.blockchain.getBalance(
          wallet.base16
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