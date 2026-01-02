import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Zap, Twitter, Mail, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                <Zap className="w-5 h-5 text-black fill-current" />
                            </div>
                            <span className="text-xl font-black tracking-tighter text-white uppercase">
                                DISCIPLINE<span className="text-primary italic">.AI</span>
                            </span>
                        </Link>
                        <p className="text-zinc-500 max-w-sm mb-8 font-medium leading-relaxed">
                            The first AI-native protocol for serious aspirants. Transform your raw grit into an unbreakable identity.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href={siteConfig.links.twitter} icon={Twitter} />
                            <SocialLink href={`mailto:${siteConfig.contact.email}`} icon={Mail} />
                            <SocialLink href={siteConfig.links.whatsapp} icon={MessageCircle} />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6">Protocols</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/upsc" label="UPSC Topper" />
                            <FooterLink href="/neet" label="NEET Excellence" />
                            <FooterLink href="/iit-jee" label="IIT-JEE Protocol" />
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/privacy" label="Privacy Protocol" />
                            <FooterLink href="/terms" label="Terms of Merit" />
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">
                    <p>&copy; {new Date().getFullYear()} DISCIPLINE AI CLUB. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <span>MADE FOR THE 1%</span>
                        <span>POWERED BY GPT-4O</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, label }: { href: string, label: string }) {
    return (
        <li>
            <Link href={href} className="text-zinc-500 hover:text-primary transition-colors text-sm font-medium">
                {label}
            </Link>
        </li>
    );
}

function SocialLink({ href, icon: Icon }: { href: string, icon: any }) {
    return (
        <Link
            href={href}
            className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/50 transition-all hover:scale-110"
        >
            <Icon className="w-5 h-5" />
        </Link>
    );
}
