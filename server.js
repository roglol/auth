const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('Hello World')
})
// 66be64bcdaa340948ef67b0d14a8db2b
// 078c0eb125994425bad37d817942de00
// 66be64bcdaa340948ef67b0d14a8db2b:078c0eb125994425bad37d817942de00

// curl -H "Authorization: Basic NjZiZTY0YmNkYWEzNDA5NDhlZjY3YjBkMTRhOGRiMmI6MDc4YzBlYjEyNTk5NDQyNWJhZDM3ZDgxNzk0MmRlMDA=" -d grant_type=authorization_code -d code=AQB2Tmh1FXClO43LSvHq2cY-DAuVWQ1elbC7xyEkQs78k0_kHAPou4-xT6c9O-ze6WK8Ov3vFWz2g9L1E840PvgteM9tYgtEekxKlCBBLNJCVGWgl1UjomVJHyktlL5yorujjwl2k4ORcM4HEk3WcvykDuu_uyGdGzG47Xg8Rocfox-fQOGy5NOSjMWefm99Wn2pIcBpivc6MjseRB5nO6GxkR0ejZ6xFVyJAWIHxH7JRtYWK3rk -d redirect_uri=https%3A%2F%2Fapi-university.com%2F https://accounts.spotify.com/api/token
app.get('/login', function(req, res) {
    var scopes = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + '66be64bcdaa340948ef67b0d14a8db2b' +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent('https://api-university.com/'));
    });

app.listen('5000', ()=>{
    console.log('vai shens patrons')
})