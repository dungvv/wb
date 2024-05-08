import ArrowRightIcon from '@/assets/icons/arrow-right.svg'
import { Image } from 'antd'

export const Banner = () => (
  <div className='w-[31.5rem] ml-20 xl:ml-[12.5rem] mt-36 xl:mt-[14.625rem]'>
    <div className='text-5xl leading-[3.75rem] font-light font-lexend'>
      Delivering Excellence Data and Software Services
    </div>
    <div className='font-lexend text-base font-light mt-[1.625rem] pl-6'>
      Not only striving towards effective value for customers, FETEK is also committed to providing specialized service
      quality for each customer's characteristics.
    </div>
    <div className='flex items-center justify-center gap-2 bg-primary-700 h-14 w-[11.25rem] cursor-pointer mt-12 hover:bg-primary-800'>
      <span className='font-lexend text-base uppercase'>Contact Us</span>
      <Image alt='icon-arrow-right' src={ArrowRightIcon} preview={false} />
    </div>
  </div>
)
