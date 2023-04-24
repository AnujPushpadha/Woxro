import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="bg-black">
        <div className="flex-col  justify-center mx-auto max-w-[1150px]">
          <Navbar />
          <Services />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
