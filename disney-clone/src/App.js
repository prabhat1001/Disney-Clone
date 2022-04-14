import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header element={<Header />}/>
        <Routes> {/*In react-router-dom v6, "Switch" is replaced by routes "Routes". */}
          <Route exact path="/" element={<Login />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
