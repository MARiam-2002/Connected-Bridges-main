import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaAward, FaRegBuilding } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "../../hooks/useInView";
import { achievementsContainer, achievementsCounter, achievementsTitle } from "./animation";

const Counter = ({ value, isInView }: { value: string; isInView: boolean }) => {

    const numberMatch = value.match(/\d+/);
    const number = numberMatch ? parseInt(numberMatch[0], 10) : 0;
    const parts = value.split(/(\d+)/);

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, number, achievementsCounter);
            return controls.stop;
        }
    }, [count, number, isInView]);

    return <React.Fragment>
        <span>
            {parts.map((part, index) => (
                /\d+/.test(part) ? <motion.span key={index}>{rounded}</motion.span> : <span key={index}>{part}</span>
            ))}
        </span>
    </React.Fragment>
};

export default function Achievements() {

    const { t, i18n } = useTranslation();

    const [containerRef, isInView] = useInView({
        threshold: 0.2,
        rootMargin: '50px',
        triggerOnce: true
    });

    const achievementsData = [

        {
            icon: <FaAward size={40} className="text-[var(--dark-blue-color)]" />,
            value: i18n.language === "ar" ? "15 +" : "+ 15",
            title: t("overview.achievements.cards.years.title"),
        },

        {
            icon: <GoProject size={40} className="text-[var(--dark-blue-color)]" />,
            value: i18n.language === "ar" ? "100 +" : "+ 100",
            title: t("overview.achievements.cards.projects.title"),
        },

        {
            icon: <FaRegBuilding size={40} className="text-[var(--dark-blue-color)]" />,
            value: i18n.language === "ar" ? "10 +" : "+ 10",
            title: t("overview.achievements.cards.sectors.title"),
        },

    ];

    return <React.Fragment>

        <motion.div
            ref={containerRef as React.RefObject<HTMLDivElement>}
            variants={achievementsContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`
                    w-full common-p-block common-p-inline grid grid-cols-3 max-[835px]:grid-cols-2 max-[540px]:grid-cols-1
                    ${i18n.language === "ar" ? "bg-gradient-to-r" : "bg-gradient-to-l"}
                    from-[var(--light-blue-color)] to-[var(--dark-blue-color)]
                `}
        >

            {achievementsData.map((achievement, index) => (
                <div
                    key={index}
                    className="
                        py-5 rounded-lg text-center text-[var(--white-color)] flex flex-col items-center gap-2.5 
                        max-[835px]:last:col-span-2 max-[540px]:last:col-span-1
                    "
                >
                    <p className="text-5xl font-bold text-shadow-md">
                        <Counter value={achievement.value} isInView={isInView} />
                    </p>
                    <motion.h3
                        variants={achievementsTitle}
                        className="text-xl font-semibold text-shadow-md"
                    >
                        {achievement.title}
                    </motion.h3>
                </div>
            ))}
        </motion.div>

    </React.Fragment>

}
