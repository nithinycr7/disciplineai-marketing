import { siteConfig } from "@/config/site";

export default function Refunds() {
    return (
        <div className="min-h-screen bg-black pt-24 pb-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white mb-8">Cancellation and Refunds</h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-zinc-400 mb-8">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Subscription Cancellation</h2>
                        <p className="text-zinc-400">
                            You may cancel your Discipline.AI subscription at any time. To cancel, you can send a message on WhatsApp or manage your subscription through the payment link provided during signup. Cancellation will take effect at the end of the current billing cycle.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Refund Policy</h2>
                        <p className="text-zinc-400">
                            Since Discipline.AI provides digital services with an immediate activation upon payment, we generally do not offer refunds once a billing cycle has started. However, we offer a 7-day free trial for new users to evaluate the service before they are charged.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Exceptions</h2>
                        <p className="text-zinc-400">
                            In exceptional cases, such as technical failures on our part that prevent you from using the service, we may issue a prorated refund at our discretion.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Duplicate Payments</h2>
                        <p className="text-zinc-400">
                            If you have been charged twice for the same billing cycle due to a technical error, please contact us immediately for a full refund of the duplicate amount.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">5. Contact for Refunds</h2>
                        <p className="text-zinc-400">
                            For any refund or cancellation queries, please email us at <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a>.
                        </p>
                    </section>

                    <section className="border-t border-white/10 pt-8 mt-12">
                        <p className="text-zinc-500 text-sm">
                            For any questions about our cancellation and refund policy, please contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-zinc-400 hover:text-white transition-colors">{siteConfig.contact.email}</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
