"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { ShieldCheck, Lock, Zap, ArrowRight, Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site";

function PaymentContent() {
    const searchParams = useSearchParams();
    const sid = searchParams.get("sid");
    const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
    const [errorMsg, setErrorMsg] = useState("");
    const API_BASE = "https://discipline-ai-vmachsds5q-el.a.run.app";

    const startPayment = async () => {
        if (!sid || !sid.startsWith("sub_")) {
            setStatus("error");
            setErrorMsg("Invalid or missing subscription session. Please try again from WhatsApp.");
            return;
        }

        try {
            const res = await fetch(`${API_BASE}/api/checkout-options?sid=${encodeURIComponent(sid)}`);
            const opts = await res.json();

            if (opts.error) {
                setStatus("error");
                setErrorMsg(opts.error);
                return;
            }

            const rzp = new (window as any).Razorpay({
                ...opts,
                modal: {
                    ondismiss: function () {
                        setStatus("ready");
                    }
                }
            });
            rzp.open();
            setStatus("ready");
        } catch (err) {
            setStatus("error");
            setErrorMsg("Failed to initialize secure checkout. Please check your connection.");
        }
    };

    useEffect(() => {
        // Wait for Razorpay script to be ready
        const timer = setTimeout(() => {
            if ((window as any).Razorpay) {
                startPayment();
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [sid]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-[480px] relative">
                {/* Decorative border glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-blue-500/50 to-primary/50 rounded-[2rem] blur opacity-25"></div>

                <div className="relative bg-zinc-950 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
                    <div className="flex justify-between items-start mb-10">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 border border-primary/20 rounded-full">
                                <Lock className="w-3 h-3" /> Secure Checkout
                            </div>
                            <h1 className="text-3xl font-black text-white tracking-tighter">
                                DISCIPLINE<span className="text-primary italic">.AI</span>
                            </h1>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center">
                            <Zap className="w-6 h-6 text-primary" />
                        </div>
                    </div>

                    {status === "loading" && (
                        <div className="py-12 text-center pointer-events-none">
                            <div className="relative inline-block">
                                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                                <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-primary" />
                            </div>
                            <p className="mt-6 text-zinc-400 font-medium">Initializing secure protocol...</p>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="py-8 text-center">
                            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck className="w-8 h-8 text-red-500" />
                            </div>
                            <p className="text-white font-bold mb-2">Checkout Interrupted</p>
                            <p className="text-zinc-500 text-sm mb-8">{errorMsg}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
                            >
                                Retry Connection
                            </button>
                        </div>
                    )}

                    {status === "ready" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-zinc-500 text-sm font-medium">Protocol Activation</span>
                                    <span className="text-primary text-xs font-black uppercase tracking-widest">Active</span>
                                </div>
                                <p className="text-zinc-300 text-sm leading-relaxed">
                                    Redirecting to secure payment gateway. If the window didn't open automatically, please use the manual trigger below.
                                </p>
                            </div>

                            <button
                                onClick={startPayment}
                                className="group w-full py-4 bg-primary text-black font-black rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)] active:scale-95"
                            >
                                PAY NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <div className="text-center pt-4">
                                <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Trusted Security Partners</p>
                                <div className="flex justify-center gap-6 opacity-30 grayscale contrast-125">
                                    {/* These are placeholders for payment logos style */}
                                    <div className="text-white font-bold text-xs">RAZORPAY</div>
                                    <div className="text-white font-bold text-xs">UPI</div>
                                    <div className="text-white font-bold text-xs">PCI DSS</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <p className="mt-8 text-center text-zinc-600 text-xs font-medium">
                    Payments are encrypted & secured by Razorpay. <br />
                    Approving within 5 minutes in your UPI app ensures zero delay.
                </p>
            </div>

            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                onLoad={() => {
                    if (status === "loading") {
                        startPayment();
                    }
                }}
            />
        </div>
    );
}

export default function PayPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-black">
                <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
        }>
            <PaymentContent />
        </Suspense>
    );
}
