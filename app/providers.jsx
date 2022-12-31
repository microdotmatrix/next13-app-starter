import RootContextProvider from '../context/root-provider'

export default function ContextProviders({ children }) { 
  return (
    <RootContextProvider>
      { children }
    </RootContextProvider>
  )
}