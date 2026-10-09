import { useScrollReveal } from "./useScrollReveal";
import Hero from "./components/Hero/Hero";
import AboutArtist from "./components/AboutArtist/AboutArtist";
import Portfolio from "./components/Portfolio/Portfolio";
import Specialties from "./components/Specialties/Specialties";
import ContactFooter from "./components/ContactFooter/ContactFooter";

export default function App() {
  useScrollReveal();
  return (
    <>
      <Hero />
      <AboutArtist />
      <Portfolio />
      <Specialties />
      <ContactFooter />
    </>
  );
}