import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Discipline AI vs. Coaching Institutes | The Truth",
    description: "Why Discipline AI is not a coaching platform. We measure the output that coaching institutes ignore. The difference between planning and execution.",
};

export default function VsCoachingPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-12">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        WE ARE NOT A <span className="text-primary">COACHING INSTITUTE.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                        Coaching sells you the map. We walk the path with you.
                    </p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <h3>The Difference</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 not-prose">
                        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <h4 className="text-xl font-bold text-white mb-2">Coaching / Study Planners</h4>
                            <ul className="space-y-2 text-zinc-400">
                                <li>❌ Focus on "What to study"</li>
                                <li>❌ Plans based on ideal scenarios</li>
                                <li>❌ Passive content consumption</li>
                                <li>❌ No accountability if you fail</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-zinc-900 border-2 border-primary/20">
                            <h4 className="text-xl font-bold text-primary mb-2">DISCIPLINE.AI</h4>
                            <ul className="space-y-2 text-white/90">
                                <li>✅ Focus on "What you actually studied"</li>
                                <li>✅ Audits based on reality</li>
                                <li>✅ Active output measurement</li>
                                <li>✅ Daily mirrors to force correction</li>
                            </ul>
                        </div>
                    </div>

                    <p>
                        Most aspirants buy a course, watch 3 videos, and feel productive. That is dopamine, not discipline.
                    </p>
                    <p>
                        <b>Discipline AI</b> integrates with your existing coaching. Whether you go to Vajiram, Vision, or Allen—we don't care. We simply track if you are doing the self-study required to actually absorb what they teach.
                    </p>
                </div>

                <div className="pt-10">
                    <Link
                        href={siteConfig.links.whatsapp}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-black text-black bg-primary rounded-2xl hover:bg-cyan-400 transition-all"
                    >
                        GET THE REALITY CHECK <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
