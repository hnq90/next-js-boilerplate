import { types } from 'mobx-state-tree'

export const TestModel = types
  .model({
    checked: types.boolean,
  })
  .actions((self) => {
    function toggle(checked) {
      self.checked = checked
    }

    return { toggle }
  })
