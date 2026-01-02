"use client";

import { motion } from "framer-motion";
import {
    BarChart3, Calendar, CheckCircle2, Flame,
    Globe, Trophy, Users, Zap, Search,
    Settings, LayoutDashboard, Brain, Target,
    MousePointer2, Sparkles, Activity, Stethoscope,
    Beaker, Microscope, Atom, Dna
} from "lucide-react";

export function NEETDashboardPreview() {
    return (
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] shadow-2xl flex flex-col md:flex-row min-h-[600px]">
            {/* Sidebar */}
            <div className="w-64 border-r border-white/5 bg-black p-6 hidden lg:flex flex-col">
                <div className="mb-10 flex items-center gap-3 text-emerald-500">
                    <Zap className="h-6 w-6 fill-emerald-500" />
                    <span className="font-extrabold tracking-tighter text-lg italic">DISCIPLINE.AI</span>
                </div>

                <nav className="space-y-2 flex-1">
                    <SidebarItem icon={LayoutDashboard} label="Overview" active />
                    <SidebarItem icon={Target} label="Prep Index" />
                    <SidebarItem icon={Microscope} label="NCERT Audit" />
                    <SidebarItem icon={Trophy} label="Milestones" />
                    <SidebarItem icon={Settings} label="Settings" />
                </nav>

                <div className="mt-auto">
                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                        <div className="flex items-center gap-2 text-emerald-500 mb-2">
                            <Sparkles className="h-4 w-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Medical Readiness</span>
                        </div>
                        <div className="text-lg font-black text-white">Top 0.5%</div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 bg-black relative overflow-hidden">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-5">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-emerald-500/20 ring-1 ring-white/20 text-center">
                            SR
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white tracking-tight text-center sm:text-left">Sanya Reddy</h3>
                            <div className="flex items-center gap-3 mt-1 text-[11px] justify-center sm:justify-start">
                                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">NEET 2026 Aspirant</span>
                                <span className="text-zinc-500 font-medium italic">Joined Jan 2025</span>
                            </div>
                        </div>
                    </div>

                    <button className="px-5 py-2.5 rounded-2xl bg-emerald-500 text-black font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
                        <Stethoscope className="h-4 w-4" />
                        Audit Prep Velocity
                    </button>
                </div>

                {/* Internal Nav */}
                <div className="flex items-center gap-8 mb-10 border-b border-white/5 pb-4 overflow-x-auto">
                    <span className="text-sm font-bold text-white border-b-2 border-emerald-500 pb-4 transition-all whitespace-nowrap">Overview</span>
                    <span className="text-sm font-bold text-zinc-500 hover:text-white cursor-pointer pb-4 transition-all whitespace-nowrap">Subject Mastery</span>
                    <span className="text-sm font-bold text-zinc-500 hover:text-white cursor-pointer pb-4 transition-all whitespace-nowrap">NCERT Log</span>
                    <span className="text-sm font-bold text-zinc-500 hover:text-white cursor-pointer pb-4 transition-all whitespace-nowrap">Mock Analysis</span>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 relative group hover:border-emerald-500/30 transition-all"
                    >
                        <p className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-4">Focus Score</p>
                        <div className="text-6xl font-black text-emerald-400 mb-4 tracking-tighter">96/100</div>
                        <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em]">
                            <Flame className="h-3 w-3 fill-emerald-500" />
                            Retention High
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 relative group hover:border-teal-500/30 transition-all"
                    >
                        <p className="text-zinc-500 text-xs font-black uppercase tracking-widest mb-4">Daily Study</p>
                        <div className="text-6xl font-black text-white mb-4 tracking-tighter">8.5h</div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-end gap-1 h-8">
                                {[4, 6, 3, 7, 9, 8].map((h, i) => (
                                    <div key={i} className={`w-2 rounded-t-sm ${i === 4 ? 'bg-emerald-400' : 'bg-emerald-500/30'}`} style={{ height: `${h * 10}%` }}></div>
                                ))}
                            </div>
                            <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">+0.8h vs Avg</span>
                        </div>
                    </motion.div>
                </div>

                {/* Benchmarks Section */}
                <div className="p-8 rounded-[2.5rem] bg-zinc-900/30 border border-white/5">
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="text-lg font-black text-white tracking-tight">NCERT Consistency</h4>
                        <span className="px-3 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-widest">Mode: HYPER-RETENTION</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-3xl bg-black/40 border border-white/5 ring-1 ring-emerald-500/20">
                            <Dna className="h-6 w-6 text-emerald-400 mb-4" />
                            <div className="text-3xl font-black text-white mb-1">18 chapters</div>
                            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Biology Revision Loops</p>
                            <div className="flex gap-1.5 overflow-hidden">
                                {Array.from({ length: 15 }).map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-3xl bg-black/40 border border-white/5 ring-1 ring-teal-500/20">
                            <Beaker className="h-6 w-6 text-teal-400 mb-4" />
                            <div className="text-3xl font-black text-white mb-1">2,400+</div>
                            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">MCQs Solved this month</p>
                            <div className="text-emerald-400 text-[10px] font-black uppercase tracking-widest italic">Efficiency: 82% Correct</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
    return (
        <div className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all cursor-pointer ${active ? 'bg-zinc-900 text-white border border-white/10' : 'text-zinc-500 hover:text-white hover:bg-zinc-900/50'}`}>
            <Icon className={`h-5 w-5 ${active ? 'text-emerald-500' : ''}`} />
            <span className="text-sm font-bold">{label}</span>
        </div>
    );
}
