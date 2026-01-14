import Link from "next/link";
import {
    ArrowRight, Check, FunctionSquare, Atom, Zap,
    Sparkles, TrendingUp, Shield, Target, History,
    Compass, Laptop, Binary, Cpu, MousePointer2, Flame
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppMock } from "@/components/WhatsAppMock";
import { WeeklyReportCard } from "@/components/WeeklyReportCard";
import { MorningSurprise } from "@/components/MorningSurprise";
import { JEEDashboardPreview } from "@/components/JEEDashboardPreview";
import { ProductMockupHero } from "@/components/LiveSessionHero";

export default function IITJEEPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black selection:bg-purple-500 selection:text-black">
            {/* Hero Section - The Hook */}
            <section className="relative pt-32 pb-40 px-4 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 bg-blue-400/10 border border-blue-400/20 rounded-full">
                        RANK ONE PROTOCOL
                    </div>
                    <h1 className="text-7xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.85] uppercase">
                        OWN THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 italic">
                            JEE ASCENT.
                        </span>
                    </h1>
                    <p className="text-2xl text-zinc-400 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
                        The old study logging is history. Join the Top 1% with a portfolio that <b>automatically tracks your progress</b> and delivers the <b>AI feedback</b> to secure your legacy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href={siteConfig.links.whatsapp}
                            className="inline-flex items-center justify-center px-12 py-6 text-xl font-black text-black bg-white rounded-3xl hover:bg-zinc-200 transition-all shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] transform hover:scale-110 active:scale-95 duration-300"
                        >
                            SECURE YOUR PROTOCOL <ArrowRight className="ml-3 h-7 w-7" />
                        </Link>
                    </div>
                </div>

                {/* The "Centerpiece" - Dashboard preview */}
                <div className="mt-32 max-w-7xl mx-auto px-4 relative z-10">
                    <div className="relative group p-1 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent">
                        <div className="absolute -inset-10 bg-blue-500/10 blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <JEEDashboardPreview />
                    </div>
                </div>
            </section>

            {/* Domain Specific: Advanced Problem Solving Velocity */}
            <section className="py-32 bg-zinc-950 relative overflow-hidden border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="flex-1">
                            <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-500/20 rounded-full">QUANTUM VELOCITY</div>
                            <h2 className="text-6xl md:text-[5rem] font-black text-white mb-10 tracking-tighter leading-none uppercase">
                                SOLVING <br /><span className="italic text-zinc-500">INTENSITY.</span>
                            </h2>
                            <p className="text-2xl text-zinc-400 mb-12 font-medium leading-relaxed">
                                JEE Advanced is won by the depth of your thinking, not the volume of your reading. Our AI filter tracks your high-intensity problem-solving hours separately.
                            </p>
                            <div className="space-y-10">
                                <JEEPoint icon={Binary} title="Advanced Problem Audit" desc="AI tracks how many minutes you spend per complex problem. Depth over speed." />
                                <JEEPoint icon={Target} title="Topic Heatmap Analysis" desc="Identify your weakest link in PCM before the examiners do. Real-time focus shifting." />
                                <JEEPoint icon={Flame} title="The Unstoppable Streak" desc="Build momentum with daily deep work targets. Top 500 ranks are forged in silence." />
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <ProductMockupHero variant="IITJEE" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Value Proposition */}
            <section className="py-32 bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white opacity-5"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-24">
                        <div className="flex-1">
                            <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-500/10 border border-blue-400/20 rounded-full">PERSISTENCE DATA</div>
                            <h2 className="text-6xl md:text-[5rem] font-black text-white mb-10 tracking-tighter leading-none">
                                PCM DEPTH <br /><span className="italic text-zinc-500">OVER SPEED.</span>
                            </h2>
                            <p className="text-2xl text-zinc-400 mb-12 font-medium leading-relaxed">
                                Cracking the Advanced requires deep work, not just logging hours. Our AI Strategist audits your "Persistence Benchmarks" to ensure you're in the Top 1%.
                            </p>
                            <div className="space-y-10">
                                <JEEPoint icon={FunctionSquare} title="Unstoppable Mode Tracking" desc="We filter out low-intensity study and only count the velocity hours where you are solving Advanced-level problems." />
                                <JEEPoint icon={Binary} title="Syllabus Burn-rate Analytics" desc="Track your Chapter Mastery across PCM with the same precision as a hedge fund manager." />
                                <JEEPoint icon={Cpu} title="Deadly Accuracy Audit" desc="AI identifies if you are hitting a plateau and pushes you into the 'Deep Work' zone." />
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <WeeklyReportCard variant="IITJEE" />
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Auditor Animation */}
            <section className="py-32 bg-black relative">
                <div className="max-w-5xl mx-auto px-4">
                    <MorningSurprise />
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-40 bg-zinc-950 relative border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-6xl md:text-8xl font-black text-white mb-20 tracking-tighter leading-none uppercase italic">CHOOSE YOUR <br /><span className="text-blue-500">TRAINING LEVEL.</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                        {/* Standard */}
                        <div className="p-12 rounded-[3.5rem] bg-zinc-900/30 border border-zinc-800 text-left hover:bg-zinc-900/50 transition-all flex flex-col scale-95 opacity-80">
                            <h3 className="text-2xl font-black text-white mb-2">Standard</h3>
                            <div className="flex items-baseline mb-10">
                                <span className="text-6xl font-black text-white">₹99</span>
                                <span className="text-zinc-500 ml-2 font-black text-xs uppercase tracking-widest">/mo</span>
                            </div>
                            <ul className="space-y-6 mb-16 flex-1">
                                <li className="flex items-center text-sm font-bold text-zinc-300"><Check className="w-5 h-5 mr-4 text-zinc-700" /> WhatsApp-Based Study Tracking</li>
                                <li className="flex items-center text-sm font-bold text-zinc-300"><Check className="w-5 h-5 mr-4 text-zinc-700" /> Learning Portfolio with Snapshots</li>
                                <li className="flex items-center text-sm font-bold text-zinc-300"><Check className="w-5 h-5 mr-4 text-zinc-700" /> Weekly Progress Reports</li>
                            </ul>
                            <Link href={siteConfig.links.whatsapp} className="block w-full py-6 rounded-2xl text-center border border-zinc-700 text-white font-black uppercase text-xs tracking-widest hover:bg-zinc-800 transition-all">
                                START TRACKING
                            </Link>
                        </div>

                        {/* Elite */}
                        <div className="p-12 rounded-[3.5rem] bg-black border-2 border-blue-500/50 text-left scale-105 shadow-[0_0_100px_-20px_rgba(59,130,246,0.4)] z-10 flex flex-col relative overflow-hidden">
                            <div className="absolute top-0 right-10 -translate-y-1/2 bg-blue-500 text-black text-[10px] font-black px-5 py-2 rounded-full tracking-[0.2em] shadow-lg">MOST ELITE</div>
                            <h3 className="text-2xl font-black text-blue-500 mb-2 uppercase">Discipline Elite</h3>
                            <div className="flex items-baseline mb-10">
                                <span className="text-6xl font-black text-white">₹149</span>
                                <span className="text-zinc-500 ml-2 font-black text-xs uppercase tracking-widest">/mo</span>
                            </div>
                            <ul className="space-y-6 mb-16 flex-1">
                                <li className="flex items-center text-sm font-black text-white"><Check className="w-5 h-5 mr-4 text-blue-500" /> Everything in Standard</li>
                                <li className="flex items-center text-sm font-black text-white"><Sparkles className="w-5 h-5 mr-4 text-blue-500 animate-pulse" /> AI-Powered Intelligence Insights</li>
                                <li className="flex items-center text-sm font-black text-white"><Check className="w-5 h-5 mr-4 text-blue-500" /> Personalized Test Analytics</li>
                                <li className="flex items-center text-sm font-black text-white"><Check className="w-5 h-5 mr-4 text-blue-500" /> Achievement Milestones & Badges</li>
                            </ul>
                            <Link href={siteConfig.links.whatsapp} className="block w-full py-6 rounded-2xl text-center bg-blue-500 text-black font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-400 transition-all shadow-lg">
                                SECURE YOUR PROTOCOL
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 bg-black border-t border-white/5 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 opacity-40 blur-[150px] animate-pulse"></div>
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-8xl md:text-[10rem] font-black text-white mb-12 tracking-tighter leading-none italic uppercase">
                        OWN YOUR <br /><span className="text-blue-500">LEGACY.</span>
                    </h2>
                    <Link
                        href={siteConfig.links.whatsapp}
                        className="inline-flex items-center justify-center px-16 py-8 text-3xl font-black text-black bg-white rounded-[2rem] hover:bg-zinc-200 transition-all shadow-2xl hover:scale-110 active:scale-95 transform duration-300"
                    >
                        START ON WHATSAPP
                    </Link>
                    <p className="mt-12 text-zinc-500 font-black uppercase tracking-[0.6em] text-xs">Your journey to the IIT starts here</p>
                </div>
            </section>
        </div>
    );
}

function JEEPoint({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex gap-6 group">
            <div className="w-16 h-16 rounded-[1.5rem] bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300">
                <Icon className="w-8 h-8 text-blue-500" />
            </div>
            <div>
                <h4 className="text-2xl font-black text-white mb-2 tracking-tight group-hover:text-blue-200 transition-colors uppercase italic">{title}</h4>
                <p className="text-zinc-500 text-lg font-medium leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
