import React, {Component} from "react";
import {View, Text} from "react-native";
import {createStackNavigator} from "react-navigation";
import Compose from "./src/screens/Home/Compose";
import AddingPet from "./src/screens/Home/AddingPet";
import SelectUser from "./src/screens/Home/SelectUser";
import BottomTab from "./src/components/BottomTab";
import VetClientList from "./src/screens/Home/VetClientList";


export default class App extends Component {
  render() {
    return(
      <View style ={{flex:1}}>
        <StackNav />
      </View>
    );
  }
}

const StackNav = createStackNavigator ({
  VetClientList:{screen: BottomTab},
  AddingPet: {screen:AddingPet},
  SelectUser:{screen:SelectUser},
},
{
headerMode:'none'
}
);



