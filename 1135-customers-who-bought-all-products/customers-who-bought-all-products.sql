# Write your MySQL query statement below
SELECT customer_id From Customer 
Group by customer_id 
HAVING COUNT(DISTINCT  product_key) = (SELECT Count(product_key) FROM PRODUCT )