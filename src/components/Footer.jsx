const Footer = () => (
    <footer className="bg-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">🔴</span>
                <span className="font-extrabold tracking-wide">PokéDex</span>
                <span className="text-indigo-300 text-sm font-normal">202601</span>
            </div>
            <p className="text-sm text-indigo-200 text-center">
                &copy; 2026 Todos los derechos reservados.
            </p>
        </div>
    </footer>
);

export default Footer;
