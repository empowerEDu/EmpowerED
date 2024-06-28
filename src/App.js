import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar';


function App() {
  return (
     // main app injected into html file (actually coded in JSX, translated into HTML via babel), rendered by index.js
     <Router>
     <div className="App">
       <NavBar/>
       <div className="content">
         <Switch>
           <Route exact path="/">
           </Route>
           <Route path="/">
           </Route>
           <Route path="/">
           </Route>
           <Route path="*">
           </Route>
         </Switch>
       </div>
     </div>
     </Router>
  );
}

export default App;
