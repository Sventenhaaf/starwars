import React from 'react';
import { StackNavigator } from 'react-navigation';

import { View, Text, Button } from 'react-native';
import CategoriesContainer from './containers/CategoriesContainer'
import ItemsContainer from './containers/ItemsContainer'

const RootNavigator = StackNavigator({
  Home: {
    screen: CategoriesContainer,
    navigationOptions: {
      headerTitle: 'Categories',
    },
  },
  Details: {
    screen: ItemsContainer,
    navigationOptions: {
      headerTitle: 'Items',
    },
  },
});

export default RootNavigator;
