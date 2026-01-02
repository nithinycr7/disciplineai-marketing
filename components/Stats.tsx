import { Clock, Zap, ShieldCheck, FileText } from "lucide-react";

export function Stats() {
    return (
        <section className="py-20 bg-black/50 backdrop-blur-md border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                    <StatItem icon={Clock} value="30s" label="Daily Log" />
                    <StatItem icon={Zap} value="3/Day" label="AI Nudges" />
                    <StatItem icon={ShieldCheck} value="100%" label="Focus Privacy" />
                    <StatItem icon={FileText} value="Weekly" label="Elite Audits" />
                </div>
            </div>
        </section>
    );
}

function StatItem({ icon: Icon, value, label }: { icon: any, value: string, label: string }) {
    return (
        <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-4xl font-black text-white mb-2 tracking-tight group-hover:text-primary transition-colors">{value}</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">{label}</div>
        </div>
    );
}
