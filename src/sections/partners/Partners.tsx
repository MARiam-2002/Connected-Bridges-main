import React, { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { clientsData } from '../../constants/clients';
import ClientCard from '../../components/cards/ClientCard';
import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { partnerCard, partnersContainer } from './animation';

export default function Partners() {

    const { i18n } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return <React.Fragment>

        <motion.div
            ref={ref}
            dir='ltr'
            className="relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={partnersContainer}
        >
            <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--light-gray-color)]" />
            <Marquee key={i18n.language} pauseOnHover={true} speed={50}>

                {clientsData.map(logo => (
                    <div key={logo.id} className='p-2.5'>
                        <ClientCard logo={logo} className='!h-48 !w-48' variants={partnerCard} />
                    </div>
                ))}

            </Marquee>
            <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--light-gray-color)]" />
        </motion.div>

    </React.Fragment>

}
