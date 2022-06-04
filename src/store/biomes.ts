import { readable } from 'svelte/store';

export type worldLevelBiome = {
  name:string,
  houseNumber: number,
  sitePath:string,
  imagePath:string,
  bottomColour?:string,
  topColour?:string
}

const biomesList: Array<worldLevelBiome> = [
  {
      name: 'Arid Lodge',
      houseNumber: 0,
      sitePath: 'Arid Lodge',
      imagePath: '/assets/backgrounds/Aurora borealis sky.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Big clouds',
      houseNumber: 0,
      sitePath: 'big-clouds',
      imagePath: '/assets/backgrounds/Big clouds.png',
      bottomColour: '#e6f1f2',
      topColour: '#9cdaf2'
  },
  {
      name: 'Cityscape',
      houseNumber: 0,
      sitePath: 'cityscape',
      imagePath: '/assets/backgrounds/City scape WIP.png',
      bottomColour: '#ea976d',
      topColour: '#84bcc2'
  },
  {
      name: 'Comet sky',
      houseNumber: 0,
      sitePath: 'comet-sky',
      imagePath: '/assets/backgrounds/Comet sky.png',
      bottomColour: '#00383e',
      topColour: '#48597e'
  },
  {
      name: 'Desert sky',
      houseNumber: 0,
      sitePath: 'desert-sky',
      imagePath: '/assets/backgrounds/Desert sky.png',
      bottomColour: '#00383e',
      topColour: '#f5e7df'
  },
  {
      name: 'Floating islands',
      houseNumber: 0,
      sitePath: 'floating-islands',
      imagePath: '/assets/backgrounds/Floating islands WIP.png',
      bottomColour: '#00383e',
      topColour: '#fdc3cb'
  },
  {
      name: 'Great wave',
      houseNumber: 0,
      sitePath: 'great-wave',
      imagePath: '/assets/backgrounds/Great wave.png',
      bottomColour: '#00383e',
      topColour: '#8bc7d6'
  },
  {
      name: 'Islands sky',
      houseNumber: 0,
      sitePath: 'islands-sky',
      imagePath: '/assets/backgrounds/Islands sky.png',
      bottomColour: '#00383e',
      topColour: '#edffff'
  },
  {
      name: 'Japanese pagoda',
      houseNumber: 0,
      sitePath: 'japanese-pagoda',
      imagePath: '/assets/backgrounds/Japanese pagoda.png',
      bottomColour: '#00383e',
      topColour: '#d1ecfa'
  },
  {
      name: 'Mountain sky',
      houseNumber: 0,
      sitePath: 'mountains-sky',
      imagePath: '/assets/backgrounds/Mountains sky.png',
      bottomColour: '#00383e',
      topColour: '#fff0e3'
  },
  {
      name: 'Night sky',
      houseNumber: 0,
      sitePath: 'night-sky',
      imagePath: '/assets/backgrounds/Night sky.png',
      bottomColour: '#00383e',
      topColour: '#447197'
  },
  {
      name: 'Pine forest',
      houseNumber: 0,
      sitePath: 'pine-forest',
      imagePath: '/assets/backgrounds/Pine forest.png',
      bottomColour: '#50cf7d',
      topColour: '#3477b7'
  },
  {
      name: 'Rainbow sky',
      houseNumber: 0,
      sitePath: 'rainbow-sky',
      imagePath: '/assets/backgrounds/Rainbow sky.png',
      bottomColour: '#00383e',
      topColour: '#cceef7'
  },
  {
      name: 'Sky serpent',
      houseNumber: 0,
      sitePath: 'sky-serpent',
      imagePath: '/assets/backgrounds/Sky serpent.png',
      bottomColour: '#00383e',
      topColour: '#afb8bd'
  },
  {
      name: 'Spiky ridge',
      houseNumber: 0,
      sitePath: 'spiky-ridge',
      imagePath: '/assets/backgrounds/Spiky ridge.png',
      bottomColour: '#00383e',
      topColour: '#fcb698'
  },
  {
      name: 'Sunny sky',
      sitePath: 'sunny-sky',
      houseNumber: 0,
      imagePath: '/assets/backgrounds/Sunny sky.png',
      bottomColour: '#00383e',
      topColour: '#90ebd0'
  },
  {
      name: 'Sunny sky two',
      houseNumber: 0,
      sitePath: 'sunset-sky',
      imagePath: '/assets/backgrounds/Sunset sky WIP 2.png',
      bottomColour: '#00383e',
      topColour: '#ffae4a'
  },
  {
      name: 'Volcano sky',
      houseNumber: 0,
      sitePath: 'volcano-sky',
      imagePath: '/assets/backgrounds/Volcano sky fixed.png',
      bottomColour: '#00383e',
      topColour: '#ab9892'
  },
  {
      name: 'Dark moon',
      houseNumber: 0,
      sitePath: 'dark-moon',
      imagePath: '/assets/backgrounds/Zelda moon.png',
      bottomColour: '#00383e',
      topColour: '#99233e'
  }
]

export const worldLevelBiomes = readable(biomesList)

