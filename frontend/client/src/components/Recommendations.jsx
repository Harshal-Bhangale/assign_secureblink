export default function Recommendations() {
    return (
        <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
            <h4 className="font-semibold mb-4">Recommendations</h4>
            <ul className="text-sm text-low space-y-2">
                <li>• Restrict dev environment access</li>
                <li>• Apply authentication to admin panels</li>
                <li>• Monitor API endpoints</li>
            </ul>
        </div>
    );
}
