import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { titleWidthAnimation } from './animation';

export default function MainTitle({ title }: { title: string }) {

    const { i18n, t } = useTranslation();
    const [ref, isInView] = useInView({ threshold: 0.3, triggerOnce: true });

    const titleText = t(title);

    return <React.Fragment>

        <motion.div 
            ref={ref as React.RefObject<HTMLDivElement>} 
            className='w-full common-p-inline flex items-center justify-center text-center'
        >
            <motion.h2 
                className={`
                    text-4xl font-bold ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} pb-2.5
                    from-[var(--light-blue-color)] to-[var(--dark-blue-color)] bg-clip-text text-transparent max-[515px]:text-3xl
                    whitespace-nowrap overflow-hidden
                `}
                variants={titleWidthAnimation}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {titleText}
            </motion.h2>
        </motion.div>

    </React.Fragment>

}
