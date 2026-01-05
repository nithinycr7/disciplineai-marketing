import { siteConfig } from "@/config/site";

export default function Shipping() {
    return (
        <div className="min-h-screen bg-black pt-24 pb-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white mb-8">Shipping and Delivery Policy</h1>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p className="text-zinc-400 mb-8">
                        Last Updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">1. Digital Nature of Service</h2>
                        <p className="text-zinc-400">
                            Discipline.AI is a software-as-a-service (SaaS) platform provided entirely online. We do not ship any physical products.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">2. Delivery Process</h2>
                        <p className="text-zinc-400">
                            Upon successful payment and subscription, access to the Discipline.AI WhatsApp service and your personalized portfolio (for Elite users) is delivered electronically and immediately.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">3. Activation</h2>
                        <p className="text-zinc-400">
                            After your transaction is complete, you will receive an automated confirmation message on your registered WhatsApp number, and your service will be activated instantly.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">4. Support</h2>
                        <p className="text-zinc-400">
                            If you encounter any issues with the activation of your service, please contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">{siteConfig.contact.email}</a>.
                        </p>
                    </section>

                    <section className="border-t border-white/10 pt-8 mt-12">
                        <p className="text-zinc-500 text-sm">
                            For any questions about our shipping and delivery policy, please contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-zinc-400 hover:text-white transition-colors">{siteConfig.contact.email}</a>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
