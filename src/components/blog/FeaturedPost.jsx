import { Link } from 'react-router-dom';

const FeaturedPost = ({ post }) => {
    return (
        <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            {/* Image with gradient overlay */}
            <div className="relative h-[500px] w-full">
                <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                {/* Category and Date */}
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary-500 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                    </span>
                    <span className="text-sm opacity-75">{post.publishDate}</span>
                    <span className="text-sm opacity-75">{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold mb-4 line-clamp-2">
                    <Link to={`/blog/post/${post.id}`} className="hover:text-primary-400 transition-colors">
                        {post.title}
                    </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-lg opacity-90 mb-6 line-clamp-2">
                    {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                    <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-medium">{post.author.name}</h4>
                        <p className="text-sm opacity-75">{post.author.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPost;