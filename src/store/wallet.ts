import type { Writable } from 'svelte/store'
import Big from 'big.js'
import * as Cookie from 'cookie'
import { browser } from '$app/env'
import { writable } from 'svelte/store'
import { scillaJSONVal } from '@zilliqa-js/scilla-json-utils'
import { units, Long, BN, bytes } from '@zilliqa-js/util'

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


 const mintVouchers = async (currentMintCount:string) => {
  const { contracts, utils, wallet } = window.zilPay
  const { base16, bech32 } = wallet.defaultAccount
  const quantity = parseInt(currentMintCount)
  const nonce = fetchNonce()
  console.log(`mintVouchers - ${wallet.base16}/${quantity}/${nonce}`)
  const contract = contracts.at('0x0b633edca3afcc9b2505c2dea092621fdf4c3368')

  const costForOne = 100000000000000
  const totalCost = costForOne * quantity
  const gasLimit = 4000 * quantity


  const pair = [base16, ""]
  const listOfPairs = Array(quantity).fill(pair)
  
  const VERSION = bytes.pack(333, 1)
  const tx = await contract.call('ProxyBatchMint',
  [
    {
      vname: 'token_uris_list',
      type: 'List (Pair (ByStr20) (String))',
      value: scillaJSONVal("List (Pair (ByStr20) (String))", listOfPairs)
    }
  ],
  {
    version: VERSION,
    amount: new BN(totalCost),
    gasPrice: units.toQa('2000', units.Units.Li),
    gasLimit: Long.fromNumber(gasLimit),
    nonce
  }
)

console.log(`Minting vouchers`)
console.log(`Address: ${base16}  quantity: ${quantity}`)
console.log(`Nonce: ${nonce}`)
console.log(`Txid: ${tx.hash}`)

return tx
}

  return {
    subscribe,
    connect,
    increaseNonce,
    fetchNonce,
    mintVouchers
  }

  
}

export default createWalletStore()
