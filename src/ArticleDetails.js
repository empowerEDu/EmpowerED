import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const ArticleDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://json-vercel-app.vercel.app/articles/${id}`)
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setArticle(data);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [id]);


  return (
    <div className="article-details container">
      {error && <div>{error}</div>}
      {article && (
        <article>
          <h2>{article.title}</h2>
          <p>Published on {article.publishDate}</p>
          <div>{article.body}</div>
        </article>
      )}
    </div>
  );
}

export default ArticleDetails;
