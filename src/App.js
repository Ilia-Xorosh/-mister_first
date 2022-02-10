import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./Redux/AppReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/Redux-store";
import {withSuspense} from "./Hoc/WithSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>}
        return (
                <div className='app-wrapper'>

                    <HeaderContainer/>
                    . <Navbar/>
                    <div className='app-wrapper-content'>

                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginPage/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/friends' component={Friends}/>

                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>

                        <Route path='/profile/:userId?'
                               render={withSuspense(ProfileContainer)}/>
                    </div>

                </div>
        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = connect(mapStateToProps, {initializeApp}) (App);

const MainApp = (props) => {
    return  ( <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
        </HashRouter>
    )
}

export default MainApp;
