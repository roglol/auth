import React, {Component} from 'react';
import {Switch, Route, withRouter, NavLink} from 'react-router-dom';

const Navigation = ({match}) =>{
return (
   <div className = "navigation">
<NavLink to="/home" activeClassName="active">Home</NavLink>
<NavLink to="/guest" activeClassName="active">Guest</NavLink>
<NavLink to="/app/artists" activeClassName="active">Artists</NavLink>
   </div>
)
}

export default Navigation;