import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ResultShowScreen from './src/screens/ResultShowScreen';
import SearchScreen from './src/screens/SearchScreen'


const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
})

/**
 * createAppContainer ensures that the navigator is wrapped in a React Component
 */
export default createAppContainer(navigator);