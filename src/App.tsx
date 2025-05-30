import AccountInfo from "./components/AccountInfo";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Post from "./components/Post";
import Header from "./components/Header";
import Message from "./components/Message";
import Map from "./components/Map";
import Parking from "./components/Parking";

export default function App() {
  return (
    <>
      <Header />
      <Message />
      <Gallery />
      <Map lat={37.3960133} lng={126.9645232} placeName="더파티움 안양" />
      <Parking />
      <Post />
      <AccountInfo />
      <Footer />
    </>
  );
}
