# Write your MySQL query statement below
SELECT P.project_id, ROUND(SUM(E.experience_years) / COUNT(*), 2) as average_years
FROM Project as P
JOIN Employee as E
ON P.employee_id = e.employee_id
GROUP BY P.project_id;