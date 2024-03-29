import React, { useState } from 'react'
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';

function Contact() {


    const [data, setdata] = useState({
        fullname: '',
        phone: '',
        email: '',
        message: ''
    })

    function InputEvent(event) {

        const { name, value } = event.target

        setdata((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })

    }



    const formSubmit = (e) => {
        e.preventDefault();
        // <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        //     <Alert onClose={handleClose} severity="success">
        //         This is a success message!
        //     </Alert>
        // </Snackbar>
        alert(`Name:${data.fullname}\nPhone:${data.phone}\nEmail:${data.email}\nMessage:${data.message}`)
    }




    return (
        <>
            <div className='my-5 text-center'>
                <h2>Contact Us</h2>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>


                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input required type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input required type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>

                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent}></textarea>

                            </div>

                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Contact
