SELECT s.student_id, s.student_name, su.subject_name, count(e.student_id) as attended_exams
FROM Students as s
JOIN Subjects as su
LEFT JOIN  Examinations as e
ON s.student_id = e.student_id AND e.subject_name = su.subject_name
GROUP BY s.student_id, s.student_name, su.subject_name
ORDER BY s.student_id,  su.subject_name