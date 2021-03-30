import React, { useState } from 'react';
import Button from './Button';

const Quote = () => {
	const anecdotes = [
		'If it hurts, do it more often',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
	];

	const [selected, setSelected] = useState(0);
	const quoteButton = () => {
		return setSelected(Math.floor(Math.random() * 6));
	};
	const points = new Array(6).fill(0); //[0,0,0,0,0,0]

	const [vote, setVote] = useState(0);
	const voteButton = () => {
		const copy = [...points];
		copy[selected] += 1;
		return setVote(copy[selected]);
	};
	return (
		<div>
			<p>{anecdotes[selected]}</p>
			<p>has {vote} votes.</p>
			<Button handleClick={voteButton} text='vote' />
			<Button handleClick={quoteButton} text='get quote' />
		</div>
	);
};

export default Quote;
