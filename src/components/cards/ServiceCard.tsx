import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type ServiceCardProps = {
    id?: number;
    title: string;
    description: string;
    icon: React.ElementType;
    link?: string;
    isLink?: boolean;
};

const ServiceCardContent = ({ title, description, icon : Icon }: ServiceCardProps) => {

    const {t, i18n} = useTranslation();

    return <React.Fragment>

        <div className='flex items-center justify-between gap-2.5'>

                <div 
                    className='
                        w-14 min-w-14 h-14 min-h-14 flex items-center justify-center rounded-md 
                        bg-[var(--mid-gray-color)] text-3xl text-[var(--light-blue-color)]
                        group-hover:bg-[var(--light-blue-color)] group-hover:text-[var(--white-color)] duration-300
                    '
                >
                    <Icon size={28} />
                </div>

                <div 
                    className='
                        w-8 h-8 min-w-8 min-h-8 flex items-center justify-center rounded-full text-[var(--light-blue-color)]
                        bg-[var(--mid-gray-color)] group-hover:bg-[var(--light-blue-color)] group-hover:text-[var(--white-color)] duration-300
                    '
                >
                    <ChevronRight className={`${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
                </div>

            </div>

            <h4 className='text-xl text-start font-semibold text-[var(--dark-blue-color)]'>{t(title)}</h4>

            <p className='text-sm text-start text-[var(--dark-blue-color)] opacity-80'>{t(description)}</p>

    </React.Fragment>

}


export default function ServiceCard({ title, description, icon : Icon, isLink = true, link }: ServiceCardProps) {

    return <React.Fragment>

        {isLink ? (
            <Link 
                to={`/${link}`} 
                className='p-5 flex flex-col gap-2.5 rounded-lg bg-[var(--white-color)] group h-full'
            >

                <ServiceCardContent title={title} description={description} icon={Icon} />

            </Link>
        ) : (
            <div 
                className='p-5 flex flex-col gap-2.5 rounded-lg bg-[var(--white-color)] group h-full'
            >

                <ServiceCardContent title={title} description={description} icon={Icon} />

            </div>
        )}

    </React.Fragment>

}
