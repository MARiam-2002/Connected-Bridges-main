export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.05
        }
    }
};

export const toTopVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1, y: 0, transition: {
            duration: 0.3,
            ease: "easeOut" as const,
        }
    },
};