import './style.sass'

import { ReactNode } from 'react'

type SolutionCardProps = {
  number: number
  icon: ReactNode
  title: string
  description: string
}

export const SolutionCard = ({ number, icon, title, description }: SolutionCardProps) => (
  <div className='solution-card'>
    <div className='number'>{`#${number}`}</div>
    <div className='icon'>{icon}</div>
    <div className='title uppercase'>{title}</div>
    <div className='description'>{description}</div>
  </div>
)
