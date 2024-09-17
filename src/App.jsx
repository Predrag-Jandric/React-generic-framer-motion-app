import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Insights from "./components/Insights";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Insights />
      <Stats />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
