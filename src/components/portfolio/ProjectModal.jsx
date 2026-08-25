import React from 'react'
import { X, GitBranch, ExternalLink } from "lucide-react";

function ProjectModal({ project, onClose }) {
    if (!project) return null;


    return (
        <>
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4">
                {/* On small screens we use full screen; on larger screens a centered card */}
                <div className="bg-white w-full h-full sm:h-auto sm:max-w-3xl rounded-t-xl sm:rounded-2xl shadow-xl overflow-hidden relative">
                    <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-10 p-2" onClick={onClose}>
                        <X className="h-6 w-6" />
                    </button>


                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                        <div className="relative h-56 md:h-full">
                            <img src={project.cover} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
                        </div>


                        <div className="p-5 sm:p-6 flex flex-col max-h-[70vh] sm:max-h-[85vh] overflow-y-auto">
                            <div className="mb-3">
                                <h2 className="text-xl sm:text-2xl font-bold mb-1">{project.title}</h2>
                                <p className="text-sm text-gray-500">
                                    {project.client ? `${project.client} • ` : ""}
                                    {project.category} • {project.year}
                                </p>
                            </div>


                            <div className="text-sm text-gray-700 leading-relaxed mb-4">{project.description}</div>


                            {project.impact && (
                                <div className="mb-4 grid grid-cols-2 gap-3">
                                    {project.impact.map((im) => (
                                        <div key={im.metric} className="rounded-xl border p-3">
                                            <div className="text-xs text-gray-500">{im.metric}</div>
                                            <div className="text-lg font-semibold">{im.value}</div>
                                        </div>
                                    ))}
                                </div>
                            )}


                            <div className="mb-4">
                                <div className="text-xs font-medium text-gray-500 mb-2">Tech Stack</div>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack?.map((s) => (
                                        <span key={s} className="border rounded-full px-2 py-1 text-xs text-gray-700">{s}</span>
                                    ))}
                                </div>
                            </div>


                            <div className="mt-auto flex items-center gap-3">
                                {project.links?.repo && (
                                    <a href={project.links.repo} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded-xl text-sm hover:bg-gray-50 inline-flex items-center">
                                        <GitBranch className="inline mr-2 h-4 w-4" /> Repository
                                    </a>
                                )}


                                {project.links?.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded-xl text-sm hover:bg-gray-50 inline-flex items-center">
                                        <ExternalLink className="inline mr-2 h-4 w-4" /> Live Site
                                    </a>
                                )}


                                <div className="ml-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectModal