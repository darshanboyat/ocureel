import React from 'react';
import logo from '../../assets/White_Logo.png';
import "./style.css"
import AppStoreBtn from './DownloadAppButton'
import { Helmet } from 'react-helmet';

function LaunchingCounter() {
	return (
		<>
			<Helmet>
				<title>Zecue. The ULTIMATE game!</title>
				<meta name="description" content="Zecue is a video sharing game that helps you connect on a deeper level with the people you care about and meet new people!"></meta>
			</Helmet>
			<div className="launching-counter">
				<img src={logo} alt="" className="home-logo" />
				<div className="app-store-btn">
					&nbsp;<AppStoreBtn /> &nbsp;
				</div>
			</div>
		</>
	);
}

export default LaunchingCounter;