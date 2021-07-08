CREATE DATABASE flashcards;

CREATE TABLE IF NOT EXISTS decks (
  id SERIAL NOT NULL PRIMARY KEY,
  deck_name VARCHAR (50),
  deck_practice_needed BOOLEAN DEFAULT 't' NOT NULL,
  deck_practice_sessions INT
);

CREATE TABLE IF NOT EXISTS cards (
  card_id SERIAL NOT NULL PRIMARY KEY,
  deck_id INT NOT NULL references decks(id),
  front VARCHAR (50),
  back VARCHAR (50),
  card_practice_needed BOOLEAN DEFAULT 't' NOT NULL,
  card_practice_sessions INT
);

INSERT INTO decks (deck_name, deck_practice_sessions) VALUES ('Verbs of Motion', 0);
INSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES ();