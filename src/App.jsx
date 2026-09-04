import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <div id="top" className="min-h-screen bg-[var(--color-background)]">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;