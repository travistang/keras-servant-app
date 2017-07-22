import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {styles} from './Style';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TaskView from './components/TaskView'
import FacebookTabBar from './components/FacebookTabBar'
export default class App extends React.Component {
  render() {
    return (
	<ScrollableTabView
	style = {{marginTop: 20,}}
	initialPage = {0}
	renderTabBar = {() => <FacebookTabBar/>}

	>
	<ScrollView tabLabel = "ios-paper" style = {styles.tabView}>
		<TaskView />
	</ScrollView>
	<ScrollView tabLabel = "ios-people" style = {styles.tabView}>	
		<View style = {styles.card}>
			<Text> Hello! </Text>
		</View>
	</ScrollView>
	</ScrollableTabView>
    );
  }
}

