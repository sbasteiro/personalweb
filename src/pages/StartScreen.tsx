import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface StartScreenProps {
    onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
    const [blinking, setBlinking] = useState(true);

    useEffect(() => {
        const id = setInterval(() => setBlinking((b) => !b), 1200);
        return () => clearInterval(id);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen grid place-items-center text-center text-retro-ink px-6"
        >
            <div className="max-w-3xl w-full">
                <div className="mb-10">
                    <motion.h1
                        className="font-pixel text-2xl sm:text-3xl md:text-4xl"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        SABRINA BASTEIRO
                    </motion.h1>
                    <motion.p
                        className="font-sans mt-4 text-base md:text-lg text-retro-ink/80"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15, duration: 0.6 }}
                    >
                        Game Developer • Unity • Godot
                    </motion.p>
                </div>

                <div className="pixel-border rounded-2xl p-6 bg-white/5">
                    <p className={`font-pixel text-xs sm:text-sm ${blinking ? "opacity-100" : "opacity-60"}`}>
                        ▶ PRESS START ◀
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-3">
                        <button
                            onClick={onStart}
                            className="font-pixel text-xs px-3 py-1 rounded-2xl border border-retro-accent hover:bg-retro-accent hover:text-retro-bg transition flex items-center"
                        >
                            <Play className="mr-2 h-4 w-4" />START
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}