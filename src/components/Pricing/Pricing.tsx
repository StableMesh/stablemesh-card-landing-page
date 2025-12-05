'use client';

import PricingColumn from "./PricingColumn";
import { useLanguage } from "../LanguageProvider";
import { getPricingTiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    const { t } = useLanguage();
    const tiers = getPricingTiers(t);
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
                <PricingColumn key={tier.name} tier={tier} highlight={index === 1} />
            ))}
        </div>
    )
}

export default Pricing