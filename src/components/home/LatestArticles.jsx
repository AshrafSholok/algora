
function LatestArticles() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="mb-12 text-center">
                        <span className="uppercase text-blue-700 font-semibold tracking-wider text-sm mb-2 inline-block">Latest News</span>
                        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Our Latest Articles And News<br />For Our Clients</h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((_, i) => {
                            const articleData = [
                                {
                                    author: 'Sarah Taylor',
                                    date: 'June 24, 2019',
                                    title: 'How To Boost Your Digital Marketing Agency',
                                    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
                                    authorColor: 'text-blue-700'
                                },
                                {
                                    author: 'James Anderson',
                                    date: 'June 26, 2019',
                                    title: 'The Rise Of Smarketing And Why You Need It',
                                    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
                                    authorColor: 'text-orange-700'
                                },
                                {
                                    author: 'Steven Smith',
                                    date: 'June 25, 2019',
                                    title: 'How To Use Music To Boost Your Business',
                                    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
                                    authorColor: 'text-red-700'
                                }
                            ][i];

                            return (
                                <div key={i} className="group rounded-2xl bg-white/90 shadow-lg overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-500">
                                    <div className="relative overflow-hidden h-60">
                                        <img src={articleData.image} alt={`Article ${i + 1}`} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="text-xs text-gray-500 mb-1">
                                            By: <span className={`${articleData.authorColor} font-medium`}>{articleData.author}</span> / {articleData.date}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">{articleData.title}</h3>
                                        <p className="text-gray-600 mb-4 text-sm flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                        <a href="#" className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-150">
                                            Read More <span>→</span>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
  )
}

export default LatestArticles