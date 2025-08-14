import { useEffect, useRef } from "react";
import { Volume2, VolumeOff } from "lucide-react";

interface MusicButtonProps {
    musicOn: boolean;
    setMusicOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MusicButton({ musicOn, setMusicOn }: MusicButtonProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            if (musicOn) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [musicOn]);

    return (
        <>
            <audio ref={audioRef} src="/music.mp3" loop preload="auto" />
            <button
                onClick={() => setMusicOn((m) => !m)}
                className="font-pixel text-[10px] px-3 py-1 rounded-2xl border border-retro-accent hover:bg-retro-accent hover:text-retro-bg transition flex items-center"
            >
                {musicOn ? <Volume2 className="h-4 w-4" /> : <VolumeOff className="h-4 w-4" />}
            </button>
        </>
    );
}