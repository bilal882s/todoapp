import Header from "./Components/Header";
import "./App.css";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Table from "./Components/Table";
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container text-center mt-4 mb-2 text-dark">
        <h1 className="">Add Your Task</h1>
      </div>
      <Cards />
      <Table />
    </div>
  );
}

export default App;
