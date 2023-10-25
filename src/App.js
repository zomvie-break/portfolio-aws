import "./App.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="outermost-container">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
