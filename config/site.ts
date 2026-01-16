export const siteConfig = {
    name: "DISCIPLINE.AI",
    description: "Discipline, delivered on WhatsApp. Log in 30 seconds. Get nudged. Stay consistent.",
    url: "https://www.discipline-ai.in",
    ogImage: "https://discipline.ai/og.jpg", // Placeholder
    links: {
        whatsapp: "https://wa.me/917416585225?text=START",
        twitter: "https://twitter.com/discipline_ai",
    },
    contact: {
        email: "support@discipline-ai.in",
    },
    pricing: {
        standard: {
            name: "Standard",
            amount: "₹99",
            period: "month",
            features: ["WhatsApp-Based Study Tracking", "Learning Portfolio with Snapshots", "Weekly Progress Reports"],
        },
        elite: {
            name: "Elite",
            amount: "₹149",
            period: "month",
            features: ["Everything in Standard", "AI-Powered Intelligence Insights", "Personalized Test Analytics", "Achievement Milestones & Badges"],
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
