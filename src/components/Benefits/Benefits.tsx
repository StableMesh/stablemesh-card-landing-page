'use client';

import BenefitSection from "./BenefitSection"
import { useLanguage } from "../LanguageProvider"
import { getBenefits } from "@/data/benefits"

const Benefits: React.FC = () => {
    const { t } = useLanguage();
    const benefits = getBenefits(t);
    
    return (
        <div id="features">
            <h2 className="sr-only">{t('menu.features')}</h2>
            {benefits.map((item, index) => {
                return <BenefitSection key={index} benefit={item} imageAtRight={index % 2 !== 0} />
            })}
        </div>
    )
}

export default Benefits