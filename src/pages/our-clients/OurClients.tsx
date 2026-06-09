import React from 'react'
import PageTitle from '../../components/titles/PageTitle'
import { clientsData } from '../../constants/clients'
import ClientCard from '../../components/cards/ClientCard'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import { clientsContainer, clientCard, pageContainer } from './animation'

export default function OurClients() {

    const [ref, isInView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    return <React.Fragment>

        <motion.section
            ref={ref}
            className='space-y-20 pb-20'
            variants={pageContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >

            <PageTitle title={'our-clients.title'} description={'our-clients.description'} />

            <motion.div
                variants={clientsContainer}
                className='common-p-inline grid grid-cols-5 gap-5 max-[815px]:grid-cols-3 max-[510px]:grid-cols-2 max-[510px]:gap-2.5'
            >

                {clientsData.map((client) => (
                    <ClientCard
                        key={client.id}
                        logo={client}
                        className='!h-full !w-full !min-h-full !min-w-full !max-w-full !max-h-full'
                        variants={clientCard}
                    />
                ))}

            </motion.div>

        </motion.section>

    </React.Fragment>

}
