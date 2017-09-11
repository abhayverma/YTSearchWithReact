import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyA8MJz5d4QP5KtC6bdjQpg0E-e2Um4fnnU';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: []};

		this.searchChange('');
	}

	searchChange(term) {
		YTSearch({key: API_KEY, 'term': term}, videos => {
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {

		const searchChange = _.debounce((search) => this.searchChange(search), 600);

		return (
			<div>
				<SearchBar onTextChange= {searchChange} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect= { selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));