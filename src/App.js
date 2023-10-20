import logo from "./logo.svg";
import "./App.css";
import "./styles/styles.css";
import { Button } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Button colorScheme="red" width={"30%"}>
        My Chakra Button
      </Button>
      <Footer />
    </>
  );
}

export default App;
