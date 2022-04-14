import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> {/*In react-router-dom v6, "Switch" is replaced by routes "Routes". */}
          <Route exact path="/" element={<Login />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
