import * as types from './mutation-types'

export const setNavigation = ({ commit }, { next, previous }) => {
  console.log(next)
  console.log(previous)
  commit(types.SET_NAVIGATION)
}
