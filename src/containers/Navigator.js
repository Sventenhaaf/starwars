import React from 'react';
import { StackNavigator } from 'react-navigation';

import { View, Text, Button } from 'react-native';
import CategoriesContainer from './CategoriesContainer'
import ItemsContainer from './ItemsContainer'

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
