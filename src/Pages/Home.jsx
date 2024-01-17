import Hero from '../Components/Hero/Hero';
import Offers from '../Components/Offers/Offers';
import Popular from '../Components/Popular/Popular';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

function Home() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}

export default Home;
