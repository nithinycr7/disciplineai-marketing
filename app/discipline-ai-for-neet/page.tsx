import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "DISCIPLINE.AI for NEET | Physics, Chemistry, Biology Tracker",
    description: "Maximize your NEET rank with Discipline AI. Track study hours for Physics, Chemistry, and Biology. Identify weak spots before the exam.",
};

export default function NeetPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-12">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        DISCIPLINE.AI FOR <span className="text-primary">NEET.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                        Precision tracking for Medical Aspirants.
                    </p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p>
                        NEET is a game of speed and accuracy. You cannot afford to leave any chapter of NCERT Biology unturned, nor can you ignore Physics numericals.
                    </p>
                    <h3>Biology vs. Physics Balance</h3>
                    <p>
                        A common trap for NEET aspirants is over-studying Biology (because it feels safe) and under-studying Physics. <b>Discipline AI</b> acts as an impartial auditor.
                    </p>
                    <p>
                        If your portfolio shows 80% Biology hours and only 10% Physics, our AI Insight engine will flag this imbalance immediately. You correct the course <i>before</i> the mock test, not after.
                    </p>
                    <h3>WhatsApp Study Logs</h3>
                    <p>
                        Just text: <code>"Physics - Rotational Motion - 90 mins"</code>. We handle the rest. No complex apps to distract you.
                    </p>
                </div>

                <div className="pt-10">
                    <Link
                        href={siteConfig.links.whatsapp}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-black text-black bg-primary rounded-2xl hover:bg-cyan-400 transition-all"
                    >
                        START NEET TRACKING <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
