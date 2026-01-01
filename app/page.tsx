import Link from "next/link";
import { ArrowRight, Check, Zap, BarChart, MessageSquare } from "lucide-react";
import { WhatsAppMock } from "@/components/WhatsAppMock";
import { Stats } from "@/components/Stats";
import { siteConfig, VERTICALS } from "@/config/site";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 mb-6 backdrop-blur-xl">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Now available for UPSC, NEET & Fitness
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                Discipline, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-200">
                  delivered on WhatsApp.
                </span>
              </h1>
              <p className="text-xl text-zinc-400 mb-8 max-w-lg leading-relaxed">
                Log in 30 seconds. Get nudged. Stay consistent.
                Receive weekly reality reports straight to your chat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={siteConfig.links.whatsapp}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-primary rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]"
                >
                  Start on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/10 bg-white/5 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  See how it works
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-4 text-sm text-zinc-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-xs">U{i}</div>
                  ))}
                </div>
                <p>Trusted by serious aspirants</p>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="transform scale-90 md:scale-100">
                <WhatsAppMock />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">No App to Install. Just WhatsApp.</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We remove friction. You don't need another app icon cluttering your screen.
              Discipline lives where you chat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "1. We Nudge You",
                desc: "Receive calm, timely nudges to plan your day or log your progress. Customized to your schedule."
              },
              {
                icon: Zap,
                title: "2. You Log in Seconds",
                desc: "Just reply. '2h Polity', 'Gym 45m'. Our AI understands natural language and logs it instantly."
              },
              {
                icon: BarChart,
                title: "3. Weekly Reality Report",
                desc: "Every Sunday, get a brutally honest report card of your week. Consistency score, time tracking, and insights."
              }
            ].map((step, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-primary/20 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Discipline</h2>
            <p className="text-zinc-400">Tailored protocols for your specific goal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: VERTICALS.UPSC.name,
                desc: VERTICALS.UPSC.description,
                href: VERTICALS.UPSC.href,
                features: ["Syllabus tracking", "Revision logs", "Study streak"]
              },
              {
                title: VERTICALS.NEET.name,
                desc: VERTICALS.NEET.description,
                href: VERTICALS.NEET.href,
                features: ["PCB Subject logging", "Test score tracking", "Daily loop"]
              },
              {
                title: VERTICALS.FITNESS.name,
                desc: VERTICALS.FITNESS.description,
                href: VERTICALS.FITNESS.href,
                features: ["Workout log", "Diet adherence", "Body metrics"]
              }
            ].map((v, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col hover:bg-zinc-800/80 transition-colors">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">{v.title}</h3>
                  <p className="text-zinc-400 mt-2 text-sm h-10">{v.desc}</p>
                </div>
                <ul className="mb-8 space-y-3">
                  {v.features.map((f, j) => (
                    <li key={j} className="flex items-center text-sm text-zinc-300">
                      <Check className="w-4 h-4 mr-2 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link href={v.href} className="flex items-center text-primary font-medium hover:underline">
                    Explore {v.title} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
            <p className="text-zinc-400">Invest in your consistency. Less than the cost of a coffee.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter */}
            <div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">{siteConfig.pricing.starter.amount}</span>
                <span className="text-zinc-500 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-zinc-300 text-sm"><Check className="w-4 h-4 mr-2 text-zinc-500" /> Daily Logging</li>
                <li className="flex items-center text-zinc-300 text-sm"><Check className="w-4 h-4 mr-2 text-zinc-500" /> Basic Reports</li>
                <li className="flex items-center text-zinc-300 text-sm"><Check className="w-4 h-4 mr-2 text-zinc-500" /> 7 Day Trial</li>
              </ul>
              <Link href={siteConfig.links.whatsapp} className="block w-full py-3 rounded-xl border border-zinc-700 text-center text-white hover:bg-zinc-800 transition-colors">
                Start Trial
              </Link>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-3xl bg-zinc-900 border border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
              <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-white">{siteConfig.pricing.pro.amount}</span>
                <span className="text-zinc-500 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-white text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> Everything in Starter</li>
                <li className="flex items-center text-white text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> Deep Analytics</li>
                <li className="flex items-center text-white text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> Priority AI Response</li>
                <li className="flex items-center text-white text-sm"><Check className="w-4 h-4 mr-2 text-primary" /> Accountability Partner</li>
              </ul>
              <Link href={siteConfig.links.whatsapp} className="block w-full py-3 rounded-xl bg-primary text-center text-black font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-primary/20">
                Get Pro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Is this a mobile app I need to install?", a: "No. Discipline.AI works entirely within WhatsApp. You just chat with our official number." },
              { q: "Do you provide study content?", a: "No. We focus purely on tracking, accountability, and discipline. We don't distract you with more content." },
              { q: "How does the tracking work?", a: "You simply message us what you did. 'Read History for 2 hours'. Our AI parses it and adds it to your structured log." },
              { q: "Can I cancel anytime?", a: "Yes. You can cancel your subscription instantly. No questions asked." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-zinc-800 pb-6">
                <h3 className="text-lg font-medium text-white mb-3">{faq.q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to get serious?</h2>
          <p className="text-xl text-zinc-400 mb-10">
            7 days free trial. No credit card required to start.
          </p>
          <Link
            href={siteConfig.links.whatsapp}
            className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-black bg-primary rounded-full hover:bg-cyan-400 transition-all shadow-xl hover:scale-105 transform duration-200"
          >
            Start Your Trial on WhatsApp
          </Link>
        </div>
      </section>
    </div>
  );
}
