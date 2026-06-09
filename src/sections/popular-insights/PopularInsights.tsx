import React from 'react'
import InsightCard from '../../components/cards/InsightCard';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { parentVariants, toTopVariants } from './animation';

export default function PopularInsights() {

    const { i18n, t } = useTranslation();

    return <React.Fragment>

        <motion.div
            className='grid grid-cols-3 gap-5 max-[1175px]:grid-cols-2 max-[780px]:grid-cols-1'
            variants={parentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >

            {[1, 2, 3].map((item) => (
                <motion.div key={item} variants={toTopVariants}>
                    <InsightCard />
                </motion.div>
            ))}

        </motion.div>

        <div className='w-full flex justify-end'>

            <Link
                to={'/insights'}
                className={`
                    px-5 py-2.5 rounded-md ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}
                    flex items-center gap-2.5 max-[780px]:w-full max-[780px]:justify-center
                    from-[var(--light-blue-color)] to-[var(--dark-blue-color)] text-base font-medium text-[var(--white-color)]
                `}
            >
                <p>{t('overview.popular-insights.see-all-insights')}</p>
                <ChevronRight size={20} className={`${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
            </Link>

        </div>

    </React.Fragment>

}
