"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, Brain, TrendingUp, Clock } from "lucide-react";

export function MorningSurprise() {
    const [time, setTime] = useState("06:45");
    const [stage, setStage] = useState(0); // 0: Sleeping, 1: AI Working, 2: Morning Reveal

    useEffect(() => {
        const timer = setTimeout(() => {
            if (stage === 0) {
                setTime("06:55");
                setStage(1);
            } else if (stage === 1) {
                setTimeout(() => setStage(2), 2000);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [stage]);

    return (
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden bg-black border border-white/5 flex items-center justify-center">
            {/* Background Gradients */}
            <AnimatePresence mode="wait">
                {stage < 2 ? (
                    <motion.div
                        key="night"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#020617] transition-colors duration-1000"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]"></div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="morning"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-zinc-900 transition-colors duration-1000"
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10 flex flex-col items-center text-center px-6">
                {stage === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center justify-center gap-3 text-zinc-500 font-mono text-4xl mb-2">
                            <Clock className="h-8 w-8 text-zinc-700" />
                            <span>{time} AM</span>
                        </div>
                        <p className="text-zinc-500 font-medium">While you sleep, the AI Auditor is deep-diving into your logs...</p>
                    </motion.div>
                )}

                {stage === 1 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="flex items-center justify-center gap-3 text-primary font-mono text-4xl mb-2 animate-pulse">
                            <Clock className="h-8 w-8" />
                            <span>{time} AM</span>
                        </div>
                        <div className="flex gap-4">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="w-16 h-16 rounded-full border-t-2 border-primary border-r-2 border-primary/30 flex items-center justify-center"
                            >
                                <Brain className="h-8 w-8 text-primary" />
                            </motion.div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-white font-bold text-lg">AI Strategy Audit in progress</p>
                            <p className="text-zinc-500 text-sm">Converting raw logs into Mastery Points & Preparation Index</p>
                        </div>
                    </motion.div>
                )}

                {stage === 2 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-2xl"
                    >
                        <div className="mb-8 flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary mb-4">
                                <Sparkles className="h-3 w-3" />
                                DAILY PERFORMANCE UNLOCKED
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Wake up to Clarity (07:00 IST).</h3>
                            <p className="text-zinc-400">Your AI Preparation Index has been updated based on yesterday's 12.5h session.</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 border-b-primary/30 flex flex-col items-center gap-2"
                            >
                                <TrendingUp className="h-5 w-5 text-primary" />
                                <span className="text-[10px] font-bold text-zinc-500 uppercase">Preparation Index</span>
                                <span className="text-xl font-bold text-white">ELITE</span>
                            </motion.div>
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                transition={{ delay: 0.2 }}
                                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 border-b-blue-500/30 flex flex-col items-center gap-2"
                            >
                                <Sparkles className="h-5 w-5 text-blue-400" />
                                <span className="text-[10px] font-bold text-zinc-500 uppercase">Mastery Points</span>
                                <span className="text-xl font-bold text-white">+1,240</span>
                            </motion.div>
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                transition={{ delay: 0.4 }}
                                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 border-b-emerald-500/30 flex flex-col items-center gap-2"
                            >
                                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                                <span className="text-[10px] font-bold text-zinc-500 uppercase">Consistency</span>
                                <span className="text-xl font-bold text-white">98%</span>
                            </motion.div>
                        </div>

                        <button
                            onClick={() => setStage(0)}
                            className="mt-8 text-xs font-bold text-zinc-500 hover:text-white transition-colors"
                        >
                            REPLAY SYSTEM BOOT
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Decorative stars for stage 0/1 */}
            {stage < 2 && (
                <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.1 }}
                            animate={{ opacity: [0.1, 0.4, 0.1] }}
                            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
                            className="absolute w-0.5 h-0.5 bg-white rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function CheckCircle2({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
        </svg>
    );
}
