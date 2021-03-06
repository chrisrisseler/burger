drop database if exists burgers_db;
create burgers_db;
use burgers_db;

create table burgers(
    id int auto_increment not null,
    burger_name varchar(80) not null,
    devoured boolean,
    primary key(id)
);
