export default function OwnershipHealth() {
    return (
        <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
            <h4 className="font-semibold mb-4">Ownership & Domain Health</h4>
            <div className="text-sm text-gray-400 space-y-2">
                <p>Registrar: <span className="text-white">GoDaddy</span></p>
                <p>Domain Age: <span className="text-white">6 years</span></p>
                <p>Expires in: <span className="text-white">2 years</span></p>
            </div>
        </div>
    );
}
