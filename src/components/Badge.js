import React, { Component } from 'react';
import {Badge, Text, Icon } from 'native-base';

export default class Badge1 extends Component {
	render(){
		return(
			<Badge style={{ backgroundColor: '#F86B17',justifyContent:'center', height:26, width:26, borderRadius:13 }}>
            	<Text style={{ color: 'white', fontSize:7 }}>23</Text>
			</Badge>
		);
	}
}
