import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getChevronAnimation, mobileDropdownContainer } from './ServicesCardAnimation';

type ServicesCardProps = {
    data: {
        id: number;
        title: string;
        description: string;
        link: string;
        icon: React.ElementType;
        services: {
            id: number;
            title: string;
            description: string;
            icon: React.ElementType;
        }[];
    };
};

export default function ServicesCard({ data }: ServicesCardProps) {

    const { t, i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    return <React.Fragment>

        <div className='w-full p-5 space-y-5 rounded-lg bg-[var(--white-color)] cursor-pointer shadow-md'>

            <div onClick={() => setIsOpen(!isOpen)} className='flex items-center justify-between gap-5 flex-wrap group'>

                <div className='flex items-center gap-5'>
                    <div 
                        className='
                            w-20 h-20 rounded-md bg-[var(--mid-gray-color)] flex items-center justify-center text-[var(--light-blue-color)]
                            group-hover:bg-[var(--light-blue-color)] transition-all duration-300 group-hover:text-[var(--white-color)]
                            max-[540px]:w-18 max-[540px]:h-18 max-[540px]:min-w-18 max-[540px]:min-h-18
                        '
                    >
                        <data.icon size={38} />
                    </div>
                    <h3 className='text-2xl font-bold text-[var(--dark-blue-color)] max-[540px]:hidden'>{t(data.title)}</h3>
                </div>

                <motion.div 
                    className='
                        w-10 h-10 rounded-full bg-[var(--mid-gray-color)] flex items-center justify-center text-[var(--light-blue-color)]
                        group-hover:bg-[var(--light-blue-color)] transition-all duration-300 group-hover:text-[var(--white-color)]
                    '
                    {...getChevronAnimation(isOpen, i18n.language)}
                >
                    <ChevronRight className={`${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
                </motion.div>

                <h3 className='text-xl font-bold text-[var(--dark-blue-color)] max-[540px]:block hidden'>{t(data.title)}</h3>

            </div>

            <AnimatePresence>

                {isOpen && 
                    <motion.div 
                        className="w-full overflow-hidden"
                        initial={mobileDropdownContainer.hidden}
                        animate={mobileDropdownContainer.visible}
                        exit={mobileDropdownContainer.exit}
                    >

                        <div 
                            className='
                                grid grid-cols-3 py-5 gap-5 border-t border-[var(--light-gray-color)] overflow-hidden
                                max-[1050px]:grid-cols-2 max-[790px]:grid-cols-1
                            '
                        >
                            {data.services.map((service) => (
                                <div 
                                    key={service.id} 
                                    className='
                                        p-5 rounded-md bg-[var(--white-color)] border border-[var(--light-gray-color)] 
                                        flex items-center gap-5 overflow-hidden shadow-md group 
                                    '
                                >
                                    <div 
                                        className='
                                            w-18 h-18 rounded-md bg-[var(--mid-gray-color)] flex items-center justify-center text-[var(--light-blue-color)]
                                            min-w-18 min-h-18 group-hover:bg-[var(--light-blue-color)] transition-all duration-300 
                                            group-hover:text-[var(--white-color)] 
                                            max-[790px]:w-16 max-[790px]:h-16 max-[790px]:min-w-16 max-[790px]:min-h-16
                                        '
                                    >
                                        <service.icon size={28} />
                                    </div>
                                    <h3 className='text-lg font-medium text-[var(--dark-blue-color)] max-[790px]:text-sm'>{t(service.title)}</h3>
                                </div>
                            ))}
                        </div>

                        <div className='w-full pt-5 border-t border-[var(--light-gray-color)] flex items-center justify-end'>

                            <Link 
                                to={`/${data.link}`} 
                                className={`
                                    px-5 py-2.5 rounded-md ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}
                                    flex items-center gap-2.5 max-[780px]:w-full max-[780px]:justify-center
                                    from-[var(--light-blue-color)] to-[var(--dark-blue-color)] text-base font-medium text-[var(--white-color)]
                                `}
                            >
                                <p>{t('all-services.see-more-details')}</p>
                                <ChevronRight size={20} className={`${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
                            </Link>

                        </div>

                    </motion.div>
                }

            </AnimatePresence>

        </div>

    </React.Fragment>

}
