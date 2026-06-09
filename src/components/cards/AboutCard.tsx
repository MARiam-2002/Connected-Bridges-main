import React from 'react'
import type { ReactNode } from "react";

type AboutCardProps = {
    title: string;
    description: string;
    icon: ReactNode;
};

export default function AboutCard({ title, description, icon }: AboutCardProps) {

    return <React.Fragment>

        <div className='flex items-start gap-2.5'>

            <div className='w-14 min-w-14 h-14 min-h-14 flex items-center justify-center rounded-md bg-[var(--white-color)] text-3xl text-[var(--light-blue-color)]'>
                {icon}
            </div>

            <div className='flex flex-col text-start'>

                <h4 className='text-lg font-semibold text-[var(--dark-blue-color)]'>{title}</h4>
                <p className='text-sm text-[var(--dark-blue-color)] opacity-80'>{description}</p>

            </div>

        </div>

    </React.Fragment>

}
