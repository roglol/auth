import React from 'react';
import {connect} from 'react-redux';

class Esaa extends React.Component {

    render(){
        return (
            <div>
<input type="button" value="daumate" onClick={ () => this.props.addValue(1)}/>
<input type="button" value="gamaakel" onClick={ () => this.props.subtractValue(1)} />
<div>{ this.props.initialValue || 0}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch =>{
    return {
        addValue : (value) => dispatch({type:'ADD', value}),
        subtractValue : (value) => dispatch({type:'MINUS', value}),
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Esaa);