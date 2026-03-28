import { useState, useMemo } from "react";
import BlogHero from "@/pageComps/regacatsblogs/components/BlogHero";
import BlogSearchFilter from "@/pageComps/regacatsblogs/components/BlogSearchFilter";
import BlogCard from "@/pageComps/regacatsblogs/components/BlogCard";
import BlogDrawer, { BlogPost } from "@/pageComps/regacatsblogs/components/BlogDrawer";
import BlogCTA from "@/pageComps/regacatsblogs/components/BlogCTA";
import LeadFormDialog from "@/pageComps/regacatsblogs/components/LeadFormDialog";
import { blogPosts } from "@/pageComps/regacatsblogs/data/blogPosts";

const NewBlog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [leadFormOpen, setLeadFormOpen] = useState(false);

  const filteredBlogs = useMemo(() => {
    return blogPosts.filter((blog) => {
      const matchesSearch =
        searchQuery === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.summary.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" ||
        blog.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleReadMore = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setDrawerOpen(true);
  };

  const handleGetConsulting = () => {
    setLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <BlogHero onGetConsulting={handleGetConsulting} />
      
      <BlogSearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <section className="max-w-6xl mx-auto px-6 pb-16">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No blogs found matching your criteria. Try adjusting your search or filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog, index) => (
              <div
                key={blog.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard
                  title={blog.title}
                  summary={blog.summary}
                  category={blog.category}
                  date={blog.date}
                  thumbnail={blog.thumbnail}
                  onReadMore={() => handleReadMore(blog)}
                />
              </div>
            ))}
          </div>
        )}
      </section>

      <BlogCTA onGetConsulting={handleGetConsulting} />

      <BlogDrawer
        blog={selectedBlog}
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        onGetConsulting={handleGetConsulting}
      />

      <LeadFormDialog open={leadFormOpen} onOpenChange={setLeadFormOpen} />
    </div>
  );
};

export default NewBlog;
