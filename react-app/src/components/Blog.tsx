import { blogArticles } from '../data/cars';

export default function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog__articles">
          {blogArticles.map((article) => (
            <div className="blog__article" key={article.id}>
              <img src={article.image} alt="" className="blog__article-img" />
              <h4 className="blog__article-title">{article.title}</h4>
              <span className="blog__article-link">more</span>
            </div>
          ))}
        </div>
        <button className="showmore__btn" type="button">
          show more
        </button>
      </div>
    </section>
  );
}
