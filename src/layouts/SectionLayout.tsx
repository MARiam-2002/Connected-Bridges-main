import React from 'react'
import MainTitle from '../components/titles/MainTitle'

export default function SectionLayout({ className, children, title }: { className: string, children: React.ReactNode, title: string }) {

    return <React.Fragment>

        <section className={`common-p-inline mx-auto text-center w-full flex flex-col ${className}`}>

            <MainTitle title={title} />

            {children}

        </section>

    </React.Fragment>

}
