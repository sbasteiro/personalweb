export default function PacmanLoader({ size = 24 }) {
    return (
        <div className="1    flex items-center justify-center" >
            <div className="pacman" style={{ width: size, height: size }}>
                <div className="pacman__mouth"></div>
                <div className="pacman__food"></div>
            </div>
        </div>
    );
}