"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, TrendingUp, Trophy, Zap, Info, Target, CalendarDays, Clock, Brain, Globe, Scale, Coins, Leaf, Newspaper, PenTool } from "lucide-react";
import { cn } from "@/utils/cn";

export default function WeeklyReportPage() {
    const subjects = [
        { name: "History", hours: 12.0, color: "bg-amber-500", icon: BookOpen, top: true },
        { name: "Polity", hours: 10.5, color: "bg-cyan-500", icon: Scale },
        { name: "Geography", hours: 8.0, color: "bg-cyan-500", icon: Globe },
        { name: "Economy", hours: 6.0, color: "bg-cyan-500", icon: Coins },
        { name: "Environment", hours: 4.0, color: "bg-cyan-500", icon: Leaf },
        { name: "Current Events", hours: 3.0, color: "bg-cyan-500", icon: Newspaper },
        { name: "CSAT", hours: 3.0, color: "bg-cyan-500", icon: Brain },
    ];

    const maxHours = Math.max(...subjects.map(s => s.hours));

    return (
        <div className="min-h-screen w-full flex justify-center bg-background p-4 md:p-8">
            <div className="w-full max-w-md flex flex-col gap-6">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between"
                >
                    <div>
                        <h1 className="text-2xl font-bold text-foreground">Weekly Report</h1>
                        <p className="text-muted-foreground flex items-center gap-2">
                            <CalendarDays className="w-4 h-4" /> Week 2, 2026
                        </p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                        <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                </motion.div>

                {/* Hero Stats Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="glass-card rounded-2xl p-6 relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -ml-10 -mb-10" />

                    <div className="relative z-10 grid grid-cols-2 gap-4 items-center">
                        <div className="space-y-4">
                            <div>
                                <p className="text-muted-foreground text-sm font-medium">Completed</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-primary shadow-glow">46.5</span>
                                    <span className="text-sm font-medium text-muted-foreground">h</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-muted-foreground text-sm font-medium">Planned</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-semibold text-foreground/80">56</span>
                                    <span className="text-xs font-medium text-muted-foreground">h</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center relative">
                            {/* Circular Progress (Simplified for pure CSS/SVG) */}
                            <div className="relative w-28 h-28 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle
                                        cx="56"
                                        cy="56"
                                        r="48"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="transparent"
                                        className="text-muted/30"
                                    />
                                    <circle
                                        cx="56"
                                        cy="56"
                                        r="48"
                                        stroke="currentColor"
                                        strokeWidth="8"
                                        fill="transparent"
                                        strokeDasharray={2 * Math.PI * 48}
                                        strokeDashoffset={2 * Math.PI * 48 * (1 - 0.83)}
                                        strokeLinecap="round"
                                        className="text-primary drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                                    />
                                </svg>
                                <div className="absolute flex flex-col items-center">
                                    <span className="text-2xl font-bold">83%</span>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Done</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Top Subject Banner */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-secondary/20 to-transparent border border-secondary/20"
                >
                    <Trophy className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Top Subject: <span className="text-secondary font-bold">History</span></span>
                </motion.div>

                {/* Breakdown List */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Breakdown</h2>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">7 Subjects</span>
                    </div>

                    <div className="space-y-3">
                        {subjects.map((subject, index) => (
                            <motion.div
                                key={subject.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className="group"
                            >
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center gap-2">
                                        <subject.icon className={cn("w-4 h-4", subject.top ? "text-secondary" : "text-muted-foreground")} />
                                        <span className={cn("text-sm font-medium", subject.top ? "text-foreground" : "text-foreground/90")}>
                                            {subject.name}
                                            {subject.top && <span className="ml-2 text-[10px] text-black bg-secondary px-1.5 py-0.5 rounded font-bold">TOP</span>}
                                        </span>
                                    </div>
                                    <span className="text-sm font-mono text-muted-foreground">{subject.hours.toFixed(1)}h</span>
                                </div>
                                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(subject.hours / 14) * 100}%` }} // Using fixed max rough scale for visual niceness
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 + (index * 0.1) }}
                                        className={cn("h-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)]", subject.color)}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Motivational Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="glass p-5 rounded-2xl border-l-4 border-l-secondary mt-2"
                >
                    <div className="flex gap-3">
                        <div className="shrink-0 p-2 bg-secondary/10 rounded-full h-fit">
                            <Zap className="w-5 h-5 text-secondary" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm leading-relaxed text-foreground/90 italic">
                                "Incredible dedication this week! Your consistency is truly inspiring and is exactly what builds success in UPSC. Keep trusting your process and ride this momentum into next week. 🌟🚀"
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Actions */}
                <div className="flex gap-3 pt-4">
                    <button className="flex-1 bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity text-sm">
                        View Detailed Analytics
                    </button>
                    <button className="p-3 glass-card rounded-xl hover:bg-white/5 transition-colors text-foreground">
                        <Target className="w-5 h-5" />
                    </button>
                </div>

            </div>
        </div>
    );
}
