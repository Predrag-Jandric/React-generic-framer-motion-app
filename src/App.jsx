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
    <main className="bg-gradient-to-tl from-gray-100 to-gray-200">
      <Navbar />
      <Hero />
      <Insights />
      <Stats />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
