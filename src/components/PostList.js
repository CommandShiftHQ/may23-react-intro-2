import Post from './Post';
import '../styles/postlist.css';
import { useState } from 'react';

const PostList = ({ data }) => {
	const [lastVotedTitle, setLastVotedTitle] = useState('N/A');
	return (
		<div className="postlist">
			<h3>Last Upvoted Title: {lastVotedTitle}</h3>
			{data.map((post, index) => (
				<Post key={index} data={post} setTitle={setLastVotedTitle} />
			))}
		</div>
	);
};

export default PostList;
