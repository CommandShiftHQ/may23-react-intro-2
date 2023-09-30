import '../styles/app.css';

import placeholderData from '../data/posts.json';
import PostList from './PostList';

const App = () => {
	return (
		<div className="app">
			<div className="app__background-wrap" />
			<div className="app__foreground-wrap">
				<div className="app__title">
					<h3>Intro To React II</h3>
				</div>
				{
					// TODO: Send data to Post component and verify it works
					//   wrap all Posts in a PostList component
					// TODO: Create a Postlist component to wrap all Posts in,
					//   display name of last upvoted post at the top
				}

				<PostList data={placeholderData} />
			</div>
		</div>
	);
};

export default App;
