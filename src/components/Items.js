import React from 'react'
import { View, Text, Button, TextInput } from 'react-native'

const Items = ({ items, isFetching, category, textInput, searchText }) => {
  const names = isFetching ? 'Loading ...' : items.toString()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text key={'a'}>Search {category}:</Text>
      <TextInput
        style={{width: '20%', borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => textInput(text)}
        value={searchText}
      />
      <Text>{names}</Text>
    </View>
  )
}

export default Items
