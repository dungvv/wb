import './style.sass'

import { Button, Image } from 'antd'

import DataServiceImage from '@/assets/images/data-services-image.jpg'
import { PAGE_KEYS } from '@/layout/constants'

export const DataServices = () => {
  const handleOpenPdfPage = () => {
    window.open('https://www.dot.nd.gov/manuals/design/caddmanual/UG_Meetings/Adobe%20Portfolio%20Guide.pdf', '_blank')
  }

  return (
    <div id={PAGE_KEYS.DATA_SERVICES} className='software-services -mt-[81px]'>
      <div className='flex flex-col gap-10 xl:mx-[12.5rem] mx-20 mt-56 mb-44'>
        <div className='flex justify-center gap-10'>
          <div className='flex flex-col justify-center gap-3.5 w-[20.25rem]'>
            <span className='text-5xl font-medium text-white'>Data services</span>
            <span className='text-base font-light text-gray-50'>
              Data services are part of cloud-native application development and open hybrid cloud IT strategies
            </span>
          </div>
          <div className='w-[47.25rem]'>
            <Image alt='software-services' preview={false} src={DataServiceImage} className='rounded-lg' />
          </div>
        </div>
        <div className='flex justify-center'>
          <Button
            type='primary'
            htmlType='submit'
            className='flex h-14 text-base uppercase text-gray-50 bg-primary-700 justify-center items-center mx-auto w-44 rounded-full hover:!bg-primary-800'
            onClick={handleOpenPdfPage}
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  )
}
