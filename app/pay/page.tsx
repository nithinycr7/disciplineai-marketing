"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

declare global {
    interface Window {
        Razorpay: any;
    }
}

function PayPageContent() {
    const searchParams = useSearchParams();
    const sid = searchParams.get("sid");

    useEffect(() => {
        if (!sid || !sid.startsWith("sub_")) {
            alert("Invalid or missing subscription id");
            return;
        }

        const loadAndPay = async () => {
            // Load Razorpay script
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.async = true;

            script.onload = async () => {
                const res = await fetch(
                    `https://discipline-ai-vmachsds5q-el.a.run.app/api/checkout-options?sid=${sid}`
                );
                const options = await res.json();

                if (options.error) {
                    alert(options.error);
                    return;
                }

                const rzp = new window.Razorpay(options);
                rzp.open();
            };

            document.body.appendChild(script);
        };

        loadAndPay();
    }, [sid]);

    return (
        <div style={{ minHeight: "100vh", background: "#0b1220", color: "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ maxWidth: 520, padding: 24, background: "#111827", borderRadius: 16 }}>
                <h1 style={{ marginBottom: 8 }}>DISCIPLINE.AI</h1>
                <p>Opening secure payment…</p>
                <p style={{ fontSize: 13, color: "#9ca3af" }}>
                    If the popup doesn’t open, please ensure popups are allowed.
                </p>
            </div>
        </div>
    );
}

export default function PayPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PayPageContent />
        </Suspense>
    );
}
