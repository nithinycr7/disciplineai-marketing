"use client";

import { motion } from "framer-motion";
import { BarChart3, Calendar, CheckCircle2, Flame, Globe, Trophy, Users, Zap } from "lucide-react";

export function ElitePreview() {
    return (
        <div className="relative w-full max-w-5xl mx-auto mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl">
            {/* Header / Sidebar Simulation */}
            <div className="flex h-full min-h-[500px]">
                {/* Sidebar */}
                <div className="w-48 border-r border-white/5 bg-black/50 p-4 hidden md:block">
                    <div className="mb-8 flex items-center gap-2 px-2 text-primary">
                        <Zap className="h-5 w-5 fill-primary" />
                        <span className="font-bold tracking-tight text-sm">DISCIPLINE.AI</span>
                    </div>
                    <nav className="space-y-1">
                        <NavItem icon={Globe} label="Overview" active />
                        <NavItem icon={BarChart3} label="Analytics" />
                        <NavItem icon={Calendar} label="Tracker" />
                        <NavItem icon={Trophy} label="Milestones" />
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 md:p-8 bg-gradient-to-br from-zinc-950 to-black overflow-hidden relative">
                    {/* Subtle glow background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
                                AS
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg leading-tight">Aditya Sharma</h3>
                                <div className="flex items-center gap-2 mt-0.5">
                                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-800">UPSC Aspirant</span>
                                    <span className="text-zinc-600 font-medium text-[10px]">• Joined Jan 2025</span>
                                </div>
                            </div>
                        </div>
                        <button className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-xs font-bold hover:bg-zinc-800 transition-colors flex items-center gap-2">
                            <Globe className="h-3.5 w-3.5" />
                            Share Portfolio
                        </button>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        <StatCard label="Discipline Score" value="94/100" trend="+4% vs last week" color="text-primary" />
                        <StatCard label="Hours This Week" value="52.5h" trend="82% of 60h Goal" color="text-blue-400" />
                        <StatCard label="Daily Average" value="7.5h" trend="0.8h improvement" color="text-emerald-400" />
                        <StatCard label="Current Streak" value="12 Days" trend="Personal Best: 24" color="text-orange-400" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        {/* 12-Week Study Velocity */}
                        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm relative overflow-hidden">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-white font-bold text-sm">12-Week Study Velocity</h4>
                                <div className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary italic">Objective: 45h / Week</div>
                            </div>
                            <div className="flex items-end justify-between h-32 gap-1 px-2 relative">
                                {/* Target Line */}
                                <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-red-500/50 z-10 flex items-center justify-end">
                                    <span className="text-[8px] font-black text-red-500 mr-2 uppercase tracking-tighter">Target: 45h</span>
                                </div>
                                {[32, 45, 62, 40, 25, 75, 72, 55, 48, 30, 52, 68].map((h, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${(h / 80) * 100}%` }}
                                            transition={{ duration: 1, delay: i * 0.05 }}
                                            className={`w-full rounded-t-sm transition-all ${h >= 45 ? 'bg-gradient-to-t from-primary to-blue-400' : 'bg-zinc-800'
                                                } ${i === 5 ? 'ring-2 ring-white ring-offset-2 ring-offset-black shadow-[0_0_15px_rgba(6,182,212,0.5)]' : ''}`}
                                        />
                                        <span className="text-[8px] font-bold text-zinc-600">W{i + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Subject Mastery */}
                        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                            <h4 className="text-white font-bold text-sm mb-4">Subject Mastery</h4>
                            <div className="space-y-4">
                                <MasteryItem label="Indian Polity" hours="88h" percentage={24} color="bg-primary" />
                                <MasteryItem label="Modern History" hours="64h" percentage={18} color="bg-blue-500" />
                                <MasteryItem label="Geography" hours="42h" percentage={12} color="bg-purple-500" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Consistency Roadmap */}
                        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-white font-bold text-sm">Consistency Roadmap</h4>
                                <div className="flex items-center gap-4">
                                    <span className="text-zinc-500 text-[10px] font-medium italic">Github-sync enabled</span>
                                    <span className="text-zinc-500 text-[10px] font-medium">2,140 Hours Total</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-1 opacity-60">
                                {Array.from({ length: 84 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 rounded-[1px] ${i % 12 === 0 ? 'bg-primary' :
                                            i % 7 === 0 ? 'bg-primary/60' :
                                                i % 5 === 0 ? 'bg-primary/30' :
                                                    'bg-zinc-900'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Glass Overlay for Elite Feel */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

                    {/* Badge */}
                    <div className="absolute bottom-6 right-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
                            <Flame className="h-4 w-4 text-primary fill-primary" />
                            <span className="text-xs font-bold text-primary tracking-tighter uppercase">Streak Health: ELITE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
    return (
        <div className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors cursor-pointer ${active ? 'bg-white/5 text-white' : 'text-zinc-500 hover:text-zinc-300'
            }`}>
            <Icon className={`h-4 w-4 ${active ? 'text-primary' : ''}`} />
            <span className="text-xs font-semibold">{label}</span>
            {active && <div className="ml-auto w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>}
        </div>
    );
}

function StatCard({ label, value, trend, color }: { label: string, value: string, trend: string, color: string }) {
    return (
        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors group">
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider mb-1 group-hover:text-zinc-400 transition-colors">{label}</p>
            <p className={`text-2xl font-bold tracking-tight mb-1 ${color}`}>{value}</p>
            <p className="text-zinc-600 text-[10px] font-medium flex items-center gap-1">
                {trend.includes('+') || trend.includes('improvement') ? (
                    <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
                ) : null}
                {trend}
            </p>
        </div>
    );
}

function MasteryItem({ label, hours, percentage, color }: { label: string, hours: string, percentage: number, color: string }) {
    return (
        <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] font-bold">
                <span className="text-zinc-300">{label}</span>
                <span className="text-zinc-500">{hours} ({percentage}%)</span>
            </div>
            <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage * 4}%` }} // Simplified for visual
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full rounded-full ${color}`}
                />
            </div>
        </div>
    );
}
