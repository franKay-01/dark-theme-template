import Header from '../components/header';
import Banner from '../components/banner';
import MarketPlace from '../components/marketPlace';
import ExploreItem from '../components/exploreItem';
import Footer from '../components/footer';
import "../App.css"

export default function Home() {
  return(
    <>
      <Header/>
      <Banner/>
      <MarketPlace/>
      <ExploreItem/>
      <Footer/>
    </>
  );
}
