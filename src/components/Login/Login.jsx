import React from "react";
import { reduxForm } from 'redux-form'
import {createField, Input} from "../common/FormControls/FormControl";
import {maxLengthCreator, required} from "../../Utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormControls/FormControl.module.css";


const maxLength20 = maxLengthCreator(20);
const maxLength15 = maxLengthCreator(15);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
return (<form onSubmit={handleSubmit}>
    {createField("Email", "email", Input, [required, maxLength20])}
    {createField("Password", "password", Input, [required, maxLength15], {type: "password"})}
    {createField(null, "rememberMy", Input, null, {type: "checkbox"}, "remember my")}
    {captchaUrl && <img src={captchaUrl}/>}
    {captchaUrl && createField("Symbols from image", "captcha", Input, [required], {})}
    {error && <div className={s.formSummaryError}>
            {error}
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
        props.login(formData.email, formData.password, formData.rememberMy, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl

})
export default connect (mapStateToProps, {login} ) (Login);