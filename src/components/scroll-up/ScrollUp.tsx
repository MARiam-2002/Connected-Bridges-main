import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { opacityVariants } from "./animation";

export default function ScrollUp() {

    const { i18n } = useTranslation();
    const { pathname } = useLocation();

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <React.Fragment>

        <AnimatePresence>

            {show && 
                <motion.div
                    initial={opacityVariants.hidden}
                    animate={opacityVariants.visible}
                    exit={opacityVariants.exit}
                    className={`fixed bottom-5 end-5 z-50`}
                >
                    <motion.button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className={`
                            w-10 h-10 flex items-center justify-center text-[var(--white-color)] rounded-full
                            ${i18n.language === 'ar' ? 'bg-gradient-to-r' : 'bg-gradient-to-l'}
                            from-[var(--light-blue-color)] to-[var(--dark-blue-color)]
                            cursor-pointer hover:scale-115 transition-all duration-300
                        `}
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                </motion.div>
            }

        </AnimatePresence>

    </React.Fragment>

}
