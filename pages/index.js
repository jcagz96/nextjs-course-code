import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://static.barcelo.com/content/dam/bhg/master/es/hoteles/republica-checa/praga/imagenes-praga/praga-rutas-1600.jpg.bhgimg.optm1100.jpg/1604687947914.jpg',
    address: 'Some adress 5, 1231231 - lisbon',
    description: ' this is a description 1'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://static.barcelo.com/content/dam/bhg/master/es/hoteles/republica-checa/praga/imagenes-praga/praga-rutas-1600.jpg.bhgimg.optm1100.jpg/1604687947914.jpg',
    address: 'Some adress 5, 2232232 - lisbon',
    description: ' this is a description 2'
  }
];

function HomePage() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  );
}

export default HomePage;