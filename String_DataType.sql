create table str(
   sname char(10),
    address varchar(20),
    info text
);
insert into str(sname,address,info)
    values("hasini","palamaner","meeting at palamaner"),
("teju","madanapalle","meeting at madanapalle"),
("ramya","madanapalle","meeting at palamaner");
/*insert into ic str values(&sname,&address,&info);*/
select * from str;
//output
hasini|palamaner|meeting at palamaner
teju|madanapalle|meeting at madanapalle
ramya|madanapalle|meeting at palamaner
