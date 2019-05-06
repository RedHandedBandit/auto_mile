 create table customer (
   customer_id serial primary key,
   firstname varchar(80) not null,
   lastname varchar(80) not null,
   company varchar(80),
   mobile_phone integer,
   home_phone integer,
   billing_address_id references customer_address(address_id),
   home_address_id references customer_address(address_id)
   private_id references private(private_id),
   login_id references customer_login(login_id)
);

create table customer_address (
   address_id serial primary key,
   address varchar(200) not null,
   city varchar(50) not null,
   state varchar(2) not null,
   zipcode integer not null,
   country varchar(120) not null
);

create table private (
   private_id serial primary key,
   card integer not null,
   expire integer not null,
   code integer not null
);

create table employee_login (
   login_id serial primary key,
   isAdmin boolean,
   firstname varchar(80) not null,
   lastname varchar(80) not null,
   phone integer not null,
   username varchar(80) not null,
   email text not null,
   hash integer not null
);