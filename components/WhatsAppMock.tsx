"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MESSAGES = [
    { type: "out", text: "Logged: 2h Polity reading, 30 mins Answer writing", delay: 0 },
    { type: "in", text: "Got it. Total study today: 2.5h. Good start. 🎯\n\nYou are trailing your weekly target. 30 more mins?", delay: 1000 },
];

export function WhatsAppMock() {
    const [visibleMessages, setVisibleMessages] = useState<number>(0);

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
                            className={`max-w-[80%] p-2.5 rounded-lg text-sm relative shadow-sm ${msg.type === "out"
                                ? "bg-[#005c4b] text-[#e9edef] rounded-tr-none"
                                : "bg-[#202c33] text-[#e9edef] rounded-tl-none"
                                }`}
                        >
                            <p className="whitespace-pre-line">{msg.text}</p>
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
