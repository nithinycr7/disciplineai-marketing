import Link from "next/link";
import { ArrowRight, Check, Dumbbell, Flame, Utensils } from "lucide-react";
import { siteConfig } from "@/config/site";
import { WhatsAppMock } from "@/components/WhatsAppMock";

export default function FitnessPage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            {/* Hero */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-red-500 bg-red-500/10 rounded-full">
                            For High Performers
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Build the body. <span className="text-primary">Keep the habit</span>.
                        </h1>
                        <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                            Consistency &gt; Motivation. Log your workouts, diet streaks, and weight.
                            Get held accountable by AI.
                        </p>
                        <Link
                            href={siteConfig.links.whatsapp}
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white rounded-full hover:bg-zinc-200 transition-all"
                        >
                            Start Fitness Tracking <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500/20 blur-3xl -z-10 rounded-full opacity-50"></div>
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
                            <Dumbbell className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Workout Logs</h3>
                            <p className="text-zinc-400">"Push day: Bench 80kg, Squat 100kg". We track your volume and consistency.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
                            <Utensils className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Diet Adherence</h3>
                            <p className="text-zinc-400">Just reply YES/NO to "Did you hit your macros?". Simple binary accountability.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
                            <Flame className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Streak Protection</h3>
                            <p className="text-zinc-400">Don't break the chain. We remind you if you're about to miss a workout.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Fitness is 100% Mental.</h2>
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
