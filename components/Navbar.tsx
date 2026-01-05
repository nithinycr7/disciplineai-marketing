"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
import { siteConfig, VERTICALS } from "@/config/site";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 w-full z-[100] transition-all duration-300",
            scrolled ? "py-4" : "py-6"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={cn(
                    "flex justify-between items-center transition-all duration-500 rounded-3xl px-6 h-16 border border-white/5 shadow-2xl overflow-hidden relative",
                    scrolled ? "bg-black/80 backdrop-blur-2xl" : "bg-transparent border-transparent shadow-none"
                )}>
                    {/* Glow background for scrolled state */}
                    {scrolled && <div className="absolute inset-0 bg-primary/5 -z-10 blur-xl"></div>}

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="group flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                                <Zap className="w-5 h-5 text-black fill-current" />
                            </div>
                            <span className="text-xl font-black tracking-tighter text-white">
                                DISCIPLINE<span className="text-primary italic">.AI</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-10">
                        <NavLink href={VERTICALS.UPSC.href} label={VERTICALS.UPSC.name} />
                        {/* <NavLink href={VERTICALS.NEET.href} label={VERTICALS.NEET.name} /> */}
                        {/* <NavLink href={VERTICALS.IITJEE.href} label={VERTICALS.IITJEE.name} /> */}

                        <Link
                            href={siteConfig.links.whatsapp}
                            className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-black rounded-xl text-black bg-primary hover:bg-cyan-400 transition-all shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95 uppercase tracking-widest"
                        >
                            JOIN THE ELITE <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 w-full px-4 pt-2"
                    >
                        <div className="bg-zinc-950/95 backdrop-blur-3xl border border-white/5 rounded-[2rem] p-6 shadow-2xl">
                            <div className="space-y-2">
                                <MobileNavLink href={VERTICALS.UPSC.href} label={VERTICALS.UPSC.name} onClick={() => setIsOpen(false)} />
                                {/* <MobileNavLink href={VERTICALS.NEET.href} label={VERTICALS.NEET.name} onClick={() => setIsOpen(false)} />
                                <MobileNavLink href={VERTICALS.IITJEE.href} label={VERTICALS.IITJEE.name} onClick={() => setIsOpen(false)} /> */}

                                <Link
                                    href={siteConfig.links.whatsapp}
                                    className="block w-full text-center mt-6 px-6 py-4 rounded-2xl font-black text-sm text-black bg-primary hover:bg-cyan-400 transition-all uppercase tracking-widest"
                                    onClick={() => setIsOpen(false)}
                                >
                                    START ON WHATSAPP
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function NavLink({ href, label }: { href: string, label: string }) {
    return (
        <Link
            href={href}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors relative group"
        >
            {label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
        </Link>
    );
}

function MobileNavLink({ href, label, onClick }: { href: string, label: string, onClick: () => void }) {
    return (
        <Link
            href={href}
            className="block px-4 py-3 rounded-xl text-lg font-bold text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            onClick={onClick}
        >
            {label}
        </Link>
    );
}
