export default function DomainSearch({ domain, setDomain, onScan }) {
    return (
        <section className="text-center mt-24">
            <h2 className="text-4xl font-bold mb-3">
                Enter domain <span className="text-accent">(example.com)</span>
            </h2>

            <p className="text-gray-400 mb-10">
                Run automated passive reconnaissance to uncover exposed assets
            </p>

            <div className="flex justify-center gap-4">
                <input
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="example.com"
                    className="
            w-[420px]
            px-4 py-3
            rounded-lg
            bg-card backdrop-blur
            border border-border
            focus:ring-2 focus:ring-accent
            outline-none
          "
                />

                <button
                    onClick={onScan}
                    className="
            px-6 py-3 rounded-lg font-medium
            bg-gradient-to-r from-indigo-500 to-purple-600
            shadow-glow
            hover:scale-105 transition
          "
                >
                    Run Passive Recon
                </button>
            </div>
        </section>
    );
}
