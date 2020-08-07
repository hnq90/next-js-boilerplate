import 'mobx-react-lite/batchingForReactDom'
import { useStaticRendering } from 'mobx-react-lite'
import { applySnapshot } from 'mobx-state-tree'
import { RootStoreModel } from './index'
import logger from '../../utils/logger'

const isServer = typeof window === 'undefined'
const isDev = process.env.NODE_ENV !== 'production'

useStaticRendering(isServer)

let rootStore

/**
 * Setup the root state.
 */
export function setupRootStore(snapshot = null) {
  let store = rootStore || RootStoreModel.create({})
  try {
    if (snapshot) {
      applySnapshot(store, snapshot)
    }
    // For SSG and SSR always create a new store
    if (isServer) {
      return store
    }
  } catch (e) {
    // if there's any problems loading, then let's at least fallback to an empty state
    // instead of crashing.
    store = RootStoreModel.create({})

    isDev && logger.error('setupRootStore', e.message)
  }
  // Create the store once in the client
  if (!rootStore) {
    rootStore = store
  }

  return rootStore
}

export function getRootStore() {
  if (rootStore) {
    return rootStore
  }
  return setupRootStore()
}
