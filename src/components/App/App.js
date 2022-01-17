import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import AboutUs from "../AboutUs/AboutUs";
import Advantages from "../Advantages/Advantages";
import Services from "../Services/Services";
import Offers from "../Offers/Offers";
// import SixthContainer from "../sixth_container/sixth_container"
// import SeventhContainer from "../seventh_container/seventh_container"
// import EightContainer from "../eight_container/eight_container"
// import Footer from "../Footer/footer"

import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Intro />
      <AboutUs />
      <Advantages />
      <Services />
      <Offers />
      {/* <SixthContainer />
      <SeventhContainer />
      <EightContainer />
      <Footer /> */}
    </div>
  );
}

export default App;
