module.exports = {
  //get
  getProducts: (req, res) => {
    const db = req.app.get("db");

    db.get_products().then(user => {
      res.status(200).send(user);
    });
  },

  //post
  addProducts: (req, res) => {
    const db = req.app.get("db");
    const { name, price, image_url } = req.body;

    db.add_products([name, price, image_url])
      .then(product => {
        console.log(product);
        return res.status(200).send(product);
      })
      .catch(err => {
        res.sendStatus(500);
        console.log(err);
      });
  },

  //put
  updateProducts: (req, res) => {
    const db = req.app.get('db')
    const {products_id} = req.params
    const { name, price, image_url } = req.body
   
    db.update_products([products_id, name, price, image_url])
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.sendStatus(500)
            console.log(err)
        })

  },

  //delete
  deleteProducts: (req, res) => {
    const db = req.app.get('db')
    const {products_id} = req.params
   
    db.delete_products(products_id)
        .then(data => res.status(200).send(data))
        .catch(err => {
            res.sendStatus(500)
            console.log(err)
        })
        
  }
};
