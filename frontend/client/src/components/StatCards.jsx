function Card({ title, value, color }) {
    return (
        <div className="
      bg-card backdrop-blur
      border border-border
      rounded-xl p-5
      shadow-soft
      hover:-translate-y-1 transition
    ">
            <p className="text-sm text-gray-400">{title}</p>
            <h3 className={`text-3xl font-semibold mt-2 ${color}`}>
                {value}
            </h3>
        </div>
    );
}

export default function StatCards() {
    return (
        <section className="grid grid-cols-4 gap-6 mt-16">
            <Card title="Total Assets" value="48" />
            <Card title="Active Assets" value="16" color="text-low" />
            <Card title="Inactive" value="32" />
            <Card title="Scan Type" value="Passive Recon" />
        </section>
    );
}
