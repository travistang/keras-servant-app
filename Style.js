import React from 'react';
import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({

  tabView: {
 	flex: 1,
        padding: 10,
	backgroundColor: 'rgba(0,0,0,0.01)',	
  },
  card :{
 	borderWidth: 0.5,
        backgroundColor: '#fff',
	borderColor: 'rgba(0,0,0,0.1)',
	margin: 5,
	height: 150,
	padding: 15,
	shadowColor: '#ccc',
	shadowOffset: {
		width: 2,
		height: 2,

	},
	shadowOpacity: 0.5,
	shadowRadius: 4,
	flexDirection: "row",	
  },
	cardBackgroundOption :{
		height: 150,
		margin: 5,
		flexDirection: "row"
	},
	cardBackgroundOptionDelete:{
		flex:0.5,
		backgroundColor:"lightcoral",
		justifyContent: "center",
		paddingLeft:23
	},
	cardBackgroundOptionFinetune: {
		flex:0.5,
		backgroundColor:"lightblue",
		justifyContent: "center",
		paddingLeft:23	
	},
	trainDetails: {
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export {styles}
