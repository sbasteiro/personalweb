import { Gamepad2, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="flex items-center gap-3">
                    <a href="https://sbasteiro.itch.io/" target="_blank" rel="noreferrer" className="rounded-xl p-2 bg-white/5">
                        <Gamepad2 />
                    </a>
                    <a href="https://www.linkedin.com/in/sabrina-basteiro/" target="_blank" rel="noreferrer" className="rounded-xl p-2 bg-white/5">
                        <Linkedin />
                    </a>
                    <a href="mailto:sabrilocalhost@gmail.com?subject=Contacto%20desde%20Portfolio&body=Hola%2C%20Sabrina!%20Me%20gustar%C3%ADa%20que%20trabajemos%20juntos." className="rounded-xl p-2 bg-white/5">
                        <Mail />
                    </a>
                </div>
                <p className="font-pixel text-[10px] text-retro-ink/70">© 2025 SABRILOCALHOST — INSERT COIN</p>
            </div>
        </footer>
    );
}