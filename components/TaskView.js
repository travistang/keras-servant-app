import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';
import TaskOverviewCard from './TaskOverviewCard';
import {createStore} from 'redux';

export default class TaskView extends React.Component{
	url = "http://desktop.travis.sigma.ws:9001/tasks";
	getTasks = (url) => {
		fetch(url)
		.then(
			(response) => {
				if (response.ok)
				{
					return response.json();
				}else
				{
					throw new Error("Error response from server");
				}
			}
		).then(
			(tasks) => {
				result = tasks.predict_task.concat(tasks.train_task);
				this.setState({tasks:result});
				this.state.isLoading = false;
			}
		).catch(
			(error) =>{
				console.log(error);
			}
		);
	}
	constructor(props)
	{
		super(props);

		this.state = {
			isLoading: true,
			tasks: [],
		}
		this.getTasks(this.url);
	}
	render()
	{
		return (
		 	<View>
				<FlatList data={this.state.tasks} 
				renderItem = {({item}) => <TaskOverviewCard task={item} />}/>	
			</View>
		);
	}
};

