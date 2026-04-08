import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";

function App() {
  return (
    <div className="relative selection:bg-brand-purple selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppIcon />
    </div>
  );
}

export default App;
