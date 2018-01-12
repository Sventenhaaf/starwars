import { connect } from 'react-redux'
import { fetchItems } from '../actions'

import Categories from '../components/Categories'

const CategoriesContainer = ({ categories, selectedCategory, navigation, dispatch }) => {
  const selectCategory = (category) => {
    dispatch(fetchItems(category, selectedCategory))
    navigation.navigate('Details')
  }
  return Categories({ navigation, categories, dispatch, fetchItems, selectCategory })
}

const mapStateToProps = ({ categories, selectedCategory }) => ({ categories, selectedCategory })

export default connect(mapStateToProps)(CategoriesContainer)
