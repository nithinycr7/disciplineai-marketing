"use client";

import { WhatsAppMock } from "./WhatsAppMock";
import { useEffect, useState } from "react";

interface ProductMockupHeroProps {
    variant?: "UPSC" | "NEET" | "IITJEE";
}

export function ProductMockupHero({ variant = "UPSC" }: ProductMockupHeroProps) {
    const accentColor = variant === "UPSC" ? "text-amber-500" : variant === "NEET" ? "text-emerald-500" : "text-blue-500";
    const bgAccent = variant === "UPSC" ? "bg-amber-500" : variant === "NEET" ? "bg-emerald-500" : "bg-blue-500";


    return (
        <div className="relative group">
            {/* Main Phone Frame */}
            <div className="relative h-[650px] w-full max-w-[340px] overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl bg-black transition-transform duration-500 group-hover:scale-[1.02]">
                <div className={`absolute inset-0 ${bgAccent}/5 blur-[100px] -z-10 rounded-full opacity-30`}></div>

                {/* WhatsApp Area */}
                <div className="h-[520px] overflow-hidden">
                    <WhatsAppMock variant={variant} />
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
