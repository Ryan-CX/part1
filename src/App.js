import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Display from './Display';
import Total from './Total';
import Button from './Button';

// const App = () => {
// 	const increaseByOne = () => setCounter(counter + 1);
// 	const decreaseByOne = () => setCounter(counter - 1);
// 	const setToZero = () => setCounter(0);
// 	const [counter, setCounter] = useState(0);

// 	return (
// 		<div>
// 			<Display counter={counter} />
// 			<Button handleClick={increaseByOne} text='plus' />
// 			<Button handleClick={decreaseByOne} text='minus' />
// 			<Button handleClick={setToZero} text='zero' />
// 		</div>
// 	);
// };
const App = () => {
	const [clicks, setClicks] = useState({ left: 0, right: 0 });
	const handleLeftClick = () => {
		const newClicks = {
			left: clicks.left + 1,
			right: clicks.right,
		};
		setClicks(newClicks);
	};
	const handleRightClick = () => {
		const newClicks = {
			left: clicks.left,
			right: clicks.right + 1,
		};
		setClicks(newClicks);
	};
	return (
		<div>
			{clicks.left}
			<button onClick={handleLeftClick}>left</button>
			<button onClick={handleRightClick}>right</button>
			{clicks.right}
		</div>
	);
};
export default App;
