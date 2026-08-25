const BlogSidebar = ({ categories, tags, onCategoryClick, onTagClick, onSearch }) => {
    return (
        <aside className="space-y-8">
            {/* Search */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">Search</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        onChange={(e) => onSearch(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <ul className="space-y-2">
                    {categories.map((category) => (
                        <li key={category.id}>
                            <button
                                onClick={() => onCategoryClick?.(category.name)}
                                className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-gray-700">{category.name}</span>
                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                                    {category.count}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <button
                            key={index}
                            onClick={() => onTagClick?.(tag)}
                            className="px-3 py-1 bg-gray-100 hover:bg-primary-500/10 text-gray-700 hover:text-primary-500 rounded-full text-sm transition-colors"
                        >
                            #{tag}
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default BlogSidebar;