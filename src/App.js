import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import NewsletterSignUp from "./NewsletterSignUp";
import Newsletter from './Newsletter';
import Contact from './Contact';
import ArticleDetails from './ArticleDetails';
import SponsorUs from './SponsorUs';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
          <Route exact path="/">
           <Home></Home>
           <NewsletterSignUp/>
           </Route>
           <Route path="/newsletters">
            <Newsletter/>
            <NewsletterSignUp/>
           </Route>
            <Route path="/contact" component={Contact} />
            <Route path="/sponsor-us" component={SponsorUs} />
            <Route path="/articles/:id" component={ArticleDetails} />
            <Route path="*" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
