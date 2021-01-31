import { useDispatch  } from 'react-redux'
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import classNames from 'classnames';

export default function Login() {
    const dispatch = useDispatch();
    const sendAuth = () => {

        // localStorage.setItem('isAuth', true);
        dispatch({
            type: 'IS_AUTH',
        })
    }
    const validationsSchem = yup.object().shape({
        email: yup.string().email('Введите валидный email').required('Обязательноe поле'),
        password: yup.string()
            .required('Обязательное поле')
            .min(8, 'Минимум 8 символов')
            .matches(/^[a-zA-Z0-9]+$/, 'Без кирилицы')
    })
    return (
        <div className="wrapper">
            <div className="container">
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validateOnBlur
                    onSubmit={() => sendAuth()}
                    validationSchema={validationsSchem}
                >
                    {({
                        values, errors, touched, handleChange,
                        handleBlur, isValid, handleSubmit, dirty }) => (
                        <div className="container_form">
                            <div className="form">
                                <h1> Simple Flight Check</h1>
                                <label htmlFor="email">Логин</label>
                                <input
                                    className={classNames({
                                        'border_error': (touched.email && errors.email)
                                    })}
                                    type={'text'}
                                    name={`email`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {touched.email && errors.email
                                    && <div className={'red'}><span className="test">{errors.email}</span></div>}

                                <label htmlFor="password">Пароль</label>
                                <input
                                    className={classNames({
                                        'border_error': (touched.password && errors.password)
                                    })}
                                    type={'password'}
                                    name={`password`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                {touched.password && errors.password
                                    && <div className={'red'}><span className={'test'}>{errors.password}</span></div>}

                                <button
                                    disabled={!isValid && !dirty}
                                    className={classNames('btn_block', {
                                        'disabled_button': !isValid && !dirty
                                    })}
                                    onClick={handleSubmit}
                                    type={'submit'}
                                >Войти
                                </button>
                            </div>
                        </div>
                    )}
                </Formik>

            </div>
        </div>


    )
}
