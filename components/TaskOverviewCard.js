import React from 'react';
import {styles} from '../Style'
//import {Text,View,StyleSheet} from 'react-native';
import {Text,View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native'


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
		var taskTypeShorthand = isTrainTask?"T":"P";
		return (
			<View style = {styles.card}>
				<View style={{flex:1,borderRightWidth: 3,borderRightColor: separatorColor}}>
					<Text text20 style={{color: separatorColor,paddingLeft:5,alignContent: "center",flex:1}}>{taskTypeShorthand}</Text>	
				</View>

				<View style={cardStyle.midSegment}>
					<Text text50>{this.task.name}</Text>
					<Text text80 style = {{color: "gray"}}>From model  "{this.task.weight.model.name}"</Text>
				</View>
				<View style={cardStyle.rightSegment}></View>
			</View>
		)
	}
	
};

const cardStyle = StyleSheet.create({
	leftSegment: {

	},

	midSegment: {
		flex:4,
		borderLeftWidth:5,
		borderTopWidth:2,
		borderColor: "white"
	},

	rightSegment: {
		flex: 1
	}
});
