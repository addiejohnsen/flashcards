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
INSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (1, 'носить / нести', 'to carry', 0);
INSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (1, 'плавать / плыть', 'to swim', 0);
INSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (1, 'гонять / гнать', 'To chase', 0);
INSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (1, 'летать / летить', 'To fly', 0);
INSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (1, 'катать / катить', 'To roll', 0);
INSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (1, 'лезать / лезть', 'To climb', 0);


NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'цвет', 'color', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'красный', 'red', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'жёлтый', 'yellow', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'оранжевый', 'orange', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'зелёный', 'green', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'филолетовый', 'purple', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'синий', 'dark blue', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'голубой', 'light blue', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'серый', 'gray', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'розовый', 'pink', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'коричневый', 'brown', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'белый', 'white', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'чёрный', 'black', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'светлый', 'light', 0);
NSERT INTO cards (deck_id, front, back, card_practice_sessions) VALUES (2, 'тёмный', 'dark', 0);


