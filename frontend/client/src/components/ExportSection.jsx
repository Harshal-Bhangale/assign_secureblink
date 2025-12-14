export default function ExportSection() {
    return (
        <section className="flex justify-between items-center mt-10 mb-12">
            <span className="text-sm text-gray-400 underline cursor-pointer">
                API Docs (v1.8.2)
            </span>

            <div className="flex gap-4">
                <button className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-white/5">
                    Export JSON
                </button>
                <button className="px-4 py-2 bg-card border border-border rounded-lg hover:bg-white/5">
                    Export CSV
                </button>
            </div>
        </section>
    );
}
