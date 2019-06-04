import React from 'react';
import Input from './Input';


class Signup extends React.Component {
    render(){
        return(
            <div className="text-center">
            <form className="form-signin">
            <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal">Please sign up</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <Input/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <Input/>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
          </form>
          </div>
        )
    }
}


export default Signup;