import {useParams, useHistory} from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";


const ArticleDetails = () => {

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
        <div className="blog-details">
            {error && <div>could not fetch data for that resource</div>}
            {articles && (
                <article>
                    <h2>{articles.title}</h2>
                    <p>published on {articles.publishDate}</p>
                    <p>{articles.body}</p>
                </article>
            )}
        </div>
    );
}
 
export default ArticleDetails;