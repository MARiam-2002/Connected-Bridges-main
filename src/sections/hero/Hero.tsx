import { Headset, LayoutDashboard } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { heroSequentialContainer, heroSequentialItem } from './animation';
import pageTitleBg from '../../assets/images/page-title-bg.webp';

export default function Hero() {

    const { t, i18n } = useTranslation();
    const [heroRef, isHeroInView] = useInView({ threshold: 0.2, triggerOnce: true });

    const ctaBtns = [
        { id: 1, label: t('hero.consultation'), href: '/', icon: Headset, variant: 'primary' },
        { id: 2, label: t('hero.projects'), href: '/', icon: LayoutDashboard, variant: 'secondary' },
    ]

    return <LazyMotion features={domAnimation}>
        <section
            ref={heroRef}
            className={`
                relative w-full h-[100dvh] bg-[var(--light-blue-color)] overflow-hidden
                ${i18n.language === 'en' ? 'max-[515px]:h-[110dvh]' : ''}
            `}
        >

            {/* Video background */}
            <div className="absolute inset-0 z-10">
                <video
                    src="https://neom.scene7.com/is/content/neom/20250626_REDEFINING_16X9_4K_MASTER_V9_WEB-3"
                    poster={pageTitleBg}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='w-full h-full object-cover scale-150'
                />
            </div>

            {/* Overlay and content */}
            <div
                className={`
                    absolute top-0 left-0 right-0 w-full h-full bg-[var(--dark-blue-opacity-color)] z-30 
                    flex items-center justify-center flex-col gap-10 common-p-block common-p-inline
                    ${i18n.language === 'en' ? 'max-[515px]:pt-20' : ''}
                `}
            >
                {/* Sequential content container */}
                <m.div
                    className="flex flex-col items-center gap-10 w-full"
                    variants={heroSequentialContainer}
                    initial="hidden"
                    animate={isHeroInView ? "visible" : "hidden"}
                >
                    {/* Title */}
                    <m.h1
                        className='
                            text-[var(--white-color)] w-3xl max-w-full text-center text-6xl font-bold
                            max-[1025px]:text-5xl max-[670px]:text-4xl max-[505px]:text-3xl tracking-wider glowing-text
                        '
                        variants={heroSequentialItem}
                    >
                        {t('hero.title')}
                    </m.h1>

                    {/* Description */}
                    <m.p
                        className='text-[var(--white-color)] w-4xl max-w-full text-center max-[505px]:text-sm'
                        variants={heroSequentialItem}
                    >
                        {t('hero.description')}
                    </m.p>

                    {/* CTA Buttons */}
                    <div
                        className='w-full flex flex-wrap items-center justify-center gap-4'
                    >
                        {ctaBtns.map((ctaBtn) => (
                            <m.div
                                key={ctaBtn.id}
                                variants={heroSequentialItem}
                                whileHover={{
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                                whileTap={{
                                    scale: 0.95,
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                                className='w-fit max-[465px]:w-full'
                            >
                                <Link
                                    to={ctaBtn.href}
                                    className={`
                                        px-5 py-2.5 rounded-md flex items-center gap-2.5 text-lg max-[555px]:text-base max-[465px]:justify-center
                                        duration-300 hover:scale-102 font-semibold glowing-button-animation max-[350px]:text-sm max-[465px]:w-full
                                        ${ctaBtn.variant === 'primary'
                                            ? `
                                                ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} 
                                                from-[var(--light-blue-color)] to-[var(--dark-blue-color)] text-[var(--white-color)]
                                            `
                                            : 'bg-[var(--white-color)] text-[var(--blue-color)]'
                                        }
                                        group
                                    `}
                                >
                                    <ctaBtn.icon size={24} className='group-hover:rotate-360 transition-all duration-300' />
                                    <p
                                        className={
                                            ctaBtn.variant !== 'primary'
                                                ? `
                                                ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} 
                                                from-[var(--light-blue-color)] to-[var(--dark-blue-color)] bg-clip-text text-transparent
                                            `
                                                : ''
                                        }
                                    >
                                        {ctaBtn.label}
                                    </p>
                                </Link>
                            </m.div>
                        ))}
                    </div>
                </m.div>
            </div>
        </section>

    </LazyMotion>

}
