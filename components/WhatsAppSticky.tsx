"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function WhatsAppSticky() {
    const [showCallout, setShowCallout] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Show callout 3 seconds after load
        const timer = setTimeout(() => {
            setShowCallout(true);
        }, 3000);

        // Hide it after 5 seconds of showing
        const hideTimer = setTimeout(() => {
            setShowCallout(false);
        }, 8000);

        return () => {
            clearTimeout(timer);
            clearTimeout(hideTimer);
        };
    }, []);

    return (
        <motion.a
            href={siteConfig.links.whatsapp}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
                rotate: [0, -10, 10, -10, 10, 0] // Wiggle animation
            }}
            transition={{
                rotate: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 5, // Wiggle every 5 seconds
                    ease: "easeInOut"
                },
                scale: { duration: 0.3 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all group"
        >
            <AnimatePresence>
                {(showCallout || isHovered) && (
                    <motion.span
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="absolute right-full mr-4 bg-white text-black font-bold px-4 py-2 rounded-xl text-sm shadow-xl whitespace-nowrap pointer-events-none"
                    >
                        Start Free Trial
                        <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white" />
                    </motion.span>
                )}
            </AnimatePresence>

            <div className="relative">
                <MessageCircle className="w-8 h-8 text-white fill-current" />
                {/* Notification Badge */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                    1
                </span>
            </div>

            {/* Ping animation backdrop */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></span>
        </motion.a>
    );
}
