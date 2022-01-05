import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input} from "../common/FormControls/FormControl";
import {maxLengthCreator, required} from "../../Utils/validators/validators";

const maxLength20 = maxLengthCreator(20);
const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={"login"} component={Input} validate={[required, maxLength20]} />
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength15]} />
        </div>
        <div>
            <Field component={"input"} type={"checkbox"} name={"rememberMy"} /> remember my
        </div>
            <div>
                <button>Login</button>
            </div>
        </form>)
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);

    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login;