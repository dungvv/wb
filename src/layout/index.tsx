import './style.sass'

import { Layout as AntdLayout } from 'antd'
import { Footer } from './Footer'
import { Header } from './Header'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <AntdLayout className='fetek-layout relative'>
      <Header />
      {children}
      <Footer />
    </AntdLayout>
  )
}
