'use client';

import { ctaDetails } from "@/data/cta"
import { useLanguage } from "./LanguageProvider"

import AppStoreButton from "./AppStoreButton"
import PlayStoreButton from "./PlayStoreButton"

const CTA: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{t('cta.heading')}</h2>

                        <p className="mx-auto max-w-xl md:px-5">{t('cta.subheading')}</p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
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

                        <div className="hidden">
                            <AppStoreButton />
                            <PlayStoreButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA