
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import All from "./components/All";



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Navbar}/>
      <Route exact path="/" component={Body}/>
      <Route exact path="/all-destinations" component={All}/>
    </div>
  );
}

export default App;
