createdb artistdb

create table artist (
  id  serial primary key,
  firstname varchar(50) not null,
  lastname varchar(50) not null,
  date_of_birth varchar(100),
  city_of_birth varchar(100),
  genre varchar(100)
);

create table album (
  id  serial primary key,
  artist_id integer not null references artist(id),
  title varchar(100) not null,
  release_date integer
);

create table track (
  id  serial primary key,
  album_id integer not null references album(id),
  title varchar(100) not null,
  length integer,
  composer varchar(100) not null
);


INSERT INTO artist (id, firstname, lastname, date_of_birth, city_of_birth, genre)
VALUES (1, 'Elvis', 'Presley', 'January 8 1935', 'Tupelo Mississippi', 'Rock')

INSERT INTO album (id, title, release_date)
VALUES (1, 'Elvis Presley', 'March 23 1956')

INSERT INTO track (id, title, length, composer)
VALUES (1, 'Blue Suede Shoes', 2:00, 'Carl Perkins')
INSERT INTO track (id, title, length, composer)
VAULES (2, 'I'm Counting on you', 2:25, 'Don Robertson')
INSERT INTO track (id, title, length, composer)
VALUES (3, 'I Got a Woman', 2:25, 'Ray Charles and Renald Richard')

INSERT INTO artist (id, firstname, lastname, date_of_birth, city_of_birth, genre)
VALUES (2, 'Aretha', 'Franklin', 'March 25 1942', 'Memphis Tennessee', 'Soul')

INSERT INTO album (id, title, release_date)
VALUES (2, 'I Never Loved a Man the Way I Love You', 'March 10 1967')

INSERT INTO track (id, title, length, composer)
VALUES (4, 'Respect', 2:29, 'Otis Redding')
INSERT INTO track (id, title, length, composer)
VALUES (5, 'Drown in My Own Tears', 4:07, 'Henry Glover')
INSERT INTO track (id, title, length, composer)
VALUES (6, 'I Never Loved a Man', 2:51, 'Ronnie Shannon')

INSERT INTO artist (id, firstname, lastname, date_of_birth, city_of_birth, genre)
VALUES (3, 'Miles', 'Davis', 'May 26 1926', 'Alton Illinois', 'Jazz')

INSERT INTO album (id, title, release_date)
VALUES (3, 'Kind of Blue', 'August 17 1959')

INSERT INTO track (id, title, length, composer)
VALUES (7, 'So What', 9:04, 'Miles Davis')
INSERT INTO track (id, title, length, composer)
VALUES (8, 'Freddie Freeloader', 9:34, 'Miles Davis')
INSERT INTO track (id, title, length, composer)
VALUES (9, 'Blue in Green', 5:27, 'Miles Davis and Bill Evans')

SELECT* FROM album al JOIN artists ar ON al.artist_id = ar.id;
SELECT* FROM track tr JOIN album al ON tr.album_id = al.id;


UPDATE track set length = "5:28" where id = 9;

DELETE FROM track WHERE id = 5;
