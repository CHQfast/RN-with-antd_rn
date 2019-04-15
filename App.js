import React, {Component} from 'react';
import Login from './app/scene/Login'
import Home from './app/scene/Home'
import User from './app/scene/User'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemList from './app/scene/ItemList'
import {createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation';

const HomeStack = createStackNavigator({
  Home: { screen: Home },
  ItemList: { screen: ItemList },
});
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};
const UserStack = createStackNavigator({
  User: { screen: User },
});
const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  User: UserStack,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `${focused ? 'ios' : 'md'}-home`;
      } else if (routeName === 'User') {
        iconName = `${focused ? 'ios' : 'md'}-contact`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor}/>
    },
  }),
  tabBarOptions: {
    activeTintColor: '#148EE9',
    inactiveTintColor: 'gray',
  },
}
);  
const TabNav=createAppContainer(TabNavigator);

const AppNavigator = createStackNavigator({
  Login: Login,
  TabNav: TabNav,
}, {
    initialRouteName: 'Login',
    mode: 'modal',
    headerMode: 'none',
});
const AppContainer =createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}