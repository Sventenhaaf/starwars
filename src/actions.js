
export const searchTextAction = text => ({
  type: 'SEARCH_TEXT',
  searchText: text
})

export const fetchItems = (category) => {
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
