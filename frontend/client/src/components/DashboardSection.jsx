import StatCards from "./StatCards";
import AssetsTable from "./AssetsTable";
import SecurityFindings from "./SecurityFindings";
import Recommendations from "./Recommendations";

export default function DashboardSection({ domain }) {
    return (
        <>
            <h2 className="text-xl font-semibold mb-6">
                Scan Results for <span className="text-accent">{domain}</span>
            </h2>

            <StatCards />
            <AssetsTable />

            <div className="grid grid-cols-2 gap-6 mt-8">
                <SecurityFindings />
                <Recommendations />
            </div>
        </>
    );
}
