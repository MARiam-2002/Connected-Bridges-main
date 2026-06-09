import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from 'react-icons/si';
import whiteLogo from '../../assets/images/white-logo.png';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import type { ElementType } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, toTopVariants } from './animation';

interface FooterLink {
    label: string;
    icon?: ElementType;
    to?: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

interface SocialLink {
    icon: ElementType;
    href: string;
}

export default function Footer() {

    const { t, i18n } = useTranslation();

    const footerLinks: FooterSection[] = [
        {
            title: t('footer.office.title'),
            links: [
                { label: t('footer.office.address'), icon: MapPin },
                { label: 'info@connectedbridges.com', icon: Mail },
                { label: '+966 597995933', icon: Phone },
            ]
        },
        {
            title: t('footer.links.title'),
            links: [
                { label: t('footer.links.home'), to: ROUTES.HOME_ROUTE },
                { label: t('footer.links.about_us'), to: ROUTES.ABOUT_ROUTE },
                { label: t('footer.links.services'), to: ROUTES.HOME_ROUTE },
                { label: t('footer.links.projects'), to: ROUTES.HOME_ROUTE },
                { label: t('footer.links.insights'), to: ROUTES.HOME_ROUTE },
            ],
        }
    ]

    const socialLinks: SocialLink[] = [
        { icon: SiFacebook, href: 'https://facebook.com' },
        { icon: SiX, href: 'https://twitter.com' },
        { icon: SiInstagram, href: 'https://instagram.com' },
        { icon: SiLinkedin, href: 'https://linkedin.com' },
    ]

    return <React.Fragment>

        <footer
            className={`
                text-[var(--light-gray-color)] pt-24 pb-8 common-p-inline sm:px-6 lg:px-16
                ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} from-[var(--blue-color)] to-[var(--dark-blue-color)]
            `}
        >

            <div className='container mx-auto'>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='grid grid-cols-[3fr_3fr_2fr_3fr] gap-12 max-[1090px]:grid-cols-[3fr_3fr] max-[660px]:grid-cols-1'
                >

                    <motion.div variants={toTopVariants} className='space-y-6'>

                        <Link to={ROUTES.HOME_ROUTE}>
                            <img src={whiteLogo} alt="Connected Bridges Logo" className='w-40' />
                        </Link>

                        <p className='leading-relaxed'>
                            {t('footer.description')}
                        </p>

                    </motion.div>

                    {footerLinks.map((section) => (

                        <motion.div variants={toTopVariants} key={section.title}>

                            <h3 className='text-xl font-semibold mb-5 relative'>
                                <span className='absolute start-0 -bottom-2 h-0.5 w-12 bg-[var(--light-blue-color)]'></span>
                                {section.title}
                            </h3>

                            <ul className='space-y-4'>
                                {section.links.map((link) => (
                                    <li key={link.label} className='flex items-start gap-3'>
                                        {link.icon && <link.icon size={20} className='text-[var(--light-blue-color)] mt-1 flex-shrink-0' />}
                                        {link.to ?
                                            <Link to={link.to} className='hover:text-[var(--light-blue-color)] transition-colors duration-300'>
                                                {link.label}
                                            </Link>
                                            :
                                            <span>{link.label}</span>
                                        }
                                    </li>
                                ))}
                            </ul>

                        </motion.div>

                    ))}

                    <motion.div variants={toTopVariants}>

                        <h3 className='text-xl font-semibold mb-5 relative'>
                            <span className='absolute start-0 -bottom-2 h-0.5 w-12 bg-[var(--light-blue-color)]'></span>
                            {t('footer.newsletter.title')}
                        </h3>

                        <form className='mt-6 space-y-5'>

                            <div className='relative'>
                                <Mail size={20} className='absolute start-3 top-1/2 -translate-y-1/2 text-[var(--gray-color)]' />
                                <input
                                    type="email"
                                    placeholder={t('footer.newsletter.placeholder')}
                                    className='
                                        w-full bg-transparent border-b-2 border-[var(--white-color-opacity)] 
                                        focus:border-[var(--light-blue-color)] 
                                        outline-none py-3 px-10 text-[var(--white-color)] 
                                        transition-colors duration-300 placeholder:text-[var(--gray-color)]
                                    '
                                />
                                <button
                                    type='submit'
                                    className={`
                                        absolute end-3 top-1/2 -translate-y-1/2 text-[var(--gray-color)] 
                                        hover:text-[var(--light-blue-color)] transition-colors duration-300
                                        ${i18n.language === 'ar' ? '-rotate-90' : ''}
                                    `}
                                >
                                    <Send size={20} />
                                </button>
                            </div>

                            <div className='flex items-center gap-4 pt-2'>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.href}
                                        href={social.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='
                                            w-10 h-10 rounded-full bg-[var(--white-color-opacity)] hover:bg-[var(--light-blue-color)] 
                                            flex items-center justify-center text-[var(--white-color)] transition-all duration-300
                                        '
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </form>

                    </motion.div>

                </motion.div>

                <div className='mt-16 pt-8 border-t border-[var(--white-color-opacity)] text-center text-[var(--sugar-color)]'>
                    <p>&copy; {new Date().getFullYear()} Connected Bridges. {t('footer.copyright')}</p>
                </div>

            </div>

        </footer>

    </React.Fragment>
}

