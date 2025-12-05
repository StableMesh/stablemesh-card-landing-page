import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Designed for digital teams spending online, globally.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        }
    ],
    email: 'contact@stablemesh.io',
    telephone: '',
    socials: {
        // github: 'https://github.com',
        x: 'https://x.com/StableMesh',
        // twitter: 'https://x.com/StableMesh',
        // facebook: 'https://facebook.com',
        youtube: 'https://www.youtube.com/@StableMesh',
        tiktok: 'https://www.tiktok.com/@StableMesh',
        telegram: 'https://t.me/stablemesh_global',
        // linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        // instagram: 'https://www.instagram.com',
    }
}