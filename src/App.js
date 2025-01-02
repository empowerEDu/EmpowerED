import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change Switch to Routes
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import NewsletterSignUp from "./NewsletterSignUp";
import Newsletter from './Newsletter';
import Contact from './Contact';
import ArticleDetails from './ArticleDetails';
import SupportUs from './SupportUs';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<Home />} /> {/* Use element instead of component */}
            <Route path="/" element={<NewsletterSignUp />} />
            <Route path="/newsletters" element={<Newsletter />} />
            <Route path="/newsletters" element={<NewsletterSignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support-us" element={<SupportUs />} />
            <Route path="/articles/:id" element={<ArticleDetails />} />
            <Route path="*" element={    <Home style={{ width: '100%' }} />
} /> {/* Catch-all route */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
