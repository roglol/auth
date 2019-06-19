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
               'Authorization':`Bearer BQBqttjgblBD5srcrTVlyCAPpz03dZ_tiIujWvES0xjGmHa6LDCW3f5JiEE0Jjx2eHBf28QRJbVFGdgJhAu0dRLFAhgS725BJHeBHhW8pBDBCHKowQbC1BIp2-FAdT3_bJrE9EuBQR-jpH6fSmY3fcg6yRBfj_EJzU2FydYkJBD34j0fI_8n2a1A`},
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