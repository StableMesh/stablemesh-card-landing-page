import Link from 'next/link';
import React from 'react';
import { FaFingerprint } from 'react-icons/fa';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <>
            <footer className="bg-[color:var(--hero-background)] text-foreground py-10 border-t border-border">
                <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <Link href="/" className="flex items-center gap-2">
                            {/* <FaFingerprint className="min-w-fit w-5 h-5 md:w-7 md:h-7" /> */}
                            <h3 className="manrope text-xl font-semibold cursor-pointer">
                                {siteDetails.siteName}
                            </h3>
                        </Link>
                        <p className="mt-3.5 text-foreground-accent">
                            {footerDetails.subheading}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="text-foreground-accent">
                            {footerDetails.quickLinks.map(link => (
                                <li key={link.text} className="mb-2">
                                    <Link href={link.url} className="hover:text-foreground">{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

                        {footerDetails.email && <a href={`mailto:${footerDetails.email}`} className="block text-foreground-accent hover:text-foreground">Email: {footerDetails.email}</a>}

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
                        <h3 className="text-lg font-semibold mb-4 text-foreground">Disclaimer & Regulatory Notice</h3>
                        <div className="text-sm text-foreground-accent space-y-3 leading-relaxed">
                            <p>
                                StableMesh provides technology services only, including account management, customer interface, and data visualization. StableMesh is not a bank, payment institution, e-money issuer, money services business, or stored-value facility operator, and does not receive, hold, safeguard, transmit, or control customer funds or payment instruments.
                            </p>
                            <p>
                                All card issuance, card management, transaction processing, settlement, and custody of funds are provided by WorldFirst (Singapore) Merchant Services Pte. Ltd., a company within Ant Group. The card program, customer funds, balances, transactions, and all related regulated services are operated and managed by WorldFirst in accordance with applicable laws and regulatory requirements.
                            </p>
                            <p>
                                StableMesh acts solely as a technology platform and customer management interface. StableMesh does not provide financial advice, payment services, or regulated financial products.
                            </p>
                            <p>
                                Users contract directly with WorldFirst for card-related and payment services. All regulatory obligations related to the card program, including KYC/AML, safeguarding of funds, dispute handling, and transaction processing, are undertaken by WorldFirst.
                            </p>
                            <p>
                                Nothing on this website constitutes an offer, solicitation, or investment advice in any jurisdiction where such activities are prohibited. Services may not be available in all regions.
                            </p>
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
