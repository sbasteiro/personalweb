export default function About() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                    <h2 className="font-pixel text-sm text-retro-accent mb-4">ABOUT</h2>
                    <p className="font-sans text-retro-ink/85 leading-relaxed">
                        Desarrollador/a de videojuegos con foco en <strong>gameplay</strong>, <strong>herramientas</strong> y <strong>performance</strong>. Me gusta combinar estética retro con experiencias modernas, optimizando cada frame. Trabajo con Unity, Godot y pipelines WebGL.
                    </p>
                </div>
                <div className="pixel-border rounded-2xl p-4 bg-white/5">
                    <p className="font-pixel text-xs mb-3">SKILLS</p>
                    <ul className="font-sans text-sm text-retro-ink/85 space-y-2">
                        <li>Unity (C#), Godot (GDScript/ C#)</li>
                        <li>Phaser, TypeScript, Web Workers</li>
                        <li>Shaders básicos (HLSL/GLSL)</li>
                        <li>Gameplay, AI, Tools, Build Pipelines</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}