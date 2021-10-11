import {combineReducers, createStore} from "redux";
import profileReduser from "./Profile-reduser";
import dialogsReduser from "./Dialogs-reduser";
import usersReduser from "./Users-reduser";

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser
});

let store = createStore(redusers);

window.store = store;

export default store;