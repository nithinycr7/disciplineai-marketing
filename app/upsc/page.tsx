import Link from "next/link";
import { ArrowRight, Check, BookOpen, Brain, Target, TrendingUp, Trophy, CheckCircle, Bell, Calendar, Award, MessageSquare, Sun, AlertTriangle, Zap, Star } from "lucide-react";
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
                            Stop Just "Studying". <br />
                            <span className="text-primary">Start Training to Win.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                            The first WhatsApp-native AI tracker that turns your raw study logs into powerful insights, discipline, and strategy.
                            <br /><br />
                            <span className="text-zinc-500 text-lg">"Cracking UPSC isn't about hours. It's about consistency and strategy. DISCIPLINE.AI automates both directly on WhatsApp."</span>
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

            {/* Key Features (The "Why") */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">The System that Wins</h2>
                        <p className="text-zinc-400">Built to solve the specific behavioral problems of UPSC aspirants.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 1. Smart Logging */}
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-primary/30 transition-all">
                            <MessageSquare className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-3">1. Smart Logging (No Data Entry)</h3>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                                Forget complex apps. Just text us like a friend. "Studied Polity for 2 hours, covered Directive Principles."
                                <br /><br />
                                We handle the rest: Our AI instantly categorizes it, maps it to the UPSC syllabus, and updates your stats. Frictionless.
                            </p>
                        </div>

                        {/* 2. Morning Scorecard */}
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 transition-all">
                            <Sun className="w-10 h-10 text-amber-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-3">2. The "Morning Scorecard"</h3>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                                Start every day with momentum. Wake up to a personalized report:
                            </p>
                            <ul className="space-y-2 text-zinc-500 text-sm bg-black/30 p-4 rounded-xl">
                                <li className="flex gap-2"><span>📊</span> Yesterday's Reality: "You studied 7.5h (Goal: 8h)."</li>
                                <li className="flex gap-2"><span>📈</span> Syllabus Tracking: "Great progress on Environment!"</li>
                                <li className="flex gap-2"><span>🤖</span> AI Nuance: "You've ignored History for 3 days. Let's fix that today."</li>
                            </ul>
                        </div>

                        {/* 3. Strategic Review */}
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/30 transition-all">
                            <Zap className="w-10 h-10 text-cyan-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-3">3. Weekly "Strategic Review"</h3>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                                Don't just work hard. Work smart. Every Sunday, receive a comprehensive performance review:
                            </p>
                            <ul className="space-y-2 text-zinc-500 text-sm bg-black/30 p-4 rounded-xl">
                                <li className="flex gap-2"><span>🗺️</span> Subject Mastery Heatmap: See exactly where you are strong (Polity) and weak (Economics).</li>
                                <li className="flex gap-2"><span>🔥</span> Consistency Score: Valid streak tracking.</li>
                                <li className="flex gap-2"><span>🧠</span> AI Coach Feedback: "Strategy for next week: 2 hours of revision every morning."</li>
                            </ul>
                        </div>

                        {/* 4. Intelligent Nudges */}
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-rose-500/30 transition-all">
                            <AlertTriangle className="w-10 h-10 text-rose-500 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-3">4. Intelligent Nudges</h3>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                                We know when you're slacking before you do.
                            </p>
                            <ul className="space-y-2 text-zinc-500 text-sm bg-black/30 p-4 rounded-xl">
                                <li className="flex gap-2"><span>🌙</span> <b>The "Evening Check-in":</b> Haven't logged by 9 PM? We gently nudge you to ensure a non-zero day.</li>
                                <li className="flex gap-2"><span>⚠️</span> <b>The "Binge Alert":</b> "Warning: You're over-investing in Geography. Switch to CSAT to balance your risk."</li>
                            </ul>
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

            {/* Testimonial */}
            <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="flex justify-center mb-6">
                        <div className="flex gap-1 text-amber-500">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-6 h-6 fill-current" />
                            ))}
                        </div>
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                        "I used to study 10 hours but had no idea if I was covering the syllabus. Now, my Sunday Report tells me exactly what to fix for next week. It's like having a mentor in my pocket."
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-zinc-300 font-bold">
                            AS
                        </div>
                        <div className="text-left">
                            <div className="text-white font-bold">Ankit Sharma</div>
                            <div className="text-zinc-500 text-sm">UPSC Aspirant (Delhi)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Flexible Plans</h2>
                        <p className="text-zinc-400">Invest in your selection.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Standard Plan */}
                        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 flex flex-col">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">Standard Plan</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-white">₹229</span>
                                    <span className="text-zinc-500">/mo</span>
                                </div>
                                <p className="text-zinc-400 mt-4 text-sm">Tracks your effort accurately.</p>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-center text-zinc-300 text-sm"><Check className="w-4 h-4 mr-3 text-green-500 shrink-0" /> Smart Logging (Unlimited)</li>
                                <li className="flex items-center text-zinc-300 text-sm"><Check className="w-4 h-4 mr-3 text-green-500 shrink-0" /> Daily Scorecard (Basic)</li>
                                <li className="flex items-center text-zinc-300 text-sm"><Check className="w-4 h-4 mr-3 text-green-500 shrink-0" /> Weekly Report (Text Summary)</li>
                                <li className="flex items-center text-zinc-300 text-sm"><Check className="w-4 h-4 mr-3 text-green-500 shrink-0" /> Syllabus Tracker (Basic)</li>
                                <li className="flex items-center text-zinc-500 text-sm"><Check className="w-4 h-4 mr-3 text-zinc-700 shrink-0" /> No AI Strategy Coach</li>
                                <li className="flex items-center text-zinc-500 text-sm"><Check className="w-4 h-4 mr-3 text-zinc-700 shrink-0" /> No Intelligent Nudges</li>
                            </ul>
                            <Link
                                href={siteConfig.links.whatsapp}
                                className="block w-full py-4 text-center rounded-xl border border-zinc-700 text-white font-bold hover:bg-zinc-800 transition-all"
                            >
                                Get Standard
                            </Link>
                        </div>

                        {/* Premium Plan */}
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-amber-500/30 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-white mb-2">Premium Plan</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-white">₹499</span>
                                    <span className="text-zinc-500">/mo</span>
                                </div>
                                <p className="text-amber-500 mt-4 text-sm font-medium">Optimizes your strategy.</p>
                            </div>
                            <ul className="space-y-4 mb-8 flex-1">
                                <li className="flex items-center text-white text-sm"><Check className="w-4 h-4 mr-3 text-amber-500 shrink-0" /> Smart Logging (Unlimited)</li>
                                <li className="flex items-center text-white text-sm"><Check className="w-4 h-4 mr-3 text-amber-500 shrink-0" /> Daily Scorecard (AI Personalized)</li>
                                <li className="flex items-center text-white text-sm"><Check className="w-4 h-4 mr-3 text-amber-500 shrink-0" /> Weekly Report (Detailed PDF)</li>
                                <li className="flex items-center text-white text-sm"><Check className="w-4 h-4 mr-3 text-amber-500 shrink-0" /> Syllabus Tracker (Heatmap)</li>
                                <li className="flex items-center text-white text-sm"><Check className="w-4 h-4 mr-3 text-amber-500 shrink-0" /> ✅ AI Strategy Coach</li>
                                <li className="flex items-center text-white text-sm"><Check className="w-4 h-4 mr-3 text-amber-500 shrink-0" /> ✅ Intelligent Nudges (Proactive)</li>
                            </ul>
                            <Link
                                href={siteConfig.links.whatsapp}
                                className="block w-full py-4 text-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold hover:opacity-90 transition-all shadow-lg shadow-amber-500/20"
                            >
                                Get Premium
                            </Link>
                        </div>
                    </div>

                    {/* Why Premium? */}
                    <div className="mt-16 max-w-3xl mx-auto text-center bg-zinc-900/30 rounded-2xl p-8 border border-zinc-800">
                        <h3 className="text-xl font-bold text-white mb-3">🎯 Why Premium?</h3>
                        <p className="text-zinc-400 italic">
                            "The Standard plan tracks your effort. The Premium plan <span className="text-amber-500 font-medium">optimizes your strategy</span>. For the price of a coffee, get an AI Coach that ensures your hard work actually translates to marks."
                        </p>
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
