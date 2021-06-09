/**
 * Write a SQL query to get the second highest salary from the Employee table.
 */

// SQL query statement

/**select MAX(em.Salary) as SecondHighestSalary from Employee as em
where em.Salary not in (
    select MAX(Salary) from Employee as emp
)

*/
