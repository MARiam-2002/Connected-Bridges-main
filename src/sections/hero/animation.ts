export const heroSequentialContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
            when: "beforeChildren"
        }
    }
}

export const heroSequentialItem = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95,
        filter: 'blur(10px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1.0] as const
        }
    },
}

export const heroTitle = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9,
        filter: 'blur(10px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] as const, delay: 0.2 }
    },
}

export const heroDescription = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.95,
        filter: 'blur(5px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] as const, delay: 0.4 }
    },
}

export const heroButtons = {
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
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const }
    },
}