import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from '../src/components/TodoComponents/TodoForm';

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
			toDoList : toDoListData
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

	clearCompleted = () => {
		this.setState({
			toDoList : this.state.toDoList.filter((item) => !item.completed)
		});
	};

	render () {
		return (
			<div className="App">
				<div className="header">
					<h1>Todo List</h1>
					<TodoForm addItem={this.addItem} />
				</div>
				<TodoList toDoList={this.state.toDoList} toggleItem={this.toggleItem} />
			</div>
		);
	}
}

export default App;
