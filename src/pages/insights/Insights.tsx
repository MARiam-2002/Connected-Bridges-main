import React from 'react'
import PageTitle from '../../components/titles/PageTitle'
import InsightCard from '../../components/cards/InsightCard'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { pageContainer, insightCard, insightsGrid } from './animation'

export default function Insights() {

    const [ref, isInView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return <React.Fragment>

        <motion.section
            ref={ref}
            className='space-y-10 pb-20'
            variants={pageContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >

            <PageTitle title={'insights.title'} description={'insights.description'} />

            <motion.div
                variants={insightsGrid}
                className='common-p-inline grid grid-cols-3 gap-5 max-[1175px]:grid-cols-2 max-[780px]:grid-cols-1'
            >
                {Array.from({ length: 6 }).map((_, index) => (
                    <InsightCard key={index} variants={insightCard} />
                ))}
            </motion.div>

        </motion.section>

    </React.Fragment>

}
