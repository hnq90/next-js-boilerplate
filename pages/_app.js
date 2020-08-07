import 'antd/dist/antd.css'
import '~/reactotron'
import { useState, useEffect } from 'react'
import { ApolloProvider } from '@apollo/client'
import { Spin } from 'antd'
import { RootStoreProvider, setupRootStore } from '~/store'
import { useApollo } from '~/utils/apollo'
import '@styles/vars.css'
import '@styles/global.css'

export default function App({ Component, pageProps }) {
  const [rootStore, setRootStore] = useState(undefined)
  const apolloClient = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    const store = setupRootStore(pageProps.initialStoreData)
    setRootStore(store)
  }, [])

  if (!rootStore) {
    return <div className='loading-overlay'><Spin /></div>
  }

  return (
    <RootStoreProvider value={rootStore}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RootStoreProvider>
  )
}
