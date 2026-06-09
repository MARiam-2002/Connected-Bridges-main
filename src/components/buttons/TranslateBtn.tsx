import { ChevronRight, Languages } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';
import { dropdownContainer, getChevronAnimation } from './animation';

export default function TranslateBtn({isMobile, className, onClose}: {isMobile?: boolean, className?: string, onClose?: () => void}) {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { t, i18n } = useTranslation();

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false);
        if (onClose) onClose();
    };

    useEffect(() => {

        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [menuRef]);

    const languages = [
        { id: 1, title: t('header.english'), value: 'en', code: 'us' },
        { id: 2, title: t('header.arabic'), value: 'ar', code: 'sa' }
    ];

    return <React.Fragment>

        <div className='relative max-[1065px]:flex max-[1065px]:flex-col gap-2.5' ref={menuRef}>

            <button
                className={`
                    p-2 rounded-md bg-[var(--light-gray-color)] shadow-md text-[var(--dark-blue-color)] 
                    flex items-center justify-between gap-1 cursor-pointer ${className}
                `}
                onClick={toggleOpen}
            >
                <div className='flex items-center gap-1 text-base font-medium '>
                    <Languages size={20} color='var(--dark-blue-color)' />
                    {isMobile && <p>{t('header.language')}</p>}
                </div>

                <motion.div {...getChevronAnimation(isOpen, i18n.language)}>
                    <ChevronRight size={18} color='var(--blue-color)' className={`${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
                </motion.div>
            </button>

            <AnimatePresence>

                {isOpen && <motion.ul
                    className='
                        absolute nav-btn-hover-top mt-2.5 max-[1065px]:mt-0 end-0 w-auto max-[1065px]:min-w-[100%] mb-5
                        min-w-max bg-[var(--light-gray-color)] rounded-md shadow-md overflow-hidden
                        max-[1065px]:static max-[1065px]:left-0 max-[1065px]:translate-x-0
                    '
                    initial={dropdownContainer.hidden}
                    animate={dropdownContainer.visible}
                    exit={dropdownContainer.exit}
                >

                    {languages.map(item => (
                        <li
                            key={item.id}
                            onClick={() => changeLanguage(item.value)}
                            className={`
                                px-4 py-2 text-base font-medium border-b border-b-[var(--mid-gray-color)] 
                                last:border-b-0 cursor-pointer duration-300 flex items-center gap-2
                                ${i18n.language === item.value
                                    ? 'bg-[var(--blue-color)] text-[var(--white-color)]'
                                    : 'text-[var(--dark-blue-color)] hover:bg-[var(--blue-color)] hover:text-[var(--white-color)]'
                                }
                            `}
                        >
                            <Flag className='w-5' code={item.code} />
                            {item.title}
                        </li>
                    ))}

                </motion.ul>}

            </AnimatePresence>

        </div>

    </React.Fragment>

}
