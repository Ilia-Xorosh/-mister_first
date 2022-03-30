import React, {FC} from "react";
import s from "./FormControl.module.css"
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../Utils/validators/validators";

type FormControlParamsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: FC<FormControlParamsType> = ({meta: {touched, error},
                                         children, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : " ")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props} > <textarea {...input} {...restProps} /> </FormControl>
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props} > <input {...input} {...restProps} /> </FormControl>
}

export function createField<FormsKeysType extends string>(placeholder: string | undefined, name: FormsKeysType,
                            component: FC<WrappedFieldProps>,
                            validate: Array<FieldValidatorType> | null, props = {}, text = "")  {
   return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props}/>{text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>