export const aboutContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
            transition: {
            staggerChildren: 0.3,
            delayChildren: 0.15
        }
    },
};

export const aboutTitle = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.9,
        filter: 'blur(5px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.6, ease: "easeOut" as const }
    },
};

export const aboutDescription = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.98
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" as const }
    },
};

export const aboutCardsContainer = {
    hidden: {
        opacity: 0,
        y: 25,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: "easeOut", delay: 0.8 }
    },
};

export const aboutCard = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.9,
        rotateX: 15
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: { duration: 0.5, ease: "easeOut" as const }
    },
};

export const aboutCardsStagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
            transition: {
            staggerChildren: 0.15,
            delayChildren: 1.0
        }
    }
};