import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import {Footer} from "native-base";

export default class AddingPet extends Component {
  render() {
    return (
   
      <View style ={{flex:1}}>
        <View style ={{height:60, width:'100%', backgroundColor:'#f86b17', padding:6, alignItems:'flex-start', justifyContent:'center'}}>
          <Icon name = "keyboard-arrow-left" size= {40} color="white" onPress={()=>this.props.navigation.goBack()} />
        </View> 
        <ScrollView>      
      <View style ={{flex:1,marginTop:15, marginLeft:7}} >
          <Text style ={{marginLeft:7}}> First name </Text>
          <View style= {{height:50, marginLeft:8, width:327, marginTop:5, marginBottom:10, backgroundColor:'white', borderRadius:8, flexDirection:'row',alignItems:'center'}}>
              <TextInput 
              style ={{height:50, width:'100%'}}
              placeholder= "e.g. John"/>
          </View>

          <Text style ={{marginLeft:7}}> Last name </Text>
          <View style= {{height:50, marginLeft:8, width:327, marginTop:5, marginBottom:10, backgroundColor:'white', borderRadius:8, flexDirection:'row',alignItems:'center'}}>
              <TextInput 
              style ={{height:50, width:'100%'}}
              placeholder= "e.g. Doe"/>
          </View>


          <Text style ={{marginLeft:7}}> Mobile </Text>
          <View style= {{height:50, marginLeft:8, width:327, marginTop:5, marginBottom:10, backgroundColor:'white', borderRadius:8, flexDirection:'row',alignItems:'center'}}>
              <TextInput 
              style ={{height:50, width:'100%'}}
              placeholder= "Minimum 6 characters"/>
          </View>


          <Text style ={{marginLeft:7}}> Email </Text>
          <View style= {{height:50, marginLeft:8, width:327, marginTop:5, marginBottom:10, backgroundColor:'white', borderRadius:8, flexDirection:'row',alignItems:'center'}}>
              <TextInput 
              style ={{height:50, width:'100%'}}
              placeholder= "doglover@gmail.com"/>
          </View>


          <Text style ={{marginLeft:7}}> Address </Text>
          <View style= {{height:50, marginLeft:8, width:327, marginTop:5,marginBottom:10, backgroundColor:'white', borderRadius:8, flexDirection:'row',alignItems:'center'}}>
              <TextInput 
              style ={{height:50, width:'100%'}}
              placeholder= "Baalkumari"/>
          </View>

      
      <Text style ={{marginLeft:7}}> City </Text>
          <View style= {{height:50, marginLeft:8, width:327, marginTop:5,marginBottom:10, backgroundColor:'white', borderRadius:8, flexDirection:'row',alignItems:'center'}}>
              <TextInput 
              style ={{height:50, width:'100%'}}
              placeholder= "Kathmandu"/>
          </View>  

      </View>
      </ScrollView>  
      <Footer style={{height:55, backgroundColor:'white', padding: 10 }}>
        <View style ={{flex:1,backgroundColor:'#f86b17',borderRadius:5, flexDirection:'row', justifyContent:'center', alignItems:'center', marginLeft:5, marginRight:8}}>
          <Text style ={{fontSize:18, fontWeight:'500', color:'white'}}> Finish Adding Pet </Text>
        </View>


        </Footer>
      </View>
  
    );
  }
}

const styles = StyleSheet.create ({
 text:{
   fontSize: 16,
   color:'white',
   fontWeight: "500"
 },
})