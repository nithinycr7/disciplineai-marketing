import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
    return (
        <footer className="bg-black/50 border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <span className="text-xl font-bold tracking-tighter text-white">
                            DISCIPLINE<span className="text-primary">.AI</span>
                        </span>
                        <p className="mt-2 text-sm text-gray-400">
                            Discipline, delivered on WhatsApp.
                        </p>
                    </div>

                    <div className="flex space-x-8">
                        <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href={`mailto:${siteConfig.contact.email}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                            Contact
                        </Link>
                        <Link href={siteConfig.links.whatsapp} className="text-sm text-gray-400 hover:text-white transition-colors">
                            WhatsApp
                        </Link>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Discipline AI. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">
                        By using the service you agree to our Terms.
                    </p>
                </div>
            </div>
        </footer>
    );
}
