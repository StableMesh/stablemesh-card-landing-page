import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 0,
        features: [
            '1 free virtual cards',
            'USDT/USDC deposit fee: $0',
            'USDT/USDC->USD conversion: 1:1',
            'Crypto withdraw fee: ONLY network gas',
            'Real-time transaction visibility',
            'Freeze card any time',
            'Email/Telegram support',
        ],
    },
    {
        name: 'Pro (Recommended)',
        price: 100,
        features: [
            'Up to 10 virtual cards',
            '1 free physical card',
            '1 free metal physical card for $5000 spend',
            'Priority email/Telegram support',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Custom pricing',
            'Unlimited virtual cards',
            'One time-used cards',
            'Customizable card spending limits',
            'API integration',
        ],
    },
]