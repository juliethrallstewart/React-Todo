import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from '../src/components/TodoComponents/TodoForm';
import Filter from '../src/components/TodoComponents/Filter';
import SearchResults from '../src/components/TodoComponents/SearchResults';
import './App.css';

const toDoListData = [
	{
		task      : 'Organize Garage',
		id        : 1528817077286,
		completed : false
	},
	{
		task      : 'Bake Cookies',
		id        : 1528817084358,
		completed : false
	}
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change
	//handlers you need to work with your state

	constructor () {
		super();
		this.state = {
			toDoList     : toDoListData,
			filteredList : []
		};
	}

	toggleItem = (id) => {
		console.log(id);
		this.setState({
			toDoList : this.state.toDoList.map((item) => {
				if (item.id === id) {
					return {
						...item,
						completed : !item.completed
					};
				}
				else {
					return item;
				}
			})
		});
	};

	addItem = (itemName) => {
		const newItem = {
			task      : itemName,
			id        : Date.now(),
			completed : false
		};
		this.setState({
			toDoList : [
				...this.state.toDoList,
				newItem
			]
		});
	};

	filterItems = (itemList) => {
		this.state.toDoList.filter((item) => {
			if (item.task.toLowerCase().indexOf(itemList.toLowerCase()) !== -1) {
				console.log(`You found ${item.task}!`);
				this.setState({
					filteredList : [
						...this.state.filteredList,
						item
					]
				});
			}
			else {
				console.log('search again');
			}
		});
	};

	clearCompleted = () => {
		this.setState({
			toDoList : this.state.toDoList.filter((item) => !item.completed)
		});
	};

	render () {
		return (
			<div className="App">
				<div className="header">
					<div className="input-search">
						<Filter filterItems={this.filterItems} items={this.state.toDoList} />
					</div>
					<div className="title">
						<h1>Todo List</h1>
					</div>
					<div className="input-add">
						<TodoForm addItem={this.addItem} />
					</div>
				</div>
				<TodoList
					toDoList={this.state.toDoList}
					toggleItem={this.toggleItem}
					clearCompleted={this.clearCompleted}
				/>
				<SearchResults filteredList={this.state.filteredList} />
			</div>
		);
	}
}

export default App;
