export const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut" as const,
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
    exit: { opacity: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export const toTopVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
};  