create table products (
  products_id serial primary key,
  name varchar(25),
  price integer,
  image_url text 
);

--insert into products
-- (name, price, image_url)
-- values
-- ('Black Jeans', 50, 'https://cdn.shopify.com/s/files/1/0340/3381/products/young-and-reckless-mens-bottoms-denim-carthage-distressed-skinny-jeans-black-30112521679_2000x.jpg?v=1505261241'),
-- ('Black Shoes', 30, 'https://images-na.ssl-images-amazon.com/images/I/71sIs1BvfiL._UX395_.jpg');