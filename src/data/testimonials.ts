import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'John Smith',
        role: 'CFO, Global SaaS Company',
        message: `${siteDetails.siteName}'s virtual card stack let us spin up hundreds of cards for teams and vendors in days instead of months. We now have real-time visibility on every dollar spent across 40+ markets.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Jane Doe',
        role: 'CTO, Web3 Infrastructure Startup',
        message: `We use ${siteDetails.siteName} to issue virtual cards directly from our stablecoin treasuries. 3DS, card freezing, and multi-chain funding are all handled behind a single API, which has simplified our stack massively.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Emily Johnson',
        role: 'Head of Payments, Digital Agency',
        message: `${siteDetails.siteName} gives every squad its own virtual cards with limits, metadata, and instant controls. Our finance team finally has zero-fee, card-level data instead of chasing invoices at month-end.`,
        avatar: '/images/testimonial-3.webp',
    },
];