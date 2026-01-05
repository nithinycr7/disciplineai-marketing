export const siteConfig = {
    name: "DISCIPLINE.AI",
    description: "Discipline, delivered on WhatsApp. Log in 30 seconds. Get nudged. Stay consistent.",
    url: "https://discipline.ai", // Placeholder
    ogImage: "https://discipline.ai/og.jpg", // Placeholder
    links: {
        whatsapp: "https://wa.me/916309873325?text=START",
        twitter: "https://twitter.com/discipline_ai",
    },
    contact: {
        email: "support@discipline-ai.in",
    },
    pricing: {
        standard: {
            name: "Standard",
            amount: "₹149",
            period: "month",
            features: ["7-Day Free Trial", "Unlimited WhatsApp tracking", "Weekly reports"],
        },
        elite: {
            name: "Elite",
            amount: "₹299",
            period: "month",
            features: ["Standard + Custom Public Portfolio", "Priority AI Insights"],
        }
    }
};

export const VERTICALS = {
    UPSC: {
        name: "UPSC",
        description: "For serious aspirants. No content, no distractions.",
        href: "/upsc",
    },
    NEET: {
        name: "NEET",
        description: "Physics, Chemistry, Biology. Daily accountability loop.",
        href: "/neet",
    },
    IITJEE: {
        name: "IIT-JEE",
        description: "Physics, Chemistry, Maths. Master the grind for the Top 1%.",
        href: "/iit-jee",
    }
};
