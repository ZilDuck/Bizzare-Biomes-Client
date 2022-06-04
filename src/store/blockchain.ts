
export default async function getCurrentMintCount()
{
  const { wallet, blockchain } = window.zilPay
  try {
    const result = (await blockchain.getSmartContractSubState(
        '0x8ab2af0cccee7195a7c16030fbdfde6501d91903', // TEMP CODED TO NFD CONTRACT FOR TESTING
        "token_id_count"
    )).result.token_owners

    return JSON.stringify(result)
  } catch (err) {
    console.error(`error ${err}`)
  }
}

