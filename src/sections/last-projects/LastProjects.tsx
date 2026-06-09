import React from 'react';
import ProjectCard from '../../components/cards/ProjectCard';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projectsContainer, projectCard } from './animation';
import { useInView } from '../../hooks/useInView';


export default function LastProjects() {

    const { i18n, t } = useTranslation();

    const [ref, isInView] = useInView({
        threshold: 0.1,
        rootMargin: '50px',
        triggerOnce: true
    });

    return <React.Fragment>

        <motion.div
            ref={ref as React.RefObject<HTMLDivElement>}
            variants={projectsContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className='grid grid-cols-3 gap-5 max-[1175px]:grid-cols-2 max-[780px]:grid-cols-1'
        >

            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                <ProjectCard key={index} variants={projectCard} />
            ))}

        </motion.div>

        <div className='w-full flex justify-end'>

            <Link
                to={'/projects'}
                className={`
                    px-5 py-2.5 rounded-md ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}
                    flex items-center gap-2.5 max-[780px]:w-full max-[780px]:justify-center
                    from-[var(--light-blue-color)] to-[var(--dark-blue-color)] text-base font-medium text-[var(--white-color)]
                `}
            >
                <p>{t('overview.last-projects.see-all-projects')}</p>
                <ChevronRight size={20} className={`${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
            </Link>

        </div>

    </React.Fragment>

}
