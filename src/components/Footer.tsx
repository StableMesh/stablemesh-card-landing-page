'use client';

import Link from 'next/link';
import React from 'react';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';
import { useLanguage } from './LanguageProvider';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    
    return (
        <>
            <footer className="bg-[color:var(--hero-background)] text-foreground py-10 border-t border-border">
                <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    <div>
                        <Link href="/" className="flex items-center gap-2">
                            <h3 className="manrope text-xl font-semibold cursor-pointer">
                                {siteDetails.siteName}
                            </h3>
                        </Link>
                        <p className="mt-3.5 text-foreground-accent">
                            {t('footer.subheading')}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
                        <ul className="text-foreground-accent">
                            {footerDetails.quickLinks.map(link => {
                                const translationKey = `menu.${link.text.toLowerCase()}`;
                                return (
                                    <li key={link.text} className="mb-2">
                                        <Link href={link.url} className="hover:text-foreground">
                                            {t(translationKey) !== translationKey ? t(translationKey) : link.text}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('footer.contactUs')}</h4>

                        {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-foreground-accent hover:text-foreground">{t('footer.emailLabel')}: {footerDetails.email}</a>}

                        {footerDetails.socials && (
                            <div className="mt-5 flex items-center gap-5 flex-wrap">
                                {Object.keys(footerDetails.socials).map(platformName => {
                                    if (platformName && footerDetails.socials[platformName]) {
                                        return (
                                            <Link
                                                href={footerDetails.socials[platformName]}
                                                key={platformName}
                                                aria-label={platformName}
                                            >
                                                {getPlatformIconByName(platformName)}
                                            </Link>
                                        )
                                    }
                                })}
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-[color:var(--hero-background)] border-t border-border py-8 px-6">
                    <div className="max-w-7xl w-full mx-auto">
                        {/* <div className="mb-6">
                        <div className="h-px w-full bg-border mb-6"></div>
                    </div> */}
                        <h3 className="text-lg font-semibold mb-4 text-foreground">{t('footer.disclaimer')}</h3>
                        <div className="text-sm text-foreground-accent space-y-3 leading-relaxed">
                            <p>{t('footer.disclaimer.paragraph1')}</p>
                            <p>{t('footer.disclaimer.paragraph2')}</p>
                            <p>{t('footer.disclaimer.paragraph3')}</p>
                            <p>{t('footer.disclaimer.paragraph4')}</p>
                            <p>{t('footer.disclaimer.paragraph5')}</p>
                            <p>{t('footer.disclaimer.paragraph6')}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:text-center text-foreground-accent px-6">
                    <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
                </div>


            </footer>

        </>
    );
};

export default Footer;
