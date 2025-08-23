# Write your MySQL query statement belowSELEC
SELECT 
    CASE 
        WHEN id % 2 = 1 AND id = (SELECT MAX(id) FROM Seat ) 
            THEN id
        WHEN id % 2 = 1
            THEN id + 1
        WHEN id % 2 = 0
            THEN id - 1
    END AS id, student
FROM Seat
Order BY id