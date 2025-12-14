export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-bg/70 backdrop-blur border-b border-border">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-lg font-semibold tracking-wide">
                        ReconScope
                    </h1>
                    <p className="text-xs text-gray-400">
                        Passive Attack Surface Intelligence
                    </p>
                </div>

                <nav className="flex gap-6 text-sm text-gray-300">
                    <button className="hover:text-white">API Docs</button>
                    <button className="hover:text-white">Export</button>
                    <button className="hover:text-white">GitHub</button>
                </nav>
            </div>
        </header>
    );
}
