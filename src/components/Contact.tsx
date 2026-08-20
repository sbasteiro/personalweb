import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import PacmanLoader from "./PacmanLoader";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                { name, email, message },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSent(true);
            setName("");
            setEmail("");
            setMessage("");

            setTimeout(() => setSent(false), 3000);
        } catch (err) {
            const detail =
                typeof err === "object" && err !== null && "text" in err
                    ? String(err.text)
                    : "No se pudo enviar el mensaje. Intentá de nuevo más tarde.";

            console.error("Error enviando email:", err);
            setError(detail);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            <h1 className="text-sm sm:text-3xl md:text-4xl lg:text-3xl text-center text-retro-accent">
                DEJAME TU MENSAJE
            </h1>

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md mx-auto my-6 p-6 rounded-2xl border border-retro-accent-2/40 bg-white/10 shadow-[0_0_10px_var(--retro-shadow-2)] flex flex-col gap-4"
            >
                <label className="font-pixel text-xs text-retro-ink/80">Nombre</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="px-3 py-2 rounded-md bg-[var(--retro-bg)] border border-retro-accent-2 text-[var(--retro-ink)] font-sans focus:outline-none focus:ring-2 focus:ring-retro-accent-2"
                />

                <label className="font-pixel text-xs text-retro-ink/80">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="px-3 py-2 rounded-md bg-[var(--retro-bg)] border border-retro-accent-2 text-[var(--retro-ink)] font-sans focus:outline-none focus:ring-2 focus:ring-retro-accent-2"
                />

                <label className="font-pixel text-xs text-retro-ink/80">Mensaje</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="px-3 py-2 rounded-md bg-[var(--retro-bg)] border border-retro-accent-2 text-[var(--retro-ink)] font-sans resize-none focus:outline-none focus:ring-2 focus:ring-retro-accent-2"
                />

                <div className="flex justify-center mt-2">
                    <button
                        type="submit"
                        className="contact-button font-pixel text-xs w-full px-4 py-2 rounded-2xl border border-retro-accent-2/40 hover:bg-retro-bg/40 bg-retro-accent-2/40 transition flex items-center justify-center shadow-[0_0_10px_var(--retro-shadow-2)]"
                    >
                        {loading ? (
                            <PacmanLoader />
                        ) : ("ENVIAR"
                        )}

                    </button>
                </div>

                {sent && (
                    <p className="text-green-400 font-pixel text-sm text-center animate-fade">
                        ¡Mensaje enviado!
                    </p>
                )}

                {error && (
                    <p role="alert" className="text-red-300 font-sans text-sm text-center">
                        {error}
                    </p>
                )}
            </motion.form>
        </section>
    );
}
