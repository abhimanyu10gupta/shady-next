// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    name: 'Vic',
    email: 'shadypalmscafe@gmail.com',
    password: '123456',
  },
];

const events = [
  {
    title: "Happy Hour",
    description: "20% on House Spirits",
    time: "Wednesday and Sunday",
  },
  {
    title: "Trivia Night",
    description: "Trivia Night with Aemon",
    time: "Wednesday at 5:30pm",
  },
  {
    title: "Live Music",
    description: "with Aoife Taurus",
    time: "Sunday 3pm-5pm",
  }
]

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const bookings = [
  {
    name: "Lee Robinson",
    pax: 10,
    time: "2:00 PM",
    date: '2022-12-06',
    phone: "123456789",
  },
  {
    name: "Marshall Mathers",
    pax: 12,
    time: "2:00 PM",
    date: '2022-12-06',
    phone: "123456789",
  },
  {
    name: "Osamu Dazai",
    pax: 10,
    time: "2:00 PM",
    date: '2022-12-06',
    phone: "123456789",
  },
  {
    name: "Steve Burns",
    pax: 12,
    time: "2:00 PM",
    date: '2022-12-06',
    phone: "123456789",
  },
  {
    name: "Junji Ito",
    pax: 9,
    time: "2:00 PM",
    date: '2022-12-06',
    phone: "123456789",
  },
  {
    name: "Kendrick Lamar",
    pax: 10,
    time: "2:00 PM",
    date: '2022-12-06',
    phone: "123456789",
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, customers, bookings, revenue, events };
