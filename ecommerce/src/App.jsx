import "./App.css";
import CheckOut from "./components/CheckOut";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <CheckOut />
              </>
            }
          />
        </Routes>
      </>
    </div>
  );
}

export default App;
