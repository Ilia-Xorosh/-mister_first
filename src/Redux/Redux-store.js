import {combineReducers, createStore} from "redux";
import profileReduser from "./Profile-reduser";
import dialogsReduser from "./Dialogs-reduser";

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser
});

let store = createStore(redusers);

window.store = store;

export default store;