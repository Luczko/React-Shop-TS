import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import AppContext from "./AppContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <AppContext>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/catalog'>
            <Catalog />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </AppContext>
    </Router>
  );
}

//testing sourcetree
//lines lines
//lines lines

export default App;
