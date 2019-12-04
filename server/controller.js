module.exports = {
    //get
    getProducts: (req, res) => {
        const db = req.app.get('db');

        db.get_products().then(user => {
            res.status(200).send(user);
        })
    }
}