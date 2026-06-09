export const getChevronAnimation = (isOpen: boolean, lang: string) => {
    return {
        animate: { rotate: isOpen ? (lang === 'ar' ? -90 : 90) : 0 },
        transition: {
            duration: 0.2,
            ease: "easeOut" as const
        }
    }
}

export const dropdownContainer = {
    hidden: {
        opacity: 0,
        y: -10,
        scale: 0.95,
        visibility: 'hidden',
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        visibility: 'visible',
        transition: { 
            duration: 0.3,
            ease: "easeOut" as const, 
        }
    },
    exit: {
        opacity: 0,
        y: -10,
        scale: 0.95,
        visibility: 'hidden',
        transition: { 
            duration: 0.3,
            ease: "easeOut" as const, 
        }
    },  
};

export const container = {
    hidden: {
        opacity: 0,
        y: -10,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut" as const, 
        }
    },
    exit: {
        opacity: 0,
        y: -10,
        scale: 0.95,
        transition: {
            duration: 0.3,
            ease: "easeOut" as const, 
        }
    }
};

export const mobileContainer = {
    hidden: {
        opacity: 0,
        height: 0,
        overflow: 'hidden'
    },
    visible: {
        opacity: 1,
        height: 'auto',
        overflow: 'visible',
        transition: {
            duration: 0.3,
            ease: "easeOut" as const, 
        }
    },
    exit: {
        opacity: 0,
        height: 0,
        overflow: 'hidden',
        transition: {
            duration: 0.3,
            ease: "easeOut" as const, 
        }
    },
    smallTransition: {
        duration: 0.2,
        ease: "easeOut" as const
    }
}