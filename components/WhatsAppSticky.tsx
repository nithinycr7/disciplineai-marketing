"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";

export function WhatsAppSticky() {
    return (
        <motion.a
            href={siteConfig.links.whatsapp}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all group"
        >
            <span className="absolute right-full mr-4 bg-black/80 backdrop-blur-xl border border-white/10 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Start Tracking
            </span>
            <MessageCircle className="w-8 h-8 text-white fill-current" />

            {/* Ping animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        </motion.a>
    );
}
