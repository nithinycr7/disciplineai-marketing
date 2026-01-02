"use client";

import { motion } from "framer-motion";
import { WhatsAppMock } from "./WhatsAppMock";
import { Activity, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface LiveSessionHeroProps {
    variant?: "UPSC" | "NEET" | "IITJEE";
}

export function LiveSessionHero({ variant = "UPSC" }: LiveSessionHeroProps) {
    const [seconds, setSeconds] = useState(0);
    const accentColor = variant === "UPSC" ? "text-amber-500" : variant === "NEET" ? "text-emerald-500" : "text-blue-500";
    const bgAccent = variant === "UPSC" ? "bg-amber-500" : variant === "NEET" ? "bg-emerald-500" : "bg-blue-500";
    const subject = variant === "UPSC" ? "Polity" : variant === "NEET" ? "Genetics" : "Calculus";

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => (prev + 1) % 3600);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (s: number) => {
        const mins = Math.floor(s / 60);
        const secs = s % 60;
        return `4h ${45 + mins}m ${secs}s`;
    };

    return (
        <div className="relative group">
            {/* Main Phone Frame */}
            <div className="relative h-[650px] w-full max-w-[340px] overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl bg-black transition-transform duration-500 group-hover:scale-[1.02]">
                <div className={`absolute inset-0 ${bgAccent}/5 blur-[100px] -z-10 rounded-full opacity-30`}></div>

                {/* WhatsApp Area */}
                <div className="h-[520px] overflow-hidden">
                    <WhatsAppMock variant={variant} />
                </div>

                {/* Live Activity Overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-30">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="bg-zinc-900/90 backdrop-blur-2xl border border-white/10 p-4 rounded-[2rem] shadow-2xl"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                                <div className={`p-1.5 rounded-lg ${bgAccent}/10`}>
                                    <Activity size={14} className={accentColor} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Live Session</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <motion.div
                                    animate={{ opacity: [1, 0.4, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className={`w-1.5 h-1.5 rounded-full ${bgAccent}`}
                                />
                                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Syncing...</span>
                            </div>
                        </div>

                        <div className="flex items-end justify-between">
                            <div>
                                <div className="text-2xl font-black text-white tracking-tight leading-none mb-1">
                                    {formatTime(seconds)}
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{subject} Mastery</span>
                                </div>
                            </div>
                            <div className={`p-2 rounded-xl ${bgAccent}/10 border border-white/5`}>
                                <Zap size={16} className={accentColor} />
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                                className={`h-full ${bgAccent}`}
                                initial={{ width: "0%" }}
                                animate={{ width: "78%" }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Shine */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
            </div>

            {/* Background Decorative Elements */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 ${bgAccent}/10 blur-[60px] rounded-full opacity-50`}></div>
            <div className={`absolute -bottom-10 -left-10 w-32 h-32 ${bgAccent}/10 blur-[60px] rounded-full opacity-50`}></div>
        </div>
    );
}
