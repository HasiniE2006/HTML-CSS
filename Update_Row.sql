create table stu(
    sn varchar(20),
    t int,
    h int,
    e int,
    m int,
    sc int,
    su int,
    avg float
);
insert into stu values
("Raja",50,56,78,90,100,(50+56+78+90+100),(50+56+78+90+100)/5),
("Raj",50,56,78,90,100,(50+56+78+90+100),(50+56+78+90+100)/5),
("Rajjuu",50,56,78,90,100,(50+56+78+90+100),(50+56+78+90+100)/5);
update stu
set t=t+2,su=su+2,avg=(su+2)/5.0 where sn="Raj";
select * from stu;
//output
Raja|50|56|78|90|100|374|74.0
Raj|52|56|78|90|100|376|74.0
Rajjuu|50|56|78|90|100|374|74.0
