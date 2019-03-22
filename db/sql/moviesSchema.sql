-- SET UP SCHEMA HERE
DROP DATABASE IF EXISTS badmovies;
CREATE DATABASE IF NOT EXISTS badmovies;

USE badmovies;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE fav_movies (
  movie_id INT NOT NULL,
  user_id  INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
);  