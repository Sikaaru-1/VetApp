import React, { Component } from 'react';
import { Text, Image,  View, StyleSheet, FlatList } from 'react-native';
import {Container} from "native-base";
import Toolbar1 from '../../common/Toolbar/Toolbar1';
import Icon from  "react-native-vector-icons/MaterialIcons";
import Icons from "react-native-ionicons";
import FloatingButton from '../../components/Fab';
import Badge1 from '../../components/Badge';


export default class VetClientList extends Component {
	constructor(props)
	{
		super(props);
		this.state = {numColumns : 1, isone: true };
	}

	render(){
		const data = [
			{id: 1, name: "Huskey(900)", owner: "KB Chettri", address: "Tityang,Baglung, Province no. 4", DOB:"2Y+3M+29D"},
			{id: 1, name: "Huskey(900)", owner: "KB Chettri", address: "Tityang,Baglung, Province no. 4", DOB:"2Y+3M+29D"},
			{id: 1, name: "Huskey(900)", owner: "KB Chettri", address: "Tityang,Baglung, Province no. 4", DOB:"2Y+3M+29D"},
			{id: 1, name: "Huskey(900)", owner: "KB Chettri", address: "Tityang,Baglung, Province no. 4", DOB:"2Y+3M+29D"},
			{id: 1, name: "Huskey(900)", owner: "KB Chettri", address: "Tityang,Baglung, Province no. 4", DOB:"2Y+3M+29D"},
			{id: 1, name: "Huskey(900)", owner: "KB Chettri", address: "Tityang,Baglung, Province no. 4", DOB:"2Y+3M+29D"},
			{id: 1, name: "Huskey(900)", owner: "KB Chettri", address: "Tityang,Baglung, Province no. 4", DOB:"2Y+3M+29D"},
		]
		return (
	<Container style ={{flex:1}}>
	
		<Toolbar1/>
		<View style ={styles.container}>
			<View style ={styles.box1}>
				<View style={styles.Box1}>
					<Text style ={styles.text}>Inbox</Text>
				</View>
			<View style ={{marginBottom:19, marginLeft:-35}}>
				<Badge1/>
			</View>

				<View style={{flex: 1}} />
			</View>

		  <View style ={styles.box2}>
			<View>
			 <View style ={styles.Box2}>> 
				<View style ={{flex:1}}>	
				<Icon name = "menu" size= {20} color= "black" />
			 </View>	
					<Text style ={styles.text}>Filter</Text>	
	 		</View>	
		 	</View>	
			<View style ={{flex:0.3}}>
			<Icon name= "apps" size ={30} color= "black" onPress={() => this.setState({isone: !this.state.isone})}  />	
			</View>
			</View>
		</View>

		<FlatList 
		data = {data}
		renderItem = {({item}) => {
			 return(
				 <View style={{flex: 1}}>
					 {this.state.isone ? 
		  <View style = {styles. Container}>
				<View style ={{flex:1, justifyContent:'flex-start', marginLeft:5}}>
					<Image source ={require("../.././../Assets/Images/a.jpg")} style ={{height:100, width:100, resizeMode:'contain'}}/>	
			</View>
			<View style ={{ flex:2,justifyContent:'center', marginBottom:5}}>
				<Text style ={styles.text}> {item.name} </Text>	
				<Text style ={styles.text2}> {item.owner} </Text>
				<Text style ={styles.text3}> {item.address} </Text>
				<View style = {{height:10, width:200, borderBottomColor:'black', marginTop:-3, marginBottom:1, borderBottomWidth:1.1}}/>
				<View style ={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
				<Icons name ="calendar"  size ={20} color= "black" />
				<Text style={styles.text1}> {item.DOB}</Text>

				</View>
			</View>	
		</View>
		:
		<View style ={{flexDirection:"row", justifyContent:'space-between'}}>
			
						

		</View>
					 }
		</View>
				 )
		}}
		keyExtractor = {item => item.id.toString()}
		key = {this.state.numColumns}
		/>
	<FloatingButton/>
	</Container>
		);
	
}

}

const styles = StyleSheet.create({
	container: {
		height:40,
		flexDirection: "row",
		alignItems: "center",
		padding: 10
	},
	box1: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start"
	},
	box2: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end"
	},
	 Box1: {
		flex: 1,
		alignItems:'center',
		alignItems:'center',
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		padding:3,
		height:30,
		width:40,
		marginTop:6,
		marginRight:20
	},
	Box2: {
		flex: 1,
		flexDirection:'row',
		alignItems: "center",
		justifyContent:'center',
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		marginRight: 7,
		marginLeft:35
	},
	text:{
		fontSize:14,
		color:'#000011',
		
	},
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