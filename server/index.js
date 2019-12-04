require('dotenv').config()
const express = require ('express');
const massive = require ('massive');
const ctrl = require('./controller');

const app = express()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env


massive(CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('DB Connected')
})
.catch(err => console.log(err));

//endpoints
//get
app.get('/api/products', ctrl.getProducts);

//post
app.post('/api/products', ctrl.addProducts);

//put
app.put('/api/products/:products_id', ctrl.updateProducts);

//delete
app.delete('/api/products/:products_id', ctrl.deleteProducts);


app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} is Haunted!!`);
});