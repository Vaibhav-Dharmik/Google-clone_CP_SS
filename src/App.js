import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/search">
						{/* <h1>hello vaibhav dharmik welcome to your clone 🚀 </h1> */}
						<SearchPage />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
