import { ContentCategory } from '../types/content';

export const generateMockContent = (): ContentCategory[] => [
  {
    name: 'TV Shows',
    items: [
      {
        id: '1',
        title: 'The Handmaid\'s Tale',
        description: 'A dystopian drama series',
        imageUrl: 'https://images.unsplash.com/photo-1620177088258-open-book',
        category: 'TV Shows',
        rating: 'TV-MA',
        year: 2017
      },
      {
        id: '2',
        title: 'Only Murders in the Building',
        description: 'Comedy mystery series',
        imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
        category: 'TV Shows',
        rating: 'TV-14',
        year: 2021
      }
      // More TV Show items...
    ]
  },
  {
    name: 'Movies',
    items: [
      {
        id: '3',
        title: 'Prey',
        description: 'Predator origin story',
        imageUrl: 'https://images.unsplash.com/photo-1616530940355-351adcd6b2d1',
        category: 'Movies',
        rating: 'R',
        year: 2022
      },
      {
        id: '4',
        title: 'No Exit',
        description: 'Thriller in a snowstorm',
        imageUrl: 'https://images.unsplash.com/photo-1612404730960-5fa4de4aefc8',
        category: 'Movies',
        rating: 'R',
        year: 2022
      }
      // More Movie items...
    ]
  },
  {
    name: 'Originals',
    items: [
      {
        id: '5',
        title: 'The Great',
        description: 'Historical comedy-drama',
        imageUrl: 'https://images.unsplash.com/photo-1635805737707-575885ab0a38',
        category: 'Originals',
        rating: 'TV-MA',
        year: 2020
      },
      {
        id: '6',
        title: 'Nine Perfect Strangers',
        description: 'Wellness retreat mystery',
        imageUrl: 'https://images.unsplash.com/photo-1620325867836-5007c4b7f633',
        category: 'Originals',
        rating: 'TV-MA',
        year: 2021
      }
      // More Original items...
    ]
  }
];
