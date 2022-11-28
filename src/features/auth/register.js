import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

import { registration } from '../users/actions/user.actions';
import { registarSchema } from './register.schema';

function Registration() {
    let navigate = useNavigate();

    return (
        <div className='register-component'>
            <div className='container ' >
                <div className='row'>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
                            companyName:'',
                            contactName:"",
                            smsSenderName:"",
                            nic:"",
                            brc:'',
                            vat: '',
                            userName:'',
                            contactNumber: '',
                            companyAddress:'',
                            checked:[]
                        }}
                        validationSchema={registarSchema}
                        onSubmit={(values, actions) => {
                            console.log("values>> ", values)
                            registration(values)
                                .then(response => {
                                   console.log(response.data);
                                })
                            actions.setSubmitting(false);
                        }}
                    >
                        {(formikprops) => {
                            return (
                                <Form className='row'>
                                    <div className='col-lg-7 ms-auto me-auto register-box'>
                                        <div className='register-main'>
                                            <div className='login-header text-center'>
                                                <h2>Mobi Reach</h2>
                                                <h4>REGISTER</h4>
                                            </div>
                                            <div className='row'>
                                                <div className='form-group register-form-input col-lg-6'>
                                                    <label 
                                                        htmlFor='companyName' 
                                                        className='form-label'
                                                    >
                                                        Company/Individual Name
                                                        <span style={{color:"red"}}>*</span>
                                                    </label>

                                                    <Field 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="companyName" 
                                                        name="companyName" 
                                                    />

                                                    <div className='invalid-feedback d-block'>
                                                        <ErrorMessage name="companyName" />
                                                    </div>
                                                </div>

                                                <div className='form-group register-form-input col-lg-6'>
                                                    <label 
                                                        htmlFor='companyAddress' className='form-label'
                                                    >
                                                        Company/Individual Address
                                                        <span style={{color:"red"}}>*</span>
                                                    </label>

                                                    <Field 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="companyAddress" 
                                                        name="companyAddress" 
                                                    />

                                                    <div className='invalid-feedback d-block'>
                                                        <ErrorMessage name="companyAddress" />
                                                    </div>
                                                    <br />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-group register-form-input col-lg-6'>
                                                    <label 
                                                        htmlFor='contactName' 
                                                        className='form-label'
                                                    >
                                                        Primary Contact Name
                                                        <span style={{color:"red"}}>*</span>
                                                    </label>

                                                    <Field 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="contactName" 
                                                        name="contactName" 
                                                    />

                                                    <div className='invalid-feedback d-block'>
                                                        <ErrorMessage name="contactName" />
                                                    </div>
                                                </div>

                                                <div className='form-group register-form-input col-lg-6'>
                                                    <label 
                                                        htmlFor='contactNumber' className='form-label'
                                                    >
                                                        Contact Number
                                                        <span style={{color:"red"}}>*</span>
                                                    </label>

                                                    <Field 
                                                        type="number" 
                                                        className="form-control" 
                                                        id="contactNumber" 
                                                        name="contactNumber" 
                                                    />

                                                    <div className='invalid-feedback d-block'>
                                                        <ErrorMessage name="contactNumber" />
                                                    </div>
                                                    <br />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-group register-form-input col-lg-12'>
                                                    <label 
                                                        htmlFor='email' 
                                                        className='form-label'
                                                    >
                                                        Email
                                                        <span style={{color:"red"}}>*</span>
                                                    </label>

                                                    <Field 
                                                        type="email" 
                                                        className="form-control" 
                                                        id="email" 
                                                        name="email" 
                                                    />

                                                    <div className='invalid-feedback d-block'>
                                                        <ErrorMessage name="email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-group register-form-input col-lg-6'>
                                                    <label 
                                                        htmlFor='smsSenderName' 
                                                        className='form-label'
                                                    >
                                                        {`SMS/MMS Sender’s Name (Max 11 Characters)`}
                                                        <span style={{color:"red"}}>*</span>
                                                    </label>

                                                    <Field 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="smsSenderName" 
                                                        name="smsSenderName" 
                                                    />

                                                    <div className='invalid-feedback d-block'>
                                                        <ErrorMessage name="smsSenderName" />
                                                    </div>
                                                </div>

                                                <div className='form-group register-form-input col-lg-6'>
                                                    <label 
                                                        htmlFor='userName' className='form-label'
                                                    >
                                                        User Name
                                                        <span style={{color:"red"}}>*</span>
                                                    </label>

                                                    <Field 
                                                        type="text" 
                                                        className="form-control" 
                                                        id="userName" 
                                                        name="userName" 
                                                    />

                                                    <div className='invalid-feedback d-block'>
                                                        <ErrorMessage name="userName" />
                                                    </div>
                                                    <br />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-group register-form-input col-lg-6'>
                                                    <label 
                                                        htmlFor='password' 
                                                        className='form-label'
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
                                                </div>

                                                <div className='form-group register-form-input col-lg-6'>
                                                    <label 
                                                        htmlFor='confirmPassword' className='form-label'
                                                    >
                                                        {`Password [Confirm]`}
                                                        <span style={{color:"red"}}>*</span>
                                                    </label>

                                                    <Field 
                                                        type="password" 
                                                        className="form-control" 
                                                        id="confirmPassword" 
                                                        name="confirmPassword" 
                                                    />

                                                    <div className='invalid-feedback d-block'>
                                                        <ErrorMessage name="confirmPassword" />
                                                    </div>
                                                    <br />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-group register-form-input col-lg-6'>
                                                    <label 
                                                        htmlFor='nic' 
                                                        className='form-label'
                                                    >
                                                        BRC /NIC no
                                                        <span style={{color:"red"}}>*</span>
                                                    </label>

                                                    <Field 
                                                        type="number" 
                                                        className="form-control" 
                                                        id="nic" 
                                                        name="nic" 
                                                    />

                                                    <div className='invalid-feedback d-block'>
                                                        <ErrorMessage name="nic" />
                                                    </div>
                                                </div>

                                                <div className='form-group register-form-input col-lg-6'>
                                                    <label 
                                                        htmlFor='vat' className='form-label'
                                                    >
                                                        VAT Number
                                                    </label>

                                                    <Field 
                                                        type="number" 
                                                        className="form-control" 
                                                        id="vat" 
                                                        name="vat" 
                                                    />

                                                    <div className='invalid-feedback d-block'>
                                                        <ErrorMessage name="vat" />
                                                    </div>
                                                    <br />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='form-group register-form-input col-lg-12 mb-3'>
                                                    <label 
                                                        htmlFor='brc' 
                                                        className='form-label'
                                                    >
                                                        {
                                                            `Upload BRC Copy or NIC/Driving License Copy (Front & Back Covers) (Required)`
                                                        }
                                                        <span style={{color:"red"}}>*</span>
                                                    </label>

                                                    <div className='multi-drop'>
                                                        <Field 
                                                            type="file" id="brc" name="brc" accept="image/jpeg,image/png,.doc,.docx,.pdf"
                                                            className="image-up brc"
                                                        />
                                                    </div>

                                                    <div className='invalid-feedback d-block'>
                                                        <ErrorMessage name="brc" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='form-group m-auto row'>
                                                <div className='col-lg-12'>
                                                    <div className='row'>
                                                        
                                                        <div className='col-lg-12 mt-4 mb-4'>
                                                            <div className='row'>
                                                                <div className='col-lg-12 mb-2'>
                                                                    <Link className='login-link'
                                                                        to='/reset-password'
                                                                    >
                                                                        View Mediums/Channels Costs
                                                                    </Link>
                                                                </div>

                                                                <div className="row">
                                                                    <ul className="list-group mb-5">
                                                                        <li className="list-group-item">
                                                                            <div>
                                                                            <Field 
                                                                                id='checked'
                                                                                name="checked" 
                                                                                className="form-check-input me-1" type="checkbox" 
                                                                                value="One" 
                                                                            />
                                                                            <span>I agree to</span>
                                                                            <span>
                                                                                <Link className='term-link'
                                                                                    to='/terms&conditions'
                                                                                >
                                                                                    {` Terms and Conditions`}
                                                                                </Link>    
                                                                            </span>   
                                                                            </div>
                                                                            <div className='invalid-feedback d-block'>
                                                                                <ErrorMessage name="checked" />
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>

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

export default Registration;