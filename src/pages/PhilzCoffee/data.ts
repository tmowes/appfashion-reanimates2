export interface Product {
  title: string
  subtitle: string
  color1: string
  color2: number
  picture: number
}

export const products = [
  {
    title: 'How about an Iced Coffee Rosé?',
    subtitle: 'Medium, Creamy Cream, Sweet Sugar, Iced',
    color1: '#F9AC8A',
    color2: 0xfffbc6ae,
    // color2: '#FBC6AE',
    picture: require('./assets/rose.png'),
    aspectRatio: 1,
  },

  {
    title: 'Craving a Philharmonic?',
    subtitle: 'Large, Medium Cream, Medium Sugar',
    color1: '#4DD2A5',
    color2: 0x6663d8b0,
    // color2: '#63D8B0',
    picture: require('./assets/philharmonic.png'),
    aspectRatio: 1,
  },
  {
    title: 'Craving a new Cold Brew?',
    subtitle: 'Try Philtered Soul',
    color1: '#FEB829',
    color2: 0xfffdd446,
    // color2: '#FDD446',
    picture: require('./assets/coldbrew.png'),
    aspectRatio: 1,
  },
  {
    title: 'Excited for an Ecstatic?',
    subtitle: 'Large, No cream, No sugar, Iced',
    color1: '#FE8E01',
    color2: 0xffff9a16,
    // color2: '#FF9A16',
    picture: require('./assets/dark.png'),
    aspectRatio: 1,
  },
  {
    title: 'Craving a Croissant?',
    subtitle: 'Flaky perfection, baked fresh daily',
    color1: '#E2DDD1',
    color2: 0xfff3f1ed,
    // color2: '#F3F1ED',
    picture: require('./assets/croissant.png'),
    aspectRatio: 757 / 735,
  },
]
