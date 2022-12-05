import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { login } from '../users/actions/user.actions';
import { loginSchema } from './login.schema';

function Login() {
    let navigate = useNavigate();

    return (
        <div className='login-component'>
            <div className='container ' >
                <div className='row'>
                    <Formik
                        initialValues={{
                            username: "",
                            password: ""
                        }}
                        validationSchema={loginSchema}
                        onSubmit={(values, actions) => {
                            console.log("Login values>>", values)
                            const fakeData = {
                                admin : {
                                    username: "admin",
                                    password: "admin"
                                }
                            }
                            login(values)
                                .then(response => {
                                    const adminToken = response.admin;
                                   
                                    if (values.username===fakeData.admin.username && values.password===fakeData.admin.password) {
                                        localStorage.setItem("access_token", adminToken);

                                        navigate("/dash", { 
                                            state: { someData: adminToken } 
                                        });
                                    }

                                    if (values.username!==fakeData.admin.username && values.password!==fakeData.admin.password) {
                                        alert("Error 404: user not found!")

                                        navigate("/");
                                    }
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
                                                    htmlFor='password' className='form-label'
                                                >
                                                    Password
                                                    <span style={{color:"red"}}>*</span>
                                                </label>

                                                <Field 
                                                    type="password" 
                                                    className="form-control" 
                                                    id="password" 
                                                    name="password" 
                                                />

                                                <div className='invalid-feedback d-block'>
                                                    <ErrorMessage name="password" />
                                                </div>
                                                <br />
                                            </div>
                                            <div className='form-group m-auto row'>
                                                <div className='col-lg-12'>
                                                    <div className='row'>
                                                        <div className='col-lg-6 ms-auto text-end'>
                                                            <button 
                                                                type="submit mb-4"  
                                                                className="login-form-btn btn"
                                                            >
                                                                LOGIN
                                                            </button>
                                                    
                                                        </div>
                                                        <div className='col-lg-6 me-auto'>
                                                            <Link 
                                                                to='/registration'
                                                                className='login-form-btn btn registration'
                                                            >
                                                                REGISTER
                                                            </Link>
                                                        </div>
                                                        <div className='col-lg-12 mt-4 mb-4'>
                                                            <div className='row'>
                                                                <div className='col-lg-12 text-center mb-2'>
                                                                    <span className='frgt-ps'>
                                                                        {`Forgot Password? `}
                                                                    </span>
                                                                    <Link className='login-link'
                                                                        to='/reset-password'
                                                                    >
                                                                        CLICK HERE
                                                                    </Link>
                                                                </div>
                                                                <div className='col-lg-12 text-center mb-2'>
                                                                    <Link className='login-link'
                                                                        to='/contact'
                                                                    >
                                                                        Contact us
                                                                    </Link>
                                                                </div>
                                                                <div className='col-lg-12 text-center'>
                                                                    <Link className='login-link'
                                                                        to='/terms'
                                                                    >
                                                                        Terms & Conditions
                                                                    </Link>
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

export default Login;