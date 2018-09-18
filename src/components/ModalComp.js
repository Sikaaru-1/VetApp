import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";

export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ height:300, width:320, backgroundColor:'white', borderRadius:5}}>
            <View style ={{flexDirection:'row', alignItems:'center', justifyContent:'space-around',margin:3}}>
            <Icon name ="highlight-off" size={23} />
            <Text>Filter your Results</Text>
            <Text>Done</Text>
           </View>
           <View style ={{height:280, width:300, borderColor:'#f86b17', borderRadius:1}}>

           </View>

           
          </View>
        </Modal>
      </View>
    );
  }
}































