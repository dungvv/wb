import { ReactNode } from 'react'

type ServiceCardProps = {
  bgClassName: string
  icon: ReactNode
  label: string
}

export const ServiceCard = ({ bgClassName, icon, label }: ServiceCardProps) => (
  <div
    className={`relative min-[21.5rem] h-[16.25rem] px-6 pt-[4.5rem] pb-8 bg-center bg-no-repeat bg-cover ${bgClassName}`}
  >
    <div className='flex flex-col justify-start gap-6'>
      <div>{icon}</div>
      <span className='text-white text-2xl leading-9 uppercase whitespace-break-spaces'>{label}</span>
    </div>
  </div>
)
