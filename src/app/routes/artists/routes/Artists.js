import React, {Component} from 'react';
import axios from 'axios';

class Artists extends Component{
    state = {
        artists:[],
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url:'https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10',
            headers: { 
               'Authorization':`Bearer BQBMDS0zBgTpJoHrGgn0lbujjGm0X8e7md9nKuLp7c087ZISGNwYgVnDex4R7zpPqMkasNTsiM6addfFJcmBoJEcOWbFCeAO8n1Ra-e1w_FH9y4Uzywa7Xvnhn5rqlsZeI6B0y26wRWvVaegx8j-DwTKK8i4P4dMyZqwOBzb1o6NiyN2AWnW5oTe`},
           })
        .then(res => {
            const data = res.data.items
            console.log(res.data.items)
            this.setState({artists:data})
        })
        .catch(error => {
            console.log('dagverxa to', error)
        })
    }
    render(){
        return (
            <div className="col-md-12 albums">
 {this.state.artists.map((el,key) =>{
                return <div className="col-md-2 col-sm-6 col-6" key = {key}>{el.artists[0].name}</div>
            })}
            </div>
           
        )
    }
}

export default Artists;