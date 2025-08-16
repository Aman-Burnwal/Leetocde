# Write your MySQL query statement below
SELECT *,
CASE 
WHEN ( ((x + Y) <= z OR (x + z) <= y OR (y + z) <= x ) = 0  ) THEN 'Yes' Else 'No' END as triangle
 FROM Triangle