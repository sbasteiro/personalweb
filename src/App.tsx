import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import StartScreen from "./pages/StartScreen";
import Home from "./pages/Home";
import { useEffect } from "react";

export default function App() {
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
            }
        };

        window.addEventListener("keydown", onKeyDown);

        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}