# Write your MySQL query statement below
SELECT e2.name FROM Employee as e1
JOIN Employee as e2
ON e1.managerId = e2.id
GROUP BY e1.managerId 
HAVING COUNT(e1.managerId) >= 5
