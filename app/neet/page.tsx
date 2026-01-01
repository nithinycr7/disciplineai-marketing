import Link from "next/link";
import { ArrowRight, Check, Beaker, Activity, Timer } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppMock } from "@/components/WhatsAppMock";

export default function NEETPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            {/* Hero */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-green-500 bg-green-500/10 rounded-full">
                            For Future Doctors
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Cracking NEET is about <span className="text-primary">Practice</span>.
                        </h1>
                        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                            Track your Physics, Chemistry, and Biology practice hours.
                            Get insights on your weak subjects. Stay consistent till exam day.
                        </p>
                        <Link
                            href={siteConfig.links.whatsapp}
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white rounded-full hover:bg-zinc-200 transition-all"
                        >
                            Start NEET Tracking <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-green-500/20 blur-3xl -z-10 rounded-full opacity-50"></div>
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
                            <Beaker className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">PCB Breakdown</h3>
                            <p className="text-zinc-400">Log specific subjects. "Physics: Rotational Motion 2h". We track your actionable time.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
                            <Activity className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Practice vs Theory</h3>
                            <p className="text-zinc-400">Balance your time. Too much theory? We nudge you to solve more MCQs.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
                            <Timer className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Mock Test Logs</h3>
                            <p className="text-zinc-400">Log your mock test scores and analysis time. Watch your improvement curve.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Your White Coat Awaits.</h2>
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
