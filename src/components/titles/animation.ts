export const titleWidthAnimation = {
    hidden: {
        width: 0,
        opacity: 0
    },
    visible: {
        width: "auto",
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const
        }
    }
}

export const pageTitleAnim = {
    hidden: {
        opacity: 0,
        y: -20,
        filter: 'blur(5px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.6, ease: "easeOut" as const }
    },
};