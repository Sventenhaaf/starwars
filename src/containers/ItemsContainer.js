import { connect } from 'react-redux'
import itemSelector from '../selectors'
import Items from '../components/Items'
import { searchTextAction } from '../actions'

const ItemsContainer = ({ items, isFetching, category, dispatch, searchText }) => {
  const textInput = text => { dispatch(searchTextAction(text))}
  return Items({ items, isFetching, category, textInput, searchText })
}

const mapStateToProps = state => {
  const { items, searchText, isFetching, category } = state
  return {
    items: itemSelector(state),
    searchText,
    isFetching,
    category
  }
}

export default connect(mapStateToProps)(ItemsContainer)
