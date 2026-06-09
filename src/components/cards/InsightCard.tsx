import { CalendarDays, CircleArrowOutUpRight, Clock, User } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import image from '../../assets/images/projects/neom-project.jpg';
import { motion, type Variants } from 'framer-motion';

const InsightInfo = ({ icon, title }: { icon: React.ReactNode; title: string }) => {

    return (
        <div className='flex items-center gap-1.5'>
            <div className='text-[var(--dark-blue-color)] opacity-80'>{icon}</div>
            <p className='text-sm text-[var(--dark-blue-color)] opacity-80'>{title}</p>
        </div>
    );

};

export default function InsightCard({ variants }: { variants?: Variants }) {

    const { t, i18n } = useTranslation();

    return <React.Fragment>

        <motion.div variants={variants}>
            <Link to={'/insights/the-future-of-smart-buildings/1'} className='rounded-lg overflow-hidden bg-[var(--white-color)] group text-start flex flex-col'>

                <div className='overflow-hidden'>
                    <img src={image} alt={'title'} className='w-full h-64 object-cover group-hover:scale-105 duration-300' />
                </div>

                <div className='p-5 flex flex-col gap-3 flex-1'>

                    <div className='flex flex-wrap items-center gap-4'>
                        <InsightInfo icon={<CalendarDays size={18} />} title='January 12, 2024' />
                        <InsightInfo icon={<Clock size={18} />} title={`7 ${t('min read')}`} />
                    </div>

                    <h3 className='text-xl font-semibold text-[var(--dark-blue-color)]'>The Future of Smart Buildings in Saudi Arabia</h3>

                    <p className='text-base text-[var(--dark-blue-color)] opacity-80'>
                        A comprehensive look at emerging cybersecurity threats and the latest protective measures for modern enterprises.
                    </p>

                    <div className='mt-auto pt-4 flex items-center justify-between gap-2.5 border-t border-t-[var(--mid-gray-color)]'>

                        <InsightInfo icon={<User size={18} />} title='Omar Khaled' />

                        <button
                            className='
                                p-2.5 rounded-md bg-[var(--mid-gray-color)] text-[var(--light-blue-color)] duration-300
                                group-hover:bg-[var(--light-blue-color)] group-hover:text-[var(--white-color)]
                            '
                        >
                            <CircleArrowOutUpRight size={24} className={`${i18n.language === 'ar' ? '-rotate-90' : ''}`} />
                        </button>

                    </div>

                </div>

            </Link>
        </motion.div>

    </React.Fragment>

}
