Entities :-
Shows
	id Not Null int primary key
	name varchar 150
	description varchar 500
	created_date datetime
	start_time datetime NOT NULL
	end_time datetime NOT NULL
	show_type varchar 100 (movie, laughter, music, workshop, sports)
User
	id NOT NULL INT primary key
	first_name varchar 100 NOT NULL
	last_name varchar 100 NOT NULL
	email varchar 150 NOT NULL unique
	phone_number varchar 50 NOT NULL
	country varchar 5 NOT NULL
	state varchar 100 NOT NULL
	city varchar 100 NOT NULL
	address varchar 200
	interest varchar 250
Bookings
	id NOT NULL INT primary key
	show_id NOT NULL FOREIGN KEY Shows.id
	user_id NOT NULL FOREIGN KEY User.id
Movies
	id NOT NULL INT primary key
	genre varchar 50 NOT NULL
	show_id NOT NULL FOREIGN KEY Shows.id
	ratings INT DEFAULT 0
	cast varchar 500
	crew varchar 500
	language varchar 500
Venues
	id NOT NULL INT primary key
	name varchar 200 NOT NULL
	address varchar 200 NOT NULL
	country varchar 5 NOT NULL
	state varchar 100 NOT NULL
	city varchar 100 NOT NULL
	type varchar 50 (theatre, auditorium, hall, stadium)
	show_id NOT NULL FOREIGN KEY Shows.id
