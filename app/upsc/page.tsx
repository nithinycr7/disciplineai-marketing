import Link from "next/link";
import {
    ArrowRight, Check, BookOpen, Brain, Target,
    TrendingUp, Trophy, CheckCircle, Bell, Calendar,
    Award, MessageSquare, Sun, AlertTriangle, Zap,
    Star, Sparkles, Shield, Compass, Scale, History
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppMock } from "@/components/WhatsAppMock";
import { WeeklyReportCard } from "@/components/WeeklyReportCard";
import { MorningSurprise } from "@/components/MorningSurprise";

export default function UPSCPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black selection:bg-amber-500 selection:text-black">
            {/* Hero Section - High Status */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-grid-white">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-full">
                            FOR SERIOUS TOPPERS ONLY
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                            BUILD YOUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-600 italic">
                                TOPPER LEGACY.
                            </span>
                        </h1>
                        <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-medium max-w-xl">
                            UPSC isn't just an exam; it's a war of attrition. Step into the Top 1% with the <b>Discipline Elite Portfolio</b>—the only system that proves your grit to the world.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link
                                href={siteConfig.links.whatsapp}
                                className="inline-flex items-center justify-center px-10 py-5 text-lg font-black text-black bg-amber-500 rounded-2xl hover:bg-amber-400 transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] transform hover:scale-105 active:scale-95"
                            >
                                SECURE YOUR POSITION <ArrowRight className="ml-3 h-6 w-6" />
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-[8px] font-bold">U{i}</div>)}
                            </div>
                            <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Trusted by serious aspirants</p>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative h-[600px] w-full max-w-[340px] overflow-hidden rounded-t-[3rem] border-x border-t border-white/10 glass-card">
                            <div className="absolute inset-0 bg-amber-500/10 blur-[80px] -z-10 rounded-full opacity-30"></div>
                            <WhatsAppMock variant="UPSC" />
                            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-20"></div>

                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-full px-6">
                                <div className="bg-amber-500/10 backdrop-blur-xl border border-amber-500/20 p-4 rounded-2xl shadow-2xl">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[9px] text-amber-500 font-black uppercase tracking-widest">Syllabus Mastered</span>
                                        <span className="text-[9px] text-zinc-400 font-bold">Week 12</span>
                                    </div>
                                    <div className="text-xl font-black text-white">72% Polity</div>
                                    <div className="mt-2 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-amber-500 w-[72%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Auditor Section */}
            <section className="py-32 bg-black relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic">WAKE UP TO CLARITY</h3>
                        <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Your UPSC strategist audits your daily focus while you sleep.</p>
                    </div>
                    <MorningSurprise />
                </div>
            </section>

            {/* Weekly Report Showcase */}
            <section className="py-24 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white opacity-10 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="flex-1 order-2 lg:order-1">
                            <div className="relative group">
                                <div className="absolute -inset-10 bg-amber-500/20 blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                <WeeklyReportCard />
                            </div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2">
                            <div className="inline-block px-3 py-1 mb-6 text-[10px] font-black uppercase tracking-widest text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-full">QUANTIFIED GRIT</div>
                            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                                DATA AS <br /><span className="italic text-zinc-500 underline decoration-amber-500/50 underline-offset-8">UNBREAKABLE</span> <br />AS YOUR WILL.
                            </h2>
                            <p className="text-xl text-zinc-400 mb-10 font-medium leading-relaxed">
                                Don't rely on gut feelings. Our AI Audit transforms your daily chaos into a clear roadmap of Subject Mastery, Clock Consistency, and Prep Velocity.
                            </p>
                            <div className="space-y-6">
                                <UPSCPoint icon={Compass} title="Micro-Syllabus Tracking" desc="We break down the vast UPSC syllabus into manageable 1-hour sessions." />
                                <UPSCPoint icon={Scale} title="Answer Writing Momentum" desc="Track your daily answer writing count and time-per-question metrics." />
                                <UPSCPoint icon={History} title="GS vs Optional Balance" desc="Real-time audits to ensure you aren't ignoring your Optional subjects." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Advantages */}
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">Master the Arena.</h2>
                        <p className="text-zinc-500 text-lg font-bold tracking-widest uppercase">The Topper's Feature Stack</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Zap}
                            title="30-Second Logs"
                            desc="Log your sessions via WhatsApp. No apps to open, no distractions to avoid. Pure focus."
                        />
                        <FeatureCard
                            icon={Target}
                            title="AI Strategy Audit"
                            desc="Every morning, your AI partner summarizes your grit and aligns your focus for the day ahead."
                            isElite
                        />
                        <FeatureCard
                            icon={Shield}
                            title="Focus Audits"
                            desc="Identify 'Dead Study Hours'—times when you are logged in but your output is zero."
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section - Elite Focus */}
            <section className="py-32 bg-zinc-950 border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-16 tracking-tighter leading-none uppercase">CHOOSE YOUR <br /><span className="text-amber-500 italic">TRAINING LEVEL.</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                        {/* Standard */}
                        <div className="p-12 rounded-[3rem] bg-zinc-900/30 border border-zinc-800 text-left hover:bg-zinc-900/50 transition-all flex flex-col">
                            <h3 className="text-2xl font-black text-white mb-2">Standard</h3>
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-black text-white">₹199</span>
                                <span className="text-zinc-500 ml-2 font-black text-[10px] uppercase tracking-widest">/mo</span>
                            </div>
                            <ul className="space-y-5 mb-12 flex-1">
                                <li className="flex items-center text-sm font-bold text-zinc-300"><Check className="w-5 h-5 mr-3 text-zinc-700" /> WhatsApp Logging</li>
                                <li className="flex items-center text-sm font-bold text-zinc-300"><Check className="w-5 h-5 mr-3 text-zinc-700" /> Daily Scorecard</li>
                                <li className="flex items-center text-sm font-bold text-zinc-300"><Check className="w-5 h-5 mr-3 text-zinc-700" /> Syllabus Progress Tracker</li>
                            </ul>
                            <Link href={siteConfig.links.whatsapp} className="block w-full py-5 rounded-2xl text-center border border-zinc-700 text-white font-black uppercase text-xs tracking-widest hover:bg-zinc-800 transition-all">
                                START TRACKING
                            </Link>
                        </div>

                        {/* Elite */}
                        <div className="p-12 rounded-[3rem] bg-black border border-amber-500/50 text-left scale-110 shadow-[0_0_80px_-20px_rgba(245,158,11,0.3)] z-10 flex flex-col">
                            <div className="absolute top-0 right-10 -translate-y-1/2 bg-amber-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] shadow-lg">MOST ELITE</div>
                            <h3 className="text-2xl font-black text-amber-500 mb-2">Discipline Elite</h3>
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-black text-white">₹499</span>
                                <span className="text-zinc-500 ml-2 font-black text-[10px] uppercase tracking-widest">/mo</span>
                            </div>
                            <ul className="space-y-5 mb-12 flex-1">
                                <li className="flex items-center text-sm font-black text-white"><Sparkles className="w-5 h-5 mr-3 text-amber-500 animate-pulse" /> Vanity Portfolio URL</li>
                                <li className="flex items-center text-sm font-black text-white"><Check className="w-5 h-5 mr-3 text-amber-500" /> AI Strategy Master Audit</li>
                                <li className="flex items-center text-sm font-black text-white"><Check className="w-5 h-5 mr-3 text-amber-500" /> 12-Week Prep Velocity</li>
                                <li className="flex items-center text-sm font-black text-white"><Check className="w-5 h-5 mr-3 text-amber-500" /> AI Preparation Index</li>
                                <li className="flex items-center text-sm font-black text-white"><Check className="w-5 h-5 mr-3 text-amber-500" /> Elite Milestone Gallery</li>
                            </ul>
                            <Link href={siteConfig.links.whatsapp} className="block w-full py-5 rounded-2xl text-center bg-amber-500 text-black font-black uppercase text-xs tracking-[0.2em] hover:bg-amber-400 transition-all shadow-lg">
                                SECURE YOUR LEGACY
                            </Link>
                        </div>
                    </div>

                    <div className="mt-24 text-center">
                        <p className="text-zinc-600 text-sm max-w-2xl mx-auto italic font-medium leading-relaxed uppercase tracking-tighter">
                            "The Standard plan tracks your effort. The Elite plan builds your identity. Invest in the edge that keeps you ahead of 10 lakh people."
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 bg-black relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-amber-500/5 opacity-30 blur-[100px]"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-none italic">
                        OWN THE <br /><span className="text-amber-500 uppercase">ARENA.</span>
                    </h2>
                    <Link
                        href={siteConfig.links.whatsapp}
                        className="inline-flex items-center justify-center px-16 py-6 text-2xl font-black text-black bg-amber-500 rounded-3xl hover:bg-amber-400 transition-all shadow-2xl hover:scale-110 active:scale-95 transform duration-300"
                    >
                        JOIN WHATSAPP NOW
                    </Link>
                    <p className="mt-8 text-zinc-500 font-black uppercase tracking-[0.5em] text-[10px]">Zero setup friction</p>
                </div>
            </section>
        </div>
    );
}

function UPSCPoint({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex gap-5 group">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-amber-500/40 transition-all">
                <Icon className="w-6 h-6 text-amber-500" />
            </div>
            <div>
                <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function FeatureCard({ icon: Icon, title, desc, isElite = false }: { icon: any, title: string, desc: string, isElite?: boolean }) {
    return (
        <div className={`p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col items-center text-center group ${isElite
            ? "bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40"
            : "bg-zinc-900/30 border-white/5 hover:border-white/10"
            }`}>
            <div className={`w-16 h-16 rounded-2xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform ${isElite ? "bg-amber-500/10 text-amber-500" : "bg-zinc-800 text-zinc-400"
                }`}>
                <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black mb-4 tracking-tight text-white uppercase">{title}</h3>
            <p className="text-zinc-500 font-medium leading-relaxed text-sm">{desc}</p>
        </div>
    );
}
