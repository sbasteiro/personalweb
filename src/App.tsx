import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import StartScreen from "./pages/StartScreen";
import Home from "./pages/Home";

export default function App() {
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
                setStarted(true);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <div className="crt min-h-screen">
            <AnimatePresence mode="wait">
                {!started ? (
                    <StartScreen
                        key="start"
                        onStart={() => {
                            setStarted(true);
                        }}
                    />
                ) : (
                    <Home key="main" />
                )}
            </AnimatePresence>
        </div>
    );
}