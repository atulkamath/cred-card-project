import "./App.css";
import CarouselCard from "./components/CarouselCard/CarouselCard";
import Hero from "./components/Hero";
import HeroContent from "./components/HeroContent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroContent />
      <CarouselCard />
    </>
  );
}

export default App;
