export const comicsData = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  url: `/comics/book/${i + 1}.jpeg`,
  alt: `Page ${i + 1}`
}));

export const portfolioData = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  url: `/comics/makingOf/${i + 1}.jpeg`,
  alt: `Making Of ${i + 1}`
}));

export const storybooks = [
  {
    id: 'bouffon-vert',
    title: 'Le Bouffon Vert',
    cover: '/comics/AIbook/BouffonVert1/cover.png',
    folder: 'BouffonVert1',
    pages: [
      'P1.png', 'P2.png', 'P3-2.png', 'P4.png', 'P5-2.png', 'P6.png', 'P7.png', 'P8.png', 'P9.png',
      'P10-1.png', 'P11-2.png', 'P11-SUp.png', 'P12.png', 'P13f.png', 'P14-4.png', 'P15-3.png',
      'P16-6.png', 'P17-2.png', 'P18-3.png', 'P19.png', 'P20.png'
    ].map(file => `/comics/AIbook/BouffonVert1/${file}`)
  },
  {
    id: 'spidey',
    title: 'Spidey Adventures',
    cover: '/comics/AIbook/Spidey1/1.png',
    folder: 'Spidey1',
    pages: Array.from({ length: 20 }, (_, i) => `/comics/AIbook/Spidey1/${i + 1}.png`)
  }
];
