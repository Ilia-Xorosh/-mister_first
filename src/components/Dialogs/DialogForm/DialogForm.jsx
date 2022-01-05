import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormControls/FormControl";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Enter your message"} name={"newMessageBody"} component={Textarea} validate={[required, maxLength100]} />
        </div>
        <div>
            <button>Add Massage</button>
        </div>
    </form>)
}

const DialogReduxForm = reduxForm({
    form: 'dialog'
})(AddMessageForm);

export default DialogReduxForm;