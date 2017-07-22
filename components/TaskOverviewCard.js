import React from 'react';
import {styles} from '../Style'
//import {Text,View,StyleSheet} from 'react-native';
import {Text,View} from 'react-native-ui-lib';
import {StyleSheet,TouchableHighlight} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Ionicons';

export default class TaskOverviewCard extends React.Component{
	task = null;
	constructor(prop) {
		super(prop);
		this.task = prop.task;
		//console.log(this.task);
	};
	taskDetail() {
		console.log(this.task.name);
	};
	render() {
		console.log(Object.keys(this.task));
		console.log("**");
		let isTrainTask = Object.keys(this.task).indexOf('config') != -1;
		let separatorColor = isTrainTask?"lightpink":"palegreen";
		let taskTypeShorthand = isTrainTask?"T":"P";
		let epoch = isTrainTask?JSON.parse(this.task.config).epoch:null;
		return (
			<SwipeRow
				leftOpenValue = {65}
				swipeToOpenPercent = {20}
				disableLeftSwipe = {true}
				closeOnScroll = {true}

				closeOnRowBeginSwipe = {true}
			>
			<View style= {styles.cardBackgroundOption}>
				<View style={{flex:1}}>
					<View style={styles.cardBackgroundOptionDelete}>
						<Icon name={"ios-trash"} size={30} color={"white"} />
					</View>
					<View style={styles.cardBackgroundOptionFinetune}>
						<Icon name={"ios-build"} size={25} color={"white"} />
					</View>
				</View>
				<View style={{flex:4}}></View>
			</View>
			<View style = {styles.card}>
				<View style={{flex:1,borderRightWidth: 3,borderRightColor: separatorColor}}>
					<Text text20 style={{color: separatorColor,paddingLeft:5,alignContent: "center",flex:1}}>{taskTypeShorthand}</Text>	
				</View>

				<View style={cardStyle.midSegment}>
					<View>
					<Text text50>{this.task.name}</Text>
					<Text text80 style = {{color: "gray"}}>From model  "{this.task.weight.model.name}"</Text>
					</View>
					{
						isTrainTask?
							<View bottom style = {styles.trainDetails}>
								<Text bottom text80 style={{color:'lightcoral'}}>Train for {epoch} epochs</Text>
							</View>
						:
							<View/>
					}
				</View>
				<View style={cardStyle.rightSegment}>
					<Icon name={"ios-arrow-forward"} size={30} color={"rgb(204,204,204)"} />
				</View>
			</View>
			</SwipeRow>
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
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-end",

	}
});
