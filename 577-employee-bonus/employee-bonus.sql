# Write your MySQL query statement below
SELECT name, bonus 
FROM Employee 
LEFT JOIN Bonus
ON Employee.empID = Bonus.empId
WHERE bonus IS NULL or bonus < 1000