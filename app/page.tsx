import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Check, Zap, BarChart, MessageSquare,
  BrainCircuit, LineChart, Bot, PieChart, Sparkles,
  Layout, Trophy, Globe, Shield, Star, Users
} from "lucide-react";
import { WhatsAppMock } from "@/components/WhatsAppMock";
import { Stats } from "@/components/Stats";
import { ElitePreview } from "@/components/ElitePreview";
import { MorningSurprise } from "@/components/MorningSurprise";
import { siteConfig, VERTICALS } from "@/config/site";
import { ProductMockupHero } from "@/components/LiveSessionHero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black selection:bg-primary selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden bg-grid-white">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-20 pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pt-20">
            <div className="flex flex-col space-y-8">
              <div className="inline-flex w-fit items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-xs font-bold text-zinc-400 backdrop-blur-xl tracking-widest uppercase">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse shadow-[0_0_8px_rgba(6,182,212,1)]"></span>
                The 1% Club Protocol
              </div>

              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                BUILD YOUR <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-200 to-blue-500 text-glow">
                  ELITE IDENTITY.
                </span>
              </h1>

              <p className="text-xl text-zinc-400 max-w-lg leading-relaxed font-medium">
                The old study logging is history. <b>DISCIPLINE.AI is Not a chat bot. Not a coach. Just mirror of your preparation.</b> It turns your daily study into measurable progress.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  href={siteConfig.links.whatsapp}
                  className="inline-flex items-center justify-center px-10 py-5 text-lg font-black text-black bg-primary rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_30px_-5px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95"
                >
                  JOIN THE ELITE <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
                <Link
                  href="/upsc"
                  className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  EXPLORE THE SYSTEM
                </Link>
              </div>


            </div>

            <div className="relative flex justify-center lg:justify-end animate-float">
              <ProductMockupHero />
            </div>
          </div>
        </div>
      </section >

      <section className="py-10 bg-black overflow-hidden border-y border-white/5 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-[marquee_25s_linear_infinite] gap-20 items-center">
            {["UPSC", "IIT-JEE", "NEET", "GATE", "CA", "MBA", "MEDICAL", "UPSC", "IIT-JEE", "NEET", "GATE", "CA", "MBA", "MEDICAL"].map((text, i) => (
              <span key={i} className="text-3xl md:text-5xl font-black text-white/10 uppercase italic tracking-tighter hover:text-white/30 transition-all duration-500 cursor-default">{text} EXCELLENCE</span>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem: Visceral Pain */}
      <section className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            99% OF ASPIRANTS <br />
            <span className="text-zinc-700 italic">FAIL THE MARATHON.</span>
          </h2>
          <p className="text-xl text-zinc-500 mb-16 font-medium leading-relaxed">
            Aspirants suffer from <b>"Productivity Illusion"</b>. Success in <b>Competitive Exams</b> is not about how much you study. It’s about knowing what is working — and what is not. DISCIPLINE.AI provides the <b>Reality Check</b>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-red-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 italic">Preparation Isolation</h3>
              <p className="text-zinc-500 font-medium">Studying 10 hours alone is mentally draining. Without a mirror to your effort, burnout isn't a possibility—it's a certainty.</p>
            </div>
            <div className="p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:border-amber-500/30 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-500 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 italic">The Visibility Gap</h3>
              <p className="text-zinc-500 font-medium">Excel sheets are boring. Apps are distracting. If your work isn't quantified, it's easily dismissed by mentors, parents, and yourself.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The System: Friction-Free */}
      <section className="py-24 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1">
              <div className="inline-block px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full">The Protocol</div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
                TRACKING AS <br />
                <span className="italic text-zinc-400">INVISIBLE AS AIR.</span>
              </h2>
              <div className="space-y-10">
                <SystemPoint
                  icon={MessageSquare}
                  title="WhatsApp-Native Intelligence"
                  desc="No apps. No distractions (Reels/Shorts). Discipline lives where you already chat. Zero friction, 100% adherence."
                />
                <SystemPoint
                  icon={BrainCircuit}
                  title="NLP AI Log Processor"
                  desc="Just text: 'Subject – Topic – Duration'. Example: 'Polity – DPSP – 2 hours'. In 5 seconds, our AI maps it to your syllabus, calculates Mastery Points, and updates your Dashboard."
                />
                <SystemPoint
                  icon={Zap}
                  title="Progressive Planning Cycle"
                  desc="07:00 IST Morning Delta, 21:30 IST Evening Nudges, and the 23:00 IST Sunday Reality Report. Collaborative target setting every Sunday night."
                />
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="absolute -inset-10 bg-primary/20 blur-[120px] opacity-20 rounded-full animate-pulse"></div>
              <WhatsAppMock />
            </div>
          </div>
        </div>
      </section>

      {/* Discipline Elite: The Centerpiece */}
      <section id="elite-features" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 border border-primary/30 rounded-full">
              <Sparkles className="w-4 h-4 fill-primary" /> DISCIPLINE ELITE
            </div>
            <h2 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-tight">
              THE IDENTITY OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-200 to-blue-500 text-glow">
                A TOPPER.
              </span>
            </h2>
            <p className="text-zinc-500 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
              Join the Top 1%. Step into a high-fidelity glassmorphism world where your hard work is visualized, quantified, and validated.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-16">
              <EliteHook
                index="01"
                icon={Globe}
                title="Your Digital Status (Vanity URL)"
                desc="Owner of discipline.ai/p/aditya. A high-fidelity dashboard to share with mentors, parents, or your future self. Your data, your legacy."
                color="border-primary/40 text-primary"
              />
              <EliteHook
                index="02"
                icon={LineChart}
                title="12-Week Prep Velocity"
                desc="High-resolution bar charts tracking study speed. When you see 12 weeks of consistent 70-hour peaks, the exam becomes a formality, not a fear."
                color="border-blue-500/40 text-blue-400"
              />
              <EliteHook
                index="03"
                icon={Trophy}
                title="Milestone Gallery"
                desc="Visualize your growth. From 'Consistency King' to '1000-Hour Club', document the persistence that defines your journey."
                color="border-amber-500/40 text-amber-500"
              />
            </div>
            <div className="relative group">
              <div className="absolute -inset-10 bg-primary/30 blur-[120px] opacity-15 rounded-full group-hover:opacity-25 transition-opacity"></div>
              <ElitePreview />
            </div>
          </div>

          <MorningSurprise />
        </div>
      </section>

      {/* Stats Table Section */}
      <Stats />

      {/* Pricing: The Close */}
      <section className="py-32 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">INVEST IN YOUR <br /><span className="text-primary italic">TOPPER IDENTITY.</span></h2>
            <p className="text-zinc-400 font-medium text-lg">Choose your level of edge. Most Elite spots are limited.</p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <PricingCard
              title={siteConfig.pricing.standard.name}
              price={siteConfig.pricing.standard.amount}
              originalAmount={siteConfig.pricing.standard.originalAmount}
              features={siteConfig.pricing.standard.features}
              btnText="START FREE TRIAL"
            />
            <PricingCard
              title={siteConfig.pricing.elite.name}
              price={siteConfig.pricing.elite.amount}
              originalAmount={siteConfig.pricing.elite.originalAmount}
              isElite
              features={siteConfig.pricing.elite.features}
              btnText="STEP INTO THE 1%"
            />
          </div>

          <div className="mt-24 text-center">
            <p className="text-zinc-600 text-sm max-w-2xl mx-auto italic font-medium leading-relaxed">
              "DISCIPLINE.AI is not a tool; it's a Digital Mentor. It ensures that by the time exam day arrives, you don't just 'feel' ready—you have the data to know you are ready."
            </p>
          </div>
        </div>
      </section>

      {/* Verticals: Diversification */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 text-white/20 font-black tracking-[1em] uppercase text-xs">Specialized Domains</div>
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              <VerticalCard vertical={VERTICALS.UPSC} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: Irresistible */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-primary/20 opacity-30"></div>
        <div className="absolute inset-0 bg-grid-white opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
            14 DAYS FREE <br />
            <span className="text-primary italic">ELITE TRIAL.</span>
          </h2>
          <p className="text-2xl text-zinc-400 mb-12 font-medium">Free version available for lifetime. No credit card. Just results.</p>
          <Link
            href={siteConfig.links.whatsapp}
            className="inline-flex items-center justify-center px-16 py-6 text-2xl font-black text-black bg-primary rounded-3xl hover:bg-cyan-400 transition-all shadow-2xl hover:scale-110 active:scale-95 transform duration-300"
          >
            START ON WHATSAPP
          </Link>
          <p className="mt-8 text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Setup in 30 seconds</p>
        </div>
      </section>
    </div >
  );
}

function SystemPoint({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex gap-6 group">
      <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-primary/40 transition-all">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div>
        <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
        <p className="text-zinc-500 font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function EliteHook({ index, icon: Icon, title, desc, color }: { index: string, icon: any, title: string, desc: string, color: string }) {
  return (
    <div className="relative pl-16 group">
      <div className={`absolute left-0 top-0 w-12 h-12 rounded-xl border flex items-center justify-center font-black ${color} group-hover:scale-110 transition-transform`}>
        <span className="absolute -top-3 -left-3 text-[10px] font-black opacity-20 italic">{index}</span>
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">{title}</h4>
      <p className="text-zinc-500 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function PricingCard({ title, price, originalAmount, features, btnText, isElite = false }: { title: string, price: string, originalAmount?: string, features: string[], btnText: string, isElite?: boolean }) {
  return (
    <div className={`p-10 rounded-[2.5rem] flex flex-col relative transition-all duration-500 ${isElite
      ? "bg-black border border-primary/50 scale-110 z-20 shadow-[0_0_80px_-20px_rgba(6,182,212,0.4)]"
      : "bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900/50"
      }`}>
      {isElite && (
        <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-black text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] shadow-glow">MOST ELITE</div>
      )}
      <h3 className={`text-2xl font-black mb-2 ${isElite ? "text-primary" : "text-white"}`}>{title}</h3>
      <div className="flex items-baseline mb-8">
        <span className="text-5xl font-black text-white">{price}</span>
        {originalAmount && (
          <span className="text-2xl font-bold text-zinc-500 line-through decoration-red-500/80 decoration-2 ml-3 opacity-60">
            {originalAmount}
          </span>
        )}
        <span className="text-zinc-500 ml-2 font-bold uppercase tracking-widest text-[10px]">/mo</span>
      </div>
      <ul className="space-y-5 mb-12 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center text-sm font-bold text-zinc-300">
            <Check className={`w-5 h-5 mr-3 shrink-0 ${isElite ? "text-primary" : "text-zinc-700"}`} />
            {f}
          </li>
        ))}
      </ul>
      <Link
        href={siteConfig.links.whatsapp}
        className={`block w-full py-5 rounded-2xl text-center font-black text-sm tracking-widest uppercase transition-all ${isElite
          ? "bg-primary text-black shadow-glow hover:bg-cyan-400"
          : "border border-zinc-700 text-white hover:bg-zinc-800"
          }`}
      >
        {btnText}
      </Link>
    </div>
  );
}

function VerticalCard({ vertical }: { vertical: any }) {
  return (
    <Link
      href={vertical.href}
      className="group relative p-1 leading-none rounded-3xl"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl blur-sm" />
      <div className="relative p-8 bg-zinc-900 rounded-[1.4rem] h-full border border-white/5">
        <h3 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">{vertical.name}</h3>
        <p className="text-zinc-500 font-bold text-sm mb-8 leading-tight h-10">{vertical.description}</p>
        <div className="flex items-center text-primary font-black text-xs uppercase tracking-widest italic group-hover:translate-x-2 transition-transform">
          EXPLORE PROTOCOL <ArrowRight className="ml-2 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
