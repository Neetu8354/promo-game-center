import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomTabBar from "@/components/BottomTabBar";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blogPosts";
import { CalendarDays, Clock, ChevronRight, ArrowLeft } from "lucide-react";

const WHATSAPP_LINK = "https://wa.link/reddyanna_";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post.slug, 3);

  // Convert markdown-like content to HTML
  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      if (trimmed.startsWith('### ')) return <h3 key={i} className="font-heading text-lg font-bold text-foreground mt-6 mb-2">{trimmed.slice(4)}</h3>;
      if (trimmed.startsWith('## ')) return <h2 key={i} className="font-heading text-xl font-bold text-foreground mt-8 mb-3">{trimmed.slice(3)}</h2>;
      if (trimmed.startsWith('#### ')) return <h4 key={i} className="font-heading text-base font-bold text-foreground mt-4 mb-1.5">{trimmed.slice(5)}</h4>;
      if (trimmed.startsWith('- ')) return <li key={i} className="text-sm text-muted-foreground ml-4 mb-1 list-disc">{renderInline(trimmed.slice(2))}</li>;
      if (trimmed.startsWith('|')) return null; // skip tables for simplicity
      if (/^\d+\./.test(trimmed)) return <li key={i} className="text-sm text-muted-foreground ml-4 mb-1 list-decimal">{renderInline(trimmed.replace(/^\d+\.\s*/, ''))}</li>;
      return <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">{renderInline(trimmed)}</p>;
    });
  };

  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://www.babu8.online/blog/${post.slug}`} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.babu8.online/blog/${post.slug}`} />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => <meta key={tag} property="article:tag" content={tag} />)}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.metaDescription,
          "image": post.image,
          "datePublished": post.date,
          "author": { "@type": "Person", "name": post.author },
          "publisher": { "@type": "Organization", "name": "Babu8", "url": "https://www.babu8.online" },
          "url": `https://www.babu8.online/blog/${post.slug}`,
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.babu8.online/blog/${post.slug}` }
        })}</script>
      </Helmet>

      <Header />

      <main className="px-3 py-4 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><ChevronRight size={12} /></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><ChevronRight size={12} /></li>
            <li className="text-foreground font-medium truncate max-w-[150px]">{post.category}</li>
          </ol>
        </nav>

        <Link to="/blog" className="inline-flex items-center gap-1 text-xs text-primary mb-4 hover:underline">
          <ArrowLeft size={12} /> Back to Blog
        </Link>

        {/* Hero Image */}
        <div className="rounded-lg overflow-hidden mb-4 aspect-video">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" width={800} height={450} />
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold text-primary uppercase bg-primary/10 px-2 py-0.5 rounded">{post.category}</span>
          {post.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[9px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{tag}</span>
          ))}
        </div>

        <h1 className="font-heading text-xl font-bold text-foreground leading-tight mb-2">{post.title}</h1>

        <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-6">
          <span>{post.author}</span>
          <span className="flex items-center gap-0.5"><CalendarDays size={10} /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          <span className="flex items-center gap-0.5"><Clock size={10} /> {post.readTime}</span>
        </div>

        {/* Content */}
        <article className="mb-8">
          {renderContent(post.content)}
        </article>

        {/* CTA */}
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-8 text-center">
          <h3 className="font-heading text-lg font-bold text-foreground mb-2">Join Babu8 Today!</h3>
          <p className="text-xs text-muted-foreground mb-3">Experience the best cricket and casino gaming platform in India.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold uppercase"
          >
            Get Started Now
          </a>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section>
            <h2 className="font-heading text-lg font-bold text-foreground mb-3">Related Articles</h2>
            <div className="grid grid-cols-1 gap-3">
              {related.map(rp => (
                <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group flex gap-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-all overflow-hidden">
                  <div className="w-24 shrink-0 overflow-hidden">
                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover" loading="lazy" width={150} height={150} />
                  </div>
                  <div className="py-2 pr-2 flex-1 min-w-0">
                    <span className="text-[9px] font-bold text-primary uppercase">{rp.category}</span>
                    <h3 className="font-heading text-xs font-bold text-foreground leading-tight mt-0.5 group-hover:text-primary transition-colors line-clamp-2">{rp.title}</h3>
                    <span className="text-[9px] text-muted-foreground mt-1 block">{rp.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <BottomTabBar />
    </div>
  );
};

export default BlogPost;
