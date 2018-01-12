const firstReducer = (state = {
  categories: ['planets', 'starships', 'vehicles', 'people', 'films', 'species'],
  items: [],
  searchText: '',
  // filteredItems: [],
  isFetching: false,
  category: ''
}, action) => {
  switch(action.type) {
    case 'START_FETCH': {
      return { ...state, isFetching: true, category: action.category }
    }
    case 'ITEMS_RECEIVED': {
      return {
        ...state,
        items: action.items,
        // filteredItems: action.items,
        isFetching: false
      }
    }
    case 'SEARCH_TEXT': {
      return { ...state, searchText: action.searchText }
    }
    default:
      return state
  }
}

export default firstReducer
