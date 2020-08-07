import { types } from 'mobx-state-tree'
import { TestModel } from '../models/test'

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model('RootStore').props({
  // DEMO STORES
  testStore: types.optional(TestModel, {
    checked: false,
  }),
})
