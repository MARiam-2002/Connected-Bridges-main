import React from 'react';
import image from '../../assets/images/projects/neom-project.jpg';
import { CalendarDays, CircleArrowOutUpRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, type Variants } from 'framer-motion';

const ProjectInfo = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
    <div className='flex items-center gap-1.5'>
        <div className='text-[var(--dark-blue-color)]' aria-hidden="true">{icon}</div>
        <p className='text-base text-[var(--dark-blue-color)] opacity-80'>{title}</p>
    </div>
);

const MotionLink = motion(Link);

interface ProjectCardProps {
    variants?: Variants;
}

export default function ProjectCard({ variants }: ProjectCardProps) {
    const { i18n } = useTranslation();

    return (
        <React.Fragment>
            <MotionLink
                to={'/projects/neom-smart-city-infrastructure/1'}
                className='rounded-lg overflow-hidden bg-[var(--white-color)] group shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300'
                variants={variants}
                aria-label="NEOM Smart City Infrastructure project"
            >
                <div className='overflow-hidden'>
                    <img
                        src={image}
                        alt="NEOM Smart City Infrastructure"
                        loading="lazy"
                        decoding="async"
                        width={600}
                        height={256}
                        className='w-full h-64 object-cover group-hover:scale-105 duration-300'
                    />
                </div>

                <div className='p-5 flex flex-col gap-2.5 text-start'>
                    <h3 className='text-xl font-semibold text-[var(--dark-blue-color)]'>
                        NEOM Smart City Infrastructure
                    </h3>
                    <p className='text-base text-[var(--dark-blue-color)] opacity-80'>
                        Comprehensive AI-powered infrastructure design for the futuristic city.
                    </p>

                    <ProjectInfo icon={<MapPin size={18} />} title='NEOM, Saudi Arabia' />

                    <div className='w-full flex items-center justify-between gap-2.5'>
                        <ProjectInfo icon={<CalendarDays size={18} />} title='2024' />
                        <span
                            className='
                                p-2.5 rounded-md bg-[var(--mid-gray-color)] text-[var(--light-blue-color)] duration-300
                                group-hover:bg-[var(--light-blue-color)] group-hover:text-[var(--white-color)]
                            '
                            aria-hidden="true"
                        >
                            <CircleArrowOutUpRight size={24} className={`${i18n.language === 'ar' ? '-rotate-90' : ''}`} />
                        </span>
                    </div>
                </div>
            </MotionLink>
        </React.Fragment>
    );
}
