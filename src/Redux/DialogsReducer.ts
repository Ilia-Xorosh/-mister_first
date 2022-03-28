import {DialogsType, MessagesType} from "../types/types";
import {InferActionType} from "./Redux-store";



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

const dialogsReducer = (state = initialState, action: ActionType): initialStateType => {

    switch (action.type) {

        case 'dialogs/SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            };

        default:
            return state
    }
}

export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({type: 'dialogs/SEND-MESSAGE', newMessageBody} as const)
}

export default dialogsReducer

export type initialStateType = typeof initialState
type ActionType = InferActionType<typeof actions>