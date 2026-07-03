import "./App.css";

import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
import Reasons from "./components/Reasons";
import Letter from "./components/Letter";
import Surprise from "./components/Surprise";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Hero />
      <Gallery />
      <Timeline />
      <Reasons />
      <Letter />
      <Surprise />
      <Footer />
    </div>
  );
}

export default App;