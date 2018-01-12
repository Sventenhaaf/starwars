
export const searchTextChange = text => ({
  type: 'SEARCH_TEXT_CHANGE',
  searchText: text
})

export const fetchItems = (category, selectedCategory) => {
  if (category === selectedCategory) {
    return { type: 'RETURN_TO_CATEGORY' }
  }
  return dispatch => {
    dispatch({ type: 'START_FETCH', category })

    fetch('https://swapi.co/api/' + category)
      .then(res => res.json())
      .then(json => {
        const nameTitle = category === 'films' ? 'title' : 'name'
        dispatch({
          type: 'ITEMS_RECEIVED',
          items: json.results.map(result => result[nameTitle]),
          category
        })
      })
  }
}
