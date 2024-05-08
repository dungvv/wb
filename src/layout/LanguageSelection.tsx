import { useState } from 'react'

const languages = [
  {
    key: 'en',
    label: 'EN'
  },
  {
    key: 'vn',
    label: 'VN'
  }
]

export const LanguageSelection = () => {
  const [activeKey, setActiveKey] = useState('en')

  const changeLanguage = (key: string) => {
    setActiveKey(key)
  }

  return (
    <div className='flex items-center justify-center w-40'>
      {languages.map((item, index) => (
        <div
          key={item.key}
          className={`${activeKey === item.key ? 'text-green-shamrock' : 'text-gray-50'} ${
            index === 0 ? 'border-y-0 border-l-0 border-r border-solid border-green-caribbean' : ''
          } cursor-pointer text-base font-lexend px-2 hover:text-green-shamrock`}
          onClick={() => changeLanguage(item.key)}
        >
          {item.label}
        </div>
      ))}
    </div>
  )
}
