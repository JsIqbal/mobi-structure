import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import env from 'react-dotenv';
import { useRef } from 'react';


import { forgotPassword } from '../users/actions/user.actions';
import { forgotPasswordSchema } from './forgot-pass.schema';

function ForgotPassword() {
    console.log(env.SITE_KEY)
    const captchaRef = useRef(null)
    let navigate = useNavigate();

    return (
        <div className='login-component'>
            <div className='container ' >
                <div className='row'>
                    <Formik
                        initialValues={{
                            username: "",
                        }}
                        validationSchema={forgotPasswordSchema}
                        onSubmit={(values, actions) => {
                            forgotPassword(values)
                                .then(response => {
                                    
                                })
                            actions.setSubmitting(false);
                        }}
                    >
                        {(formikprops) => {
                            return (
                                <Form className='row'>
                                    <div 
                                        className='col-lg-5 ms-auto me-auto login-box'
                                    >
                                        <div className='login-header text-center'>
                                            <h2>Mobi Reach</h2>
                                            <h4>Welcome</h4>
                                        </div>
                                        <div className='form-group login-form-input'>
                                            <label 
                                                htmlFor='username' 
                                                className='form-label'
                                            >
                                                Username
                                                <span style={{color:"red"}}>*</span>
                                            </label>

                                            <Field 
                                                type="text" 
                                                className="form-control" 
                                                id="username" 
                                                name="username" 
                                            />

                                            <div className='invalid-feedback d-block'>
                                                <ErrorMessage name="username" />
                                            </div>
                                        </div>
                                            
                                        <div className='form-group login-form-input'>
                                            <label 
                                                htmlFor='captcha' 
                                                className='form-label'
                                            >
                                                
                                            <ReCAPTCHA
                                                id="captcha" 
                                                name="captcha" 
                                                sitekey={env.SITE_KEY}
                                                ref={captchaRef}
                                            />
                                            </label>

                                            <div className='invalid-feedback d-block'>
                                                <ErrorMessage name="captcha" />
                                            </div>
                                        </div>
                                        <div className='form-group m-auto row'>
                                            <div className='col-lg-12'>
                                                <div className='row'>
                                                    <div className='col-lg-12 mt-2 mb-2'>
                                                        <div className='row'>
                                                            <div className='form-group m-auto row mb-2 mt-2'>
                                                                <div className='col-lg-6 ms-auto text-end'>
                                                                    <button 
                                                                        type="submit mb-4"  
                                                                        className="login-form-btn btn"
                                                                    >
                                                                        SUBMIT
                                                                    </button>
                                                            
                                                                </div>
                                                                <div className='col-lg-6 me-auto'>
                                                                    <Link 
                                                                        to='/'
                                                                        className='login-form-btn btn registration'
                                                                    >
                                                                        CLOSE
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;