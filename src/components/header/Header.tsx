import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    BadgeInfo, 
    Bell, 
    BrainCircuit, 
    ChevronRight, 
    DraftingCompass, 
    GlobeLock, 
    Handshake, 
    Headset, 
    House, 
    LayoutDashboard, 
    MonitorCog, 
    Newspaper, 
    PencilRuler, 
    ShieldCheck, 
    Users
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TranslateBtn from '../buttons/TranslateBtn';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import type { TFunction } from 'i18next';
import { container, getChevronAnimation, mobileContainer } from './animation';

// ====== import images ====== //
import whiteLogo from '../../assets/images/white-logo-size.png';
import colorsLogo from '../../assets/images/light-bg-logo.png';

// ====== static-data ====== //

const naveLinks = (t: TFunction) => {

    return [
        {
            id: 1,
            icon: House,
            title: 'header.home',
            link: ROUTES.HOME_ROUTE
        },
        {
            id: 2,
            icon: BadgeInfo,
            title: 'header.about',
            link: ROUTES.ABOUT_ROUTE,
            list: [
                { 
                    id: 1, 
                    icon: BadgeInfo, 
                    title: 'header.about_us', 
                    link: `${ROUTES.ABOUT_ROUTE}/${ROUTES.ABOUT_US_ROUTE}` 
                },
                { 
                    id: 2, 
                    icon: Handshake, 
                    title: 'header.our_partners', 
                    link: `${ROUTES.ABOUT_ROUTE}/our-partners` 
                },
                { 
                    id: 3, 
                    icon: Users, 
                    title: 'header.our_clients', 
                    link: `${ROUTES.ABOUT_ROUTE}/our-clients` 
                },
            ],
        },
        {
            id: 3,
            icon: PencilRuler,
            title: 'header.services',
            link: ROUTES.SERVICES_ROUTE,
            list: [
                { 
                    id: 1, 
                    icon: PencilRuler, 
                    title: 'header.all_services', 
                    link: `${ROUTES.SERVICES_ROUTE}/all-services` 
                },
                { 
                    id: 2, 
                    icon: DraftingCompass, 
                    title: 'header.design_build_solutions', 
                    link: `${ROUTES.SERVICES_ROUTE}/${t('header.design_build_solutions').toLowerCase().replace(/ /g, '-')}/1` 
                },
                { 
                    id: 3, 
                    isNew: true, 
                    icon: BrainCircuit, 
                    title: 'header.ai_surveillance_systems', 
                    link: `${ROUTES.SERVICES_ROUTE}/${t('header.ai_surveillance_systems').toLowerCase().replace(/ /g, '-')}/2` 
                },
                { 
                    id: 4, 
                    icon: MonitorCog, 
                    title: 'header.command_control_centers', 
                    link: `${ROUTES.SERVICES_ROUTE}/${t('header.command_control_centers').toLowerCase().replace(/ /g, '-')}/3` 
                },
                { 
                    id: 5, 
                    icon: GlobeLock, 
                    title: 'header.smart_security_systems', 
                    link: `${ROUTES.SERVICES_ROUTE}/${t('header.smart_security_systems').toLowerCase().replace(/ /g, '-')}/4` 
                },
                { 
                    id: 6, 
                    icon: Bell, 
                    title: 'header.emergency_critical_communications', 
                    link: `${ROUTES.SERVICES_ROUTE}/${t('header.emergency_critical_communications').toLowerCase().replace(/ /g, '-')}/5` 
                },
                { 
                    id: 7, 
                    isNew: true, 
                    icon: ShieldCheck, 
                    title: 'header.security_consulting_operations', 
                    link: `${ROUTES.SERVICES_ROUTE}/${t('header.security_consulting_operations').toLowerCase().replace(/ /g, '-')}/6` 
                },
            ],
        },
        {
            id: 4,
            icon: LayoutDashboard,
            title: 'header.projects',
            link: ROUTES.PROJECTS_ROUTE
        },
        {
            id: 5,
            icon: Newspaper,
            title: 'header.insights',
            link: ROUTES.INSIGHTS_ROUTE
        },
        {
            id: 6,
            icon: Headset,
            title: 'header.contact',
            link: ROUTES.CONTACT_US_ROUTE
        },
    ]

};

export default function Header() {

    const { t, i18n } = useTranslation();
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const isMobile = useMediaQuery('(max-width: 1064px)');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (!isMobile) {
            setActiveItem(null);
            setIsMenuOpen(false);
        }
    }, [isMobile]);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const handleMouseEnter = (title: string) => {
        if (!isMobile) {
            setActiveItem(title);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setActiveItem(null);
        }
    };

    const handleClick = (e: React.MouseEvent, title: string) => {
        e.preventDefault();
        if (isMobile) {
            setActiveItem(prev => (prev === title ? null : title));
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return <React.Fragment>

        <header 
            className={`
                w-full py-5 common-p-inline flex items-center justify-between  flex-wrap
                fixed top-0 start-0 z-50 duration-300 border-b border-[var(--mid-gray-color)]
                ${isScrolled || isMenuOpen ? 'bg-[var(--light-gray-color)] shadow-lg' : 'bg-transparent'}
            `}
        >

            <Link to={ROUTES.HOME_ROUTE} className='h-16'>
                <img src={isScrolled || isMenuOpen ? colorsLogo : whiteLogo} alt="logo" className='h-full' />
            </Link>

            <nav 
                onClick={closeMenu}
                className={`
                    max-[1065px]:fixed max-[1065px]:top-26 max-[1065px]:bottom-0 max-[1065px]:w-full scrollbar-hide duration-300
                    max-[1065px]:bg-[var(--light-gray-color)] max-[1065px]:shadow-lg max-[1065px]:z-50 max-[1065px]:overflow-y-auto
                    ${isMenuOpen 
                        ? 'max-[1065px]:start-0 max-[1065px]:opacity-100' 
                        : `${i18n.language === 'ar' ? 'max-[1065px]:start-[-100%]' : 'max-[1065px]:start-[100%]'} max-[1065px]:opacity-0`} 
                    `}
            >

                <ul 
                    onClick={(e) => e.stopPropagation()}
                    className='
                        flex items-center gap-1 max-[1065px]:h-full max-[1065px]:w-full max-[1065px]:flex-col
                        max-[1065px]:p-5 max-[1065px]:gap-5
                    '
                >

                    {naveLinks(t).map(link => (

                        link.list ? (

                            <li 
                                className='
                                    relative group py-5 max-[1065px]:py-0 max-[1065px]:w-full
                                    max-[1065px]:gap-2.5 max-[1065px]:flex-col max-[1065px]:flex
                                ' 
                                key={link.id}
                                onMouseEnter={() => handleMouseEnter(link.title)}
                                onMouseLeave={handleMouseLeave}
                            >

                                <NavLink 
                                    to={link.link}
                                    onClick={(e) => handleClick(e, link.title)}
                                    className={({ isActive }) => `
                                        px-4 py-2 flex items-center gap-1 text-base font-medium 
                                        rounded-md cursor-pointer duration-300 max-[1065px]:w-full
                                        max-[1065px]:px-5 max-[1065px]:py-2.5 justify-between max-[1065px]:gap-2.5
                                        ${(activeItem === link.title || isActive)
                                            ? (isScrolled || isMenuOpen
                                                ? 'bg-[var(--mid-gray-color)] text-[var(--dark-blue-color)]' 
                                                : 'bg-[var(--light-gray-color)] text-[var(--blue-color)]'
                                            )
                                            : (isScrolled || isMenuOpen
                                                ? 'text-[var(--dark-blue-color)]' 
                                                : 'text-[var(--white-color)]'
                                            )
                                        }
                                        max-[1065px]:bg-[var(--mid-gray-color)] max-[1065px]:text-[var(--dark-blue-color)]
                                    `}
                                >
                                    <div className='flex items-center gap-1 max-[1065px]:gap-2.5'>
                                        <link.icon size={18} />
                                        <p>{t(link.title)}</p>
                                    </div>

                                    <motion.div {...getChevronAnimation(activeItem === link.title, i18n.language)}>
                                        <ChevronRight size={18} className={`${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
                                    </motion.div>

                                </NavLink>

                                <AnimatePresence>

                                    {activeItem === link.title && (

                                        <motion.div 
                                            className='
                                                absolute nav-btn-hover-top left-[50%] translate-x-[-50%] z-50 
                                                w-auto min-w-max p-4 rounded-xl bg-[var(--light-gray-color)] shadow-lg
                                                grid grid-cols-1 gap-2 border border-[var(--gray-color)] max-[1065px]:p-2.5
                                                max-[1065px]:static max-[1065px]:left-0 max-[1065px]:translate-x-0 max-[1065px]:min-w-full
                                                max-[1065px]:rounded-md max-[1065px]:shadow-none
                                            '
                                            initial={isMobile ? mobileContainer.hidden : container.hidden}
                                            animate={isMobile ? mobileContainer.visible : container.visible}
                                            exit={isMobile ? mobileContainer.exit : container.exit}
                                            transition={isMobile ? mobileContainer.smallTransition : undefined}
                                        >

                                            <div 
                                                className="
                                                    absolute -top-[9px] left-1/2 -translate-x-1/2 w-0 h-0 
                                                    border-l-[9px] border-l-transparent 
                                                    border-r-[9px] border-r-transparent 
                                                    border-b-[9px] border-b-[var(--gray-color)]
                                                    max-[1065px]:hidden
                                                "
                                            ></div>

                                            <div 
                                                className="
                                                    absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 
                                                    border-l-8 border-l-transparent 
                                                    border-r-8 border-r-transparent 
                                                    border-b-8 border-b-[var(--light-gray-color)]
                                                    max-[1065px]:hidden
                                                "
                                            ></div>

                                            {link.list.map((subLink, idx) => (
                                                <React.Fragment key={subLink.id}>
                                                    {idx > 0 && (
                                                        <div className="w-full border-b border-[var(--gray-color)]" />
                                                    )}
                                                    <NavLink 
                                                        to={subLink.link} 
                                                        onClick={() => {
                                                            closeMenu();
                                                            setActiveItem(null);
                                                        }}
                                                        className={({ isActive }) => `
                                                            relative text-base px-4 py-2 rounded-md flex items-center justify-between gap-2.5 
                                                            font-medium
                                                            transition-colors duration-300 group/new-link
                                                            before:content-[""] before:absolute before:inset-0 before:z-[-1] before:rounded-md
                                                            before:bg-gradient-to-r max-[1065px]:text-sm
                                                            before:transition-opacity before:duration-300
                                                            hover:text-[var(--white-color)] hover:before:opacity-100
                                                            ${i18n.language === 'ar' 
                                                                ? 'before:from-[var(--light-blue-color)] before:to-[var(--blue-color)]' 
                                                                : 'before:from-[var(--blue-color)] before:to-[var(--light-blue-color)]'
                                                            }
                                                            ${isActive
                                                                ? 'text-[var(--white-color)] before:opacity-100'
                                                                : 'text-[var(--dark-blue-color)] before:opacity-0'
                                                            }
                                                        `}
                                                    >
                                                        <div className='flex items-center gap-1 max-[1065px]:gap-2.5'>
                                                            <subLink.icon size={20} stroke='currentColor' className='transition-colors duration-300 flex-shrink-0' />
                                                            <span>{t(subLink.title)}</span>
                                                        </div>
                                                        {subLink.isNew && 
                                                            <span 
                                                                className={`
                                                                    bg-[var(--blue-color)] text-[var(--white-color)] px-1 py-0.5 rounded-md text-[8px]
                                                                    shadow group-hover/new-link:bg-[var(--sugar-color)] 
                                                                    group-hover/new-link:text-[var(--blue-color)] duration-300
                                                                `}
                                                            >
                                                                {t('header.new')}
                                                            </span>
                                                        }
                                                    </NavLink>
                                                </React.Fragment>
                                            ))}

                                        </motion.div>

                                    )}

                                </AnimatePresence>

                            </li>

                        ) : (

                            <li className='py-5 max-[1065px]:py-0 max-[1065px]:w-full' key={link.id}>

                                <NavLink 
                                    to={link.link}
                                    end={link.link === ROUTES.HOME_ROUTE}
                                    onClick={closeMenu}
                                        className={({ isActive }) => `
                                        px-4 py-2 flex items-center gap-1 text-base font-medium 
                                        rounded-md cursor-pointer duration-300 max-[1065px]:w-full
                                        max-[1065px]:px-5 max-[1065px]:py-2.5 justify-start max-[1065px]:gap-2.5
                                        max-[1065px]:bg-[var(--mid-gray-color)] max-[1065px]:text-[var(--dark-blue-color)]
                                        ${
                                            isActive
                                                ? (isScrolled ? 'bg-[var(--mid-gray-color)] text-[var(--dark-blue-color)]' : 'bg-[var(--light-gray-color)] text-[var(--blue-color)]')
                                                : (isScrolled
                                                    ? 'text-[var(--dark-blue-color)] hover:bg-[var(--mid-gray-color)]' 
                                                    : 'text-[var(--white-color)] hover:bg-[var(--light-gray-color)] hover:text-[var(--blue-color)]'
                                                )
                                        }
                                    `}
                                >
                                    <link.icon size={18} />
                                    <p>{t(link.title)}</p>
                                </NavLink>

                            </li>

                        )

                    ))}

                    {isMobile && <li 
                        className='
                            relative group py-5 max-[1065px]:py-0 max-[1065px]:w-full
                            max-[1065px]:gap-2.5 max-[1065px]:flex-col max-[1065px]:flex
                        '
                    >
                        <TranslateBtn isMobile={isMobile} onClose={closeMenu} className='w-full bg-[var(--mid-gray-color)] px-5 py-2.5 shadow-none' />
                    </li>}

                </ul>

            </nav>

            <div className='flex items-center gap-2.5 max-[1065px]:hidden'>
                <TranslateBtn className={`${isScrolled ? 'bg-[var(--mid-gray-color)] shadow-none' : ''} duration-300`} />
            </div>

            {isMobile && (
                <button
                    onClick={toggleMenu}
                    className="flex flex-col items-center justify-center gap-1.5 p-2 z-50"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`
                            w-8 h-1 rounded-full transition-all duration-300
                            ${isMenuOpen 
                                ? 'rotate-45 translate-y-[10px] bg-[var(--dark-blue-color)]' : (isScrolled ? 'bg-[var(--dark-blue-color)]' 
                                : 'bg-[var(--white-color)]'
                            )}
                        `}
                    />
                    <span
                        className={`
                            w-8 h-1 rounded-full transition-all duration-300
                            ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
                            ${isScrolled ? 'bg-[var(--dark-blue-color)]' : 'bg-[var(--white-color)]'}
                        `}
                    />
                    <span
                        className={`
                            w-8 h-1 rounded-full transition-all duration-300
                            ${isMenuOpen ? '-rotate-45 -translate-y-[10px] bg-[var(--dark-blue-color)]' : (isScrolled ? 'bg-[var(--dark-blue-color)]' : 'bg-[var(--white-color)]')}
                        `}
                    />
                </button>
            )}

        </header>

    </React.Fragment>

}
