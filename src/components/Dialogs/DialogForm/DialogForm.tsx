import {InjectedFormProps, reduxForm} from "redux-form";
import React, {FC} from "react";
import {createField, Textarea} from "../../common/FormControls/FormControl";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";
import {NewMessageFormValuesType} from "../Dialogs";

const maxLength100 = maxLengthCreator(100);

type NewMessageFormTypeKeys = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: FC<InjectedFormProps<NewMessageFormValuesType,PropsType> & PropsType> = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            {createField<NewMessageFormTypeKeys>("Enter your message", "newMessageBody", Textarea, [required, maxLength100])}
        </div>
        <div>
            <button>Add Massage</button>
        </div>
    </form>)
}

const DialogReduxForm = reduxForm<NewMessageFormValuesType,PropsType>({
    form: 'dialog'
})(AddMessageForm);

export default DialogReduxForm;