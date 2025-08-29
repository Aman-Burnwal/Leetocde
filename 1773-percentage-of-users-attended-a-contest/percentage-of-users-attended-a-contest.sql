# Write your MySQL query statement below

SELECT contest_id, ROUND((COUNT(*) / (Select COUNT(*) FROM Users) * 100) , 2) as percentage
FROM Register
GroUp by contest_id
Order by percentage DESC, contest_id ASC;