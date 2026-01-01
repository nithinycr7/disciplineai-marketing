import Link from "next/link";
import { ArrowRight, Check, BookOpen, Brain, Target, TrendingUp, Trophy, CheckCircle, Bell, Calendar, Award } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppMock } from "@/components/WhatsAppMock";
import { WeeklyReportCard } from "@/components/WeeklyReportCard";

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

            {/* Weekly Report Showcase */}
            <section className="py-24 bg-zinc-950 border-y border-zinc-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 order-2 md:order-1 flex justify-center">
                            <div className="transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                                <WeeklyReportCard />
                            </div>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-cyan-400 bg-cyan-400/10 rounded-full">
                                <TrendingUp className="w-4 h-4" /> Weekly Reality Check
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-6">
                                The Report Card <br />
                                <span className="text-zinc-500">You Can't Ignore.</span>
                            </h2>
                            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                                Every Sunday, you get a detailed breakdown of your week.
                                We visualize your effort across subjects so you can spot gaps immediately.
                                <br /><br />
                                <span className="text-white font-medium">History is strong, but what about Ethics?</span>
                                <br />
                                Our report reflects the mirror you need to see.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                                        <Trophy className="w-4 h-4 text-amber-500" />
                                    </div>
                                    <span className="text-sm">Subject-wise Breakdown</span>
                                </div>
                                <div className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                                        <Target className="w-4 h-4 text-cyan-500" />
                                    </div>
                                    <span className="text-sm">Target vs Achieved</span>
                                </div>
                            </div>
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

            {/* Tailored for UPSC Section */}
            <section className="py-24 bg-zinc-900/50 border-y border-zinc-800/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Tailored for UPSC</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            We understand the marathon. Discipline.AI is built specifically to handle the vastness and complexity of the UPSC syllabus.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Prelims & Mains Focus */}
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                <Target className="w-6 h-6 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Prelims & Mains Integrated</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Track GS, CSAT, Optional, and Essay separately. We know the weightage differs, and so does our tracking logic.
                                </p>
                            </div>
                        </div>

                        {/* Full Syllabus Coverage */}
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                                <BookOpen className="w-6 h-6 text-purple-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Comprehensive Syllabus</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    From Art & Culture to International Relations. Our AI recognizes every micro-topic in the UPSC syllabus.
                                </p>
                            </div>
                        </div>

                        {/* Reminders & Motivation */}
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                <Bell className="w-6 h-6 text-amber-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Reminders & Motivation</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Missed a slot? We nudge you. Feeling low? We send stoic quotes and reminders of your 'Why'.
                                </p>
                            </div>
                        </div>

                        {/* Monthly Progress Card */}
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                                <Calendar className="w-6 h-6 text-green-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Monthly Progress Card</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    A zoomed-out view of your month. See your consistency streak and total hours clocked versus your competitors.
                                </p>
                            </div>
                        </div>

                        {/* Weekly Drivers */}
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                                <TrendingUp className="w-6 h-6 text-cyan-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Weekly Drivers</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Get analysis on your "Driver Subjects" — the ones pushing your score up, and "Anchor Subjects" holding you down.
                                </p>
                            </div>
                        </div>

                        {/* Answer Writing */}
                        <div className="flex gap-4 items-start">
                            <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0">
                                <Award className="w-6 h-6 text-rose-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Answer Writing Tracker</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    Log daily answer counts. We track not just study hours, but output-based metrics crucial for Mains.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
