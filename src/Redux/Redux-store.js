import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduser from "./Profile-reduser";
import dialogsReduser from "./Dialogs-reduser";
import usersReduser from "./Users-reduser";
import authReduser from "./Auth-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReduser from "./App-reduser";


let redusers = combineReducers({
    app: appReduser,
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReducer
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;