"use client";

import { useEffect, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PayContent() {
    const searchParams = useSearchParams();
    const sid = searchParams.get("sid");

    useEffect(() => {
        if (typeof window === "undefined") return;

        const loadRazorpay = () => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.async = true;
            script.onload = () => startPayment();
            document.body.appendChild(script);
        };

        const startPayment = async () => {
            if (!sid || !sid.startsWith("sub_")) {
                alert("Invalid or missing subscription id");
                return;
            }

            try {
                const res = await fetch(
                    `https://discipline-ai-vmachsds5q-el.a.run.app/api/checkout-options?sid=${encodeURIComponent(sid)}`
                );
                const opts = await res.json();

                if (opts.error) {
                    alert(opts.error);
                    return;
                }

                const rzp = new (window as any).Razorpay(opts);
                rzp.open();
            } catch (err) {
                alert("Network error. Please check your connection.");
            }
        };

        loadRazorpay();
    }, [sid]);

    return (
        <div style={{
            minHeight: "100vh",
            background: "#000000",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Inter, system-ui, sans-serif"
        }}>
            <div style={{
                maxWidth: 440,
                padding: 40,
                background: "#09090b",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 32,
                position: "relative"
            }}>
                <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "4px 12px",
                    background: "rgba(6, 182, 212, 0.1)",
                    border: "1px solid rgba(6, 182, 212, 0.2)",
                    borderRadius: 100,
                    color: "#06b6d4",
                    fontSize: 10,
                    fontWeight: 900,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    marginBottom: 24
                }}>
                    Secure Protocol Active
                </div>

                <h1 style={{ margin: "0 0 8px", fontWeight: 900, letterSpacing: "-0.05em", fontSize: 28 }}>
                    DISCIPLINE<span style={{ color: "#06b6d4", fontStyle: "italic" }}>.AI</span>
                </h1>

                <p style={{ color: "#a1a1aa", fontSize: 15, marginBottom: 32 }}>
                    Opening secure payment gateway...
                </p>

                <button
                    onClick={() => window.location.reload()}
                    style={{
                        width: "100%",
                        padding: 16,
                        border: 0,
                        borderRadius: 16,
                        background: "#06b6d4",
                        color: "#000000",
                        fontWeight: 900,
                        fontSize: 14,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        cursor: "pointer"
                    }}
                >
                    Retry Payment
                </button>

                <p style={{ marginTop: 24, fontSize: 12, textAlign: "center", color: "#52525b", marginBottom: 0 }}>
                    Encrypted by Razorpay • Please allow popups
                </p>
            </div>
        </div>
    );
}

export default function PayPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PayContent />
        </Suspense>
    );
}
