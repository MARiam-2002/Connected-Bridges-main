import React, { useEffect } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/home/Home';
import { useTranslation } from 'react-i18next';
import Error from './pages/error/Error';
import About from './pages/about/About';
import { ROUTES } from './constants/routes';
import OurClients from './pages/our-clients/OurClients';
import OurPartners from './pages/our-partners/OurPartners';
import AllServices from './pages/services/all-services/AllServices';
import SingleService from './pages/services/single-service/SingleService';
import ContactUs from './pages/contact-us/ContactUs';
import OurProjects from './pages/our-projects/OurProjects';
import Insights from './pages/insights/Insights';

const routes = createHashRouter([

    {path: ROUTES.HOME_ROUTE, element: <MainLayout />, children: [

        {index: true, element: <Home />},

        {path: `/${ROUTES.ABOUT_ROUTE}/${ROUTES.ABOUT_US_ROUTE}`, element: <About />},
        {path: `/${ROUTES.ABOUT_ROUTE}/${ROUTES.OUR_CLIENTS_ROUTE}`, element: <OurClients />},
        {path: `/${ROUTES.ABOUT_ROUTE}/${ROUTES.OUR_PARTNERS_ROUTE}`, element: <OurPartners />},

        {path: `/${ROUTES.SERVICES_ROUTE}/${ROUTES.ALL_SERVICES_ROUTE}`, element: <AllServices />},
        {path: `/${ROUTES.SERVICES_ROUTE}/:name/:id`, element: <SingleService />},

        {path: `/${ROUTES.PROJECTS_ROUTE}`, element: <OurProjects />},

        {path: `/${ROUTES.INSIGHTS_ROUTE}`, element: <Insights />},

        {path: `/${ROUTES.CONTACT_US_ROUTE}`, element: <ContactUs />},

    ]},

    {path: ROUTES.NOT_FOUND_ROUTE, element: <Error />}

]);

export default function App() {

    const { i18n } = useTranslation();

    useEffect(() => {

        const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.dir = dir;

        document.documentElement.lang = i18n.language;

    }, [i18n.language]);

    return <React.Fragment>

        <RouterProvider router={routes} />

    </React.Fragment>

}