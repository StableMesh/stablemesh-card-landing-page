import { IFAQ } from "@/types";

export const getFaqs = (t: (key: string) => string): IFAQ[] => [
    {
        question: t('faq.question1'),
        answer: t('faq.answer1'),
    },
    {
        question: t('faq.question2'),
        answer: t('faq.answer2'),
    },
    {
        question: t('faq.question3'),
        answer: t('faq.answer3'),
    },
    {
        question: t('faq.question4'),
        answer: t('faq.answer4'),
    },
    {
        question: t('faq.question5'),
        answer: t('faq.answer5'),
    }
];