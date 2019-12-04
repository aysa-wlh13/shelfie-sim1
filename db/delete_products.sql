delete from products
where products_id = $1;

select * 
from products;