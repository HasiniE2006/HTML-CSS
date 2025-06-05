create table ic(
  sno smallint,
  sid bigint,
    savg float,
    sper decimal(3,4)
);
insert into ic values(1,234567,45.434,454.43);
select * from ic;
select sno,sid from ic;
select sid from ic
    where sno ==1 and savg ==454.43;
//ouput
1|234567|45.434|454.43
1|234567
