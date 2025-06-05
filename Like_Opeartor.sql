create table st(
    sno int,
    sn varchar(20),
    sa int
);
insert into st values
    (1,"",30),
    (2,"Sam",24),
    (3,"Raj",33),
    (4,"Navs",19),
    (5,"Rekha",22);
select * from st where sn like "s%";/*start with s*/
select * from st where sn like "%a";/*end with a*/
select * from st where sn like "";/*null*/
select * from st where sn is not NULL;
select * from st where sn like '_a_';
