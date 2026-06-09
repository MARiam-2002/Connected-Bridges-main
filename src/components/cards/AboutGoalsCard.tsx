import React from 'react'

type AboutGoalsCardProps = {
    icon: React.ComponentType<{ size: number }>;
    title: string;
    description: string;
}

export default function AboutGoalsCard({ icon: Icon, title, description }: AboutGoalsCardProps) {

    return <React.Fragment>

        <div className='p-5 flex gap-2.5 rounded-lg bg-[var(--white-color)] group max-[450px]:flex-col'>

            <div 
                className='
                    w-14 min-w-14 h-14 min-h-14 flex items-center justify-center rounded-md 
                    bg-[var(--mid-gray-color)] text-[var(--light-blue-color)]
                    group-hover:bg-[var(--light-blue-color)] group-hover:text-[var(--white-color)] duration-300
                '
            >
                <Icon size={30} />
            </div>

            <div className='space-y-2.5'>

                <h4 className='text-xl font-semibold text-[var(--dark-blue-color)]'>{title}</h4>
                <p className='text-sm text-[var(--dark-blue-color)] opacity-80'>{description}</p>

            </div>

        </div>

    </React.Fragment>

}
