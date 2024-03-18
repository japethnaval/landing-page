import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

export type DrawerType = 'cart' | 'menu'

export interface AppContextProps {
  activeDrawer?: DrawerType
  setActiveDrawer: Dispatch<SetStateAction<DrawerType | undefined>>
}

const useAppActions = () => {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType | undefined>()

  return {
    activeDrawer,
    setActiveDrawer,
  }
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps)

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const value = useAppActions()
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
