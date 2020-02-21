import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

// import ProfileContainer from './components/Profile/ProfileContainer';
// import UsersContainer from './components/Users/UsersContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import Login from './components/Login/Login';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
// const News = React.lazy(() => import('./components/News/News'));
// const Music = React.lazy(() => import('./components/Music/Music'));
// const Settings = React.lazy(() => import('./components/Settings/Settings'));


class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {

		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
					<Route path='/dialogs' render={withSuspense(DialogsContainer)} />
					<Route path='/users' render={withSuspense(UsersContainer)} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
					<Route path='/login' render={withSuspense(Login)} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
	return <HashRouter>
		<Provider store={store} >
			<AppContainer />
		</Provider>
	</HashRouter>
}

export default MainApp;