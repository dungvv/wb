import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { customTheme } from './constants/CustomTheme'
import { router } from './Router'

export const App = () => (
  <ConfigProvider theme={customTheme}>
    <RouterProvider router={router} />
  </ConfigProvider>
)

export default App
