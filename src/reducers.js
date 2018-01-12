const initialState = {
  categories: [ 'planets', 'starships', 'vehicles', 'people', 'films', 'species' ],
  items: [],
  searchText: '',
  isFetching: false,
  category: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case 'START_FETCH':
      return { ...state, isFetching: true, category: action.category }
    case 'ITEMS_RECEIVED':
      return { ...state, items: action.items, isFetching: false }
    case 'SEARCH_TEXT':
      return { ...state, searchText: action.searchText }
    default:
      return state

  }
}

export default reducer
