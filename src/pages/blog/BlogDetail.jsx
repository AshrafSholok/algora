import { useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blog/blogData';
import Hero from '../../components/common/Hero';

function BlogDetail() {
    const { id } = useParams();
    // In real API implementation, you would fetch the post by ID
    const post = blogPosts.find(post => post.id === parseInt(id));

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Post not found</h2>
                    <p className="mt-2 text-gray-600">The article you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Hero title={post.title} subtitle={post.category} />
            
            <article className="py-12 bg-white">
                {/* Article Header */}
                <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="flex items-center gap-4 mb-8">
                        <img 
                            src={post.author.avatar} 
                            alt={post.author.name}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span>{new Date(post.publishDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</span>
                                <span>·</span>
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags.map((tag, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Featured Image */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                    <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
                        <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Article Content */}
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg prose-primary mx-auto">
                        {/* This would be replaced with real content from the API */}
                        <p className="lead text-xl text-gray-600 mb-8">
                            {post.excerpt}
                        </p>
                        
                        <div className="space-y-6 text-gray-600">
                            {post.content.split('\\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* Share Section */}
                    <div className="mt-12 pt-8 border-t">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h4>
                        <div className="flex gap-4">
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </button>
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3v9ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06v5.18Z" />
                                </svg>
                            </button>
                            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM5.625 12a1.125 1.125 0 1 0 2.25 0 1.125 1.125 0 0 0-2.25 0Zm12.75 0a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Author Bio */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center gap-6">
                            <img 
                                src={post.author.avatar} 
                                alt={post.author.name}
                                className="w-16 h-16 rounded-full object-cover"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                    {post.author.name}
                                </h3>
                                <p className="text-gray-600 mb-2">{post.author.role}</p>
                                <div className="flex gap-4">
                                    <a href="#" className="text-primary-500 hover:text-primary-600">
                                        Follow
                                    </a>
                                    <a href="#" className="text-primary-500 hover:text-primary-600">
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogDetail;