const data = [
    { sub: "dev.company.com", ip: "34.102.45.41", status: 200, service: "Development", risk: "Critical" },
    { sub: "admin.company.com", ip: "34.102.45.31", status: 403, service: "Admin Panel", risk: "High" },
    { sub: "api.company.com", ip: "34.102.45.21", status: 200, service: "API Service", risk: "Medium" },
    { sub: "www.company.com", ip: "34.102.50.11", status: 200, service: "Public Website", risk: "Low" },
];

const riskStyle = {
    Critical: "bg-critical/20 text-critical",
    High: "bg-high/20 text-high",
    Medium: "bg-medium/20 text-medium",
    Low: "bg-low/20 text-low",
};

export default function SubdomainTable() {
    return (
        <section className="mt-8 bg-card border border-border rounded-xl overflow-hidden shadow-soft">
            <table className="w-full text-sm">
                <thead className="bg-black/40 text-gray-400">
                    <tr>
                        {["Subdomain", "IP Address", "Status", "Service", "Risk"].map(h => (
                            <th key={h} className="p-4 text-left">{h}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className="border-t border-border hover:bg-white/5 transition">
                            <td className="p-4">{row.sub}</td>
                            <td className="p-4">{row.ip}</td>
                            <td className="p-4">{row.status}</td>
                            <td className="p-4">{row.service}</td>
                            <td className="p-4">
                                <span className={`px-3 py-1 rounded-full text-xs ${riskStyle[row.risk]}`}>
                                    {row.risk}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
