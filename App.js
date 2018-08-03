import React from 'react';

import {  createStackNavigator,} from 'react-navigation';

import SinglePhotoScreen from './Components/SinglePhoto/SinglePhotoScreen';
import HomeScreen from './Components/Home/HomeScreen';

const App = createStackNavigator(
  { 
   Home: { screen: HomeScreen },
   SinglePhoto: { screen: SinglePhotoScreen },
  })

export default App
