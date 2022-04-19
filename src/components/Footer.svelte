<script>
  import Discord from './icons/Discord.svelte'
  import Telegram from './icons/Telegram.svelte'
  import Twitter from './icons/Twitter.svelte'
</script>

<footer class="grid md:grid-cols-4 px-12  md:justify-items-left py-16 space-y-6 md:space-y-0 mx-auto max-w-screen-2xl">
  <div class="space-y-4 flex flex-col">
    <h2 class="font-semibold">Team</h2>
    <a class="text-primary" href="/">About us</a>
  </div>

  <div class="space-y-4 flex flex-col">
    <h2 class="font-semibold">Links</h2>
    <a class="text-primary" href="/">Mint an NFT</a>
    <a class="text-primary" href="/">View all biomes</a>
    <a class="text-primary" href="/">Marketplace</a>
  </div>

  <div class="space-y-4 flex flex-col">
    <h2 class="font-semibold">Other</h2>
    <a class="text-primary" href="/">Privacy policy</a>
    <a class="text-primary" href="/">Terms and conditions</a>
    <a class="text-primary" href="/">Cookie policy</a>
    <a class="text-primary" href="/">Business info</a>
  </div>

  <div class="space-y-4 flex flex-col">
    <h2 class="font-semibold">Socials</h2>
    <div class="flex space-x-4">
      <Discord />
      <Twitter />
      <Telegram />
    </div>
  </div>
</footer>