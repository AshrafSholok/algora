import { useMemo, useState } from "react";
import { Search, Filter } from "lucide-react";
import PROJECTS from "../../data/projects/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";


const CATEGORIES = ["All", "Web", "Mobile", "AI/ML", "E-commerce", "DevOps", "AR/VR"];


export default function ProjectGallery() {
    const [active, setActive] = useState("All");
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("newest");
    const [visible, setVisible] = useState(6);
    const [opened, setOpened] = useState(null);


    const filtered = useMemo(() => {
        let list = PROJECTS.filter((p) => active === "All" || p.category === active);


        if (query.trim()) {
            const q = query.toLowerCase();
            list = list.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.description.toLowerCase().includes(q) ||
                    (p.tags || []).some((t) => t.toLowerCase().includes(q)) ||
                    (p.stack || []).some((s) => s.toLowerCase().includes(q))
            );
        }


        list = list.sort((a, b) => {
            switch (sort) {
                case "newest":
                    return b.year - a.year;
                case "oldest":
                    return a.year - b.year;
                case "az":
                    return a.title.localeCompare(b.title);
                case "za":
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });
        return list;
    }, [active, query, sort]);


    const visibleItems = filtered.slice(0, visible);
    const hasMore = visible < filtered.length;


    return (
        <div className="w-full mx-auto p-4 sm:p-6  max-w-7xl">
            {/* Controls: responsive stacking */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                {/* Category Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            className={`px-4 py-2 rounded-2xl border text-sm font-medium transition ${active === cat
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                {/* Search + Sort */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-60" />
                        <input
                            type="text"
                            placeholder="Search title, tech, or tag..."
                            className="pl-9 w-full sm:w-60 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </div>


                    <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 opacity-60" />
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="az">A → Z</option>
                            <option value="za">Z → A</option>
                        </select>
                    </div>
                </div>
            </div>


            {/* Counter */}
            <p className="text-sm text-gray-500 mb-4">
                Showing <span className="font-medium">{visibleItems.length}</span> of
                <span className="font-medium"> {filtered.length}</span> projects
            </p>


            {/* Grid: responsive columns */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {visibleItems.map((p) => (
                    <ProjectCard key={p.id} project={p} onOpen={(proj) => setOpened(proj)} />
                ))}
            </div>


            {/* Load More */}
            {hasMore ? (
                <div className="mt-8 text-center">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition" onClick={() => setVisible((v) => v + 6)}>
                        Load more
                    </button>
                </div>
            ) : (
                <div className="mt-8 text-center text-sm text-gray-500">No more projects</div>
            )}


            {/* Empty State */}
            {!filtered.length && (
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-gray-600">
                        <svg className="h-4 w-4" /> Nothing matches your filters. Try clearing the search.
                    </div>
                </div>
            )}


            {/* Modal */}
            {opened && <ProjectModal project={opened} onClose={() => setOpened(null)} />}
        </div>
    );
}