import React from 'react'
import { useTranslation } from 'react-i18next';
import ServiceCard from '../../components/cards/ServiceCard';
import { AllServicesData } from '../../constants/services';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { serviceCard, servicesContainer } from './animation';

export default function Services() {

    const { t } = useTranslation();

    const [ref, isInView] = useInView({
        threshold: 0.1,
        rootMargin: '50px',
        triggerOnce: true
    });

    return <React.Fragment>

        <motion.div
            ref={ref as React.RefObject<HTMLDivElement>}
            variants={servicesContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className='grid grid-cols-3 gap-5 max-[1075px]:grid-cols-2 max-[660px]:grid-cols-1'
        >

            {AllServicesData(t).map(({ id, title, icon: Icon, description, link }) => (
                <motion.div
                    key={id}
                    variants={serviceCard}
                >
                    <ServiceCard id={id} title={title} icon={Icon} description={description} link={link} />
                </motion.div>
            ))}

        </motion.div>

    </React.Fragment>

}
