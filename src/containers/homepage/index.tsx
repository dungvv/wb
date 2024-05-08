import './style.sass'

import { AboutFetek } from '@/components/about-fetek'
import { Banner } from '@/components/Banner'
import { Contacts } from '@/components/contacts'
import { SendUsMessage } from '@/components/send-us-message'
import { ServiceList } from '@/components/about-services'
import { TechnologyList } from '@/components/about-technologies'

export const HomePage = () => (
  <>
    <div className='layout-banner lg:h-[56rem] h-screen -mt-[81px]'>
      <Banner />
    </div>
    <div className='home-page'>
      <div className='fetek-features'>
        <AboutFetek />
        <ServiceList />
        <TechnologyList />
      </div>
      <div className='about-contacts'>
        <Contacts />
      </div>
      <SendUsMessage />
    </div>
  </>
)
