import Header from "../Components/Header"
import Hero from "../Components/Hero"
import AboutUs from "../Components/AboutUs"
import HowItWorks from "../Components/HowItWorks"
import Patners from "../Components/Patners"
import Support from "../Components/Support"
import FAQ from "../Components/FAQ"
import Reviews from "../Components/Reviews"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <AboutUs/>
    <HowItWorks/>
    <Patners/>
    <Support/>
    <Reviews/>
    <FAQ pageVariant="home"/>
    <Footer/>
    </>
  )
}

export default Home