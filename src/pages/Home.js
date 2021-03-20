import React from 'react';
import './Home.css';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';

function Home() {
	return (
		<div className="home">
			<div className="home_header">
				<div className="home_headerLeft">
					<Link to="/about">About</Link>
					<Link to="/store">Store</Link>
				</div>
				<div className="home_headerRight">
					<Link to="/gmail">Gmail</Link>
					<Link to="/images">Images</Link>
					<AppsIcon />
					<Avatar />
				</div>
			</div>
			<div className="home_body">
				<img
					src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
					alt="google"
				/>
				<div className="home_inputContainer">
					{/* <Search hideButtons /> */}
					<Search />
				</div>
			</div>
		</div>
	);
}

export default Home;
