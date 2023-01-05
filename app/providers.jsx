import RootContextProvider from '../context/root-provider'
import UiContextProvider from '../context/ui'

export default function ContextProviders({ children }) { 
  return (
    <RootContextProvider>
      <UiContextProvider>
        { children }
      </UiContextProvider>
    </RootContextProvider>
  )
}