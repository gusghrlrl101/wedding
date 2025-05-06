import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Guestbook from "./components/GuestBook";
import Header from "./components/Header";
import Info from "./components/Info";
import MapLinks from "./components/MapLinks";
import Message from "./components/Message";
import NaverMap from "./components/NaverMap";

export default function App() {
  return (
    <>
      <Header />
      <Message />
      <Info />
      <NaverMap lat={37.3960133} lng={126.9645232} placeName="더파티움 안양" />
      <MapLinks lat={37.3960133} lng={126.9645232} placeName="더파티움 안양" />
      <Gallery />
      <Guestbook />
      <Contact />
      <Footer />
    </>
  );
}
