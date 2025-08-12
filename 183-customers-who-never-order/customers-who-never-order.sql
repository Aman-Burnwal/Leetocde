# Write your MySQL query statement below
SELECT name as Customers
FROM Customers as c
LEFT JOIN Orders
ON Orders.customerId = c.id
WHERE customerId IS NULL