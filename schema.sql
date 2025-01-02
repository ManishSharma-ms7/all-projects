CREATE DATABASE bookmyshow;
USE bookmyshow;

-- Entities :-

	-- Movies
		-- id NOT NULL INT primary key
		-- name varchar 150
		-- genre varchar 50 NOT NULL
		-- ratings INT DEFAULT 0
		-- cast_members varchar 500
		-- crew_members varchar 500
		-- languages varchar 500

		-- Command :-
			Create Table Movies (
				id INT NOT NULL PRIMARY KEY,
				name varchar(150) NOT NULL,
				description varchar(500) NOT NULL,
				genre varchar(50) NOT NULL,
				ratings INT DEFAULT 0,
				cast_members varchar(500),
				crew_members varchar(500),
				languages varchar(500)
			);

			INSERT INTO Movies Values (1, "Pushpa: The Rule", "The Rule picks up from the explosive events of the first part, following Pushpa`s meteoric rise as he expands his red sandalwood empire beyond borders.", "Action", 0, "Allu Arjun, Rashmika", "Sukumar", "Tamil,Hindi,Telegu,Marathi,Bengali");

			INSERT INTO Movies Values (2, "Jailer", "The movie is about Muthuvel Pandian, a retired police officer and prison warden who goes on a manhunt to find his son's killers.", "Action", 0, "Rajnikanth,Mohanlal,Shiva Rajkumar", "Nelson", "Tamil,Hindi,Telegu,Marathi,Bengali");

			INSERT INTO Movies Values (3, "Marco", "When Victor(Ishaan Shoukath), a blind man, is tragically killed by the son of a wealthy industrialist, it ignites turmoil within a sprawling gold dynasty", "Action", 0, "Keanu Reeves", "James Cameron", "English,Tamil,Hindi,Telegu,Marathi,Bengali");

	-- Shows
		-- id Not Null int primary key
		-- created_date datetime
		-- start_time datetime NOT NULL
		-- end_time datetime NOT NULL
		-- show_type varchar 100 (movie, laughter, music, workshop, sports)

		-- Command :-
			Create Table Shows (
				id INT NOT NULL PRIMARY KEY,
				created_date datetime NOT NULL,
				start_time datetime NOT NULL,
				end_time datetime NOT NULL,
				show_type varchar(100) NOT NULL,
				movie_id INT NOT NULL,
				FOREIGN KEY (movie_id) REFERENCES Movies(id) ON DELETE CASCADE
			);

			INSERT INTO Shows VALUES (1, "2024-12-29 10:00:00", "2024-12-31 15:00:00", "2024-12-31 17:00:00", "movie", 1);

			INSERT INTO Shows VALUES (2, "2024-12-28 10:00:00", "2024-12-30 15:00:00", "2024-12-30 17:00:00", "movie", 2);

			INSERT INTO Shows VALUES (3, "2024-12-29 10:00:00", "2024-12-29 16:00:00", "2024-12-29 18:30:00", "movie", 3);

			INSERT INTO Shows VALUES (4, "2025-12-30 10:00:00", "2025-01-01 16:00:00", "2025-01-01 18:30:00", "movie", 1);

			INSERT INTO Shows VALUES (5, "2024-12-30 10:00:00", "2025-01-01 17:00:00", "2025-01-01 19:30:00", "movie", 2);

			INSERT INTO Shows VALUES (6, "2024-12-30 10:00:00", "2025-01-01 11:00:00", "2025-01-01 12:30:00", "movie", 3);

	-- Users
		-- id NOT NULL INT primary key
		-- first_name varchar 100 NOT NULL
		-- last_name varchar 100 NOT NULL
		-- email varchar 150 NOT NULL unique
		-- phone_number varchar 50 NOT NULL
		-- country varchar 10 NOT NULL
		-- state varchar 100 NOT NULL
		-- city varchar 100 NOT NULL
		-- address varchar 200
		-- interest varchar 250

		-- Command :-
			Create Table Users (
				id INT NOT NULL PRIMARY KEY,
				first_name varchar(100) NOT NULL,
				last_name varchar(100) NOT NULL,
				email varchar(150) NOT NULL UNIQUE,
				phone_number varchar(50) NOT NULL,
				country varchar(10) NOT NULL,
				state varchar(100) NOT NULL,
				city varchar(100) NOT NULL,
				address varchar(200) NOT NULL,
				interest varchar(200)
			);

			INSERT INTO Users VALUES (1, "Manish", "Sharma", "manish.sharma@gmail.com", "7458965214", "India", "Uttar Pradesh", "Ghaziabad", "3-H-196 Nehru Nagar", "football,action");

			INSERT INTO Users VALUES (2, "Kavya", "Thapar", "k.thapar@gmail.com", "8458965214", "India", "Telegana", "Hyderabad", "3-146 Nehru Nagar", "sports,action,thriller,suspense");

			INSERT INTO Users VALUES (3, "Honey", "Singh", "honeysingh@gmail.com", "7466965214", "India", "Punjab", "Jalandhar", "156 Nehru Nagar", "football,action,rap,hip-hop,jazz");

	-- Bookings
		-- id NOT NULL INT primary key
		-- show_id NOT NULL FOREIGN KEY Shows.id
		-- user_id NOT NULL FOREIGN KEY Users.id

		-- Command :-
			Create Table Bookings (
				id INT NOT NULL PRIMARY KEY,
				show_id INT NOT NULL,
				FOREIGN KEY (show_id) REFERENCES Shows(id) ON DELETE CASCADE,
				user_id INT NOT NULL,
				FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
				ticket_id INT NOT NULL,
				FOREIGN KEY (ticket_id) REFERENCES Tickets(id) ON DELETE CASCADE
			);

			INSERT INTO Bookings VALUES (1, 1, 1, 1);

			INSERT INTO Bookings VALUES (1, 3, 1, 3);

			INSERT INTO Bookings VALUES (1, 2, 1, 1);

	-- Venues
		-- 	id NOT NULL INT primary key
		-- 	name varchar 200 NOT NULL
		-- 	address varchar 200 NOT NULL
		-- 	country varchar 5 NOT NULL
		-- 	state varchar 100 NOT NULL
		-- 	city varchar 100 NOT NULL
		-- 	type varchar 50 (theatre, auditorium, hall, stadium)
		-- 	show_id NOT NULL FOREIGN KEY Shows.id
		--  price DECIMAL NOT NULL

		-- Command :-
			Create Table Venues (
				id INT NOT NULL PRIMARY KEY,
				name varchar(200) NOT NULL,
				address varchar(200) NOT NULL,
				country varchar(10) NOT NULL,
				state varchar(100) NOT NULL,
				city varchar(100) NOT NULL,
				type varchar(50),
				show_id INT NOT NULL,
				size INT NOT NULL,
				FOREIGN KEY (show_id) REFERENCES Shows(id) ON DELETE CASCADE
			);

			INSERT INTO Venues VALUES (1, "PVR Cinemas", "Ramte Ram Road Near Ingram School", "India", "Uttar Pradesh", "Ghaziabad", "Theatre", 1, 200);

			INSERT INTO Venues VALUES (2, "PVR Superplex Mall Of India", "498-D Complex Nehru Nagar", "India", "Uttar Pradesh", "Noida", "Theatre", 1, 150);

			INSERT INTO Venues VALUES (3, "Rajhans Cinemas", "112-G Pari chowk", "India", "Uttar Pradesh", "Greater Noida", "Theatre", 1, 200);

			INSERT INTO Venues VALUES (4, "PVR Cinemas", "Ramte Ram Road Near Ingram School", "India", "Uttar Pradesh", "Ghaziabad", "Theatre", 4, 200);

			INSERT INTO Venues VALUES (5, "PVR Cinemas", "Ramte Ram Road Near Ingram School", "India", "Uttar Pradesh", "Ghaziabad", "Theatre", 5, 200);

	-- Tickets
		-- 	id NOT NULL INT primary key
		--  price DECIMAL(4,3) NOT NULL
		-- 	show_id NOT NULL FOREIGN KEY Shows.id

		--  Command :-
			Create Table Tickets (
				id INT NOT NULL PRIMARY KEY,
				price INT NOT NULL,
				show_id INT NOT NULL,
				quantity INT NOT NULL,
				FOREIGN KEY (show_id) REFERENCES Shows(id) ON DELETE CASCADE
			);

			INSERT INTO Tickets VALUES (1, 350, 1, 50);

			INSERT INTO Tickets VALUES (2, 650, 2, 56);

			INSERT INTO Tickets VALUES (3, 450, 3, 44);

-- Question :- Write a query to list down all the shows on a given date at a given theatre along with their respective show timings.
SELECT
Movies.name,
Movies.genre,
Venues.name,
Venues.address,
Venues.country,
Venues.state,
Venues.city,
Venues.type,
Shows.start_time,
Shows.end_time
FROM Shows
INNER JOIN Movies ON Movies.id=Shows.movie_id
INNER JOIN Venues ON Venues.show_id=Shows.id
WHERE Shows.start_time > "2024-12-29" AND Shows.end_time < "2025-01-02" AND Movies.name like "%Pushpa%";