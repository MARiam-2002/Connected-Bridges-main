export const pageContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    },
};

export const insightsGrid = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2
        }
    }
};

export const insightCard = {
    hidden: {
        opacity: 0,
        x: -30,
        y: 20,
        scale: 0.95,
        rotateY: -5
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotateY: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut" as const
        }
    }
};
