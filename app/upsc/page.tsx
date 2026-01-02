import Link from "next/link";
import {
    ArrowRight, Check, BookOpen, Brain, Target,
    TrendingUp, Trophy, CheckCircle, Bell, Calendar,
    Award, MessageSquare, Sun, AlertTriangle, Zap,
    Star, Sparkles, Shield, Compass, Scale, History, PenTool
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppMock } from "@/components/WhatsAppMock";
import { WeeklyReportCard } from "@/components/WeeklyReportCard";
import { MorningSurprise } from "@/components/MorningSurprise";
import { UPSCDashboardPreview } from "@/components/UPSCDashboardPreview";
import { ProductMockupHero } from "@/components/LiveSessionHero";

export default function UPSCPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black selection:bg-amber-500 selection:text-black">
            {/* Hero Section - High Status */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-grid-white">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-full">
                        FOR SERIOUS TOPPERS ONLY
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                        BUILD YOUR <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-600 italic">
                            TOPPER LEGACY.
                        </span>
                    </h1>
                    <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
                        The old study logging is history. Join the Top 1% with a portfolio that <b>automatically tracks your progress</b> and delivers the <b>AI feedback</b> to secure your legacy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link
                            href={siteConfig.links.whatsapp}
                            className="inline-flex items-center justify-center px-10 py-5 text-lg font-black text-black bg-amber-500 rounded-2xl hover:bg-amber-400 transition-all shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] transform hover:scale-105 active:scale-95"
                        >
                            SECURE YOUR POSITION <ArrowRight className="ml-3 h-6 w-6" />
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-4 justify-center">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-[8px] font-bold">U{i}</div>)}
                        </div>
                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Trusted by serious aspirants</p>
                    </div>
                </div>

                {/* The "Centerpiece" - Moved up for consistency with NEET/JEE */}
                <div className="mt-32 max-w-7xl mx-auto px-4 relative z-10">
                    <div className="relative group p-1 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent">
                        <div className="absolute -inset-10 bg-amber-500/10 blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <UPSCDashboardPreview />
                    </div>
                </div>
            </section>

            {/* Domain Specific: Answer Writing Calibration */}
            <section className="py-32 bg-zinc-950 relative overflow-hidden border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="flex-1">
                            <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black uppercase tracking-widest text-amber-500 bg-amber-500/10 border border-amber-500/20 rounded-full">MAINS VELOCITY</div>
                            <h2 className="text-6xl md:text-[5rem] font-black text-white mb-10 tracking-tighter leading-none uppercase">
                                CALIBRATE EVERY <br /><span className="italic text-zinc-500">LINE WRITTEN.</span>
                            </h2>
                            <p className="text-2xl text-zinc-400 mb-12 font-medium leading-relaxed">
                                The exam isn't won by how much you know, but by how much you can express under pressure. Our AI audits your answer writing frequency and duration.
                            </p>
                            <div className="space-y-10">
                                <UPSCPoint icon={PenTool} title="Answer Writing Heartbeat" desc="AI tracks how many answers you write daily. Consistency in expression is the only way to the IAS." />
                                <UPSCPoint icon={History} title="GS-Option Integration" desc="Ensure your study hours are balanced between General Studies and your Optional subject automatically." />
                                <UPSCPoint icon={Target} title="The 0.1% Benchmark" desc="Compare your daily grit with the performance benchmarks of previous year rankers." />
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <ProductMockupHero variant="UPSC" />
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Auditor Section */}
            <section className="py-32 bg-black relative">
                <div className="max-w-7xl mx-auto px-4">
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
