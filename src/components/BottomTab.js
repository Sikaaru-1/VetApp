import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from "react-native-ionicons";
import VetClientList from '../screens/Home/VetClientList';


class HomeScreen extends React.Component {
  render() {
    return (
    <View style={{flex: 1}}>
		<VetClientList />
	</View>
    );
  }
}

class TestScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Welcome to TestScreen!</Text>
      </View>
    );
  }
}

class DateScreen extends React.Component {
	render() {
	  return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		  <Text> Welcome to DateScreen!</Text>
		</View>
	  );
	}
  }

  class VetScreen extends React.Component {
	render() {
	  return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		  <Text> Welcome to VetScreen!</Text>
		</View>
	  );
	}
  }

  class PetScreen extends React.Component {
	render() {
	  return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		  <Text>  Welcome to PetScreen!</Text>
		</View>
	  );
	}
  }

export default createBottomTabNavigator({
  Home: HomeScreen,
  Test: TestScreen,
  Date: DateScreen,
  Vet: VetScreen,
  Pet: PetScreen
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'Test') {
        iconName = `ios-pulse${focused ? '' : '-outline'}`;
      }else if (routeName === 'Date') {
        iconName = `ios-calendar${focused ? '' : '-outline'}`;
      }
      else if (routeName === 'Vet') {
        iconName = `ios-medkit${focused ? '' : '-outline'}`;
      }else  {
        iconName = `ios-paw${focused ? '' : '-outline'}`;
      }
      return <Ionicons name={iconName} size={26} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'lightgray',
    style:{backgroundColor:'#f86b17'}
  },
}
);


