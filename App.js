import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import WikiScreen from './screens/WikiScreen';
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},  
  Wiki: {screen: WikiScreen},
});

const App = createAppContainer(MainNavigator); 

export default App;
