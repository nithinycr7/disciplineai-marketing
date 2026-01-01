export function Stats() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
            <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">30s</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Daily Log</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3/Day</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Ai Nudges</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Privacy</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Weekly</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Reality Reports</div>
            </div>
        </div>
    );
}
