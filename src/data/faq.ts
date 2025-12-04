import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `How does ${siteDetails.siteName} work with virtual cards?`,
        answer: `${siteDetails.siteName} provides the infrastructure to issue, manage, and monitor virtual cards at scale. You can create cards instantly for teams, vendors, or specific campaigns, set limits and controls, and see every transaction in real time.`,
    },
    {
        question: 'Where do the funds for the cards come from?',
        answer: 'Cards are funded via stablecoin deposits on supported networks like TRON, Ethereum, and BNB Chain. Once funds are deposited, they are converted into card balances by our licensed card issuer partner.',
    },
    {
        question: 'Who is the licensed card issuer behind the program?',
        answer: 'All regulated card services, including issuance, processing, settlement, and safeguarding of funds, are provided by a licensed card issuer. StableMesh only provides the technology layer and does not hold or control customer funds.',
    },
    {
        question: 'Can I control how and where virtual cards are used?',
        answer: 'Yes. You can configure per-card limits, allowed merchant categories, expiry rules, and card freezing/unfreezing. This gives you precise control over spend and reduces the risk of misuse.',
    },
    {
        question: 'What happens if a transaction looks suspicious?',
        answer: 'You can instantly freeze or cancel a virtual card, and our licensed card issuer handles disputes, chargebacks, and regulatory obligations like KYC/AML and fraud monitoring in line with local requirements.',
    }
];