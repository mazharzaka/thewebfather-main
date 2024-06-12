import "./App.css";
import Generator from "./components/generator";

import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <div className="bg-dark-100 ">
      <Header />
      <Home />
      <Generator />
    </div>
  );
}

export default App;
