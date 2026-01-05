import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Terms() {
    return (
        <div className="min-h-screen bg-black pt-24 pb-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-zinc-400 mb-8">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-zinc-400">
                            Welcome to Discipline.AI. These Terms and Conditions govern your use of our website and WhatsApp-based tracking service. By accessing or using Discipline.AI, you agree to be bound by these terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                        <p className="text-zinc-400">
                            Discipline.AI provides an AI-powered study and habit tracking service via WhatsApp. Users log their activities through messages, and our system processes these logs to provide analytics, reports, and nudges.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                        <p className="text-zinc-400">
                            You are responsible for maintaining the confidentiality of your account and for all activities that occur under your WhatsApp number. You agree to use the service for lawful purposes only and in accordance with these terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Payment and Subscriptions</h2>
                        <p className="text-zinc-400">
                            Our services are offered on a subscription basis. By subscribing, you agree to pay the fees associated with your chosen plan. All payments are processed through secure third-party payment gateways.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                        <p className="text-zinc-400">
                            All content, features, and functionality of Discipline.AI, including but not limited to text, graphics, logos, and software, are the exclusive property of Discipline.AI and are protected by international copyright and trademark laws.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                        <p className="text-zinc-400">
                            Discipline.AI and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
                        <p className="text-zinc-400">
                            These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">8. Changes to Terms</h2>
                        <p className="text-zinc-400">
                            We reserve the right to modify or replace these terms at any time. We will provide notice of any significant changes by posting the new terms on this page.
                        </p>
                    </section>

                    <section className="border-t border-white/10 pt-8 mt-12">
                        <p className="text-zinc-500 text-sm">
                            For any questions about these Terms, please contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-zinc-400 hover:text-white transition-colors">{siteConfig.contact.email}</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
