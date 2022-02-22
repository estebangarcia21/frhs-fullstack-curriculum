# MySQL

Enter the MySQL shell.
```
$ sudo mysql -u root -p
```

## Databases
A database is a collection of tables.

### Create
```sql
CREATE DATABASE <db_name>;
```

### Select
```sql
USE <db_name>;
```

### Delete
```sql
DELETE DATABASE <db_name>;
```

## Tables
A table is a model of an object.

### Create
```sql
CREATE TABLE <table_name> (
  id PRIMARY KEY,
  column_name column_type column_attributes,
  ...
);
```

### Insert Data
```sql
INSERT INTO <table_name> (column0, column1, ...) VALUES (column0_value, column1_value, ...), (column0_value, column1_value, ...), ...;
```

### Query Data
```sql
SELECT column0, column1 as new_column_name, column2, ... FROM <table_name>;
```

You can query all columns using the `*` character.

```sql
SELECT * FROM <table_name>;
```

Use a `WHERE` statement to filter data.

```sql
SELECT column0, column1 FROM <table_name> WHERE
  column0 > 0,
  column0 < 0,
  column0 = 0,
  column0 != 0;
```

### Delete Data
```sql
DELETE FROM <table_name> WHERE ...;
```

## Joins
You can query data from multiple tables and join it together. For example, I have an `Orders` table that represents customer 
orders and a `Customers` table that has the actual customer data. I can use a join to get both their orders and their personal data.

```sql
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```

There are multiple types of joins:

- (INNER) Join: Returns records that have matching values in both tables
- LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
- RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
- FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table

<img src="https://www.w3schools.com/sql/img_innerjoin.gif" alt="Join diagram">

<img src="https://www.w3schools.com/sql/img_leftjoin.gif" alt="Join diagram">

<img src="https://www.w3schools.com/sql/img_rightjoin.gif" alt="Join diagram">

<img src="https://www.w3schools.com/sql/img_fulljoin.gif" alt="Join diagram">
