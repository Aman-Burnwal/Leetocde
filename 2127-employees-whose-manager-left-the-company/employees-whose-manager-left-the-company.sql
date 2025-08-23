# Write your MySQL query statement below
SELECT employee_id FROM Employees
WHERE 30000 > salary AND manager_id NOT IN (SELECT employee_id From Employees)
ORDER BY employee_id ASc;