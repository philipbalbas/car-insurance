import { useResponsive } from "ahooks"

export const ssrUseResponsive = () => {
  if (window !== undefined) {
    return useResponsive()
  }
  return {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  }
}
