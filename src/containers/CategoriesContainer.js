import { connect } from 'react-redux'
import { fetchItems } from '../actions'

import Categories from '../components/Categories'

const CategoriesContainer = ({ navigation, categories, dispatch }) => {
  const selectCategory = (category) => {
    dispatch(fetchItems(category))
    navigation.navigate('Details')
  }
  return Categories({ navigation, categories, dispatch, fetchItems, selectCategory })
}

const mapStateToProps = ({ categories }) => ({ categories })

export default connect(mapStateToProps)(CategoriesContainer)
