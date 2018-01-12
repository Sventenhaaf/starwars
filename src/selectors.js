import { createSelector } from 'reselect'

const selectItems = state => state.items
const selectSearchText = state => state.searchText

const itemSelector = createSelector(
  selectItems,
  selectSearchText,
  (items, searchText) => {
    const filteredItems = items.filter(item => {
      return item.toLowerCase().includes(searchText.toLowerCase())
    })
    return filteredItems
  }
)

export default itemSelector
