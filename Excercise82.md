# Week-8 Excercise 8.2
create db artistdb

create table artist (
  id  serial primary key,
  artist first name varchar(50) not null,
  artist last name varchar(50) not null, 
  date of birth,
  city of birth varchar(100) 
  genre varchar(100)
);

create table album (
  id  serial primary key,
  artist_id integer not null references artist(id),
  album title varchar(100) not null,
  release date
);

create table track (
  id  serial primary key,
  album_id integer not null references album(id)
  track title varchar(100) not null,
  track length,
  composer name varchar(100) not null
);
