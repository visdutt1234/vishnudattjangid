import portfolioData from "../data/portfolioData.json";

const { posts } = portfolioData;

export default function BlogPage() {
  return (
    <section className="blog-route" id="blog">
      <div className="wrap">
        <div className="sec-head reveal in">
          <span className="sec-no">05</span>
          <span className="sec-title">Writing and Posts</span>
          <span className="sec-tag">[ latest posts ]</span>
        </div>
        <div className="blog-list reveal in">
          {posts.slice(0, 5).map((post) => (
            <article key={`${post.url}-blog`} className="post blog-card has-embed">
              <div className="embed-wrap">
                <iframe
                  loading="lazy"
                  src={post.embed}
                  style={{ height: `${post.height}px` }}
                  title="LinkedIn post preview"
                />
              </div>
            </article>
          ))}
        </div>
        <div className="blog-cta reveal in">
          <a
            className="btn primary"
            href="https://www.linkedin.com/in/vishnu-jangid-7957ba160/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all posts ↗
          </a>
        </div>
      </div>
    </section>
  );
}
