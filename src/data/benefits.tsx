import { FiActivity, FiBriefcase, FiDollarSign, FiGitBranch, FiLock, FiPercent, FiPieChart, FiShield, FiTrendingUp, FiZap, FiEye } from "react-icons/fi";

import { IBenefit } from "@/types"

export const getBenefits = (t: (key: string) => string): IBenefit[] => [
    {
        title: t('benefits.virtualCard.title'),
        description: t('benefits.virtualCard.description'),
        bullets: [
            {
                title: t('benefits.virtualCard.bullet1.title'),
                description: t('benefits.virtualCard.bullet1.description'),
                icon: <FiZap size={26} />
            },
            {
                title: t('benefits.virtualCard.bullet2.title'),
                description: t('benefits.virtualCard.bullet2.description'),
                icon: <FiShield size={26} />
            },
            {
                title: t('benefits.virtualCard.bullet3.title'),
                description: t('benefits.virtualCard.bullet3.description'),
                icon: <FiLock size={26} />
            },
            {
                title: t('benefits.virtualCard.bullet4.title'),
                description: t('benefits.virtualCard.bullet4.description'),
                icon: <FiActivity size={26} />
            }
        ],
        imageSrc: "/images/feature-1.png"
    },
    {
        title: t('benefits.stablecoin.title'),
        description: t('benefits.stablecoin.description'),
        bullets: [
            {
                title: t('benefits.stablecoin.bullet1.title'),
                description: t('benefits.stablecoin.bullet1.description'),
                icon: <FiDollarSign size={26} />
            },
            {
                title: t('benefits.stablecoin.bullet2.title'),
                description: t('benefits.stablecoin.bullet2.description'),
                icon: <FiGitBranch size={26} />
            },
            {
                title: t('benefits.stablecoin.bullet3.title'),
                description: t('benefits.stablecoin.bullet3.description'),
                icon: <FiBriefcase size={26} />
            }
        ],
        imageSrc: "/images/feature-2.png"
    },
    {
        title: t('benefits.zeroFee.title'),
        description: t('benefits.zeroFee.description'),
        bullets: [
            {
                title: t('benefits.zeroFee.bullet1.title'),
                description: t('benefits.zeroFee.bullet1.description'),
                icon: <FiDollarSign size={26} />
            },
            {
                title: t('benefits.zeroFee.bullet2.title'),
                description: t('benefits.zeroFee.bullet2.description'),
                icon: <FiPercent size={26} />
            },
            {
                title: t('benefits.zeroFee.bullet3.title'),
                description: t('benefits.zeroFee.bullet3.description'),
                icon: <FiEye size={26} />
            }
        ],
        imageSrc: "/images/feature-3.png"
    },
]