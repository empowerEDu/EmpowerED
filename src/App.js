import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import NewsletterSignUp from "./NewsletterSignUp";
import Newsletter from './Newsletter';
import Contact from './Contact';
import UpcomingDates from './UpcomingDates';
import ImageSlideshow from './ImageSlideshow';


function App() {

  return (
     // main app injected into html file (actually coded in JSX, translated into HTML via babel), rendered by index.js
     <Router>
     <div className="App">
       <NavBar/>
       <div className="content">
         <Switch>
           <Route exact path="/">
           <Home></Home>
           <NewsletterSignUp/>
           </Route>
           <Route path="/opportunities">
           </Route>
           <Route path="/newsletters">
            <Newsletter/>
            <NewsletterSignUp/>
           </Route>
           <Route path="/sponsor-us">
           </Route>
           <Route path="/contact">
            <Contact/>
           </Route>
           <Route path="*">
           </Route>
         </Switch>
       </div>
     </div>
     <Footer/>
     </Router>
  );
}

export default App;
