import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../components/Navbar";
import DomainSearch from "../components/DomainSearch";
import StatCards from "../components/StatCards";
import RiskOverview from "../components/RiskOverview";
import SubdomainTable from "../components/SubdomainTable";
import InfrastructureInsights from "../components/InfrastructureInsights";
import OwnershipHealth from "../components/OwnershipHealth";
import SecurityFindings from "../components/SecurityFindings";
import Recommendations from "../components/Recommendations";
import ExportSection from "../components/ExportSection";

export default function Home() {
    const [domain, setDomain] = useState("");
    const [scanned, setScanned] = useState(false);

    return (
        <>
            {/* Top Navigation */}
            <Navbar />

            {/* Hero / Domain Input */}
            <DomainSearch
                domain={domain}
                setDomain={setDomain}
                onScan={() => setScanned(true)}
            />

            {/* Dashboard Section */}
            <AnimatePresence>
                {scanned && (
                    <motion.main
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-6xl mx-auto px-6 pb-16"
                    >
                        {/* Stats */}
                        <section className="mt-16">
                            <StatCards />
                        </section>

                        {/* Risk Overview */}
                        <section className="mt-10">
                            <RiskOverview />
                        </section>

                        {/* Assets Table */}
                        <section className="mt-8">
                            <SubdomainTable />
                        </section>

                        {/* Infrastructure + Ownership */}
                        <section className="grid grid-cols-2 gap-6 mt-10">
                            <InfrastructureInsights />
                            <OwnershipHealth />
                        </section>

                        {/* Security + Recommendations */}
                        <section className="grid grid-cols-2 gap-6 mt-10">
                            <SecurityFindings />
                            <Recommendations />
                        </section>

                        {/* Export */}
                        <section className="mt-10">
                            <ExportSection />
                        </section>
                    </motion.main>
                )}
            </AnimatePresence>
        </>
    );
}
