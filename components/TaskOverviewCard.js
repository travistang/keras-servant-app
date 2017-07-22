import React from 'react';
import {styles} from '../Style'
import {Text,View,StyleSheet} from 'react-native';


export default class TaskOverviewCard extends React.Component{
	task = null;
	constructor(prop) {
		super(prop);
		this.task = prop.task;
		//console.log(this.task);
	};
	render() {
		console.log(Object.keys(this.task));
		console.log("**");
		let isTrainTask = Object.keys(this.task).indexOf('config') != -1;
		var separatorColor = isTrainTask?"lightpink":"palegreen";
		return (
			<View style = {styles.card}>
				<View style={{flex:1,borderRightWidth: 3,borderRightColor: separatorColor}}>
				
				</View>

				<View style={{flex:4,borderLeftWidth:5,borderLeftColor: "white"}}>
					<Text>{this.task.name}</Text>
				</View>
				<View style={{flex:1}}></View>
			</View>
		)
	}
	
};
