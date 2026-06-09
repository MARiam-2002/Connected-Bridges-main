export const opacityVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: "easeOut" as const } },
}; 