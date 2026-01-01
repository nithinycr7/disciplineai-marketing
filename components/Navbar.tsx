"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig, VERTICALS } from "@/config/site";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                            DISCIPLINE<span className="text-primary">.AI</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href={VERTICALS.UPSC.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            {VERTICALS.UPSC.name}
                        </Link>
                        <Link href={VERTICALS.NEET.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            {VERTICALS.NEET.name}
                        </Link>
                        <Link href={VERTICALS.FITNESS.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            {VERTICALS.FITNESS.name}
                        </Link>

                        <Link
                            href={siteConfig.links.whatsapp}
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-all"
                        >
                            Start on WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-gray-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                href={VERTICALS.UPSC.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                                onClick={() => setIsOpen(false)}
                            >
                                {VERTICALS.UPSC.name}
                            </Link>
                            <Link
                                href={VERTICALS.NEET.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                                onClick={() => setIsOpen(false)}
                            >
                                {VERTICALS.NEET.name}
                            </Link>
                            <Link
                                href={VERTICALS.FITNESS.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                                onClick={() => setIsOpen(false)}
                            >
                                {VERTICALS.FITNESS.name}
                            </Link>
                            <Link
                                href={siteConfig.links.whatsapp}
                                className="block w-full text-center mt-4 px-4 py-3 rounded-md font-bold text-black bg-primary hover:bg-cyan-400 transition-colors"
                            >
                                Start on WhatsApp
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
