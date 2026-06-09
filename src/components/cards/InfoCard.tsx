import React from 'react'
import type { IconType } from 'react-icons/lib';
import { useTranslation } from 'react-i18next';

type InfoCardProps = {
    icon: IconType;
    title: string;
    description: string;
    link?: string;
    cols?: string;
}

export default function InfoCard({ icon: Icon, title, description, link, cols }: InfoCardProps) {

    const { t } = useTranslation();

    const cardContent = (
        <React.Fragment>


            <div 
                className='
                    w-14 h-14 rounded-md bg-[var(--mid-gray-color)] text-[var(--light-blue-color)] 
                    flex items-center justify-center shrink-0
                    group-hover:text-[var(--white-color)] group-hover:bg-[var(--light-blue-color)] duration-300
                '
            >
                <Icon size={24} />
            </div>

            <div className='space-y-0.5'>

                <h4 className='text-lg font-bold text-[var(--dark-blue-color)]'>{t(title)}</h4>

                <p className='text-sm text-[var(--dark-blue-color)] opacity-80'>{t(description)}</p>

            </div>

        </React.Fragment>
    );

    return (
        <div className={`h-fit p-5 flex items-center gap-5 rounded-lg bg-[var(--white-color)] shadow-md group ${cols}`}>
            {link ? (
                <a 
                    href={link} 
                    className="w-full flex items-center gap-2.5 flex-wrap max-[450px]:flex-col max-[450px]:items-start"
                    target={link.startsWith('http') ? '_blank' : undefined}
                    rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                    {cardContent}
                </a>
            ) : (
                cardContent
            )}
        </div>
    );
}
