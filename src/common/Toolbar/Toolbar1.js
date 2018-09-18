import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";


export default class Toolbar1 extends Component {
	render(){
		return(
			<View style ={{height: 60}}>
				<View style ={{flexDirection:'row', width:"100%", justifyContent:'space-between',backgroundColor:'#f86b17',elevation:5, alignItems:'center', padding:10 }}>
					<Icon name="menu" size={30} color="white" onPress={()=>this.props.navigation.navigate("AddingPet")} />
						<View style ={{height:30, width:260, borderRadius:5, backgroundColor:'white', flexDirection:'row', padding:10, justifyContent:"flex-start", alignItems:'center'}}>
							<View style ={{marginLeft:30}}>
								<Icon name ="search" size ={23} color= "black"   />
							</View>
							<View>
								<TextInput
								style ={{height:40, width:'100%',  fontSize:14, color:'black', marginRight:120}}
								placeholder= "Search pet by code"
								/>
							</View>

						</View>
					<Icon name="more-vert" size={30} color="white"  onPress={()=>this.props.navigation.navigate("SelectUser")} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	text:{
		fontSize: 14,
		fontWeight:'800',
		color:'white'
	}

})