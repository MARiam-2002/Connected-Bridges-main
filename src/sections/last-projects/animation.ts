export const projectsContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

export const projectCard = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
        rotateX: 10
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const
        }
    }
};