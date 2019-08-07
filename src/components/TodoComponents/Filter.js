import React from 'react';

class Filter extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			item : ''
		};
	}

	handleChanges = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
		// console.log('react is evil');
	};

	submitItem = (e) => {
		e.preventDefault();
		this.props.filterItems(this.state.item);
		this.setState({ item: '' });
	};

	render = () => {
		return (
			<form onSubmit={this.submitItem}>
				<input
					type="text"
					value={this.state.item}
					name="item"
					placeholder="search"
					onChange={this.handleChanges}
				/>
				<button>Submit</button>
			</form>
		);
	};
}

export default Filter;
