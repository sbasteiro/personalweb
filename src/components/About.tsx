export default function About() {
    return (
        <section id="about" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                    <h2 className="font-pixel text-sm text-retro-accent mb-4">SER YO</h2>
                    <p className="font-sans text-retro-ink/85 leading-relaxed space-y-3">
                        👩‍💻 <strong>Backend Developer</strong> con 9+ años convirtiendo ideas, problemas en aplicaciones web, APIs y sistemas que realmente funcionan.
                        <br /><br />
                        🛠️ Mi zona de confort: <strong>PHP, Laravel, Symfony, CodeIgniter y Zend Framework</strong>, trabajando con bases de datos, integraciones y todo lo que haga falta para que el backend no explote 💥.
                        <br /><br />
                        🚀 Pasé por proyectos de <strong>fintech, logística, e-commerce internacional y organismos públicos</strong>, participando en todo el proceso: desde pensar la solución 🧠 hasta programarla, probarla, deployarla y descubrir por qué dejó de funcionar un viernes a las 18:59 😅.
                        <br /><br />
                        🎮 Y porque aparentemente programar aplicaciones no era suficiente... también soy <strong>Técnica Universitaria en Desarrollo y Producción de Videojuegos</strong>, recibida en la UTN. Trabajo con <strong>Unity, C# y Game Design</strong>, y me encanta crear mundos, mecánicas y experiencias jugables.
                        <br /><br />
                        ✨ En pocas palabras: me gusta <strong>crear cosas, resolver problemas y aprender constantemente</strong>. Ya sea una API, una aplicación o un videojuego, disfruto estar detrás de escena haciendo que todo cobre vida.
                    </p>
                </div>
                <div className="pixel-border rounded-2xl p-4 bg-white/5">
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-sans text-sm font-bold text-retro-ink mb-2">
                                💻 Backend
                            </h3>
                            <ul className="font-sans text-sm text-retro-ink/85 space-y-1">
                                <li>PHP · Laravel · Symfony</li>
                                <li>CodeIgniter · Zend Framework</li>
                                <li>REST APIs · Web Services</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-sans text-sm font-bold text-retro-ink mb-2">
                                🗄️ Databases
                            </h3>
                            <ul className="font-sans text-sm text-retro-ink/85 space-y-1">
                                <li>MySQL · PostgreSQL · SQL Server</li>
                                <li>Database Design · Optimization</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-sans text-sm font-bold text-retro-ink mb-2">
                                🛠️ Tools & Workflow
                            </h3>
                            <ul className="font-sans text-sm text-retro-ink/85 space-y-1">
                                <li>Git · GitHub · Agile / Scrum</li>
                                <li>Testing · CI/CD · API Integration</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-sans text-sm font-bold text-retro-ink mb-2">
                                🎮 Game Development
                            </h3>
                            <ul className="font-sans text-sm text-retro-ink/85 space-y-1">
                                <li>Unity · C# · Game Design</li>
                                <li>Gameplay · AI · Game Systems</li>
                                <li>Vuforia · AR · Multiplayer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}