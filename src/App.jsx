import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";

function App() {
  return (
    <div className="min-h-screen bg-(--color-background)">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
      </main>
    </div>
  );
}

export default App;