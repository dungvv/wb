import './style.sass'

import { TECHNOLOGIES, technologyList, technologyTabs } from './constants'
import { useMemo, useState } from 'react'

import { PAGE_KEYS } from '@/layout/constants'

const MAX_ELEMENT_PER_ROW = 5

export const TechnologyList = () => {
  const [activeKey, setActiveKey] = useState(TECHNOLOGIES.LANGUAGE)

  const onChangeActiveKey = (key: TECHNOLOGIES) => {
    setActiveKey(key)
  }

  const [items, additionItems] = useMemo(() => {
    const itemLength = technologyList[activeKey].length
    const balance = itemLength % MAX_ELEMENT_PER_ROW
    const endOfItems = balance > 0 ? itemLength - balance : itemLength - MAX_ELEMENT_PER_ROW
    const items = technologyList[activeKey].slice(0, endOfItems)
    const additionItems = technologyList[activeKey].slice(endOfItems)
    return [items, additionItems]
  }, [activeKey])

  return (
    <div id={PAGE_KEYS.TECHNOLOGIES} className='flex flex-col xl:mx-[12.5rem] mx-20 py-20 about-technology'>
      <div className='flex justify-between'>
        <div className='text-primary-700 text-5xl leading-[3.75rem] font-medium w-[23.625rem]'>
          Technologies we're experts in
        </div>
        <div className='text-gray-50 text-base font-light w-[31.875rem] py-3'>
          From scratch to execution, Fetek always applies advanced and cutting-edge technologies to deliver your ideas
          into impactful and scalable products.
        </div>
      </div>

      <div className='grid grid-cols-3 mt-12 mb-[3.25rem] border-x-0 border-t-0 border-b border-solid border-[#FFFFFF4D] bg-[#34CB9E33]'>
        {technologyTabs.map((item) => (
          <div
            key={item}
            onClick={() => onChangeActiveKey(item)}
            className={`${
              activeKey === item ? 'active-tab bg-primary-800' : ''
            } relative h-[3.75rem] uppercase text-base text-white flex items-center justify-center font-inter cursor-pointer`}
          >
            {item}
          </div>
        ))}
      </div>

      <div className='service-grid grid grid-cols-5 '>
        {items.map((item) => (
          <div key={item.key} className='flex gap-3 items-center py-[29px] pl-5 pr-2 service-item'>
            <div>{item.icon}</div>
            <span className='text-lg'>{item.label}</span>
          </div>
        ))}
        {additionItems.map((item) => (
          <div key={item.key} className='flex gap-3 items-center py-[29px] pl-5 pr-2 addition-service-item'>
            <div>{item.icon}</div>
            <span className='text-lg'>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
