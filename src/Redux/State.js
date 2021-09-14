import {renderEntireTree} from "../render";

let state = {
    profilePage: {
         posts: [
            {id: 1, message: 'Hi, have are you?', likeCount: 5},
            {id: 2, message: 'It\'s my first post!', likeCount: 45}
        ]
    },
    dialogsPage: {
         dialogs: [
            {id: 1, name: 'Ilia', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'},
            {id: 2, name: 'Stepa', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'},
            {id: 3, name: 'Den', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'},
            {id: 4, name: 'Veta', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'},
            {id: 5, name: 'Nastya', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'}
        ],

        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hov are you'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sideBar: {
        friends: [
            {id: 1, name: 'Ilia', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'},
            {id: 2, name: 'Stepa', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'},
            {id: 3, name: 'Den', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'},
            {id: 4, name: 'Veta', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'},
            {id: 5, name: 'Nastya', avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likeCount: 0
    };

    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export default state;



