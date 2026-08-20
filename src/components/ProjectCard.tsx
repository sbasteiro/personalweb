import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    role: string;
    year: string;
    tags: string[];
    cover: string;
    url: string;
    key?: string;
}

export default function ProjectCard({ title, role, year, tags, url, cover }: ProjectCardProps) {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="group relative block rounded-2xl p-4 bg-white/5 hover:bg-white/10 hover:border-retro-accent/40 transition-colors border border-retro-accent-2/40"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.995 }}
        >
            <div className="h-40 w-full rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-400/20 to-pink-400/20 shadow-[0_0_20px_var(--retro-shadow)] mb-4">
                <img src={cover} alt={title} className="w-full h-full object-cover rounded-sm" />
            </div>
            <div className="min-w-0">
                <h3 className="font-pixel text-sm text-retro-accent-2 mb-1">{title}</h3>

                <p className="font-sans text-sm text-retro-ink/80">
                    {year ? `${role} • ${year}` : role}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((t) => (
                        <span
                            key={t}
                            className="font-sans text-xs px-2 py-1 rounded-md bg-retro-accent-2/12 border border-retro-accent-2/40"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.a>
    );
}
