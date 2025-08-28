import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, ExternalLink } from "lucide-react";


export default function ProjectCard({ project, onOpen }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.18 }}
        >
            <div className="group overflow-hidden border rounded-2xl shadow-sm hover:shadow-lg transition-all bg-white">
                {/* responsive image heights */}
                <div className="relative h-40 sm:h-44 md:h-48 lg:h-56 xl:h-64 overflow-hidden">
                    <img
                        src={project.cover}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-70" />
                    <div className="absolute left-3 top-3 flex flex-wrap gap-2">
                        <span className="bg-white/90 text-gray-900 text-xs font-medium px-2 py-1 rounded-full">
                            {project.category}
                        </span>
                        {project.tags?.slice(0, 2).map((t) => (
                            <span key={t} className="bg-white/80 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>


                <div className="p-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                        <span className="text-base sm:text-lg font-semibold leading-tight">{project.title}</span>
                        <span className="text-xs font-medium text-gray-500 whitespace-nowrap">{project.year}</span>
                    </div>


                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{project.description}</p>


                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack?.slice(0, 4).map((s) => (
                            <span key={s} className="border rounded-full px-2 py-1 text-xs text-gray-700">
                                {s}
                            </span>
                        ))}
                    </div>


                    <div className="flex items-center justify-between">
                        <button
                            className="px-3 py-2 bg-blue-600 text-white text-sm rounded-xl hover:bg-blue-700 transition flex items-center"
                            onClick={() => onOpen(project)}
                        >
                            View details
                            <ArrowUpRight className="ml-2 h-4 w-4 inline" />
                        </button>


                        <div className="flex items-center gap-3 text-sm">
                            {project.links?.repo && (
                                <a href={project.links.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline">
                                    <GitBranch className="h-4 w-4" /> <span className="hidden sm:inline">Repo</span>
                                </a>
                            )}
                            {project.links?.demo && (
                                <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-blue-600 hover:underline">
                                    <ExternalLink className="h-4 w-4" /> <span className="hidden sm:inline">Demo</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}