"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Trophy, Zap, CalendarDays, Brain, Globe, Scale, Coins, Leaf, Newspaper, Target } from "lucide-react";
import { cn } from "@/utils/cn";

export function WeeklyReportCard() {
    const subjects = [
        { name: "History", hours: 12.0, color: "bg-amber-500", icon: BookOpen, top: true },
        { name: "Polity", hours: 10.5, color: "bg-cyan-500", icon: Scale },
        { name: "Geography", hours: 8.0, color: "bg-cyan-500", icon: Globe },
        { name: "Economy", hours: 6.0, color: "bg-cyan-500", icon: Coins },
        { name: "Environment", hours: 4.0, color: "bg-cyan-500", icon: Leaf },
        { name: "Current Events", hours: 3.0, color: "bg-cyan-500", icon: Newspaper },
        { name: "CSAT", hours: 3.0, color: "bg-cyan-500", icon: Brain },
    ];

    return (
        <div className="w-full max-w-md mx-auto bg-black border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-6 flex flex-col gap-6">

                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-white">Weekly Report</h3>
                        <p className="text-zinc-400 text-sm flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" /> Week 2, 2026
                        </p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                        <TrendingUp className="w-5 h-5 text-cyan-500" />
                    </div>
                </div>

                {/* Hero Stats Card */}
                <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-10 -mt-10" />

                    <div className="relative z-10 grid grid-cols-2 gap-4 items-center">
                        <div className="space-y-4">
                            <div>
                                <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Completed</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-cyan-500 shadow-glow">46.5</span>
                                    <span className="text-sm font-medium text-zinc-400">h</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Planned</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-semibold text-white/80">56</span>
                                    <span className="text-xs font-medium text-zinc-500">h</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center relative">
                            <div className="relative w-24 h-24 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="48"
                                        cy="48"
                                        r="40"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="transparent"
                                        className="text-zinc-800"
                                    />
                                    <circle
                                        cx="48"
                                        cy="48"
                                        r="40"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="transparent"
                                        strokeDasharray={2 * Math.PI * 40}
                                        strokeDashoffset={2 * Math.PI * 40 * (1 - 0.83)}
                                        strokeLinecap="round"
                                        className="text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                                    />
                                </svg>
                                <div className="absolute flex flex-col items-center">
                                    <span className="text-xl font-bold text-white">83%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Subject Banner */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/10">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-medium text-zinc-200">Top Subject: <span className="text-amber-500 font-bold">History</span></span>
                </div>

                {/* Breakdown List */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold text-zinc-300">Subject Breakdown</h2>
                        <span className="text-[10px] text-zinc-500 bg-zinc-900 px-2 py-1 rounded-full border border-zinc-800">7 Subjects</span>
                    </div>

                    <div className="space-y-3">
                        {subjects.slice(0, 5).map((subject, index) => (
                            <motion.div
                                key={subject.name}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center gap-2">
                                        <subject.icon className={cn("w-3.5 h-3.5", subject.top ? "text-amber-500" : "text-zinc-500")} />
                                        <span className={cn("text-xs font-medium", subject.top ? "text-white" : "text-zinc-400")}>
                                            {subject.name}
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-zinc-500">{subject.hours.toFixed(1)}h</span>
                                </div>
                                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(subject.hours / 14) * 100}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                                        className={cn("h-full rounded-full", subject.color)}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Motivational Message */}
                <div className="p-4 rounded-xl bg-zinc-900/30 border-l-2 border-l-amber-500">
                    <div className="flex gap-3">
                        <Zap className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                        <p className="text-xs leading-relaxed text-zinc-400 italic">
                            "Incredible dedication this week! Your consistency is truly inspiring. Keep trusting the process."
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
