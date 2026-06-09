import React from 'react';
import { useTranslation } from 'react-i18next';

// ====== images ====== //

import bgImg from '../../assets/images/page-title-bg.webp';
import { motion } from 'framer-motion';
import { pageTitleAnim } from './animation';

type PageTitleProps = {
    title: string;
    description?: string;
}

export default function PageTitle({ title, description }: PageTitleProps) {

    const { t, i18n } = useTranslation();

    return <React.Fragment>

        <motion.section className='space-y-5' variants={pageTitleAnim}>

            <div
                className={`
                    relative w-full from-[var(--light-blue-color)] to-[var(--dark-blue-color)]
                    ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}
                    flex flex-col justify-end common-p-inline pt-32 pb-5 gap-2.5
                `}
            >

                <img src={bgImg} alt={title} className='absolute top-0 left-0 w-full h-full object-cover opacity-3' />
                <h1 className='relative text-4xl font-bold text-[var(--white-color)] tracking-wider glowing-text'>{t(title)}</h1>
                {description && <h3 className='w-xl text-start max-w-full text-lg text-[var(--white-color)] opacity-60 font-medium max-[720px]:text-base'>
                    {t(description)}
                </h3>}

            </div>



        </motion.section>

    </React.Fragment>

}
