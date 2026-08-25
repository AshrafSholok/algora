import { useState } from 'react';
import Hero from '../../components/common/Hero';
import FeaturedPost from '../../components/blog/FeaturedPost';
import BlogCard from '../../components/blog/BlogCard';
import BlogSidebar from '../../components/blog/BlogSidebar';
import { blogPosts, categories, tags } from '../../data/blog/blogData';

function Blog() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedTag, setSelectedTag] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    
    // Get featured posts
    const featuredPosts = blogPosts.filter(post => post.featured);
    
    // Get regular posts (non-featured)
    const regularPosts = blogPosts.filter(post => !post.featured);

    // Filter posts based on selected category, tag, and search query
    const filteredPosts = regularPosts.filter(post => {
        // Filter by category
        if (selectedCategory && post.category !== selectedCategory) return false;
        
        // Filter by tag
        if (selectedTag && !post.tags.includes(selectedTag)) return false;
        
        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const searchableText = [
                post.title,
                post.excerpt,
                post.content,
                post.author.name,
                post.category,
                ...post.tags
            ].map(text => text.toLowerCase()).join(' ');
            
            return searchableText.includes(query);
        }
        
        return true;
    });

    return (
        <>
            <Hero title="Blog" />
            
            <div className="bg-gray-50 min-h-screen">
                {/* Featured Section */}
                <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredPosts.slice(0, 2).map(post => (
                            <FeaturedPost key={post.id} post={post} />
                        ))}
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Blog Posts Grid */}
                        <div className="lg:w-2/3 lg:order-1 order-2">
                            {/* Active Filters */}
                            {(selectedCategory || selectedTag) && (
                                <div className="mb-6 flex items-center gap-2">
                                    <span className="text-gray-600">Active filters:</span>
                                    {selectedCategory && (
                                        <button
                                            onClick={() => setSelectedCategory(null)}
                                            className="flex items-center gap-1 bg-primary-500/10 text-primary-500 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {selectedCategory}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                    {selectedTag && (
                                        <button
                                            onClick={() => setSelectedTag(null)}
                                            className="flex items-center gap-1 bg-primary-500/10 text-primary-500 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            #{selectedTag}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            )}

                            {/* Posts Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {filteredPosts.map(post => (
                                    <BlogCard key={post.id} post={post} />
                                ))}
                            </div>

                            {/* Empty State */}
                            {filteredPosts.length === 0 && (
                                <div className="text-center py-12">
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        No posts found
                                    </h3>
                                    <p className="text-gray-600">
                                        Try adjusting your search or filter to find what you're looking for.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:w-1/3 lg:order-2 order-1">
                            <BlogSidebar
                                categories={categories}
                                tags={tags}
                                onCategoryClick={setSelectedCategory}
                                onTagClick={setSelectedTag}
                                onSearch={setSearchQuery}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Blog;