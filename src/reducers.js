const initialState = {
  categories: [ 'planets', 'starships', 'vehicles', 'people', 'films', 'species' ],
  items: [],
  searchText: '',
  isFetching: false,
  selectedCategory: ''
}

const reducer = (state = initialState, action) => {
  switch(action.type) {

    case 'START_FETCH':
      return { ...state, searchText: '', isFetching: true, selectedCategory: action.category }
    case 'ITEMS_RECEIVED':
      return { ...state, items: action.items, isFetching: false }
    case 'RETURN_TO_CATEGORY':
      return Object.assign({}, state)
    case 'SEARCH_TEXT_CHANGE':
      return { ...state, searchText: action.searchText }
    default:
      return state

  }
}

export default reducer
