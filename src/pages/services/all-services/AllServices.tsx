import React from 'react';
import PageTitle from '../../../components/titles/PageTitle';
import ServicesCard from '../../../components/cards/ServicesCard';
import { AllServicesData } from '../../../constants/services';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from '../../../hooks/useInView';
import { pageContainer, servicesContainer, serviceCard } from './animation';

type Service = ReturnType<typeof AllServicesData>[number];

export default function AllServices() {

    const { t } = useTranslation();

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

            <PageTitle title={'all-services.title'} description={'all-services.description'} />

            <motion.section
                className='common-p-inline space-y-5'
                variants={servicesContainer}
            >
                {AllServicesData(t).map((service: Service) => (
                    <motion.div key={service.id} variants={serviceCard}>
                        <ServicesCard data={service} />
                    </motion.div>
                ))}
            </motion.section>

        </motion.section>

    </React.Fragment>

}
