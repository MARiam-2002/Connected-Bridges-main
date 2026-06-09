import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { clientsData, type ClientLogo } from '../../constants/clients';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import ClientCard from '../../components/cards/ClientCard';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { clientCard, clientsContainer } from './animation';

function chunkArray<T>(array: T[], size: number): T[][] {
    const chunkedArr: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
}

export default function Clients() {

    const { i18n } = useTranslation();
    const isLargePcScreen = useMediaQuery('(max-width: 1484px)');
    const isSmallPcScreen = useMediaQuery('(max-width: 1270px)');
    const isLargeTabletScreen = useMediaQuery('(max-width: 1054px)');
    const isTabletScreen = useMediaQuery('(max-width: 840px)');
    const isMobileScreen = useMediaQuery('(max-width: 625px)');

    const [ref, isInView] = useInView({
        threshold: 0.1,
        rootMargin: '0px',
        triggerOnce: true
    });

    let chunks;
    let rows;

    if (isMobileScreen) {
        chunks = 4;
        rows = 2;
    } else if (isTabletScreen) {
        chunks = 6;
        rows = 3;
    } else if (isLargeTabletScreen) {
        chunks = 7;
        rows = 4;
    } else if (isSmallPcScreen) {
        chunks = 9;
        rows = 5;
    } else if (isLargePcScreen) {
        chunks = 11;
        rows = 6;
    } else {
        chunks = 13;
        rows = 7;
    }

    const clientsChunks = chunkArray(clientsData, chunks);

    return <React.Fragment>

        <motion.div
            variants={clientsContainer}
            ref={ref as React.RefObject<HTMLDivElement>}
            initial="hidden" className='w-full'
            animate={isInView ? "visible" : "hidden"}
        >
            <Swiper
                dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
                key={`${i18n.language}-${isSmallPcScreen}`}
                pagination={{ clickable: true }}
                spaceBetween={30}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                modules={[Autoplay, Pagination]}
                className="w-full"
            >
                {clientsChunks.map((slideLogos, slideIndex) => (
                    <SwiperSlide key={`${slideIndex}-${slideLogos[0]?.id}`} className='w-full py-2.5 pb-12.5'>

                        <div className="flex flex-col items-center justify-center gap-5">

                            <div className="flex justify-center items-center gap-5 flex-wrap">
                                {slideLogos.slice(0, rows).map((logo: ClientLogo) => (
                                    <motion.div
                                        key={logo.id}
                                        variants={clientCard}
                                    >
                                        <ClientCard logo={logo} />
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex justify-center items-center gap-5 flex-wrap">
                                {slideLogos.slice(rows).map((logo: ClientLogo) => (
                                    <motion.div
                                        key={logo.id}
                                        variants={clientCard}
                                    >
                                        <ClientCard logo={logo} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>

    </React.Fragment>

}
