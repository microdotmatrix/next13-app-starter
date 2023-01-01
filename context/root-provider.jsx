"use client"

import UiContextProvider from "./ui"
import { Provider, useCreateStore, initializeStore } from '../lib/store'

export default function RootContextProvider({ children }, pageProps) {
  const createStore = useCreateStore(pageProps.initState)
  return (
    <Provider createStore={createStore}>
      <UiContextProvider>
        {children}
      </UiContextProvider>
    </Provider>
  )
}

export async function getServerProps() {
  const initStore = initializeStore()
  const posts = await fetchPosts()
  return {
    props: {
      // the "stringify and then parse again" piece is required as next.js
      // isn't able to serialize it to JSON properly
      initState: JSON.parse(JSON.stringify(initStore.getState())),
    },
  }
}