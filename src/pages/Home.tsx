import { motion } from "framer-motion";
import TopBar from "../components/TopBar";
import Projects from "../components/Projects";
import About from "../components/About";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen text-retro-ink">
            <TopBar />
            <header className="max-w-6xl mx-auto px-4 pt-10 md:pt-16">
                <div className="rounded-2xl pixel-border p-6 md:p-8 bg-white/5">
                    <div className="flex items-center gap-4">
                        <div className="h-20 w-20 rounded-full shadow-[0_0_20px_var(--retro-shadow)] grid place-content-center">
                            <img src="./profileImg.jpg" alt="profile" className="rounded-full" />
                        </div>
                        <div>
                            <h1 className="font-pixel text-base sm:text-lg">SABRINA BASTEIRO</h1>
                            <p className="font-sans text-sm text-retro-ink/80">
                                👩‍💻 Backend Developer • 🎮 Game Developer • ☕ Professional Bug Hunter
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <Projects />
            <About />
            <Contact />
            <Footer />
        </motion.div>
    );
}