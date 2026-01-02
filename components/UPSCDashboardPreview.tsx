"use client";

import { motion } from "framer-motion";
import {
    Layout, Target, Zap, Clock, TrendingUp,
    BookOpen, History, Award, Users, Search,
    Bell, User, PenTool, Globe
} from "lucide-react";

export function UPSCDashboardPreview() {
    return (
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] shadow-2xl flex flex-col md:flex-row min-h-[600px] selection:bg-amber-500 selection:text-black">
            {/* Sidebar */}
            <div className="w-64 border-r border-white/5 bg-black p-6 hidden lg:flex flex-col">
                <div className="mb-10 flex items-center gap-3 text-amber-500">
                    <Zap className="h-6 w-6 fill-amber-500" />
                    <span className="font-extrabold tracking-tighter text-xl text-white">DISCIPLINE.AI</span>
                </div>

                <nav className="space-y-6 flex-1">
                    <NavItem icon={Layout} label="Overview" active />
                    <NavItem icon={Target} label="Syllabus Audit" />
                    <NavItem icon={PenTool} label="Answer Velocity" />
                    <NavItem icon={BookOpen} label="Current Affairs" />
                    <NavItem icon={History} label="PYQ Analytics" />
                    <NavItem icon={TrendingUp} label="Persistence" />
                </nav>

                <div className="pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5">
                        <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-[10px] font-black text-black">U1</div>
                        <div className="flex-1 overflow-hidden">
                            <div className="text-[10px] font-black text-white truncate uppercase tracking-widest">Topper Mode</div>
                            <div className="text-[8px] text-zinc-500 truncate">Elite Tier Active</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-zinc-950 flex flex-col h-full overflow-hidden">
                {/* Header */}
                <header className="h-16 border-b border-white/5 px-8 flex items-center justify-between bg-black/50 backdrop-blur-md">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative w-96 max-w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
                            <div className="h-9 w-full bg-white/5 border border-white/5 rounded-xl flex items-center pl-10 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Search Strategy Database...</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Bell className="h-4 w-4 text-zinc-500" />
                        <div className="h-8 w-8 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                            <User className="h-4 w-4 text-amber-500" />
                        </div>
                    </div>
                </header>

                <main className="p-8 space-y-8 overflow-y-auto max-h-[calc(600px-64px)]">
                    {/* Top Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard label="Discipline Score" value="98.2" color="text-amber-500" />
                        <StatCard label="Deep Work" value="12.5h" suffix="today" color="text-white" />
                        <StatCard label="Syllabus Mastery" value="74%" color="text-white" />
                        <StatCard label="Answer Velocity" value="3.2" suffix="p/h" color="text-white" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Main Chart Area */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="bg-black/40 border border-white/5 p-6 rounded-[2rem] space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Strategy Forecast</h3>
                                    <div className="flex gap-2">
                                        <div className="px-3 py-1 bg-amber-500/10 rounded-lg text-amber-500 text-[8px] font-black uppercase tracking-widest">Weekly</div>
                                    </div>
                                </div>

                                <div className="h-48 w-full flex items-end gap-2 px-2">
                                    {[60, 40, 80, 50, 90, 70, 85].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className="flex-1 bg-gradient-to-t from-amber-500/10 via-amber-500/40 to-amber-500 rounded-t-lg relative group"
                                        >
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-[8px] font-black px-1.5 py-0.5 rounded uppercase">{h}%</div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="flex justify-between px-2 text-[8px] font-black text-zinc-600 uppercase tracking-widest">
                                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                </div>
                            </div>

                            {/* Syllabus Mastery Detail */}
                            <div className="bg-black/40 border border-white/5 p-6 rounded-[2rem] space-y-6">
                                <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Focus Breakdown</h3>
                                <div className="space-y-4">
                                    <SubjectTrack name="Ancient History" progress={85} color="bg-amber-500" />
                                    <SubjectTrack name="Indian Polity" progress={62} color="bg-amber-400" />
                                    <SubjectTrack name="Ethics (GS IV)" progress={45} color="bg-zinc-700" />
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Analytics */}
                        <div className="space-y-6">
                            <div className="bg-amber-500 p-6 rounded-[2rem] text-black">
                                <div className="flex items-center gap-2 mb-4">
                                    <Zap size={14} className="fill-black" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Rank Predictor</span>
                                </div>
                                <div className="text-4xl font-black tracking-tighter mb-1">IAS 2026</div>
                                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Probable Success: 88%</div>
                                <div className="mt-8 h-1 w-full bg-black/20 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "88%" }}
                                        className="h-full bg-black"
                                    />
                                </div>
                            </div>

                            <div className="bg-black/40 border border-white/5 p-6 rounded-[2rem] space-y-4">
                                <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Live Insights</h3>
                                <div className="space-y-4">
                                    <InsightItem label="GS II Velocity" value="+12%" up />
                                    <InsightItem label="Answer Writing" value="-4%" />
                                    <InsightItem label="Consistency" value="Peak" />
                                </div>
                            </div>

                            <div className="bg-zinc-900/50 p-6 rounded-[2rem] border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                                        <TrendingUp className="h-5 w-5 text-green-500" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black text-white uppercase tracking-widest">Verified Grit</div>
                                        <div className="text-[8px] text-zinc-500 uppercase tracking-widest">Top 0.1% Globally</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Screen Glare Effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-30"></div>
        </div>
    );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
    return (
        <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all cursor-pointer ${active ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'text-zinc-500 hover:bg-white/5'}`}>
            <Icon size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
        </div>
    );
}

function StatCard({ label, value, suffix, color }: { label: string, value: string, suffix?: string, color: string }) {
    return (
        <div className="bg-black/40 border border-white/5 p-5 rounded-3xl space-y-2">
            <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{label}</div>
            <div className="flex items-baseline gap-1">
                <div className={`text-2xl font-black tracking-tighter ${color}`}>{value}</div>
                {suffix && <div className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{suffix}</div>}
            </div>
        </div>
    );
}

function SubjectTrack({ name, progress, color }: { name: string, progress: number, color: string }) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                <span className="text-zinc-400">{name}</span>
                <span className="text-white">{progress}%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className={`h-full ${color}`}
                />
            </div>
        </div>
    );
}

function InsightItem({ label, value, up = false }: { label: string, value: string, up?: boolean }) {
    return (
        <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{label}</span>
            <span className={`text-[10px] font-black uppercase tracking-widest ${label === 'Consistency' ? 'text-amber-500' : up ? 'text-green-500' : 'text-red-500'}`}>
                {value}
            </span>
        </div>
    );
}
