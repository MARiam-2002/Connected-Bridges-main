import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { containerVariants, itemVariants } from './animation';

export default function Error() {
    const { t, i18n } = useTranslation();

    return <React.Fragment>
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className={`
                w-full min-h-[100dvh] flex flex-col items-center justify-center 
                bg-[var(--dark-blue-color)] text-[var(--white-color)] p-4 relative overflow-hidden
            `}
            dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
        >
            <motion.div 
                className="absolute top-0 left-0 w-full h-full opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle, var(--light-blue-color) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                }}
                animate={{
                    backgroundPosition: ['0% 0%', '20px 20px'],
                    transition: {
                        duration: 5,
                        ease: 'linear',
                        repeat: Infinity,
                    }
                }}
            />

            <div className="z-10 flex flex-col items-center text-center">
                <motion.h1
                    variants={itemVariants}
                    className="text-8xl md:text-9xl font-black glowing-text"
                >
                    {t('error_page.title')}
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    className="mt-4 text-lg md:text-xl text-[var(--sugar-color)] max-w-md"
                >
                    {t('error_page.message')}
                </motion.p>
                <motion.div variants={itemVariants} className='mt-8'>
                    <Link
                        to="/"
                        className="
                            px-5 py-2.5 rounded-md flex items-center gap-2.5 text-lg font-semibold
                            duration-300 hover:scale-105 glowing-button-animation
                            bg-[var(--white-color)] text-[var(--blue-color)]
                        "
                    >
                        <Home size={24} />
                        <span 
                            className={`
                                ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'} 
                                from-[var(--light-blue-color)] to-[var(--dark-blue-color)] bg-clip-text text-transparent
                            `}
                        >
                            {t('error_page.go_home')}
                        </span>
                    </Link>
                </motion.div>
            </div>
        </motion.section>
    </React.Fragment>
}
