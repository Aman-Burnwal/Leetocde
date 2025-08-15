# Write your MySQL query statement below
SELECT w1.id as Id FROM Weather as w1 
LEFT JOIN Weather as w2 

ON w1.temperature > w2.temperature AND DATEDIFF(w1.recordDate, w2.recordDate) = 1
WHERE w2.id IS NOT NULL
