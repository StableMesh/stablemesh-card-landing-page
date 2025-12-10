import { IPricing } from "@/types";

export const getPricingTiers = (t: (key: string) => string): IPricing[] => [
    {
        name: t('pricing.tier.starter'),
        price: 0,
        features: [
            t('pricing.starter.feature1'),
            t('pricing.starter.feature2'),
            t('pricing.starter.feature3'),
            t('pricing.starter.feature4'),
            t('pricing.starter.feature5'),
            t('pricing.starter.feature6'),
            t('pricing.starter.feature7'),
        ],
    },
    {
        name: t('pricing.tier.pro'),
        price: 25,
        features: [
            t('pricing.pro.feature1'),
            t('pricing.pro.feature2'),
            t('pricing.pro.feature3'),
            t('pricing.pro.feature4'),
        ],
    },
    {
        name: t('pricing.tier.enterprise'),
        price: t('pricing.price.custom'),
        features: [
            t('pricing.enterprise.feature1'),
            t('pricing.enterprise.feature2'),
            t('pricing.enterprise.feature3'),
            t('pricing.enterprise.feature4'),
            t('pricing.enterprise.feature5'),
        ],
    },
]