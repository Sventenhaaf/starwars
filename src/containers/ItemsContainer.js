import { connect } from 'react-redux'
import itemSelector from '../selectors'
import Items from '../components/Items'
import { searchTextChange } from '../actions'

const ItemsContainer = ({ items, isFetching, selectedCategory, dispatch, searchText }) => {
  const textInput = text => { dispatch(searchTextChange(text))}
  return Items({ items, isFetching, selectedCategory, textInput, searchText })
}

const mapStateToProps = state => {
  const { items, searchText, isFetching, selectedCategory } = state
  return {
    items: itemSelector(state),
    searchText,
    isFetching,
    selectedCategory
  }
}

export default connect(mapStateToProps)(ItemsContainer)
