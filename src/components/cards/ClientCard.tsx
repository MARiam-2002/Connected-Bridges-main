import React from 'react'
import { motion, type Variants } from 'framer-motion'


export default function ClientCard({ logo, className, variants }: { logo: { src: string, alt: string }, className?: string, variants?: Variants }) {

    return <React.Fragment>

        <motion.div
            variants={variants}
            className={`
                w-44 h-44 p-4 flex items-center justify-center bg-[var(--white-color)]  rounded-xl overflow-hidden
                shadow-md max-[410px]:h-32 max-[410px]:w-32 cursor-pointer ${className}
            `}
        >
            <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain rounded-xl" />
        </motion.div>

    </React.Fragment>

}
