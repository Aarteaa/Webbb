import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Technologies from "./component/Technologies";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import Professional from "./component/professional";
import ClickSparkle from "./component/ClickSparkle";
import SoundToggle from "./component/SoundToggle";
import { SoundProvider } from "./component/SoundContext";



const App = () => {
  return (
    <div className="min-h-screen bg-background text-textmain antialiased selection:bg-accent selection:text-white">
      
      {/* Soft background glow */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 h-screen w-screen 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(232,180,188,0.35),rgba(255,255,255,0))]">
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <SoundProvider>
          <SoundToggle />
        <ClickSparkle />   {/* ✨ Sparkle + sound handler */}
        <Hero />
        <About />
        <Technologies />
        <Professional />
        <Projects />
        <Experience />
        <Contact />
        </SoundProvider>
      </div>

    </div>
  );
};

export default App;
