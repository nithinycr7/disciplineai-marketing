import { siteConfig } from "@/config/site";
import { Mail, MessageCircle, Twitter, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen bg-black pt-24 pb-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>

                <p className="text-zinc-400 text-lg mb-12">
                    Have questions or need support? We're here to help you stay on track.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <ContactCard
                        icon={Mail}
                        title="Email"
                        value={siteConfig.contact.email}
                        href={`mailto:${siteConfig.contact.email}`}
                    />
                    <ContactCard
                        icon={MessageCircle}
                        title="WhatsApp"
                        value="WhatsApp Support"
                        href={siteConfig.links.whatsapp}
                    />
                    <ContactCard
                        icon={Twitter}
                        title="Twitter"
                        value="@discipline_ai"
                        href={siteConfig.links.twitter}
                    />
                    <ContactCard
                        icon={MapPin}
                        title="Location"
                        value="Hyderabad, India"
                        href="#"
                    />
                </div>

                <div className="bg-zinc-950 border border-white/5 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-4">Merchant Information</h2>
                    <div className="space-y-4 text-zinc-400">
                        <p><strong>Legal Name:</strong> DISCIPLINE AI CLUB</p>
                        <p><strong>Phone:</strong> +91 6309873325</p>
                        <p><strong>Email:</strong> support@discipline-ai.in</p>
                        <p><strong>Registered Address:</strong> Hyderabad, Telangana, India - 500032</p>
                        <p><strong>Operational Address:</strong> Hyderabad, Telangana, India - 500032</p>
                    </div>
                </div>

                <section className="border-t border-white/10 pt-8 mt-12 text-center text-zinc-500">
                    <p>Response time: Usually within 24 hours.</p>
                </section>
            </div>
        </div>
    );
}

function ContactCard({ icon: Icon, title, value, href }: { icon: any, title: string, value: string, href: string }) {
    return (
        <a
            href={href}
            className="p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/50 transition-all group"
        >
            <div className="w-12 h-12 rounded-xl bg-zinc-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-white font-bold mb-1">{title}</h3>
            <p className="text-zinc-400 text-sm">{value}</p>
        </a>
    );
}
