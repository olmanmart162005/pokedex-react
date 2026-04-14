const Loader = () => (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm rounded">
        <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 animate-spin" />
        </div>
        <span className="mt-4 text-sm font-medium text-indigo-600 tracking-wide">Loading&hellip;</span>
    </div>
);

export default Loader;
