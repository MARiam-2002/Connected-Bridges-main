import React from 'react'
import PageTitle from '../../../components/titles/PageTitle'
import { useTranslation } from 'react-i18next'
import { Navigate, useParams } from 'react-router-dom'
import { AllServicesData } from '../../../constants/services';
import ServiceCard from '../../../components/cards/ServiceCard';
import { motion } from 'framer-motion';
import { pageContainer, servicesGrid, serviceCard } from './animation';
// import { ROUTES } from '../../../constants/routes';

type Service = ReturnType<typeof AllServicesData>[number];

export default function SingleService() {

    const { id } = useParams();
    const { t } = useTranslation();

    const data = AllServicesData(t).find(service => service.id === Number(id)) as Service;


    if (!data) {
        return <Navigate to={'error-page'} />
    }

    return <React.Fragment>

        <motion.section
            key={id}
            className='space-y-10 pb-20'
            variants={pageContainer}
            initial="hidden"
            animate="visible"
        >

            <PageTitle title={t(data.title)} description={t(data.description)} />

            <motion.section
                className='common-p-inline grid grid-cols-3 gap-5 max-[1030px]:grid-cols-2 max-[685px]:grid-cols-1'
                variants={servicesGrid}
            >

                {data.services.map((service) => (
                    <motion.div key={service.id} variants={serviceCard}>
                        <ServiceCard
                            key={service.id} id={service.id}
                            title={t(service.title)} description={t(service.description)}
                            icon={service.icon} isLink={false}
                        />
                    </motion.div>
                ))}

            </motion.section>

        </motion.section>

    </React.Fragment>

}
