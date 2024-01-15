import React, { FC } from 'react';

const App: FC = () => {
	return (
		<h1 onClick={() => console.log("H1 clicked")}>Hello React!</h1> 
	);
};

export default App;