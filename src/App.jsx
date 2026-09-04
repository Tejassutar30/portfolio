import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;