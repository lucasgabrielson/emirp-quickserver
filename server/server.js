const express = require( 'express' );

const app = express();

app.use( express.static( 'server/public' ));

const port = 5000;
let devices = [ 'android phone', 'fire tablet']

app.listen( port, ()=> {
    console.log( 'server is up' );
})

// our first GET route 
app.get( '/devices', ( req, res)=> {
    console.log( '/devices GET');
    res.send( devices );
})