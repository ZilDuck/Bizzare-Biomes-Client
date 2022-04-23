import { readable } from 'svelte/store';

export type worldLevelBiome = {
  name:string,
  sitePath:string,
  imagePath:string,
  bottomColour?:string,
  topColour?:string
}

const biomesList: Array<worldLevelBiome> = [
  {
      name: 'Aurora',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Aurora borealis sky.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Big clouds',
      sitePath: 'big-clouds',
      imagePath: '/assets/backgrounds/Big clouds.png',
      bottomColour: '#e6f1f2',
      topColour: '#9cdaf2'
  },
  {
      name: 'Cityscape',
      sitePath: 'cityscape',
      imagePath: '/assets/backgrounds/City scape WIP.png',
      bottomColour: '#ea976d',
      topColour: '#84bcc2'
  },
  {
      name: 'Comet sky',
      sitePath: 'comet-sky',
      imagePath: '/assets/backgrounds/Comet sky.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Desert sky',
      sitePath: 'desert-sky',
      imagePath: '/assets/backgrounds/Desert sky.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Floating islands',
      sitePath: 'floating-islands',
      imagePath: '/assets/backgrounds/Floating islands WIP.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Great wave',
      sitePath: 'great-wave',
      imagePath: '/assets/backgrounds/Great wave.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Islands sky',
      sitePath: 'islands-sky',
      imagePath: '/assets/backgrounds/Islands sky.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Japanese pagoda',
      sitePath: 'japanese-pagoda',
      imagePath: '/assets/backgrounds/Japanese pagoda.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Mountain sky',
      sitePath: 'mountains-sky',
      imagePath: '/assets/backgrounds/Mountains sky.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Night sky',
      sitePath: 'night-sky',
      imagePath: '/assets/backgrounds/Night sky.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Pine forest',
      sitePath: 'pine-forest',
      imagePath: '/assets/backgrounds/Pine forest.png',
      bottomColour: '#50cf7d',
      topColour: '#3477b7'
  },
  {
      name: 'Rainbow sky',
      sitePath: 'rainbow-sky',
      imagePath: '/assets/backgrounds/Rainbow sky.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Sky serpent',
      sitePath: 'sky-serpent',
      imagePath: '/assets/backgrounds/Sky serpent.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Spiky ridge',
      sitePath: 'spiky-ridge',
      imagePath: '/assets/backgrounds/Spiky ridge.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Sunny sky',
      sitePath: 'sunny-sky',
      imagePath: '/assets/backgrounds/Sunny sky.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Sunny sky two',
      sitePath: 'sunset-sky',
      imagePath: '/assets/backgrounds/Sunset sky WIP 2.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Volcano sky',
      sitePath: 'volcano-sky',
      imagePath: '/assets/backgrounds/Volcano sky fixed.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  },
  {
      name: 'Dark moon',
      sitePath: 'dark-moon',
      imagePath: '/assets/backgrounds/Zelda moon.png',
      bottomColour: '#00383e',
      topColour: '#00383e'
  }
]

export const worldLevelBiomes = readable(biomesList)

