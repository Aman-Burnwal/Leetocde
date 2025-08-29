# Write your MySQL query statement below
SELECT 
SUBSTRING(trans_date,1, 7) as month,
country,
count(*) as trans_count, 
SUM(case when state = 'approved' THEN 1 ELSE 0 END ) as approved_count,
SUM(amount) as trans_total_amount,
SUM(case when state = 'approved' THEN amount ELSE 0 END ) as approved_total_amount
FROM Transactions
GROUP BY country, month