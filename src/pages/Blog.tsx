import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";
import { blogPosts } from "@/data/blogPosts";
import { CalendarDays, Clock, ChevronRight } from "lucide-react";

const Blog = () => {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Babu88 Blog - Cricket Tips, Casino Guides & Gaming Strategies</title>
        <meta name="description" content="Read expert articles on cricket analysis, fantasy cricket tips, casino game strategies, and responsible gaming guides on the Babu88 blog." />
        <link rel="canonical" href="https://babu88.game/blog" />
        <meta property="og:title" content="Babu88 Blog - Cricket Tips, Casino Guides & Gaming Strategies" />
        <meta property="og:description" content="Read expert articles on cricket analysis, fantasy cricket tips, casino game strategies, and responsible gaming guides." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://babu88.game/blog" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Babu88 Blog",
          "description": "Expert articles on cricket, casino games, and gaming strategies",
          "url": "https://babu88.game/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Babu88",
            "url": "https://babu88.game"
          },
          "blogPost": blogPosts.map(p => ({
            "@type": "BlogPosting",
            "headline": p.title,
            "description": p.excerpt,
            "datePublished": p.date,
            "author": { "@type": "Person", "name": p.author },
            "url": `https://babu88.game/blog/${p.slug}`
          }))
        })}</script>
      </Helmet>

      <Header />

      <main className="px-3 py-4 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-foreground font-medium">Blog</li>
          </ol>
        </nav>

        <h1 className="font-heading text-2xl font-bold text-foreground mb-4">Babu88 Blog</h1>
        <p className="text-sm text-muted-foreground mb-6">Expert tips, strategies & guides for cricket and casino gaming in India.</p>

        {/* Featured Post */}
        <Link to={`/blog/${featured.slug}`} className="block mb-6 group">
          <div className="rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all">
            <div className="aspect-video overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
                width={800}
                height={450}
              />
            </div>
            <div className="p-3 bg-card">
              <span className="text-[10px] font-bold text-primary uppercase">{featured.category}</span>
              <h2 className="font-heading text-lg font-bold text-foreground mt-1 leading-tight group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2">{featured.excerpt}</p>
              <div className="flex items-center gap-3 mt-2 text-[10px] text-muted-foreground">
                <span className="flex items-center gap-1"><CalendarDays size={10} /> {new Date(featured.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <span className="flex items-center gap-1"><Clock size={10} /> {featured.readTime}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Post Grid */}
        <div className="grid grid-cols-1 gap-4">
          {rest.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group flex gap-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-all overflow-hidden">
              <div className="w-28 shrink-0 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={200}
                  height={200}
                />
              </div>
              <div className="py-2.5 pr-3 flex-1 min-w-0">
                <span className="text-[9px] font-bold text-primary uppercase">{post.category}</span>
                <h3 className="font-heading text-sm font-bold text-foreground leading-tight mt-0.5 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 mt-1.5 text-[9px] text-muted-foreground">
                  <span className="flex items-center gap-0.5"><CalendarDays size={9} /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                  <span className="flex items-center gap-0.5"><Clock size={9} /> {post.readTime}</span>
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
