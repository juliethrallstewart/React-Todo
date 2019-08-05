// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Item from './Todo.js';

const TodoList = (props) => {
	// const sortedList = props.toDoList.sort((a, b) => a.purchased - b.purchased);
	return (
		<div className="todo-list">
			{props.toDoList.map((item) => <Item key={item.id} item={item} toggleItem={props.toggleItem} />)}
			<button className="clear-btn" onClick={props.clearCompleted}>
				Clear Completed
			</button>
		</div>
	);
};

export default TodoList;
