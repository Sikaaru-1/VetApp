import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-vector-icons/FontAwesome";


export default class Compose extends Component {
  render() {
    return (
      <View style ={{flex:1, backgroundColor:'white'}}>
            <View style ={styles.toolbar}>
                  <View style= {{flex:1}}>
                      <Icon name = "keyboard-arrow-left" size= {40} color="white"  onPress= {()=>this.props.navigation.navigate("AddCategory")}/>
                  </View>   
                  <View style ={{flex:1}}>
                      <Text style={styles.text}> Compose </Text>
                  </View>    
                  <View style ={{flex:0.5, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                      <Icons name= "paperclip" size= {25} color= 'white' style ={styles.icon} onPress={()=>this.props.navigation.navigate("VetClientList")} />
                      <Icon name= "send" size= {25} color= 'white' onPress= {()=>this.props.navigation.navigate("AddingPet")} />
                  </View>    
            </View>   

            <View style ={{height:50, width:'100%', flexDirection:'row', alignItems:'center'}}>
              <Text> To </Text>
            </View>
         
            <View style ={styles.box1}>
              <TextInput
              style ={{height:50, width:'100%'}}
              placeholder ="Enter your subject"
                />
            </View>

            <View>
              <TextInput
              style ={{height:100, width:'100%'}}
              placeholder ="Type your message!"
                />
            </View>
       </View>
    );
  }
}


const styles = StyleSheet.create({
  toolbar: {
    height:60, 
    width:'100%', 
    backgroundColor:'#f86b17', 
    flexDirection:'row', 
    justifyContent:'space-around',
    alignItems: "center",
    elevation:3,
    padding:6
  },
  text: {
    fontSize : 20,
    fontWeight : "900",
    color:'white'
  },
  box1:{
    height:60,
    width:'100%', 
    borderBottomColor:'gray',
    borderBottomWidth:0.2,
    borderTopColor:'gray', 
    borderTopWidth:0.4,
    flexDirection:'row',
    alignItems:'center'

  },
  icon: {
    transform: [{rotate:'-90deg'}]
  }
})