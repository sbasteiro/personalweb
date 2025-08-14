import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <h2 className="font-pixel text-sm text-retro-accent mb-6">PROJECTS</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                ))}
            </div>
        </section>
    );
}