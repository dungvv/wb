import AlgorithmIcon from '@/assets/icons/algorithm-icon.svg'
import BigDataIcon from '@/assets/icons/big-data-icon.svg'
import CodingIcon from '@/assets/icons/coding-icon.svg'
import DatabaseIcon from '@/assets/icons/database-icon.svg'
import { Image } from 'antd'
import MachineLearningIcon from '@/assets/icons/machine-learning-icon.svg'
import ReportIcon from '@/assets/icons/report-icon.svg'

export const serviceLists = [
  {
    key: 'Web & Mobile Development',
    label: 'Web & Mobile \nDevelopment',
    bgClassName: 'web-dev-bg',
    icon: <Image alt='web-dev-bg' preview={false} src={CodingIcon} height={61} />
  },
  {
    key: 'Backend Development',
    label: 'Backend \nDevelopment',
    bgClassName: 'backend-dev-bg',
    icon: <Image alt='backend-dev-bg' preview={false} src={AlgorithmIcon} height={61} />
  },
  {
    key: 'AI & Machine Learning',
    label: 'AI & Machine \nLearning',
    bgClassName: 'machine-learning-dev-bg',
    icon: <Image alt='machine-learning-dev-bg' preview={false} src={MachineLearningIcon} height={61} />
  },
  {
    key: 'Data transformation',
    label: 'Data \ntransformation',
    bgClassName: 'data-transformation-dev-bg',
    icon: <Image alt='data-transformation-dev-bg' preview={false} src={BigDataIcon} height={61} />
  },
  {
    key: 'datalake . & lakehouse',
    label: 'datalake . \n& lakehouse',
    bgClassName: 'datalake-dev-bg',
    icon: <Image alt='datalake-dev-bg' preview={false} src={DatabaseIcon} height={61} />
  },
  {
    key: 'reporting Development',
    label: 'reporting \nDevelopment',
    bgClassName: 'reporting-dev-bg',
    icon: <Image alt='reporting-dev-bg' preview={false} src={ReportIcon} height={61} />
  }
]
