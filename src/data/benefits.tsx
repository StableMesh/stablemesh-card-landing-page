import { FiActivity, FiBriefcase, FiDollarSign, FiGitBranch, FiLock, FiPercent, FiPieChart, FiShield, FiTrendingUp, FiZap, FiEye } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Virtual Card Infrastructure",
        description: "Issue and manage virtual cards in seconds with enterprise-grade controls, security, and real-time visibility.",
        bullets: [
            {
                title: "Instant issuance",
                description: "Create virtual cards on demand for teams, vendors, or specific use-cases in just a few clicks.",
                icon: <FiZap size={26} />
            },
            {
                title: "3DS authentication",
                description: "Protect every transaction with strong 3D Secure authentication and adaptive risk controls.",
                icon: <FiShield size={26} />
            },
            {
                title: "Card freezing and unfreezing",
                description: "Instantly pause or resume cards to respond to suspicious activity or changing business needs.",
                icon: <FiLock size={26} />
            },
            {
                title: "Real-time transaction visibility",
                description: "Monitor spend as it happens with granular transaction data and rich metadata.",
                icon: <FiActivity size={26} />
            }
        ],
        imageSrc: "/images/feature-1.png"
    },
    {
        title: "Stablecoin Funding",
        description: "Fund cards and payments with stablecoins across major chains, without touching the traditional banking rails.",
        bullets: [
            {
                title: "Instant deposits",
                description: "Move funds from wallet to card balance in seconds, with no waiting for bank settlement.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Supports TRON, Ethereum, and BNB Chain",
                description: "Fund using major stablecoin networks that match your treasury and liquidity setup.",
                icon: <FiGitBranch size={26} />
            },
            {
                title: "Multi-chain wallet integration",
                description: "Connect multiple wallets and manage balances from a single control layer.",
                icon: <FiBriefcase size={26} />
            }
        ],
        imageSrc: "/images/feature-2.png"
    },
    {
        title: "Zero-Fee Pricing Model",
        description: "Scale spend without worrying about opaque markups, hidden fees, or unpredictable FX spreads.",
        bullets: [
            {
                title: "No hidden fees",
                description: "Avoid surprise platform charges, junk fees, and add-ons that erode your margins.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Industry-leading FX rates",
                description: "Access competitive foreign exchange with transparent spreads on every transaction.",
                icon: <FiPercent size={26} />
            },
            {
                title: "Fully transparent cost structure",
                description: "See exactly what you pay per transaction, card, and program — with no fine print.",
                icon: <FiEye size={26} />
            }
        ],
        imageSrc: "/images/feature-3.png"
    },
]