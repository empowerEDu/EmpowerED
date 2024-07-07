import { useEffect, useState } from "react";
import NewsletterList from "./NewsletterList";

const Newsletter = () => {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching data...");
    fetch('http://localhost:8000/articles')
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
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
    </div>
  );
}

export default Newsletter;
