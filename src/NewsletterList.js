import {Link} from "react-router-dom";


const NewsletterList = ({articles, title}) => {

    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {articles.map((articles) => (
                <div className="blog-preview" key={articles.id}>
                    <Link to={`/articles/${articles.id}`}>
                    <h2>{articles.title}</h2>
                    <p>published on {articles.publishDate}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default NewsletterList;