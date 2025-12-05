'use client';

import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import AcceptedBy from "@/components/AcceptedBy";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import { useLanguage } from "@/components/LanguageProvider";

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Hero />
      <AcceptedBy />
      <Container>
        <Benefits />

        <Section
          id="pricing"
          title={t('pricing.title')}
          description={t('pricing.description')}
        >
          <Pricing />
        </Section>

        <Logos />

        <FAQ />
        
        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
