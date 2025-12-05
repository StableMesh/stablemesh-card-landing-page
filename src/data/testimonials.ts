import { ITestimonial } from "@/types";

export const getTestimonials = (t: (key: string) => string): ITestimonial[] => [
    {
        name: t('testimonials.testimonial1.name'),
        role: t('testimonials.testimonial1.role'),
        message: t('testimonials.testimonial1.message'),
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: t('testimonials.testimonial2.name'),
        role: t('testimonials.testimonial2.role'),
        message: t('testimonials.testimonial2.message'),
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: t('testimonials.testimonial3.name'),
        role: t('testimonials.testimonial3.role'),
        message: t('testimonials.testimonial3.message'),
        avatar: '/images/testimonial-3.webp',
    },
];