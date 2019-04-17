import React, { Component } from 'react';
// import './login.scss';

class Login extends Component {
    // constructor() {

    // }
    // handleChange() {

    // }
    // handleSubmit() {

    // }
    render() {
        return (
            <div >
                <div className="text-center">
                    <button type="button" className="btn btn-warning center-block">Sign Up</button>
                    <button type="button" className="btn btn-warning center-block">Log In</button>
                </div>

                <form className="form-group row justify-content-center">
                    {/* <label className="col-sm-2 col-form-label">Email</label> */}
                    <div className="col-sm-5">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                    </div>
                </form>

                <form className="form-group row justify-content-center">
                    {/* <label className="col-sm-2 col-form-label">Password</label> */}
                    <div className="col-sm-5">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                    </div>
                </form>

                <div className="text-center">
                    <button type="submit" className="btn btn-warning center-block">Submit</button>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-warning">Guest</button>
                </div>
                <div className="text-center">
                    <button type="button" className="btn btn-warning">Tutorial</button>
                </div>
            </div>
        );
    }
}

export default Login;