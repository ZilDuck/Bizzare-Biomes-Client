<script context="module">
	export async function load({ params, url }) {
	  const { id } = params
	  const page = url.searchParams.get('page') ?? 1
	  
	  const metadata = await API.get(`biome/${id}`)
	  const { ownedNFTs, pagination } = await API.get(`address/${metadata.base16}?page=${page}&size=20`)
  
	  const truncatedWallet = metadata.bech32
			  ? `${metadata.bech32.slice(0, 6)}...${metadata.bech32.slice(-6)}` : ''
  
	  const nftImage = metadata.data.resources[0].uri
	  const biomeName = metadata.data.attributes[0].value
	  
	  console.table(metadata)
	  console.table(ownedNFTs)
	  console.log(truncatedWallet)
	  console.log(nftImage)
	
	  return {
		props: {
		  biomeName,
		  id,
		  metadata,
		  ownedNFTs,
		  truncatedWallet,
		  nftImage,
		  pagination
		}
	  }
	}
  </script>
  
  <script lang="ts">
	  import API from '../../../api'
	  import { worldLevelBiomes } from '../../../store/biomes'
	  import Footer from '../../../components/Footer.svelte'
	  import NftCard from '../../../components/NFTCard.svelte'
	  import BiomeCard from '../../../components/BiomeCard.svelte'
	  import Pagination from '../../../components/Pagination.svelte'
	   
	  import { page } from '$app/stores'
  
	  export let id:string
	  export let biomeName:string
	  export let metadata:any
	  export let ownedNFTs:any
	  export let truncatedWallet:string
	  export let nftImage:string
	  export let pagination = {
		  size: 20,
		  page: 1,
		  total_pages: 0,
		  total_elements: 0
	  }
		export let currentPage = $page.url.searchParams.get('page') ?? 1
  
	  export const replaceStateWithQuery = (values: Record<string, string>) => {
		  const url = new URL(window.location.toString());
		  for (let [k, v] of Object.entries(values)) {
			  if (!!v) {
			  url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v));
			  } else {
			  url.searchParams.delete(k);
			  }
		  }
		  history.replaceState({}, '', url);
	  };
  
	  async function handlePageChange(event:any) {
		  const page = event.detail.currentPage
		  const res = await API.get(`address/${metadata.base16}?page=${page}&size=${pagination.size}`).catch(error => {
			  console.log(error)
		  })
  
		  ownedNFTs = [...res.ownedNFTs]
		  
		  currentPage = page
		  replaceStateWithQuery({
			  page: page
		  })
  
	  }
	  
	  const biome = $worldLevelBiomes.find(biome => biome.name === biomeName)
	  
	  $: nftName = `${biome?.name} #${id}`
	  let biomeTypeBackground = '/assets/compositions/lightblueclouds.png'
  
  </script>
  
  <svelte:head>
	  <title>{nftName}</title>
  </svelte:head>
  
  <section class="flex flex-col justify-center items-center flex-1 bg-[#90ebd0] relative">
	  <div class="h-[69px] bg-[#90ebd0] "></div>
	  <img
		  src={biomeTypeBackground}
		  alt="Floating island"
		  class="bg-[#90ebd0] w-full top-20 left-0"
	  />
	  <div
		  class="max-w-screen-xl flex px-auto mx-auto justify-center items-center flex-col  w-full h-min -mt-1/5"
	  >
		  <h1 class="w-full text-center font-black  text-7xl mt-1/5">{nftName}</h1>
		  <p class="mt-5 text-xl text-center">An NFT project for duck holders, and newcomers alike.</p>
	  </div>
  
	  <div class="flex flex-row my-5 gap-x-5 w-full max-w-screen-xl justify-start">
		  <a href='/directory/{biome?.sitePath}' class="btn btn-primary">Go back to all {biome?.name}'s</a>
	  </div>
  </section>
  
  <section class="bg-[#90ebd0]">
	  <div class="max-w-screen-xl mx-auto">
		  <div class="relative mb-5">
			  <BiomeCard imageText={nftImage}/>
		  </div>
		  <div class="bg-white rounded-lg w-full max-w-screen-xl flex justify-between items-center p-5">
			  <div class="flex flex-row">
				  <div class="flex flex-col gap-1 pr-5 mr-5 border-r border-gray-200">
					  <h6 class="text-[#CDCDCD] font-normal text-base">Zilkroad price</h6>
					  <h5 class="text-gray-700 font-normal text-base">2000 ZIL</h5>
				  </div>
				  <div class="flex flex-col gap-1 pr-5 mr-5 border-r border-gray-200">
					  <h6 class="text-[#CDCDCD] font-normal text-base">Sales</h6>
					  <h5 class="text-gray-700 font-normal text-base">5</h5>
				  </div>
				  <div class="flex flex-col gap-1 pr-5 mr-5">
					  <h6 class="text-[#CDCDCD] font-normal text-base">Volume 30d</h6>
					  <h5 class="text-gray-700 font-normal text-base">$1,200</h5>
				  </div>
			  </div>
			  <div class="flex items-center">
				  <div class="w-[40px] h-[40px] bg-[#495A7F] rounded-[100%] mr-5" />
				  <p class="text-[#495A7F]">Owned by <a href="#" class="underline">{truncatedWallet}</a></p>
			  </div>
		  </div>
		  <div class="flex items-center mt-5 mb-[120px]">
			  {#if metadata.attributes}
				  {#each metadata.attributes as attribute}
					  <div class="bg-white rounded-lg flex justify-between items-center py-[12px] px-5 mr-5">
						  <p><span class="text-[#CDCDCD]">{attribute.trait_type}:</span> {attribute.value}</p>
					  </div>
				  {/each}
			  {/if}
		  </div>
  
  <main
		  class='flex flex-col max-w-screen-xl mx-5 mt-5 space-y-12 xl:mx-auto md:grid md:grid-cols-2 md:space-y-0 md:gap-6 lg:grid-cols-3 xl:grid-cols-4'
		>
		<h2 class="md:col-span-2 lg:col-span-3 xl:col-span-4 text-[#495A7F] font-semibold text-2xl"><a href="#" class="underline">{truncatedWallet}</a>’s owned NFTs</h2>
		  <h2 class='text-[#495A7F] mt-10 text-xl md:col-span-2 lg:col-span-3 xl:col-span-4'>
			  Showing <span
			  class='text-black'>{pagination.size < pagination.total_elements ? pagination.size : pagination.total_elements}</span>
			  of <span
			  class='text-black'>{pagination.total_elements}</span> items
			</h2>
  
		  <Pagination numPages={pagination.total_pages} currentPage={parseInt(String(currentPage))}
				className='md:col-span-2 lg:col-span-3 xl:col-span-4 mx-auto'
				on:pageChange={handlePageChange} />			
		  
		  {#each ownedNFTs as nft (nft.contract + nft.tokenId )}
			  <NftCard nft={nft} />
		  {/each}				
				  
		  <Pagination numPages={pagination.total_pages} currentPage={parseInt(String(currentPage))}
				className='md:col-span-2 lg:col-span-3 xl:col-span-4 mx-auto'
				on:pageChange={handlePageChange} />	
  
	  
  </main>
  </section>
  
  <div class="bg-[#90ebd0]">
	  <Footer />
  </div>