import React from 'react';

class TodoForm extends React.Component {
	constructor () {
		super();
		this.state = {
			item : ''
		};
	}

	handleChanges = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	submitItem = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.item);
		this.setState({ item: '' });
	};

	render = () => {
		return (
			<form onSubmit={this.submitItem}>
				<input
					type="text"
					value={this.state.item}
					name="item"
					placeholder="enter todo item"
					onChange={this.handleChanges}
				/>
				<button>Enter</button>
			</form>
		);
	};
}

export default TodoForm;
