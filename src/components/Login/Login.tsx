import React, {FC} from "react";
import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, Input} from "../common/FormControls/FormControl";
import {maxLengthCreator, required} from "../../Utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormControls/FormControl.module.css";
import {appStateType} from "../../Redux/Redux-store";


const maxLength20 = maxLengthCreator(20);
const maxLength15 = maxLengthCreator(15);

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
return (<form onSubmit={handleSubmit}>
    {createField<LoginFormValuesTypeKeys>("Email", "email", Input, [required, maxLength20])}
    {createField<LoginFormValuesTypeKeys>("Password", "password", Input, [required, maxLength15], {type: "password"})}
    {createField<LoginFormValuesTypeKeys>(undefined, "rememberMy", Input, null, {type: "checkbox"}, "remember my")}
    {captchaUrl && <img src={captchaUrl}/>}
    {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", Input, [required], {})}
    {error && <div className={s.formSummaryError}>
            {error}
        </div>}
            <div>
                <button>Login</button>
            </div>
        </form>)
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValuesType = {
    rememberMy: boolean
    email: string
    password: string
    captcha: string
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>

const Login: FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
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
const mapStateToProps = (state: appStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl

})
export default connect<MapStatePropsType, MapDispatchPropsType, unknown, appStateType> (mapStateToProps, {login} ) (Login);