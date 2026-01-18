import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "What is DISCIPLINE.AI? | The Strategic Reality Check",
    description: "DISCIPLINE.AI is not a study planner. It is an AI-powered discipline portfolio that measures your actual study output, syllabus coverage, and consistency.",
};

export default function WhatIsDisciplinePage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-12">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        WHAT IS <span className="text-primary">DISCIPLINE.AI?</span>
                    </h1>
                    <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                        The Strategic Reality Check for Competitive Exams.
                    </p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p>
                        Competitive exams like UPSC, NEET, and JEE are wars of attrition. They are not won by who mimics a टॉपर (Topper) the best; they are won by who survives the marathon with the most consistent, verifiable output.
                    </p>
                    <p>
                        Most aspirants live in the <b>"Fog of War"</b>. They confuse <i>busyness</i> with <i>progress</i>. They study for 10 hours but cannot quantify what they actually achieved.
                    </p>
                    <h3>We Solve The "Productivity Illusion"</h3>
                    <p>
                        <b>DISCIPLINE.AI</b> is a WhatsApp-native intelligence system that pierces this fog. It is <b>not a chatbot</b> that gives you motivation. It is <b>not a coach</b> that teaches you Polity.
                    </p>
                    <p>
                        It is a <b>Mirror</b>.
                    </p>
                    <p>
                        You simply log your study sessions on WhatsApp (e.g., "Polity – DPSP – 2 hours"). Our proprietary NLP engine analyzes this relative to your exam's syllabus (UPSC/NEET/JEE) and builds a live <b>Discipline Portfolio</b>.
                    </p>
                    <h3>Key Capabilities</h3>
                    <ul>
                        <li><b>Audit Trail:</b> A permanent, unforgeable record of your effort.</li>
                        <li><b>Syllabus Heatmap:</b> Visual proof of what you have covered vs. what you are ignoring.</li>
                        <li><b>Study Velocity:</b> Tracking your hours-per-week trend line to predict burnout or peak performance.</li>
                    </ul>
                </div>

                <div className="pt-10">
                    <Link
                        href={siteConfig.links.whatsapp}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-black text-black bg-primary rounded-2xl hover:bg-cyan-400 transition-all"
                    >
                        START YOUR AUDIT <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
