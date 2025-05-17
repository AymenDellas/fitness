import CTA from "./components/CTA";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Results from "./components/Results";
import Testi from "./components/Testi";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero />
      <Pricing />
      <Results />
      <Testi />
      <Faq />
      <CTA />
    </main>
  );
};

export default App;
