const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
    ],
    newMessageBody: ' '
}
const dialogsReduser = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.newBody;
            return stateCopy;}
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({id: 6, message: body});
            return stateCopy;}
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const apdateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newBody: body
})


export default dialogsReduser;