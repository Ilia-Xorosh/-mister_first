import React from "react";
import { Field, reduxForm } from 'redux-form'
import {Input} from "../common/FormControls/FormControl";
import {maxLengthCreator, required} from "../../Utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/Auth-reduser";
import {Redirect} from "react-router-dom";
import s from "../common/FormControls/FormControl.module.css";


const maxLength20 = maxLengthCreator(20);
const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {
return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLength20]} />
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={Input} validate={[required, maxLength15]} type={"password"}/>
        </div>
        <div>
            <Field component={Input} type={"checkbox"} name={"rememberMy"} /> remember my
        </div>
    {props.error && <div className={s.formSummaryError}>
            {props.error}
        </div>}
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
        props.login(formData.email, formData.password, formData.rememberMy);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect (mapStateToProps, {login} ) (Login);