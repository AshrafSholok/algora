import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
    return (
        <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Image */}
            <Link to={`/blog/${post.id}`} className="block overflow-hidden">
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
            </Link>

            {/* Content */}
            <div className="p-6">
                {/* Category and Date */}
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary-500/10 text-primary-500 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    <Link 
                        to={`/blog/post/${post.id}`} 
                        className="text-gray-900 hover:text-primary-500 transition-colors"
                    >
                        {post.title}
                    </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                        <span 
                            key={index}
                            className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Author and Date */}
                <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-3">
                        <img 
                            src={post.author.avatar} 
                            alt={post.author.name} 
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm font-medium text-gray-900">
                            {post.author.name}
                        </span>
                    </div>
                    <span className="text-sm text-gray-500">
                        {post.publishDate}
                    </span>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;