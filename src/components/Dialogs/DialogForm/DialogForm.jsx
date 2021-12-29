import {Field, reduxForm} from "redux-form";
import React from "react";

const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Enter your message"} type={"textarea"} name={"newMessageBody"} component={"textarea"} />
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