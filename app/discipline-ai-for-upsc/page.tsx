import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "DISCIPLINE.AI for UPSC | AI-Powered Syllabus Tracking",
    description: "Track your UPSC preparation with Discipline AI. Measure GS1, GS2, GS3, GS4 and Optional syllabus coverage automatically via WhatsApp.",
};

export default function UpscPage() {
    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-12">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        DISCIPLINE.AI FOR <span className="text-primary">UPSC.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 font-medium leading-relaxed">
                        The only tool that turns the vast UPSC syllabus into measurable data.
                    </p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p>
                        UPSC is known as the "Mother of All Exams" because of its syllabus depth. The biggest risk for a UPSC aspirant is <b>Uneven Preparation</b>—becoming a master of Polity while failing Economics, or ignoring Ethics until the last month.
                    </p>
                    <h3>How It Works for UPSC</h3>
                    <p>
                        <b>Discipline AI</b> has the entire UPSC Civil Services syllabus mapped—from GS1 Art & Culture to GS4 Case Studies.
                    </p>
                    <p>
                        When you log: <code>"GS2 - Governance - 3 hours"</code>, our system:
                    </p>
                    <ol>
                        <li>Updates your GS2 Topic Coverage stats.</li>
                        <li>Increases your overall "Mains Readiness" score.</li>
                        <li>Nudges you if you haven't touched GS3 in 2 weeks.</li>
                    </ol>
                    <h3>Why "Discipline AI UPSC" is the Standard</h3>
                    <p>
                        Toppers document their journey. Average aspirants just "study". By building a <b>Discipline Portfolio</b>, you create evidence of your hard work. This psychological feedback loop is critical for the 1-2 year marathon.
                    </p>
                </div>

                <div className="pt-10">
                    <Link
                        href={siteConfig.links.whatsapp}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-black text-black bg-primary rounded-2xl hover:bg-cyan-400 transition-all"
                    >
                        START UPSC TRACKING <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
