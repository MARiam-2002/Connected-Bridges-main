import React from 'react'
import PageTitle from '../../components/titles/PageTitle'
import ProjectCard from '../../components/cards/ProjectCard'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { pageContainer, projectCard, projectsGrid } from './animation'

export default function OurProjects() {

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

            <PageTitle title={'our-projects.title'} description={'our-projects.description'} />

            <motion.div
                variants={projectsGrid}
                className='common-p-inline grid grid-cols-3 gap-5 max-[1175px]:grid-cols-2 max-[780px]:grid-cols-1'
            >
                {Array.from({ length: 9 }).map((_, index) => (
                    <ProjectCard key={index} variants={projectCard} />
                ))}
            </motion.div>

        </motion.section>

    </React.Fragment>

}
