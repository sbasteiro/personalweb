import { Gamepad2 } from "lucide-react";
import MusicButton from "./MusicButton";
import { useState } from "react";

export default function TopBar() {
    const [musicOn, setMusicOn] = useState(true);

    return (
        <div className="sticky top-0 z-20 backdrop-blur bg-retro-bg/60 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
                <div className="flex items-center gap-2 text-retro-ink">
                    <Gamepad2 className="h-5 w-5" />
                </div>
                <nav className="ml-auto flex items-center gap-2 sm:gap-3">
                    <a href="#projects" className="font-pixel text-[10px] sm:text-xs opacity-80 hover:opacity-100">PROJECTS</a>
                    <a href="#about" className="font-pixel text-[10px] sm:text-xs opacity-80 hover:opacity-100">ABOUT</a>
                    <a href="#contact" className="font-pixel text-[10px] sm:text-xs opacity-80 hover:opacity-100">CONTACT</a>
                    <div className="ml-auto">
                        <MusicButton musicOn={musicOn} setMusicOn={setMusicOn} />
                    </div>
                </nav>
            </div>
        </div>
    );
}