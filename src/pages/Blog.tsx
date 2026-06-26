import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";
import { blogPosts } from "@/data/blogPosts";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";

const Blog = () => {

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Babu8 Blog - Cricket Tips, Casino Guides & Gaming Strategies</title>
        <meta name="description" content="Read expert articles on cricket analysis, fantasy cricket tips, casino game strategies, and responsible gaming guides on the Babu8 blog." />
        <link rel="canonical" href="https://www.babu8.online/blog" />
        <meta property="og:title" content="Babu8 Blog - Cricket Tips, Casino Guides & Gaming Strategies" />
        <meta property="og:description" content="Read expert articles on cricket analysis, fantasy cricket tips, casino game strategies, and responsible gaming guides." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.babu8.online/blog" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Babu8 Blog",
          "description": "Expert articles on cricket, casino games, and gaming strategies",
          "url": "https://www.babu8.online/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Babu8",
            "url": "https://www.babu8.online"
          },
          "blogPost": blogPosts.map(p => ({
            "@type": "BlogPosting",
            "headline": p.title,
            "description": p.excerpt,
            "datePublished": p.date,
            "author": { "@type": "Person", "name": p.author },
            "url": `https://www.babu8.online/blog/${p.slug}`
          }))
        })}</script>
      </Helmet>

      <Header />

      <main className="px-4 md:px-8 py-6 pb-24 md:pb-10 max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-foreground font-medium">Blog</li>
          </ol>
        </nav>

        <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">Babu8 Blog</h1>
        <p className="text-sm text-muted-foreground mb-8">Expert tips, strategies &amp; guides for cricket and casino gaming in India.</p>

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={i === 0 ? "eager" : "lazy"}
                  width={600}
                  height={338}
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded w-fit mb-2">
                  {post.category}
                </span>
                <h2 className="font-heading text-sm md:text-base font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                  <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CalendarDays size={10} />
                      {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-primary flex items-center gap-0.5">
                    Read <ChevronRight size={10} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default Blog;
