"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { BookOpen, TrendingUp, Trophy, Zap, Clock, Target } from "lucide-react";

export function WhatsAppMock() {
    const [visibleMessages, setVisibleMessages] = useState<number>(0);

    const MESSAGES = [
        { type: "out", text: "Logged: 2h Polity reading, 30 mins Answer writing" },
        { type: "in", text: "Got it. Total study today: 2.5h. Good start. 🎯\n\nYou are trailing your weekly target. 30 more mins?" },
        {
            type: "in",
            content: (
                <div className="w-full min-w-[240px]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                        <div className="flex items-center gap-1.5">
                            <div className="p-1 bg-cyan-500/10 rounded">
                                <TrendingUp size={12} className="text-cyan-400" />
                            </div>
                            <span className="font-semibold text-white text-xs">Weekly Report</span>
                        </div>
                        <span className="text-[10px] text-zinc-400">Week 2</span>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="bg-zinc-900/50 rounded-lg p-2 border border-white/5">
                            <div className="text-[10px] text-zinc-400 mb-0.5">Completed</div>
                            <div className="text-lg font-bold text-cyan-400">46.5h</div>
                        </div>
                        <div className="bg-zinc-900/50 rounded-lg p-2 border border-white/5 flex items-center justify-between">
                            <div>
                                <div className="text-[10px] text-zinc-400 mb-0.5">Target</div>
                                <div className="text-lg font-bold text-white/90">56h</div>
                            </div>
                            <div className="relative w-8 h-8 flex items-center justify-center">
                                <svg className="w-full h-full -rotate-90">
                                    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3" fill="transparent" className="text-zinc-700" />
                                    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="3" fill="transparent" strokeDasharray={2 * Math.PI * 14} strokeDashoffset={2 * Math.PI * 14 * (1 - 0.83)} strokeLinecap="round" className="text-cyan-400" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-[8px] font-bold">83%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-2.5 mb-4">
                        <div className="flex items-center justify-between text-[10px] font-medium text-zinc-400 uppercase tracking-wider">
                            <span>Top Subjects</span>
                            <span>Hours</span>
                        </div>

                        <div className="space-y-2">
                            {/* History */}
                            <div className="group">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-white flex items-center gap-1.5">
                                        <BookOpen size={10} className="text-amber-500" />
                                        History
                                    </span>
                                    <span className="font-mono text-zinc-300">12.0h</span>
                                </div>
                                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 w-[85%] rounded-full" />
                                </div>
                            </div>

                            {/* Polity */}
                            <div className="group">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-white flex items-center gap-1.5">
                                        <Trophy size={10} className="text-cyan-500" />
                                        Polity
                                    </span>
                                    <span className="font-mono text-zinc-300">10.5h</span>
                                </div>
                                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-500 w-[70%] rounded-full" />
                                </div>
                            </div>

                            {/* Others */}
                            <div className="flex items-center gap-2 pt-1">
                                <div className="h-0.5 flex-1 bg-zinc-800" />
                                <span className="text-[10px] text-zinc-500">+5 others</span>
                                <div className="h-0.5 flex-1 bg-zinc-800" />
                            </div>
                        </div>
                    </div>

                    {/* Motivation */}
                    <div className="bg-gradient-to-r from-cyan-500/10 to-transparent border-l-2 border-cyan-500 pl-2 py-1">
                        <p className="text-[10px] italic text-cyan-100/80 leading-relaxed">
                            "Incredible dedication! Your consistency builds success. 🚀"
                        </p>
                    </div>
                </div>
            )
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleMessages((prev) => (prev < MESSAGES.length ? prev + 1 : prev));
        }, 1500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative mx-auto w-full max-w-[320px] rounded-[2.5rem] border-[8px] border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden h-[600px] flex flex-col">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-800 rounded-b-2xl z-20"></div>

            {/* Header */}
            <div className="bg-[#075E54] p-4 pt-10 flex items-center space-x-3 shadow-md z-10">
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                    DA
                </div>
                <div>
                    <h3 className="text-white text-sm font-semibold">Discipline.AI</h3>
                    <p className="text-emerald-100 text-[10px]">Business Account</p>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-[#111b21] p-4 space-y-4 overflow-y-auto relative">
                {/* Background Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

                <div className="text-center text-[10px] text-zinc-500 my-4 uppercase tracking-wider font-medium">Today</div>

                {MESSAGES.map((msg, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={visibleMessages > i ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${msg.type === "out" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`max-w-[85%] p-2.5 rounded-lg text-sm relative shadow-sm ${msg.type === "out"
                                ? "bg-[#005c4b] text-[#e9edef] rounded-tr-none"
                                : "bg-[#202c33] text-[#e9edef] rounded-tl-none"
                                }`}
                        >
                            {msg.content ? (
                                msg.content
                            ) : (
                                <p className="whitespace-pre-line">{msg.text}</p>
                            )}
                            <span className="text-[10px] text-zinc-400 block text-right mt-1">
                                {new Date().getHours()}:{String(new Date().getMinutes()).padStart(2, '0')}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-[#202c33] flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-zinc-600/50"></div>
                <div className="flex-1 h-9 rounded-full bg-[#2a3942] px-4 flex items-center text-zinc-500 text-sm">
                    Message to keep log...
                </div>
                <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center">
                    {/* Mic icon placeholder */}
                    <div className="w-2.5 h-4 border border-white rounded-full"></div>
                </div>
            </div>
        </div>
    );
}
