'use client';

import { useEffect, useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaThreads, FaTiktok, FaTwitter, FaXTwitter, FaYoutube } from "react-icons/fa6";

/**
 * Get referral parameters from URL query string
 * Captures: code, utm_source, utm_medium
 */
export const getReferralParams = (): URLSearchParams => {
    if (typeof window === 'undefined') {
        return new URLSearchParams();
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const referralParams = new URLSearchParams();
    
    // Capture referral parameters
    const code = urlParams.get('code');
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    
    // Set code to WEBSITE if empty or not present
    referralParams.set('code', code || 'WEBSITE');
    if (utmSource) referralParams.set('utm_source', utmSource);
    if (utmMedium) referralParams.set('utm_medium', utmMedium);
    
    return referralParams;
};

/**
 * React hook to get app URL with referral parameters
 * This ensures URL parameters are captured after component mounts
 */
export const useAppUrlWithReferral = (baseUrl: string = 'https://app.stablemesh.io'): string => {
    const [appUrl, setAppUrl] = useState<string>(baseUrl);
    
    useEffect(() => {
        const params = getReferralParams();
        const paramString = params.toString();
        
        if (paramString) {
            setAppUrl(`${baseUrl}?${paramString}`);
        } else {
            setAppUrl(baseUrl);
        }
    }, [baseUrl]);
    
    return appUrl;
};

/**
 * Build app URL with referral parameters (for use outside React components)
 */
export const getAppUrlWithReferral = (baseUrl: string = 'https://app.stablemesh.io'): string => {
    const params = getReferralParams();
    const paramString = params.toString();
    
    if (paramString) {
        return `${baseUrl}?${paramString}`;
    }
    
    return baseUrl;
};

export const getPlatformIconByName = (platformName: string): JSX.Element | null => {
    switch (platformName) {
        case 'facebook': {
            return <FaFacebook size={24} className='min-w-fit' />;
        }
        case 'github': {
            return <FaGithub size={24} className='min-w-fit' />;
        }
        case 'instagram': {
            return <FaInstagram size={24} className='min-w-fit' />;
        }
        case 'linkedin': {
            return <FaLinkedin size={24} className='min-w-fit' />;
        }
        case 'threads': {
            return <FaThreads size={24} className='min-w-fit' />;
        }
        case 'twitter': {
            return <FaTwitter size={24} className='min-w-fit' />;
        } 
        case 'youtube': {
            return <FaYoutube size={24} className='min-w-fit' />;
        }
        case 'x': {
            return <FaXTwitter size={24} className='min-w-fit' />;
        }
        case 'tiktok': {
            return <FaTiktok size={24} className='min-w-fit' />;
        }
        case 'telegram': {
            return <FaTelegram size={24} className='min-w-fit' />;
        }
        default:
            console.log('Platform name not supported, no icon is returned:', platformName);
            return null;
    }
}