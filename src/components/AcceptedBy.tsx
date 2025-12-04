'use client';

import React from 'react';
import Image from 'next/image';

import { useLanguage } from './LanguageProvider';

type Merchant = {
  name: string;
  src: string;
};

// Only show merchants that have icons in public/images/merchants
const merchants: Merchant[] = [
  { name: 'PayPal', src: '/images/merchants/paypal.png' },
  { name: 'WeChat Pay', src: '/images/merchants/wechatpay.jpg' },
  { name: 'Alipay', src: '/images/merchants/alipay.svg' },
  { name: 'Apple Pay', src: '/images/merchants/apple-pay.png' },
  { name: 'Google Pay', src: '/images/merchants/gpay.png' },
  { name: 'Meta', src: '/images/merchants/meta.png' },
  { name: 'Starbucks', src: '/images/merchants/starbuck.png' },
  { name: 'TikTok', src: '/images/merchants/tictok.png' },
  { name: 'X', src: '/images/merchants/x.png' },
];

const AcceptedBy: React.FC = () => {
  const items = [...merchants, ...merchants];
  const { t } = useLanguage();

  return (
    <section className="py-16 lg:py-20 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-center text-2xl lg:text-4xl font-semibold mb-6">
          {t('accepted.heading')}
        </h2>
        <p className="text-center text-foreground-accent max-w-2xl mx-auto mb-10">
          {t('accepted.subtext')}
        </p>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="flex gap-6 md:gap-10 animate-marquee whitespace-nowrap will-change-transform">
            {items.map((merchant, idx) => (
              <Image
                key={`${merchant.name}-${idx}`}
                src={merchant.src}
                alt={merchant.name}
                width={150}
                height={80}
                className="h-16 md:h-16 w-auto object-contain merchant-logo"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceptedBy;

