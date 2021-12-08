import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduser from "./Profile-reduser";
import dialogsReduser from "./Dialogs-reduser";
import usersReduser from "./Users-reduser";
import authReduser from "./Auth-reduser";
import thunkMiddleware from "redux-thunk";


let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    auth: authReduser
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;