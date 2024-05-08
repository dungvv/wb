import { Image, Layout, Menu } from 'antd'
import { MAPPING_PATH, menuItems } from './constants'
import { useLocation, useNavigate } from 'react-router-dom'

import { LanguageSelection } from './LanguageSelection'
import Logo from '../assets/images/logo.svg'

const AntdHeader = Layout.Header

export const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleScrollToElement = (key: string) => {
    const targetElm = document.getElementById(key)
    if (targetElm) {
      targetElm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavigateTo = (pageKey: string) => {
    const targetPage = MAPPING_PATH[pageKey]
    if (location.pathname !== targetPage) {
      navigate(targetPage)
      setTimeout(() => {
        handleScrollToElement(pageKey)
      }, 1000)
    } else {
      handleScrollToElement(pageKey)
    }
  }
  return (
    <AntdHeader className='sticky top-0 z-10 w-full h-[81px] flex justify-between layout-header px-0 border-x-0 border-t-0 border-b border-solid border-green-caribbean'>
      <div className='flex justify-center items-center w-40 h-[81px] border-y-0 border-l-0 border-r border-solid border-green-caribbean'>
        <Image alt='logo' src={Logo} preview={false} />
      </div>
      <div className='flex flex-1 justify-center'>
        <Menu
          theme='dark'
          mode='horizontal'
          selectedKeys={[]}
          items={menuItems}
          onClick={(e) => handleNavigateTo(e.key)}
          className='flex flex-1 items-center justify-center uppercase text-gray-50 text-base !leading-[1.875rem] font-lexend'
        />
      </div>
      <LanguageSelection />
    </AntdHeader>
  )
}
