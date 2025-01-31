import { useEffect, useState } from "react";
import NewsletterList from "./NewsletterList";
import NewsletterSignUp from "./NewsletterSignUp";

const Newsletter = () => {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data...");
    fetch('https://json-vercel-app.vercel.app/articles')
      .then(res => {
        if (!res.ok) {
          throw Error('Error.');
        }
        return res.json();
      })
      .then(data => {
        setArticles(data);
        console.log("Data fetched successfully");
      })
      .catch(err => {
        setError(err.message);
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="articles">
      {error && <div>{error}</div>}
      {articles ? <NewsletterList articles={articles} title="Newsletters"/> : <div>Loading...</div>}
      <NewsletterSignUp/>
    </div>
  );
}

export default Newsletter;
