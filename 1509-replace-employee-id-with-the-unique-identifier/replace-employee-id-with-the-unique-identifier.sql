# Write your MySQL query statement below
SELECT name,unique_id FROM Employees 
Left join EmployeeUNI
ON Employees.id = EmployeeUNI.id;