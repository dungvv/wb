import AboutFetekImage from '@/assets/images/about-fetek.png'
import CertificateIcon from '@/assets/icons/certificate-icon.svg'
import { Image } from 'antd'
import { PAGE_KEYS } from '@/layout/constants'

export const AboutFetek = () => (
  <div id={PAGE_KEYS.ABOUT_FETEK} className='flex justify-between gap-8 xl:mx-[12.5rem] mx-20 py-20 about-fetek'>
    <div className='lg:w-[26rem] w-full flex flex-col'>
      <div className='font-medium text-5xl leading-[3.75rem] text-primary-700'>About FETEK</div>

      <div className='flex flex-col gap-4 mt-10'>
        <div className='!w-4 !h-4 bg-primary-50 rounded-full' />

        <div className='text-base font-light text-gray-50'>
          We are a dynamic and innovative company dedicated to providing top-notch software development services
          tailored to meet the unique needs of our clients. With a team of highly skilled and experienced professionals,
          we specialize in delivering cutting-edge solutions that drive business growth and efficiency.
        </div>
      </div>

      <div className='flex gap-5 mt-8'>
        <div className='bg-white shadow-default border-x-0 border-b-0 border-t-2 border-solid border-primary-700 w-[9.75rem] p-4'>
          <div>
            <Image alt='cert' src={CertificateIcon} preview={false} height={58} />
          </div>
          <div className='mt-5 leading-5 text-gray-700 font-light'>
            Top Fastest Growing Enterprises in the period 2018 - 2023
          </div>
        </div>
        <div className='bg-white shadow-default border-x-0 border-b-0 border-t-2 border-solid border-primary-700 w-[9.75rem] p-4'>
          <div>
            <Image alt='cert' src={CertificateIcon} preview={false} height={58} />
          </div>
          <div className='mt-5 leading-5 text-gray-700 font-light'>Top 10 Reputable Technology Enterprises in 2023</div>
        </div>
      </div>
    </div>

    <div className='flex flex-col'>
      <div className='flex relative justify-end ml-[3.75rem]'>
        <Image alt='team-work' src={AboutFetekImage} preview={false} />
        <div className='bg-white absolute bottom-0 h-20 w-full flex items-center justify-center'>
          <span className='text-gray-700 text-base leading-5'>Professional / Classy / Friendly</span>
        </div>
      </div>
      <div className='flex flex-col justify-end h-full'>
        <div className='w-[3.75rem] h-[3.75rem] bg-primary-500' />
      </div>
    </div>
  </div>
)
