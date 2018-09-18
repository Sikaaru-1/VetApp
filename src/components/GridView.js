import React, {Component} from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import Icons from "react-native-ionicons";

export default class GridView extends Component {
	render() {
		return(
		<View style ={{flex:1}}>
				<View style = {styles. Container}>
						<View style ={{flex:1, justifyContent:'flex-start', marginLeft:5}}>
							<Image source ={require("./Assets/Images/a.jpg")} style ={{height:100, width:100, resizeMode:'contain'}}/>	
					</View>
					<View style ={{ flex:2,justifyContent:'center', marginBottom:5}}>
						<Text style ={styles.text}> aa </Text>	
						<Text style ={styles.text2}> bb </Text>
						<Text style ={styles.text3}> cc </Text>
						<View style = {{height:10, width:200, borderBottomColor:'black', marginTop:-3, marginBottom:1, borderBottomWidth:1.1}}/>
						<View style ={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
						<Icons name ="calendar"  size ={20} color= "black" />
						<Text style={styles.text1}> 2Y+4M+20D</Text>
					</View>
               </View>	
        </View>
	</View>	
		);
	}
}

const styles = StyleSheet.create({		
	text1:{
		fontSize:12,
		color:'#000011',
		fontWeight:'400'
	},
	text2:{
		fontSize:12,
		color:'#000011'
	},
	text3:{
		fontSize:10,
		color:'#000011'
	},
	Container: {
		flex:1,
		flexDirection:'row',
		alignItems:'center',
		padding:5,
		borderColor:'darkgray',
		borderRadius:5,
		borderWidth:1,
		margin:10
	}
})