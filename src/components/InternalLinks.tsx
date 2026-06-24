import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const InternalLinks = () => {
  const latestPosts = blogPosts.slice(0, 4);

  return (
    <section className="px-3 py-4">
      <h2 className="font-heading text-base font-bold text-foreground uppercase mb-3">📖 Latest from Blog</h2>
      <div className="grid grid-cols-2 gap-2">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="bg-card border border-border rounded-lg p-2.5 hover:border-primary/50 transition-all group"
          >
            <span className="text-[9px] font-bold text-primary uppercase">{post.category}</span>
            <h3 className="font-heading text-[11px] font-bold text-foreground leading-tight mt-0.5 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <span className="text-[9px] text-muted-foreground mt-1 block">{post.readTime}</span>
          </Link>
        ))}
      </div>
      <Link to="/blog" className="block text-center text-xs text-primary font-semibold mt-3 hover:underline">
        View All Articles →
      </Link>
    </section>
  );
};

export default InternalLinks;
