import React from 'react'
import { useTranslation } from 'react-i18next';
import { RiRobot2Line } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';
import AboutCard from '../../components/cards/AboutCard';
import { PencilRuler } from 'lucide-react';
import { GrSecure } from 'react-icons/gr';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { aboutCard, aboutContainer, aboutDescription, aboutTitle } from './animation';

type AboutUsProps = {
    fullData?: boolean;
}

export default function AboutUs({ fullData = false }: AboutUsProps) {

    const { t } = useTranslation();
    const [containerRef, isInView] = useInView({ 
        threshold: 0.2, 
        rootMargin: '50px',
        triggerOnce: true 
    });

    const aboutCards = [

        {
            title: t('overview.about-us.cards.securityTitle'),
            description: t('overview.about-us.cards.securityDescription'),
            icon: <GrSecure />
        },
        {
            title: t('overview.about-us.cards.aiTitle'),
            description: t('overview.about-us.cards.aiDescription'),
            icon: <RiRobot2Line />
        },
        {
            title: t('overview.about-us.cards.standardsTitle'),
            description: t('overview.about-us.cards.standardsDescription'),
            icon: <TfiWorld />
        },
        {
            title: t('overview.about-us.cards.designAndBuildTitle'),
            description: t('overview.about-us.cards.designAndBuildDescription'),
            icon: <PencilRuler />
        }

    ];

    return <React.Fragment>

        <motion.div 
            ref={containerRef as React.RefObject<HTMLDivElement>}
            className={`grid gap-5 items-center ${fullData ? 'grid-cols-1' : 'grid-cols-2 max-[1077px]:grid-cols-2 max-[770px]:grid-cols-1'}`}
            variants={aboutContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >

            <div className='flex flex-col gap-5'>

                <motion.h3 
                    className='flex flex-wrap items-center gap-x-1.5 text-3xl font-semibold max-[515px]:text-2xl'
                    variants={aboutTitle}
                >
                    <span className='text-[var(--light-blue-color)]'>{t('overview.about-us.about')}</span>
                    <p className='text-[var(--dark-blue-color)]'>{t('overview.about-us.about-title')}</p>
                </motion.h3>

                <motion.p 
                    className='text-lg text-[var(--dark-blue-color)] opacity-80 text-start'
                    variants={aboutDescription}
                >
                    {t('overview.about-us.description')}
                </motion.p>

            </div>

            <div 
                className={`
                    grid grid-cols-2 gap-5 max-[1077px]:grid-cols-1 
                    ${fullData ? 'max-[1230px]:grid-cols-1 max-[930px]:grid-cols-2 max-[625px]:grid-cols-1' : ''}
                `}
            >

                {aboutCards.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={aboutCard}
                    >
                        <AboutCard title={card.title} description={card.description} icon={card.icon} />
                    </motion.div>
                ))}

            </div>

        </motion.div>

    </React.Fragment>

}
