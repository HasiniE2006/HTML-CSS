create table students(
   sn varchar(20),
    t int,
    h int,
    e int,
    m int,
    sc int,
    so int,
    avg float
);
insert into students values("Raju",12,12,33,34,34,(12+12+33+34+34),(12+12+33+34+34)/5);

select * from students;
//output
Raju|12|12|33|34|34|125|25.0
