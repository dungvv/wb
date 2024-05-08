import { contactCards, solutionCards } from './constants'

import { PAGE_KEYS } from '@/layout/constants'
import { SolutionCard } from './SolutionCard'

export const Contacts = () => (
  <div id={PAGE_KEYS.PROCESS}>
    <div className='flex flex-col gap-8 xl:mx-[12.5rem] mx-20 py-20'>
      <div className='flex justify-between'>
        <div className='text-white text-5xl leading-[3.75rem] font-medium w-[23.625rem]'>How do we work together?</div>
        <div className='text-gray-50 text-base font-light w-[31.875rem] py-3'>
          FETEK has been highly appreciated and chosen as a long-term partner by many domestic and international
          organizations because of its service quality with international standards and the professional working style
          of its staff.
        </div>
      </div>

      <div className='grid grid-cols-4 gap-5'>
        {solutionCards.map((item) => (
          <SolutionCard {...item} />
        ))}
      </div>
    </div>

    <div className='bg-[#03393680] grid grid-cols-3 gap-5 xl:px-[12.5rem] px-20 py-[3.75rem]'>
      {contactCards.map((item) => (
        <div key={item.key} className='bg-white py-4 px-9'>
          <div>{item.icon}</div>
          <div className='text-2xl leading-9 uppercase text-gray-700 font-medium my-1'>{item.title}</div>
          <div className='text-base whitespace-break-spaces font-light text-[#031E39]'>{item.description}</div>
        </div>
      ))}
    </div>
  </div>
)
