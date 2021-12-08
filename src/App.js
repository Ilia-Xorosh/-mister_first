import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>

                <HeaderContainer/>
        .        <Navbar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer/> }/>
                    <Route path='/users' render={ () => <UsersContainer />}/>
                    <Route path='/login' render={ () => <Login />}/>

                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' component={Friends}/>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;