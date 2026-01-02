import Link from "next/link";
import {
    ArrowRight, Check, Beaker, Activity, Timer,
    Dna, Microscope, Zap, Sparkles, TrendingUp,
    Stethoscope, Shield, Target, History, Compass, Atom
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppMock } from "@/components/WhatsAppMock";
import { WeeklyReportCard } from "@/components/WeeklyReportCard";
import { MorningSurprise } from "@/components/MorningSurprise";
import { NEETDashboardPreview } from "@/components/NEETDashboardPreview";
import { LiveSessionHero } from "@/components/LiveSessionHero";

export default function NEETPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black selection:bg-emerald-500 selection:text-black">
            {/* Hero Section - The Hook */}
            <section className="relative pt-32 pb-40 px-4 overflow-hidden bg-grid-white">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full">
                        FUTURE DOCTOR PROTOCOL
                    </div>
                    <h1 className="text-7xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
                        OWN THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-teal-500 italic">
                            WHITE COAT.
                        </span>
                    </h1>
                    <p className="text-2xl text-zinc-400 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
                        The old study logging is history. Join the Top 1% with a portfolio that <b>automatically tracks your progress</b> and delivers the <b>AI feedback</b> to secure your legacy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href={siteConfig.links.whatsapp}
                            className="inline-flex items-center justify-center px-12 py-6 text-xl font-black text-black bg-white rounded-3xl hover:bg-zinc-200 transition-all shadow-[0_0_60px_-15px_rgba(16,185,129,0.3)] transform hover:scale-110 active:scale-95 duration-300"
                        >
                            SECURE YOUR PROTOCOL <ArrowRight className="ml-3 h-7 w-7" />
                        </Link>
                    </div>
                </div>

                {/* The "Centerpiece" - Instant Visual impact */}
                <div className="mt-32 max-w-7xl mx-auto px-4 relative z-10">
                    <div className="relative group p-1 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent">
                        <div className="absolute -inset-10 bg-emerald-500/10 blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <NEETDashboardPreview />
                    </div>
                </div>
            </section>

            {/* AI Auditor Animation */}
            <section className="py-32 bg-black relative">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 text-emerald-500">
                            <Zap className="w-5 h-5 fill-emerald-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Overnight Retention Audit</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase italic">WAKE UP TO CLARITY</h3>
                        <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] max-w-xl mx-auto">While you sleep, our AI Strategist reconstructed your study hours into a surgical-grade Preparation Index.</p>
                    </div>
                    <MorningSurprise />
                </div>
            </section>

            {/* Strategic Value Proposition */}
            <section className="py-24 bg-zinc-950 border-y border-white/5 relative overflow-hidden text-center sm:text-left">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="flex-1">
                            <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 rounded-full">QUANTIFIED PRACTICE</div>
                            <h2 className="text-6xl md:text-[5rem] font-black text-white mb-10 tracking-tighter leading-none">
                                PCB MASTERY <br /><span className="italic text-zinc-500">THROUGH DATA.</span>
                            </h2>
                            <p className="text-2xl text-zinc-400 mb-12 font-medium leading-relaxed">
                                Cracking NEET requires a delicate balance between Biology memory and Physics logic. Our AI ensures you're never spending too much time where you're already strong.
                            </p>
                            <div className="space-y-10">
                                <NEETPoint icon={Dna} title="NCERT Precision Tracking" desc="Track your read-loops across all 38 Biology chapters to ensure 100% retention." />
                                <NEETPoint icon={Target} title="MCQ Volume Audit" desc="Monitor how many questions you solve per hour. Speed is as critical as accuracy." />
                                <NEETPoint icon={Microscope} title="Weak Concept Analysis" desc="AI identifies the chapters that consistently take you longer to log or solve." />
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <LiveSessionHero variant="NEET" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-40 bg-black relative">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-6xl md:text-8xl font-black text-white mb-20 tracking-tighter leading-none uppercase italic">CHOOSE YOUR <br /><span className="text-emerald-500">TRAINING LEVEL.</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                        {/* Standard */}
                        <div className="p-12 rounded-[3.5rem] bg-zinc-900/30 border border-zinc-800 text-left hover:bg-zinc-900/50 transition-all flex flex-col">
                            <h3 className="text-2xl font-black text-white mb-2">Standard</h3>
                            <div className="flex items-baseline mb-10">
                                <span className="text-6xl font-black text-white">₹199</span>
                                <span className="text-zinc-500 ml-2 font-black text-xs uppercase tracking-widest">/mo</span>
                            </div>
                            <ul className="space-y-6 mb-16 flex-1">
                                <li className="flex items-center text-sm font-bold text-zinc-300"><Check className="w-5 h-5 mr-4 text-zinc-700" /> WhatsApp Logging</li>
                                <li className="flex items-center text-sm font-bold text-zinc-300"><Check className="w-5 h-5 mr-4 text-zinc-700" /> Daily Scorecard</li>
                                <li className="flex items-center text-sm font-bold text-zinc-300"><Check className="w-5 h-5 mr-4 text-zinc-700" /> Chapter Progress Tracker</li>
                            </ul>
                            <Link href={siteConfig.links.whatsapp} className="block w-full py-6 rounded-2xl text-center border border-zinc-700 text-white font-black uppercase text-xs tracking-widest hover:bg-zinc-800 transition-all">
                                START TRACKING
                            </Link>
                        </div>

                        {/* Elite */}
                        <div className="p-12 rounded-[3.5rem] bg-black border-2 border-emerald-500/50 text-left scale-110 shadow-[0_0_100px_-20px_rgba(16,185,129,0.4)] z-10 flex flex-col">
                            <div className="absolute top-0 right-10 -translate-y-1/2 bg-emerald-500 text-black text-[10px] font-black px-5 py-2 rounded-full tracking-[0.2em] shadow-lg">MOST ELITE</div>
                            <h3 className="text-2xl font-black text-emerald-500 mb-2 uppercase">Discipline Elite</h3>
                            <div className="flex items-baseline mb-10">
                                <span className="text-6xl font-black text-white">₹499</span>
                                <span className="text-zinc-500 ml-2 font-black text-xs uppercase tracking-widest">/mo</span>
                            </div>
                            <ul className="space-y-6 mb-16 flex-1">
                                <li className="flex items-center text-sm font-black text-white"><Sparkles className="w-5 h-5 mr-4 text-emerald-500 animate-pulse" /> Vanity Portfolio URL</li>
                                <li className="flex items-center text-sm font-black text-white"><Check className="w-5 h-5 mr-4 text-emerald-500" /> AI Strategy Master Audit</li>
                                <li className="flex items-center text-sm font-black text-white"><Check className="w-5 h-5 mr-4 text-emerald-500" /> 12-Week Prep Velocity</li>
                                <li className="flex items-center text-sm font-black text-white"><Check className="w-5 h-5 mr-4 text-emerald-500" /> AI Preparation Index</li>
                                <li className="flex items-center text-sm font-black text-white"><Check className="w-5 h-5 mr-4 text-emerald-500" /> Elite Milestone Gallery</li>
                            </ul>
                            <Link href={siteConfig.links.whatsapp} className="block w-full py-6 rounded-2xl text-center bg-emerald-500 text-black font-black uppercase text-xs tracking-[0.2em] hover:bg-emerald-400 transition-all shadow-lg">
                                SECURE YOUR WHITE COAT
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-zinc-950 border-t border-white/5 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/10 opacity-40 blur-[150px] animate-pulse"></div>
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-8xl md:text-[10rem] font-black text-white mb-12 tracking-tighter leading-none italic uppercase">
                        OWN YOUR <br /><span className="text-emerald-500">DESTINY.</span>
                    </h2>
                    <Link
                        href={siteConfig.links.whatsapp}
                        className="inline-flex items-center justify-center px-16 py-8 text-3xl font-black text-black bg-white rounded-[2rem] hover:bg-zinc-200 transition-all shadow-2xl hover:scale-110 active:scale-95 transform duration-300"
                    >
                        START ON WHATSAPP
                    </Link>
                    <p className="mt-12 text-zinc-500 font-black uppercase tracking-[0.6em] text-xs">Your journey to medical excellence starts here</p>
                </div>
            </section>
        </div>
    );
}

function NEETPoint({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex gap-6 group">
            <div className="w-16 h-16 rounded-[1.5rem] bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300">
                <Icon className="w-8 h-8 text-emerald-500" />
            </div>
            <div>
                <h4 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-emerald-200 transition-colors uppercase italic">{title}</h4>
                <p className="text-zinc-500 text-lg font-medium leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
