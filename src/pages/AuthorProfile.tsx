import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Linkedin, ArrowLeft, Clock, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { getAuthorBySlug, getAuthorByName } from "@/data/authors";
import { caseStudies } from "@/data/caseStudies";
import { Helmet } from "react-helmet-async";

export default function AuthorProfile() {
  const { slug } = useParams<{ slug: string }>();
  const author = slug ? getAuthorBySlug(slug) : undefined;

  // Get case studies by this author
  const authorCaseStudies = caseStudies.filter((cs) => {
    const matchedAuthor = getAuthorByName(cs.author.name);
    return matchedAuthor?.slug === slug;
  });

  if (!author) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold text-foreground mb-4">
              Author not found
            </h1>
            <Link
              to="/case-studies"
              className="text-primary hover:underline inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{author.name} - Author Profile | Apex Neural</title>
        <meta
          name="description"
          content={`${author.name} is a ${author.role} at ${author.company}. ${author.bio.slice(0, 120)}...`}
        />
      </Helmet>

      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
          
          <div className="container mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-12"
            >
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/case-studies" className="hover:text-foreground transition-colors">
                Case Studies
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Authors</span>
              <span>/</span>
              <span className="text-foreground font-medium">{author.name}</span>
            </motion.nav>

            {/* Author Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-background shadow-2xl"
                  />
                  {/* Articles Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-lg">
                    {authorCaseStudies.length} Articles
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-8 mt-8 mb-6">
                  <div className="flex flex-col items-center px-6 py-4 rounded-xl bg-card border border-border/50">
                    <span className="text-3xl font-serif font-bold text-primary">
                      {author.projectsDelivered}
                    </span>
                    <span className="text-sm text-muted-foreground">Projects</span>
                  </div>
                  <div className="flex flex-col items-center px-6 py-4 rounded-xl bg-card border border-border/50">
                    <span className="text-3xl font-serif font-bold text-primary">
                      {author.yearsExperience}
                    </span>
                    <span className="text-sm text-muted-foreground">Experience</span>
                  </div>
                </div>

                {/* LinkedIn Button */}
                <a
                  href={author.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-md flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#0A66C2] text-white font-medium hover:bg-[#004182] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Author Info Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Author Profile
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                {author.name}
              </h1>
              <p className="text-lg text-primary font-medium mb-1">
                {author.role}
              </p>
              <p className="text-muted-foreground mb-6">
                {author.company}
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {author.bio}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Case Studies by {author.name.split(' ')[0]}
              </h2>
            </motion.div>

            {authorCaseStudies.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {authorCaseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={`/case-studies/${caseStudy.id}`}
                      className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Read Case Study Label */}
                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300">
                          Read Case Study
                        </div>
                        
                        {/* Hover Arrow */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <ArrowUpRight className="w-5 h-5 text-foreground" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4">
                        {/* Badges */}
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                            {caseStudy.technology}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            {caseStudy.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {caseStudy.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {caseStudy.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No case studies available yet.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Ready to build something amazing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Work with our team of expert AI engineers to bring your vision to life.
              </p>
              <Link
                to="/ecosystem"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Explore Our Ecosystem
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
