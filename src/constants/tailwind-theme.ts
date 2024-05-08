import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@root/tailwind.config'

const { theme } = resolveConfig(tailwindConfig)

export default theme
