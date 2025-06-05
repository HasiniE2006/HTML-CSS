create table students(
    sid number,
    sname char,
    sdob date,
    sjoin year,
    sphno number,
    sadd varchar
);
insert into students(sid,sname,sdob,sjoin,sphno,sadd)
values(3001,"ram","2000-06-05","2025",1234567890,"10-75 plmr"),
    (3002,"sita","2000-06-05","2025",1234512345,"10-75 mpl"),
    (3003,"ravan","2001-06-05","2025",1234555555,"10-75 plmr");
update students set sjoin=1989;
select * from students;
//output
3001|ram|2000-06-05|1989|1234567890|10-75 plmr
3002|sita|2000-06-05|1989|1234512345|10-75 mpl
3003|ravan|2001-06-05|1989|1234555555|10-75 plmr
