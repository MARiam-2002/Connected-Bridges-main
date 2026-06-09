export const getChevronAnimation = (isOpen: boolean, lang: string) => {
    return {
        animate: { rotate: isOpen ? (lang === 'ar' ? -90 : 90) : 0 },
        transition: {
            duration: 0.2,
            ease: "easeOut" as const
        }
    }
}

export const mobileDropdownContainer = {
    hidden: {
        opacity: 0,
        height: 0,
    },
    visible: {
        opacity: 1,
        height: 'auto',
        transition: { duration: 0.4, ease: "easeOut" as const }
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.4, ease: "easeOut" as const }
    },
}