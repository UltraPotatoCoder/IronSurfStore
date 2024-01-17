import Hero from '../Components/Hero/Hero';
import Offers from '../Components/Offers/Offers';
import Popular from '../Components/Popular/Popular';
import NewCollections from '../Components/NewCollections/NewCollections';

function Home() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
}

export default Home;
