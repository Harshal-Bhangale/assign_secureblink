export default function RiskOverview() {
    return (
        <section className="mt-10">
            <h3 className="font-semibold mb-4">Risk Overview</h3>

            <div className="h-3 rounded-full bg-gradient-to-r from-critical via-high via-medium to-low" />

            <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>Critical</span>
                <span>High</span>
                <span>Medium</span>
                <span>Low</span>
            </div>
        </section>
    );
}
