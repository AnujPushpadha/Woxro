import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-black">
        <div className="flex-col  justify-center mx-auto max-w-[900px]">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;
