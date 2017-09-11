import React, {Component} from 'react';

class SearchBar extends Component {

	constructor({props}) {
		super(props);

		this.state = { item : '' };
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					value = {this.state.item}
					onChange= { event => this.onInputChange(event.target.value) } 
				/>
			</div>
		);
	}

	onInputChange(item) {
		this.setState({item});
		this.props.onTextChange(item);
	}
}

export default SearchBar;