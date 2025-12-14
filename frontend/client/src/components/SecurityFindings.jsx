export default function SecurityFindings() {
    return (
        <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
            <h4 className="font-semibold mb-4">Security Findings</h4>
            <ul className="text-sm text-gray-400 space-y-2">
                <li>• Admin panel exposed</li>
                <li>• Development environment is public</li>
                <li>• API requires monitoring</li>
            </ul>
        </div>
    );
}
