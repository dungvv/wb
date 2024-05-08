// https://github.com/tailwindlabs/tailwindcss/issues/6422#issuecomment-1222368084
declare module 'tailwindcss/resolveConfig' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  declare function resolveConfig(config: Config): any
  export = resolveConfig
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}
