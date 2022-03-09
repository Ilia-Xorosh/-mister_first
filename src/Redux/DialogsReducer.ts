import {stringify} from "querystring";
import {DialogsType, MessagesType} from "../types/types";

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';


let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Ilia',
            avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'
        },
        {
            id: 2,
            name: 'Stepa',
            avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'
        },
        {
            id: 3,
            name: 'Den',
            avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'
        },
        {
            id: 4,
            name: 'Veta',
            avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'
        },
        {
            id: 5,
            name: 'Nastya',
            avatar: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'
        }
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hov are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
    ] as Array<MessagesType>
}

type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            };

        default:
            return state;
    }
}

type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;