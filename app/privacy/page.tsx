import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-black pt-24 pb-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-zinc-400 mb-8">
                        Effective Date: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="text-zinc-400">
                            Discipline.AI ("we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, and store your data when you use our WhatsApp-based tracking service. By using our service, you agree to the terms outlined below.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                        <p className="text-zinc-400 mb-2">We collect the following information:</p>
                        <ul className="list-disc pl-5 text-zinc-400 space-y-2">
                            <li><strong>Phone Number:</strong> Your WhatsApp phone number is used as your unique identifier.</li>
                            <li><strong>Messages:</strong> The text and media messages you send to our WhatsApp bot for the purpose of logging your activities.</li>
                            <li><strong>Usage Data:</strong> Analytics regarding your interaction frequency, subscription status, and performance metrics (e.g., study hours, consistency score).</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
                        <p className="text-zinc-400 mb-2">Your data is used strictly for:</p>
                        <ul className="list-disc pl-5 text-zinc-400 space-y-2">
                            <li>Logging your daily activities and generating structured reports.</li>
                            <li>Sending accountability nudges and weekly summaries.</li>
                            <li>Improving our AI model's understanding of different logging formats.</li>
                            <li>Managing your subscription and payments.</li>
                        </ul>
                        <p className="text-zinc-400 mt-4">
                            <strong>We do not sell your personal data to third parties.</strong>
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Data Storage and Retention</h2>
                        <ul className="list-disc pl-5 text-zinc-400 space-y-2">
                            <li><strong>Storage:</strong> Your data is securely stored in Google Cloud Firestore (US/Global regions).</li>
                            <li><strong>Retention:</strong> We retain your logs for as long as your account is active to provide historical reports. You may request data deletion at any time.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Processors</h2>
                        <p className="text-zinc-400 mb-2">We use trusted third-party services to operate:</p>
                        <ul className="list-disc pl-5 text-zinc-400 space-y-2">
                            <li><strong>AiSensy / Meta directly:</strong> To send and receive WhatsApp messages.</li>
                            <li><strong>OpenAI:</strong> To process and normalize your free-form text logs. Data sent to OpenAI is not used for training their public models by default for API users (per OpenAI policy).</li>
                            <li><strong>Payment Processors:</strong> We use secure payment gateways (e.g., Razorpay/Stripe) handling billing. We do not store your credit card details.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                        <p className="text-zinc-400">
                            You have the right to request access to your data or request complete deletion of your account and associated data. To exercise these rights, please contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a>.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">7. Security</h2>
                        <p className="text-zinc-400">
                            We implement reasonable security measures to protect your information. However, no method of transmission over WhatsApp or the Internet is 100% secure.
                        </p>
                    </section>

                    <section className="border-t border-white/10 pt-8 mt-12">
                        <p className="text-zinc-500 text-sm">
                            For any questions about this Privacy Policy, please contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-zinc-400 hover:text-white transition-colors">{siteConfig.contact.email}</a>.
                        </p>
                        <p className="text-zinc-500 text-sm mt-4">
                            By using Discipline.AI, you also agree to our <Link href="#" className="underline">Terms of Service</Link>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
