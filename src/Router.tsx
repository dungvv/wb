import { DataServices } from './containers/data-services'
import { HomePage } from './containers/homepage'
import { Layout } from './layout'
import { SoftwareServices } from './containers/software-services'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '',
    element: (
      <Layout>
        <HomePage />
      </Layout>
    )
  },
  {
    path: '/portfolio/data',
    element: (
      <Layout>
        <DataServices />
      </Layout>
    )
  },
  {
    path: 'portfolio/software',
    element: (
      <Layout>
        <SoftwareServices />
      </Layout>
    )
  }
])
