import 'antd/dist/antd.css'
import '../src/reactotron'
import { useState, useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import { Spin } from 'antd'
import { RootStoreProvider, setupRootStore } from '../src/store'
import { useApollo } from '../src/utils/apollo'
import '../styles/vars.css'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  const [rootStore, setRootStore] = useState(undefined)
  const apolloClient = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    const store = setupRootStore(pageProps.initialStoreData)
    setRootStore(store)
  }, [])

  if (!rootStore) {
    return <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}><Spin /></div>
  }

  return (
    <RootStoreProvider value={rootStore}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RootStoreProvider>
  )
}
