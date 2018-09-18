import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


export default class SearchBar extends Component {
	render(){
		return(
			<View style ={{flex:1}}>
				<View style ={styles.search}>
					<Icon name="search" size={30} color="black" />
					<Text style ={styles.text}> Search</Text>
			</View>		
			</View>
		);
	}
}
const styles = StyleSheet.create({
	search:{
		marginTop:5,
		marginLeft:7,
		height:45,
		width: 347,
		flexDirection:'row',
		justifyContent:'center',
		alignItems: "center",
		elevation:3,
		borderColor:'black',
		borderWidth:1,
		borderRadius:4,
		paddingRight:55,
	},
	text:{
		fontWeight:"400",
		fontSize: 15,
		color:'black' },

	text1:{
			fontWeight:"500",
			fontSize: 14,
			color:'black' }		
})	

