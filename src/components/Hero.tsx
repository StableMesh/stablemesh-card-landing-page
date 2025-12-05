'use client';

import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import { useLanguage } from './LanguageProvider';
import { heroDetails } from '@/data/hero';
import { ctaDetails } from '@/data/cta';

const Hero: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full hero-grid" />
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 hero-gradient" />

            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">{t('hero.heading')}</h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">{t('hero.subheading')}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center w-full sm:w-fit sm:mx-auto">
                    <a href={ctaDetails.getStartedUrl} className="w-full sm:w-auto">
                        <button
                            type="button"
                            className="w-full rounded-full bg-white px-8 py-3 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                        >
                            {t('cta.getStarted')}
                        </button>
                    </a>
                    <a href={ctaDetails.scheduleDemoUrl} className="w-full sm:w-auto">
                        <button
                            type="button"
                            className="w-full rounded-full bg-white/10 px-8 py-3 text-base font-semibold text-white transition-colors border border-white/20 hover:bg-white/20"
                        >
                            {t('cta.scheduleDemo')}
                        </button>
                    </a>
                </div>
                {/* Store buttons hidden per request */}
                <div className="hidden">
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </div>
                <Image
                    src={heroDetails.centerImageSrc}
                    width={384}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={true}
                    unoptimized={true}
                    alt="app mockup"
                    className='relative mt-12 md:mt-16 mx-auto z-10'
                />
            </div>
        </section>
    );
};

export default Hero;
