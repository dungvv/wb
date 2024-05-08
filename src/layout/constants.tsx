import ArrowDownIcon from '@/assets/icons/arrow-down.svg'
import { Image } from 'antd'

export const PAGE_KEYS = {
  ABOUT_FETEK: 'about-fetek',
  SERVICES: 'services',
  TECHNOLOGIES: 'technologies',
  PROCESS: 'process',
  PORTFOLIO: 'portfolio',
  DATA_SERVICES: 'data-services',
  SOFTWARE_SERVICES: 'software-services'
}

export const MAPPING_PATH = {
  [PAGE_KEYS.ABOUT_FETEK]: '/',
  [PAGE_KEYS.SERVICES]: '/',
  [PAGE_KEYS.TECHNOLOGIES]: '/',
  [PAGE_KEYS.PROCESS]: '/',
  [PAGE_KEYS.DATA_SERVICES]: '/portfolio/data',
  [PAGE_KEYS.SOFTWARE_SERVICES]: '/portfolio/software'
}

export const menuItems = [
  {
    key: PAGE_KEYS.ABOUT_FETEK,
    label: 'About FETEK'
  },
  {
    key: PAGE_KEYS.SERVICES,
    label: 'Services'
  },
  {
    key: PAGE_KEYS.TECHNOLOGIES,
    label: 'Technologies'
  },
  {
    key: PAGE_KEYS.PROCESS,
    label: 'Process'
  },
  {
    key: PAGE_KEYS.PORTFOLIO,
    label: (
      <div className='flex gap-2 items-center'>
        <span>Portfolio</span>
        <Image alt='arrow-down-icon' src={ArrowDownIcon} preview={false} />
      </div>
    ),
    children: [
      {
        key: PAGE_KEYS.DATA_SERVICES,
        label: 'Data Services'
      },
      {
        key: PAGE_KEYS.SOFTWARE_SERVICES,
        label: 'Software Services'
      }
    ]
  }
]

export const workItems = [
  {
    key: 'how-we-work',
    label: 'How We Work'
  },
  {
    key: 'contact-us',
    label: 'Contact Us'
  }
]

export const serviceItems = [
  {
    key: 'Web and Mobile Development',
    label: 'Web and Mobile Development'
  },
  {
    key: 'Backend Development',
    label: 'Backend Development'
  },
  {
    key: 'AI and Machine Learning',
    label: 'AI and Machine Learning'
  },
  {
    key: 'Data Transformation',
    label: 'Data Transformation'
  },
  {
    key: 'Datalake and Lakehouse',
    label: 'Datalake and Lakehouse'
  },
  {
    key: 'Reporting Development',
    label: 'Reporting Development'
  }
]

export const businessSolutionItems = [
  {
    key: 'Data Solution',
    label: 'Data Solution'
  },
  {
    key: 'IT Solution',
    label: 'IT Solution'
  },
  {
    key: 'Corporate',
    label: 'Corporate'
  }
]
