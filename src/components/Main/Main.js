
import Intro from "../Intro/Intro";
import AboutUs from "../AboutUs/AboutUs";
import Advantages from "../Advantages/Advantages";
import Services from "../Services/Services";
import Offers from "../Offers/Offers";
import Projects from "../Projects/Projects";
import Reviews from "../Reviews/Reviews";
import ContactUs from "../ContactUs/ContactUs";

function Main (props) {
  return (
    <main className='main'>
      <Intro />
      <AboutUs />
      <Advantages />
      <Services />
      <Offers />
      <Projects />
      <Reviews />
      <ContactUs />
    </main>
  )
}

export default Main;