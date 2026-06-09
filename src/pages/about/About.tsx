import React from 'react';
import PageTitle from '../../components/titles/PageTitle';
import { useTranslation } from 'react-i18next';
import AboutUs from '../../sections/about-us/AboutUs';
import AboutGoalsCard from '../../components/cards/AboutGoalsCard';
import { GoGoal } from 'react-icons/go';
import { IoDiamondOutline } from 'react-icons/io5';
import { FaRegEye } from 'react-icons/fa6';
import Achievements from '../../sections/achievements/Achievements';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { pageContainer, contentContainer, goalsContainer, goalItem } from './animation';

const aboutGoals = [

    {
        icon: FaRegEye,
        title: 'overview.about-us.goals.vision.title',
        description: 'overview.about-us.goals.vision.description'
    },

    {
        icon: GoGoal,
        title: 'overview.about-us.goals.mission.title',
        description: 'overview.about-us.goals.mission.description'
    },

    {
        icon: IoDiamondOutline,
        title: 'overview.about-us.goals.values.title',
        description: 'overview.about-us.goals.values.description'
    },

];

export default function About() {

    const { t } = useTranslation();
    const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

    return <React.Fragment>

        <motion.section
            ref={ref}
            className='space-y-20 pb-20'
            variants={pageContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >

            <PageTitle title={'about.title'} />

            <motion.div
                className='common-p-inline grid grid-cols-2 gap-5 max-[930px]:grid-cols-1'
                variants={contentContainer}
            >

                <AboutUs fullData={true} />

                <motion.div
                    className='space-y-5'
                    variants={goalsContainer}
                >

                    {aboutGoals.map((goal, index) => (
                        <motion.div key={index} variants={goalItem}>
                            <AboutGoalsCard icon={goal.icon} title={t(goal.title)} description={t(goal.description)} />
                        </motion.div>
                    ))}

                </motion.div>

            </motion.div>

            <Achievements />

        </motion.section>

    </React.Fragment>

}
