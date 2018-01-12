import React from 'react'
import { View, Text, Button } from 'react-native'

const Categories = ({ categories, selectCategory }) => {
  const Texts = categories.map((category, i) => {
    return (
      <Button
        key={i}
        title={category}
        onPress={() => { selectCategory(category) }}
      >{category}</Button>
    )
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Categories</Text>
      {Texts}
    </View>
  );
}

export default Categories
