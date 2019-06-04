import React from 'react';
import Input from './Input';
import {connect} from 'react-redux';
import axios from 'axios';


class Signin extends React.Component {

    state ={
        email:'',
        password:'',
        errors:{},
        isLoading:false
    }
componentDidUpdate(){
    console.log(this.props.res)
}
    onSubmit = (e) => {
        e.preventDefault();
        this.raio()
        // this.props.submit('rakaia reacti too')
        this.props.signin({
            email:this.state.identifier,
            password:this.state.password
        })
        
    }
    raio = () => {
        console.log('meeeh')
       return () => {
           console.log('araaa')
       }
    }
    onChange = (e,amitkeni) =>{
        let newState = {...this.state}
        newState[amitkeni] = e.target.value
        this.setState(newState)
    }
   
    render(){
        return(
            <div className="text-center">
            <form className="form-signin" onSubmit={this.onSubmit}>
            <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <Input onChange={this.onChange} type={'email'}/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <Input onChange={this.onChange} type={'password'}/>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
          </form>
          </div>
        )
    }
}
const mapStateToProps = state => {
    return {...state}
}

 const signin = (data) => {
    return dispatch =>{
        axios.post('../../server/server.php',data).then(res=>{
            dispatch(this.props.auth(res.data))
        })
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        submit : (value) => dispatch({type:'SUBMIT', value}),
        auth: (data) => dispatch({type:"AUTH", value:data}),
        signin: (data) =>dispatch(
            signin(data)
        )
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Signin);