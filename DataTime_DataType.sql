create table str(
  d date,
    t time,
    dt datatime,
    ts timestamp,
    y year
);
insert into str(d,t,dt,ts,y)
    values('2025-06-06','12:14:56','2025-06-06 12:14:56','2025-06-06 12:14:56',2025);
select * from str;
//output
2025-06-06|12:14:56|2025-06-06 12:14:56|2025-06-06 12:14:56|2025
