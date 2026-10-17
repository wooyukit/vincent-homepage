import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'

const AutomaticMotion = createContext({ paused: false, toggle: () => {} })

export const AutomaticMotionProvider = ({ children }) => {
  const [paused, setPaused] = useState(false)
  const toggle = useCallback(() => setPaused(value => !value), [])
  const value = useMemo(() => ({ paused, toggle }), [paused, toggle])
  return (
    <AutomaticMotion.Provider value={value}>
      {children}
    </AutomaticMotion.Provider>
  )
}

export const useAutomaticMotion = () => useContext(AutomaticMotion)
