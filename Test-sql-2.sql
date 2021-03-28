-- 1. Write sql query to find the employees who are recruited by John Do
SELECT * FROM employee_table et
INNER JOIN recruiter_table rt
ON et.recruited_by = rt.id
WHERE rt.name LIKE 'John Do'

-- 2. Write sql query to find the employees who are recruited by no one
SELECT * FROM employee_table
WHERE recruited_by IS NULL

-- 3. Write sql query to find the total salary of employees by Bob Smith before 2021
SELECT SUM(et.salary) FROM employee_table et
INNER JOIN recruiter_table rt
ON et.recruited_by = rt.id
WHERE rt.name LIKE 'Bob Smith'
AND date_part('year', et.recruited_date) < 2021