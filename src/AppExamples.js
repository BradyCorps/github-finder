import React, { Component } from 'react';
import './App.css';
// Components can be functions or classes
class App extends Component {
	foo = () => 'Bars';
	// Lifecycle methods that run at a certain point when the component is loaded
	render() {
		const name = 'Brady Corps';
		const loading = true;
		const showName = true;

		// if (loading) {
		// 	return <h4>Loading...</h4>;
		// }

		return (
			<div className="App">
				{/* Ternerary Operator --> Below line reads like "IF loading is true THEN(?) show H4 ELSE(:) show H1 */}
				{loading ? <h4>Loading...</h4> : <h1>Hello {name}</h1>}
			</div>

			// <div className="App">
			// 	{/* condtional double ampersand (&&) Method --> Below line reads like "IF loading is true THEN(?) show H4 ELSE(:) ONLY show the name IF showName is TRUE */}
			// 	{loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
			// </div>
		);
	}
}

export default App;
