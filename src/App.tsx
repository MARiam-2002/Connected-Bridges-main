import React, { useEffect, lazy, Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from './constants/routes';

// Lazy-load heavy page components for code splitting
const MainLayout   = lazy(() => import('./layouts/MainLayout'));
const Home         = lazy(() => import('./pages/home/Home'));
const About        = lazy(() => import('./pages/about/About'));
const OurClients   = lazy(() => import('./pages/our-clients/OurClients'));
const OurPartners  = lazy(() => import('./pages/our-partners/OurPartners'));
const AllServices  = lazy(() => import('./pages/services/all-services/AllServices'));
const SingleService = lazy(() => import('./pages/services/single-service/SingleService'));
const ContactUs    = lazy(() => import('./pages/contact-us/ContactUs'));
const OurProjects  = lazy(() => import('./pages/our-projects/OurProjects'));
const Insights     = lazy(() => import('./pages/insights/Insights'));
const Error        = lazy(() => import('./pages/error/Error'));

// Minimal loading spinner for Suspense fallback
function PageLoader() {
    return (
        <div className="w-full h-[100dvh] flex items-center justify-center bg-[var(--light-gray-color)]">
            <div
                className="w-10 h-10 border-4 border-[var(--light-gray-color)] border-t-[var(--light-blue-color)] rounded-full"
                style={{ animation: 'spin 0.8s linear infinite' }}
                aria-label="Loading"
                role="status"
            />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
}

const routes = createHashRouter([
    {
        path: ROUTES.HOME_ROUTE,
        element: <Suspense fallback={<PageLoader />}><MainLayout /></Suspense>,
        children: [
            { index: true, element: <Suspense fallback={<PageLoader />}><Home /></Suspense> },
            { path: `/${ROUTES.ABOUT_ROUTE}/${ROUTES.ABOUT_US_ROUTE}`,     element: <Suspense fallback={<PageLoader />}><About /></Suspense> },
            { path: `/${ROUTES.ABOUT_ROUTE}/${ROUTES.OUR_CLIENTS_ROUTE}`,  element: <Suspense fallback={<PageLoader />}><OurClients /></Suspense> },
            { path: `/${ROUTES.ABOUT_ROUTE}/${ROUTES.OUR_PARTNERS_ROUTE}`, element: <Suspense fallback={<PageLoader />}><OurPartners /></Suspense> },
            { path: `/${ROUTES.SERVICES_ROUTE}/${ROUTES.ALL_SERVICES_ROUTE}`, element: <Suspense fallback={<PageLoader />}><AllServices /></Suspense> },
            { path: `/${ROUTES.SERVICES_ROUTE}/:name/:id`,                 element: <Suspense fallback={<PageLoader />}><SingleService /></Suspense> },
            { path: `/${ROUTES.PROJECTS_ROUTE}`,                           element: <Suspense fallback={<PageLoader />}><OurProjects /></Suspense> },
            { path: `/${ROUTES.INSIGHTS_ROUTE}`,                           element: <Suspense fallback={<PageLoader />}><Insights /></Suspense> },
            { path: `/${ROUTES.CONTACT_US_ROUTE}`,                         element: <Suspense fallback={<PageLoader />}><ContactUs /></Suspense> },
        ],
    },
    { path: ROUTES.NOT_FOUND_ROUTE, element: <Suspense fallback={<PageLoader />}><Error /></Suspense> },
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
    </React.Fragment>;
}
