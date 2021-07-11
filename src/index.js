import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from "./components/Profile/MyPost/Post/Post";


let posts = [
    {id: 1, message: 'Hi, have are you?', likeCount: 5},
    {id: 1, message: 'It\'s my first post!', likeCount: 45}
]

let dialogs = [
    {id: 1, name: 'Ilia'},
    {id: 2, name: 'Stepa'},
    {id: 3, name: 'Den'},
    {id: 4, name: 'Veta'},
    {id: 5, name: 'Nastya'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Hov are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
