INSERT INTO user (attendee_name)
VALUES ("Jane Jamout");
INSERT INTO user (attendee_name)
VALUES ("Peter Pacman");
INSERT INTO user (attendee_name)
VALUES ("David Dungeonmaster");
INSERT INTO user (attendee_name)
VALUES ("Evan Ensemble");
INSERT INTO user (attendee_name)
VALUES ("Linda Livingcard");
INSERT INTO user (attendee_name)
VALUES ("Quincy Quake");
INSERT INTO user (attendee_name)
VALUES ("Isabelle Inkblot");
INSERT INTO user (attendee_name)
VALUES ("Ned Novella");
INSERT INTO user (attendee_name)
VALUES ("Anton Anime");
INSERT INTO user (attendee_name)
VALUES ("Frankie Foxears");

INSERT INTO event (event_name, event_desc, event_location, event_date)
VALUES ("MAGFest", "Annual festival in the DC Metro area celebrating video games, and video game music, as well as surrounding and adjacent culture", "National Harbor, MD", "Jan 2021" );
INSERT INTO event (event_name, event_desc, event_location, event_date)
VALUES ("Otakon", "Promotes the appreciation of Asian culture, primarily through media and entertainment.", "Washington, DC", "no date for 2021");
INSERT INTO event (event_name, event_desc, event_location, event_date)
VALUES ("Comic Con", "An event with a primary focus on comic books, and comic book culture.", "San Diego, CA", "July 2021" );
INSERT INTO event (event_name, event_desc, event_location, event_date)
VALUES ("Katsucon", "An annual 3-day event held in the DC area for multicultural enthusiasts and entertainment.", "National Harbor, MD", "No date 2021");
INSERT INTO event (event_name, event_desc, event_location, event_date)
VALUES ("PAX East", "A series of gaming culture festivals involving tabletop, arcade, and video gaming.", "Boston, MA", "No date 2021");
INSERT INTO event (event_name, event_desc, event_location, event_date)
VALUES ("Dragon Con", "The larget multi-media popculture convetion focusing on science fiction & fantasy in literature, gaming, art, music and film.", "Atlanta, GA", "No date 2021");

INSERT INTO interest (interest, interest_desc)
VALUES ("Anime", "Japanese comic book and video cartoon animation characterized by colorful graphics, vibrant characters and fantastical themes." );
INSERT INTO interest (interest, interest_desc)
VALUES ("Tabletop Games", "References playing games on a tabletop surface using boards, dice, markers and measures to support complex story telling through cunning decision, and complex strategy");
INSERT INTO interest (interest, interest_desc)
VALUES ("LAN", "A gathering of people with computers or compatible consoles, where a LAN connection is established for the purpose of supporting multiplayer videogame playing" );
INSERT INTO interest (interest, interest_desc)
VALUES ("Arcade", "Often coin-operated entertainment console machines often installed in public for the purpose of providing a game interface which can be electronic or mechanical or both.");
INSERT INTO interest (interest, interest_desc)
VALUES ("Cosplay", "A portmanteu of the words 'costume' and 'play' is used to describe an art form which incorporates fashion, accessories and performance in celebration of popular characters");
INSERT INTO interest (interest, interest_desc)
VALUES ("Karaoke", "A form of entertainment involving the use of recorded music playback often with a video component to display lyrics, and microphone/sound system amplification which allows a person to sing to popular songs in performance environment");
INSERT INTO interest (interest, interest_desc)
VALUES ("Jamspace", "A community curated stage experience with open mic and instruments provided by collaborative live musicians" );
INSERT INTO interest (interest, interest_desc)
VALUES ("Console Gaming", "Annual festival in the DC Metro area celebrating video games, and video game music, as well as surrounding and adjacent culture" );
INSERT INTO interest (interest, interest_desc)
VALUES ("Panel Discussions", "Live or virtual discussion amongst a selected group who share differeing perspectives on a common theme often related to some form of popular media." );
INSERT INTO interest (interest, interest_desc)
VALUES ("Video Games", "A fully interactive, electronic simulation of story-telling, action and adventure, quest, competition or puzzle solving (or a combination of all these things) incremented on by inputs and outputs." );
INSERT INTO interest (interest, interest_desc)
VALUES ("Literature", "Written and spoken word material often sub-grouped by genre which includes techniques such as poetry, drama, fiction, journalism or song." );

--SEED DATA FOR JOIN TABLES ADDED 5/16

--users_interest data
insert into users_interest (user_id, interest_id) VALUES (1, 6);
insert into users_interest (user_id, interest_id) VALUES (1, 7);
insert into users_interest (user_id, interest_id) VALUES (2, 4);
insert into users_interest (user_id, interest_id) VALUES (2, 10);
insert into users_interest (user_id, interest_id) VALUES (3, 2);
insert into users_interest (user_id, interest_id) VALUES (3, 9);
insert into users_interest (user_id, interest_id) VALUES (3, 11);
insert into users_interest (user_id, interest_id) VALUES (4, 5);
insert into users_interest (user_id, interest_id) VALUES (4, 6);
insert into users_interest (user_id, interest_id) VALUES (4, 7);
insert into users_interest (user_id, interest_id) VALUES (5, 1);
insert into users_interest (user_id, interest_id) VALUES (5, 2);
insert into users_interest (user_id, interest_id) VALUES (6, 3);
insert into users_interest (user_id, interest_id) VALUES (6, 4);
insert into users_interest (user_id, interest_id) VALUES (6, 10);
insert into users_interest (user_id, interest_id) VALUES (7, 1);
insert into users_interest (user_id, interest_id) VALUES (7, 11);
insert into users_interest (user_id, interest_id) VALUES (8, 1);
insert into users_interest (user_id, interest_id) VALUES (8, 5);
insert into users_interest (user_id, interest_id) VALUES (8, 11);
insert into users_interest (user_id, interest_id) VALUES (9, 1);
insert into users_interest (user_id, interest_id) VALUES (9, 5);
insert into users_interest (user_id, interest_id) VALUES (9, 6);
insert into users_interest (user_id, interest_id) VALUES (10, 1);
insert into users_interest (user_id, interest_id) VALUES (10, 5);
insert into users_interest (user_id, interest_id) VALUES (10, 6);
insert into users_interest (user_id, interest_id) VALUES (10, 7);

--users_events table
insert into users_events (user_id, event_id) VALUES (1, 1);
insert into users_events (user_id, event_id) VALUES (1, 2);
insert into users_events (user_id, event_id) VALUES (2, 1);
insert into users_events (user_id, event_id) VALUES (2, 5);
insert into users_events (user_id, event_id) VALUES (3, 1);
insert into users_events (user_id, event_id) VALUES (3, 3);
insert into users_events (user_id, event_id) VALUES (3, 6);
insert into users_events (user_id, event_id) VALUES (4, 1);
insert into users_events (user_id, event_id) VALUES (5, 2);
insert into users_events (user_id, event_id) VALUES (5, 3);
insert into users_events (user_id, event_id) VALUES (6, 5);
insert into users_events (user_id, event_id) VALUES (7, 3);
insert into users_events (user_id, event_id) VALUES (7, 6);
insert into users_events (user_id, event_id) VALUES (8, 6);
insert into users_events (user_id, event_id) VALUES (9, 2);
insert into users_events (user_id, event_id) VALUES (9, 4);
insert into users_events (user_id, event_id) VALUES (10, 2);
insert into users_events (user_id, event_id) VALUES (10, 4);
