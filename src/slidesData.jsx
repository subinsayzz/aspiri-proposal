import {
    Diamond, TrendingUp, Layers, Users, Zap, CheckCircle2,
    Rocket, Lock, CreditCard, Flag, Monitor, MessageCircle,
    BarChart3, Globe, Mail, Calendar, FileText, Bot, Star,
    Share2, Database, Code, Smartphone, Crown, Sparkles, Gem, HelpCircle, Video, Trophy, ShieldCheck, Gift
} from 'lucide-react';

// Custom icons to avoid redefining existing imports
const HeartIcon = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);
const ListIcon = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
);
const SignedIcon = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M16 8h.01" /><path d="M16 12h.01" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const AlertIcon = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
);

export const slides = [
    {
        id: 1,
        type: 'title',
        title: "ASPIRI BRAND LAUNCH",
        subtitle: "FRACTIONAL CMO ENGAGEMENT",
        tagline: "The Tiffany of Bespoke. Your Story. Your Craft. Your Sovereign Metal.",
        points: [
            "90-Day Vision Pilot",
            "The 'Infinite Atelier' Strategy",
            "Awareness & Brand Equity"
        ],
        icon: Diamond
    },
    {
        id: 2,
        type: 'comparison',
        title: "CONTEXT & INTENT",
        subtitle: "BUILDING THE 'TIFFANY' OF BESPOKE",
        mainIdea: "True luxury is not about inventory. It is about sovereignty.",
        col1Title: "Generic Retail Model",
        col1: [
            "Selling stock inventory ('Take it or leave it')",
            "Competing on making charges & gold rate",
            "Passive retail experience",
            "Customer buys a product, not a creation"
        ],
        col2Title: "The 'Infinite Atelier' Model",
        col2: [
            "Moat: 'Sovereign Configuration' (Metal, Stone, Design)",
            "Every piece is a blank canvas for the client",
            "Tiffany-tier brand equity & unboxing experience",
            "We don't sell products; we co-create legacies"
        ],
        conclusion: "A strategic pivot from 'selling jewellery' to 'curating personal art'.",
        icon: Crown
    },
    {
        id: 3,
        type: 'list',
        title: "ROLE & RESPONSIBILITY",
        subtitle: "CONSUMER BRAND ARCHITECTS",
        mainIdea: "We bring specialized D2C & Retail expertise to build Aspiri as a high-growth consumer asset.",
        points: [
            "Consumer Psychology: We decode 'why' the modern woman buys, engineering desire before she even sees the price.",
            "Brand Scalability: We don't just run campaigns; we build 'growth systems' designed for rapid market penetration.",
            "Commercial Creative Direction: Ensuring every visual asset is not just 'aesthetic', but a high-performance conversion tool.",
            "The 'Signal' Guardians: Protecting the brand from 'marketing noise' to ensure it remains the Sovereign Choice."
        ],
        footer: "Specialists in navigating high-ticket consumer brands from 'Launch' to 'Market Leadership'.",
        icon: Users
    },
    {
        id: 4,
        type: 'grid-cards',
        title: "SCOPE: STRATEGY & DIRECTION",
        subtitle: "PHASE 1 DELIVERABLES",
        items: [
            { title: "Brand & Bespoke Positioning", desc: "Defining Aspiri as the ultimate destination for 'Sovereign Customization'.", icon: Crown },
            { title: "The 'Atelier' Narrative", desc: "Crafting the story of 'Your Metal, Your Stone, Your Legacy'.", icon: FileText },
            { title: "Visual Identity", desc: "Guidance on color grading, photography, and the digital configurator aesthetic.", icon: Diamond },
            { title: "Configuration UX", desc: "Mapping the customer journey from 'Consultation' to 'Creation' to 'Unboxing'.", icon: Layers },
            { title: "The 'Hero' Film", desc: "A creative, high-impact launch film defining the Aspiri ethos. Executed with high creativity but lean production costs.", icon: Video },
            { title: "Campaign Hooks", desc: "Developing angles that champion individual expression over mass trends.", icon: Sparkles }
        ],
        note: "This foundation ensures we own the 'Customization' niche before anyone else.",
        icon: ListIcon
    },
    {
        id: 5,
        type: 'feature',
        title: "SCOPE: AWARENESS & CONTENT",
        subtitle: "PHASE 2 DELIVERABLES",
        mainIdea: "Creating a content engine that signals prestige.",
        features: [
            { title: "Monthly Content Calendar", desc: "Strategic themes for Instagram, LinkedIn, YouTube, and Press.", icon: Calendar },
            { title: "End-to-End Production", desc: "From moodboarding to on-set direction to final edits. We own the final output.", icon: Sparkles },
            { title: "Storytelling Pillars", desc: "Defining core themes: Legacy, Craftsmanship, The Aspiri Woman.", icon: HeartIcon },
            { title: "Review & Approval", desc: "Quality control on all creatives before they go live.", icon: CheckCircle2 },
            { title: "Cultural Alignment", desc: "Content strategy aligned with festivals and cultural moments.", icon: Globe },
            { title: "The 'Reveal' Ceremony", desc: "We don't just ship boxes; we design a cinematic opening experience. Packaging is optimized for the lens, ensuring every customer acquisition becomes organic marketing.", icon: Gift }
        ],
        mantra: "Every post must be an asset that builds brand equity.",
        icon: Layers
    },
    {
        id: 6,
        type: 'app-showcase',
        title: "POWERED BY GYMRUPT",
        subtitle: "THE GROWTH ENGINE",
        mainIdea: "We deploy our proprietary 'Gymrupt' software to fuel the launch infrastructure.",
        features: [
            { title: "AI Concierge", desc: "24/7 AI agent to handle VIP inquiries and book private viewings.", icon: Bot },
            { title: "Omnichannel CRM", desc: "Centralized view of every lead from IG, Website, and Walk-ins.", icon: Database },
            { title: "Review Automation", desc: "System to generate 5-star Google Reviews from happy clients.", icon: Star },
            { title: "Smart Nurture", desc: "Automated WhatsApp flows to keep Aspiri top-of-mind elegantly.", icon: MessageCircle },
            { title: "Data Analytics", desc: "Real-time dashboard to see which campaigns drive footfall.", icon: BarChart3 },
            { title: "Event Management", desc: "Digital RSVP and check-in system for launch events.", icon: Calendar }
        ],
        note: "Modern luxury requires modern infrastructure. This software is included.",
        icon: Zap
    },
    {
        id: 7,
        type: 'grid-cards',
        title: "LAUNCH CAMPAIGNS",
        subtitle: "TACTICAL & STRATEGIC ANGLES",
        items: [
            { title: "The 'Gold IQ' Quiz Funnel", desc: "A gamified ad campaign testing knowledge on gold/silver purity. High-converting ads where correct answers unlock entry into an exclusive 'Aspiri Luckydraw'. proven to build a massive high-intent database at low cost.", icon: HelpCircle },
            { title: "Cinematic Visuals (TVC & Shorts)", desc: "A dual-format production strategy: Broadcast-quality ad films for trust, spliced into high-tempo, trend-aware Reels & Shorts for virality. We capture the 'glint' that stops the scroll.", icon: Video },
            { title: "AI-Generated Editorial Content", desc: "Supplementing physical shoots with high-end Generative AI. We create aspirational, avant-garde imagery for the website and social grids that elevate the brand aesthetic without infinite production costs.", icon: Bot },
            { title: "The Golden Circle", desc: "Exclusive pre-launch access membership for 100 influential women. Scarcity-driven community building.", icon: Crown },
            { title: "The 'Aspiri Muse' Search", desc: "A city-wide hunt for the Face of Aspiri. Influencers create content to compete for a lucrative Annual Brand Contract. This 'fruitful' prize incentivizes hundreds of creators to post naturally, creating a massive Launch Day 'noise' event without individual negotiation.", icon: Trophy },
            { title: "The 'Story-to-Stone' Event", desc: "Couples submit their love story, and we use AI to generate a unique 'Bespoke Ring' concept based on their words. They share their design to win. High emotion, massive organic reach, zero media cost.", icon: HeartIcon }
        ],
        note: "Blending high-tech engagement (AI/Quiz) with the high-touch 'Sovereign' experience.",
        icon: Sparkles
    },
    {
        id: 8,
        type: 'list',
        title: "THE FIRST 30 DAYS",
        subtitle: "EXECUTION ROADMAP",
        mainIdea: "From signing the contract to full operational velocity. Here is exactly what happens next.",
        points: [
            "Week 1: The 'Deep Dive' Audit: We dismantle current assets, finalize the 'Atelier' positioning, and lock the 90-day targets.",
            "Week 2: Vendor & Tech Deployment: We onboard the production teams, install the CRM/AI stack, and set up the 'War Room' (A dedicated, high-speed Slack/WhatsApp channel for real-time decisions).",
            "Week 3: The Creative Sprint: Scripts, moodboards, and campaign concepts are built, reviewed, and approved.",
            "Week 4: 'Go-Live' Readiness: The first wave of 'Hero' content is produced, ads are staged, and the launch sequence is armed.",
            "Ongoing: Weekly 'Pulse' Reviews: Every Monday, we review metrics, optimize spend, and sharpen the creative angle."
        ],
        footer: "Speed. Precision. Momentum. We don't waste a single day.",
        icon: Rocket
    },
    {
        id: 9,
        type: 'list',
        title: "PRODUCTION & BUDGET PROTOCOL",
        subtitle: "WE MANAGE. YOU FUND.",
        mainIdea: "We deploy our vetted network and manage every rupee of production spend for maximum impact.",
        points: [
            "We Source & Manage Production: We bring in our vetted videographers, editors, and set designers.",
            "Zero-Markup Transparency: You pay all third-party vendors directly. No agency margins added.",
            "Influencer Negotiation: We leverage our relationships to get you 'Insider Rates'.",
            "Ad Spend Stewardship: We direct the budget to high-ROI channels. You hold the credit card.",
            "Total Creative Control: We are on set, in the edit suite, and checking every pixel via the War Room."
        ],
        footer: "We do the heavy lifting. You provide the fuel.",
        icon: Diamond
    },
    {
        id: 10,
        type: 'pricing',
        title: "ENGAGEMENT TERMS",
        subtitle: "90-DAY INITIATION",
        price: "₹60,000",
        priceSuffix: "+ GST / Month",
        features: [
            "Term: 3 Months (Total: ₹1,80,000 + GST)",
            "Payment: 100% Advance for Full Term",
            "Includes Full 'Gymrupt' Software Suite Setup",
            "Includes 3-Month Strategic Roadmap",
            "Includes Creative Direction & Vendor Mgmt",
            "Zero Recurring Agency Fees for 90 Days"
        ],
        note: "Why 100% Advance? We front-load the entire strategy, software deployment, and infrastructure setup in Month 1. This secures mutual commitment and ensures execution runs without administrative pauses.",
        icon: CreditCard
    },
    {
        id: 11,
        type: 'list',
        title: "THE ASPIRI LEGACY",
        subtitle: "DAY 91 & BEYOND",
        mainIdea: "This isn't just a 90-day sprint. It's the foundation of a generational brand.",
        points: [
            "We will have moved Aspiri from 'Jewellery Retailer' to 'Bespoke Art House'.",
            "The pricing power will shift from 'Gold Rate' to 'Brand Value'.",
            "A digital moat will surround the business, immunizing it from local price wars.",
            "The 'Atelier' model will be ready for franchise scaling across India."
        ],
        highlight: "We are building the Sovereign Choice.",
        icon: Crown
    },
    {
        id: 12,
        type: 'final-cta',
        title: "THE NEXT STEP",
        subtitle: "INITIATION PROTOCOL",
        tagline: "The strategy is set. The infrastructure is ready. The War Room awaits your command.",
        points: [
            "1. Authorize the Engagement",
            "2. Deploy the Gymrupt Engine",
            "3. Begin the 'Deep Dive' Audit"
        ],
        ctaText: "AUTHORIZE LAUNCH",
        ctaLink: "#",
        icon: Rocket
    }
];
