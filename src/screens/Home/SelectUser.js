import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchBar from "../../common/Toolbar/SearchBar";
import {Settings} from "../../../Setting/Settings";

export default class SelectUser extends Component {
	render(){
		return(
			<View style ={{flex:1}}>
				<View style ={styles.toolbar}>
					<Icon name="keyboard-arrow-left" size={40} color="white"onPress= {()=>this.props.navigation.goBack()} />
					<Text style ={styles.text}> Select User </Text>
					<Text style ={styles.text}> Done </Text>
				</View>
				<SearchBar backgroundColor={Settings.primaryColor} />
			</View>
		);
	}
}
const styles = StyleSheet.create ({
	toolbar:{
		height:60,
		width:'100%',
		backgroundColor:'#f86b17',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems: "center",
		elevation:3,
		padding:6,
	},
	text:{
		fontWeight:"500",
		fontSize: 16,
		color:'white'

	}
})



















