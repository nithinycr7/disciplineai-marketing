import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, Lock, Share2 } from "lucide-react";

export const metadata = {
    title: "The Discipline Portfolio | Proof of Work for Aspirants",
    description: "Build a verifiable public portfolio of your study discipline. Impress mentors, parents, and yourself with data-backed proof of hard work.",
};

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-12">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        YOUR DISCIPLINE <span className="text-primary">PORTFOLIO.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                        Data doesn't lie. Your legacy, visualized.
                    </p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p>
                        In a world of cheap talk ("I studied 12 hours today"), the <b>Discipline Portfolio</b> is your verifiable proof of work.
                    </p>
                    <h3>What is it?</h3>
                    <p>
                        It is a live, shareable URL (e.g., <code>discipline.ai/p/yourname</code>) that updates in real-time as you log via WhatsApp.
                    </p>

                    <div className="my-10 p-8 bg-zinc-900/50 rounded-3xl border border-white/10">
                        <h4 className="text-white font-bold mb-4 flex items-center"><Lock className="w-5 h-5 mr-2 text-primary" /> What's Inside?</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-300">
                            <li className="flex items-center">🔹 <b>Velocity:</b> Weekly study hours trend</li>
                            <li className="flex items-center">🔹 <b>Consistency:</b> Streak counter & heatmaps</li>
                            <li className="flex items-center">🔹 <b>Syllabus:</b> Topic-wise coverage %</li>
                            <li className="flex items-center">🔹 <b>Audit Log:</b> Timestamped entries</li>
                        </ul>
                    </div>

                    <h3>Who is it for?</h3>
                    <ol>
                        <li><b>For You:</b> To see your own mirrored reality.</li>
                        <li><b>For Mentors:</b> Stop telling them you are working. Show them.</li>
                        <li><b>For Parents:</b> Give them peace of mind with data, not promises.</li>
                    </ol>
                </div>

                <div className="pt-10">
                    <Link
                        href={siteConfig.links.whatsapp}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-black text-black bg-primary rounded-2xl hover:bg-cyan-400 transition-all"
                    >
                        BUILD YOUR PORTFOLIO <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
