import EmailIcon from '@/assets/images/contacts/email.svg'
import { Image } from 'antd'
import { Number1Icon } from '@/assets/images/solutions/Number1Icon'
import { Number2Icon } from '@/assets/images/solutions/Number2Icon'
import { Number3Icon } from '@/assets/images/solutions/Number3Icon'
import { Number4Icon } from '@/assets/images/solutions/Number4Icon'
import PhoneIcon from '@/assets/images/contacts/phone.svg'
import PinIcon from '@/assets/images/contacts/pin.svg'

export const solutionCards = [
  {
    key: 'share-your-problem',
    number: 1,
    title: 'Share us your problem',
    description:
      'Our engineers will co-work with you to understand, analyze and proposal you our solutions for finishing the projects.',
    icon: <Number1Icon />
  },
  {
    key: 'We build out our team',
    number: 2,
    title: 'We build out our team',
    description:
      'Our lead engineer will work with you to build out your engineering dream team. All the people you’ll need to make your project a reality',
    icon: <Number2Icon />
  },
  {
    key: 'work the way you work',
    number: 3,
    title: 'Work the way \nyou work',
    description:
      'We’ll act as an extension of your team. Whether you use agile, kanban, or waterfall methodology, your new team will fit in with your working style.',
    icon: <Number3Icon />
  },
  {
    key: 'stick around post-delivery',
    number: 4,
    title: 'stick around \npost-delivery',
    description:
      'We’re in this for the long term and we are available for post-project support and maintenance or anything else.',
    icon: <Number4Icon />
  }
]

export const contactCards = [
  {
    key: 'phone',
    title: 'hotline',
    description: '+84-973 450 208',
    icon: <Image alt='phone' preview={false} src={PhoneIcon} />
  },
  {
    key: 'email',
    title: 'email',
    description: 'contact@fetek.vn\ncustomer@fetek.vn',
    icon: <Image alt='phone' preview={false} src={EmailIcon} />
  },
  {
    key: 'location',
    title: 'location',
    description: '2nd floor, 291 Building, Hoang Dao Thuy Street Ha Noi, Viet Nam',
    icon: <Image alt='phone' preview={false} src={PinIcon} />
  }
]
