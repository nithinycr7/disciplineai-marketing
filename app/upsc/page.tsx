import Link from "next/link";
import { ArrowRight, Check, BookOpen, Brain, Target } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppMock } from "@/components/WhatsAppMock";

export default function UPSCPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            {/* Hero */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-amber-500 bg-amber-500/10 rounded-full">
                            For Serious Aspirants
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Master the <span className="text-primary">UPSC Marathon</span>.
                        </h1>
                        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                            No content. No distractions. Just pure tracking of your study hours, revision cycles, and answer writing practice.
                            Delivered on WhatsApp.
                        </p>
                        <Link
                            href={siteConfig.links.whatsapp}
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white rounded-full hover:bg-zinc-200 transition-all"
                        >
                            Start UPSC Tracking <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full opacity-50"></div>
                            <WhatsAppMock />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
                            <BookOpen className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Syllabus Tracking</h3>
                            <p className="text-zinc-400">Log "Polity", "Geography", "Ethics". We normalize it against GS1-4 papers automatically.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
                            <Brain className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Revision Management</h3>
                            <p className="text-zinc-400">Our AI reminds you if you haven't touched a subject in 2 weeks. Spaced repetition made simple.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
                            <Target className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Daily Accountability</h3>
                            <p className="text-zinc-400">06:00 AM Prompt: "What's the plan?" <br /> 10:30 PM Check-in: "What did you achieve?"</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className="py-24 bg-black">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Why Discipline.AI?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 bg-red-950/20 border border-red-900/50 rounded-2xl">
                            <h3 className="text-red-500 font-bold mb-4 flex items-center">🚫 The Old Way</h3>
                            <ul className="space-y-3 text-zinc-400">
                                <li>• Manual Excel sheets you forget to update.</li>
                                <li>• Distracting apps with Reels/Shorts.</li>
                                <li>• Overwhelmed by "Content" overload.</li>
                                <li>• Lonely preparation journey.</li>
                            </ul>
                        </div>
                        <div className="p-8 bg-green-950/20 border border-green-900/50 rounded-2xl">
                            <h3 className="text-green-500 font-bold mb-4 flex items-center">✅ The Discipline Way</h3>
                            <ul className="space-y-3 text-zinc-300">
                                <li>• Log via chat in 5 seconds.</li>
                                <li>• Zero new content. Zero distractions.</li>
                                <li>• Pure data visibility on your effort.</li>
                                <li>• AI Accountability partner.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Cracking Prelims requires Consistency.</h2>
                <Link
                    href={siteConfig.links.whatsapp}
                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-black bg-primary rounded-full hover:bg-cyan-400 transition-all"
                >
                    Start Your Free Trial
                </Link>
            </section>
        </div>
    );
}
