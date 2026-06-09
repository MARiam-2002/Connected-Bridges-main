import React from 'react'
import Hero from '../../sections/hero/Hero'
import Clients from '../../sections/our-clients/Clients'
import Achievements from '../../sections/achievements/Achievements'
import AboutUs from '../../sections/about-us/AboutUs'
import Services from '../../sections/services/Services'
import LastProjects from '../../sections/last-projects/LastProjects'
import PopularInsights from '../../sections/popular-insights/PopularInsights'
import Partners from '../../sections/partners/Partners'
import SectionLayout from '../../layouts/SectionLayout'

export default function Home() {

    return <React.Fragment>

        <section className='space-y-20 pb-20'>

            <Hero />

            <SectionLayout className='gap-7.5' title='overview.about-us.title'>
                <AboutUs />
            </SectionLayout>

            <SectionLayout className='gap-7.5' title='overview.clients.title'>
                <Clients />
            </SectionLayout>

            <SectionLayout className='gap-7.5 !px-0' title='overview.achievements.title'>
                <Achievements />
            </SectionLayout>

            <SectionLayout className='gap-7.5' title='overview.services.title'>
                <Services />
            </SectionLayout>

            <SectionLayout className='gap-7.5' title='overview.last-projects.title'>
                <LastProjects />
            </SectionLayout>

            <SectionLayout className='gap-5' title='overview.partners.title'>
                <Partners />
            </SectionLayout>

            <SectionLayout className='gap-7.5' title='overview.popular-insights.title'>
                <PopularInsights />
            </SectionLayout>

        </section>

    </React.Fragment>

}
